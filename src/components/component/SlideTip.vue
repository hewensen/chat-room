<template>
  <div class="slidetip">
    <transition name="show">
      <div class="wel_wrapper" v-show="isShow">{{msg}}</div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "SlideTip",
  props: {
    isShow: Boolean,
    msg: String
  },
  methods: {}
};
</script>
<style lang="less" scope="">
@baseColor: #23b7e5;
.wel_wrapper {
  position: fixed;
  height: 1.4rem;
  text-align: center;
  color: #fff;
  top: 3rem;
  width: 60%;
  background: @baseColor;
  font-size: 1.1rem;
  overflow: hidden;
  left: 20%;
  border-radius: 0.4rem;
  padding: 0.1rem 0.2rem;
}
.show-enter-active {
  transition: all 1.2s;
  width: 60%;
  left: 20%;
}
.show-leave-active {
  left: 20%;
}
.show-enter {
  transition: all 0.2s;
  width: 10rem;
  left: 0;
}
.show-leave-to {
  transition: linear 0.4s;
  left: 100%;
}
</style>


