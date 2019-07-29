<template>
  <div class="control">
    <my-input :reset="reset" v-on:textChange="textChange"></my-input>
    <my-button v-on:sendMsg="sendMsg" :msg="btnMsg" :textContent="textContent"></my-button>
  </div>
</template>
<script>
import MyInput from "./MyInput";
import MyButton from "./MyButton";
export default {
  name: "ChatControl",
  data() {
    return {
      btnMsg: "发送",
      textContent: "",
      reset: 0
    };
  },
  props: {},
  components: {
    MyInput,
    MyButton
  },
  methods: {
    textChange(val) {
      this.reset = 0;
      this.textContent = val;
    },
    sendMsg(val) {
      this.reset = 1;
      this.$emit("sendMsg", val);
    }
  }
};
</script>
<style lang="less">
.control {
  position: absolute;
  width: 100%;
  height: 3.2rem;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  box-sizing: border-box;
}
</style>


