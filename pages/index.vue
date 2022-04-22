<template>
  <div class="app">
    <h1 class="heading-1">Добавление товара</h1>
    <add-form class="add-form" />
    <card-list class="card-list" />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

.app {
  padding: 2rem;
  min-width: 100%;
  height: 100vh;
  background-color: $app-bg-color;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  font-family: $font;
  color: $color-font-primary;
}
.add-form {
  grid-column: 1/2;
}
</style>
