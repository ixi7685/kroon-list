<template>
  <header>
    <h1>{{ title }}</h1>
    <h1>What’s the difference? We give a funk !</h1>
  </header>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color:  #5c0556;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  color: white;
  margin: 10px;
}
</style>