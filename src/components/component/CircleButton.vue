<template>
  <transition name="show">
    <div class="button" @click="subInfo" v-show="show">
      <div class="gou"></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "MyButton",
  props: {
    msg: String,
    show:Boolean
  },
  methods: {
    subInfo() {
      this.$emit("subInfo", 1);
    }
  }
};
</script>
<style lang="less" scoped>
.button {
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 50%;
  margin: 10px auto;
  padding-top: 0.7rem;
  box-sizing: border-box;
  transition: all 1s;
  .gou {
    width: 8px;
    height: 16px;
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin: 0 0 0 1.2rem;
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


