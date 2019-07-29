<template>
  <div class="header">{{msg}}</div>
</template>
<script>
export default {
  name: "HeaderBase",
  data() {
    return {};
  },
  props: {
    msg: String
  }
};
</script>
<style lang="less">
@baseHeight: 2.7rem;
@baseColor :#23b7e5;   
.header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: @baseHeight;
  background: @baseColor;
  color: #fff;
  line-height: @baseHeight;
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
}
</style>


