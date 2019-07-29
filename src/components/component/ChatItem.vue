<template>
  <div class="chatitem">
    <div class="item item-me" v-if="role==0">
      <span class="msgBox msgBox_me">{{msg}}</span>

      <div class="user_wrapper">
        <img src="../../assets/a.jpg" alt="头像" />
        <span class="nick_me">我</span>
      </div>
    </div>
    <div class="item item-he" v-if="role==1">
      <img src="../../assets/b.jpg" alt="头像" />
      <div class="he_wrapper">
        <div class="nick_he">{{nick}}</div>
        <div class="msgBox msgBox_he">{{msg}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChatItem",
  props: {
    role: Number,
    msg: "",
    nick: ""
  }
};
</script>
<style lang="less" scope="">
@imgMagin: 0.7rem;
.item {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

.he_wrapper {
  margin-left: 0.4rem;
  text-align: left;
  padding-top: 1rem;
}
.item-me {
  .item();
  justify-content: flex-end;
  padding-right: 0.7rem;
  img {
    margin-left: 0.3rem;
  }
}
.item-he {
  .item();
  justify-content: flex-start;
  padding-left: 0.7rem;
  img {
  }
}
img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
.msgBox {
  float: left;
  max-width: 12rem;
  padding: 0.5rem;
  background-origin: padding-box;
  background: lightblue;
  border-radius: 0.4rem;
}
.nick {
  color: rgb(145, 129, 129);
  margin-top: 0.2rem;
  font-size: 0.7rem;
}
.nick_me {
  .nick();
  margin-left: 0.2rem;
}
.nick_he {
  .nick();
}
.user_wrapper {
  position: relative;
  .nick_me {
    float: right;
  }
}
.nick_he {
  font-size: 0.6rem;
  margin-bottom: 0.2rem;
}
</style>

