<template>
  <div class="hello">
    <header-base :msg="msg"></header-base>
    <div id="text_area" class="msg_area">
      <chat-item
        v-for="item in chatList"
        :key="item"
        :nick="item.nickName"
        :role="item.role"
        :msg="item.msg"
      ></chat-item>
    </div>
    <chat-control v-on:sendMsg="appendMsg"></chat-control>
    <welcome :isShow="showWelcome" :msg="showMsg"></welcome>
    <slide-tip :isShow="showTip" :msg="showTipMsg"></slide-tip>
    <nickname-edit v-on:uploadNick="subNick" :isShow="showEdit"></nickname-edit>
  </div>
</template>

<script>
import HeaderBase from "./component/HeaderBase.vue";
import ChatControl from "./component/ChatControl.vue";
import ChatItem from "./component/ChatItem.vue";
import Welcome from "./component/Welcome.vue";
import SlideTip from "./component/SlideTip.vue";
import NicknameEdit from "./component/NicknameEdit.vue";

export default {
  name: "Center",
  data() {
    return {
      msg: "聊天室",
      chatList: [],
      socket: "",
      showWelcome: false,
      showTip: false,
      showEdit: false,
      showMsg: "欢迎来到聊天室",
      showTipMsg: "有一条狗子进来了!"
    };
  },
  sockets: {
    //不能改,j建立连接自动调用connect
    connect() {
      this.showEdit = true;
    },
    getInfo(value) {
      this.msg = "聊天室" + "(" + value + ")";
    },
    out(value) {
      this.showTipMsg = "有一条狗子走了!";
      this.msg = "聊天室" + "(" + value + ")";
      this.showTip = true;
      setTimeout(() => {
        this.showTip = false;
      }, 3000);
    },
    //服务端向客户端发送login事件
    message(value) {
      this.chatList.push(value);
      this.scrollBottom();
    },
    some(value) {
      this.showTipMsg = "欢迎" + value.nick;
      this.msg = "聊天室" + "(" + value.count + ")";
      this.showTip = true;
      setTimeout(() => {
        this.showTip = false;
      }, 3000);
    }
  },
  components: {
    HeaderBase,
    ChatControl,
    ChatItem,
    Welcome,
    SlideTip,
    NicknameEdit
  },
  mounted() {},
  methods: {
    appendMsg(val) {
      //发送消息
      this.chatList.push(val);
      this.scrollBottom();
      this.$socket.emit("chat", val);
    },
    subNick(value) {
      this.$socket.emit("nick", value);
      this.showEdit = false;
      this.showWelcome = true;
      setTimeout(() => {
        this.showWelcome = false;
      }, 3000);
    },
    scrollBottom() {
      var ele = document.getElementById("text_area");
      ele.scrollTop = ele.scrollHeight;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scope="">
.msg_area {
  position: absolute;
  width: 100%;
  top: 2.7rem;
  left: 0;
  bottom: 3rem;
  overflow: auto;
  background: #f1f1f1;
}
</style>
