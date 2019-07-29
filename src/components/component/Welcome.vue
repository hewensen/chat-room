<template name="show">
  <div class="welcome">
    <transition name="show">
      <div class="wel_wrapper" v-show="isShow">{{msg}}</div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Welcome",
  props: {
    isShow: Boolean,
    msg: String
  },
  methods: {}
};
</script>
<style lang="less" scoped>
@baseColor: #23b7e5;
.wel_wrapper {
  position: absolute;
  width: 10rem;
  padding: 1rem 0;
  border-radius: 0.5rem;
  color: #fff;
  top: 40%;
  left: 50%;
  margin: 0 -5rem 0 -5rem;
  background: @baseColor;
  letter-spacing: 0.1rem;
  transition: all 0.2s;
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


