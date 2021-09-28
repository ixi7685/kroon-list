<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<style scoped>
.card {
  margin: 1rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  display: flex;
  overflow: hidden;
}
</style>
