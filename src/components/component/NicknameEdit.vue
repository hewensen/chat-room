<template name="show">
  <div class="nickname">
    <div v-show="isShow">
      <div class="black"></div>
      <div class="wel_wrapper">
        <p>昵称(最多5个字)</p>
        <input type="text" v-model="nickName" />
        <circle-button v-on:subInfo="subNick" :show="true"></circle-button>
      </div>
    </div>
  </div>
</template>
<script>
import CircleButton from "./CircleButton.vue";
export default {
  name: "Nickname",
  data() {
    return {
      nickName: ""
    };
  },
  components: {
    CircleButton
  },
  props: {
    isShow: Boolean,
    msg: String
  },
  methods: {
    subNick() {
      this.$emit("uploadNick", this.nickName);
    }
  },
  watch: {
    nickName(val) {
      if (val.length >= 6) {
        this.nickName = this.nickName.substr(0, 5);
      }
    }
  }
};
</script>
<style lang="less" scoped>
@baseColor: #23b7e5;
.black {
  position: fixed;
  z-index: 1;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
.wel_wrapper {
  position: absolute;
  width: 12rem;
  height: 11rem;
  padding: 1.4rem;
  box-sizing: border-box;
  z-index: 2;
  border-radius: 0.5rem;
  color: #fff;
  top: 38%;
  left: 50%;
  margin: 0 -6rem 0 -6rem;
  background: @baseColor;
  letter-spacing: 0.1rem;
  transition: all 0.2s;
  p {
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0 0;
  }
  input {
    width: 100%;
    height: 2.6rem;
    border: none;
    outline: none;
    background: #fff;
    border-radius: 0.4rem;
    padding: 0 10px;
    box-sizing: border-box;
    opacity: 0.7;
    margin-top: 0.4rem;
    font-size: 1.2rem;
  }
}
.show-enter-active {
  transform: scale(1.2);
}
.show-leave-active {
  transform: scale(1);
}
.show-enter {
  transform: scale(1);
}
.show-leave-to {
  opacity: 0;
  transform: scale(0);
}
.show-leave {
  transform: scale(1);
}
</style>


