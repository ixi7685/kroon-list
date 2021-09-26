<template>
  <the-header title="Kroon"></the-header>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import TheHeader from './layouts/TheHeader.vue';
export default {
  components: {
    TheHeader
  }
};
</script>
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
@media only screen and (max-width: 600px) {
  h1 {
    font-size: 13px;
  }
}
</style>
