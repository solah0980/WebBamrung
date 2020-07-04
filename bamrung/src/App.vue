<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'โรงเรียนบำรุงอิสลาม';
            }
        },
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
.before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all 1s cubic-bezier(.41,.01,0.57,1.61);
}
.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
