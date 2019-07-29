<template>
  <div class="button" @click="say">{{msg}}</div>
</template>
<script>
export default {
  name: "MyButton",
  props: {
    msg: String,
    textContent: String
  },
  methods: {
    say() {
      var msg ={'role':0,'msg':this.textContent};
       this.$emit('sendMsg',msg)
    }
  }
};
</script>
<style lang="less" scope="">
.button {
  width: 6rem;
  height: 2.6rem;
  line-height: 2.6rem;
  background: green;
  color: #fff;
  border-radius: 0.4rem;
  &:active {
    opacity: 0.7;
  }
}
</style>


