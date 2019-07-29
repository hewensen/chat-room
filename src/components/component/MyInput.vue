<template>
  <div class="input">
    <input type="text" v-model="textContent" />
  </div>
</template>
<script>
export default {
  name: "MyInput",
  data() {
    return {
      textContent: ""
    };
  },
  props: {
    reset: Number
  },
  watch: {
    textContent(val) {
      this.$emit("textChange", val);
    },
    reset(val) {
      if (val) {
        this.textContent = "";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.input {
  flex: 1;
  margin-right: 10px;
}
input {
  width: 100%;
  height: 2.6rem;
  border: none;
  outline: none;
  background: lightblue;
  border-radius: 0.4rem;
  padding: 0 10px;
  box-sizing: border-box;
  opacity: 0.7;
  font-size: 1.2rem;
  &:focus {
    box-shadow: 0px 0px 10px #fff;
  }
}
</style>

