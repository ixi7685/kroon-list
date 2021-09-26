<template>
  <footer>
    <h1>{{ title }}</h1>
  </footer>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 5rem;
  background-color:  rgb(230, 74, 74);
  display: flex;
  justify-content: center;
  align-items: center;
}

footer h1 {
  color: white;
  margin: 0;
}
</style>