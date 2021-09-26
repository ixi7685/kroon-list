<template>
  <the-navigation title="Kroon"></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>
import TheNavigation from './layouts/TheHeader.vue';
export default {
  components: {
    TheNavigation
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
</style>
