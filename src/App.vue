<template>
  <div class="app">
    <h1 class="heading-1">Добавление товара</h1>
    <add-form class="add-form" />
    <card-list class="card-list" />
  </div>
</template>

<script>
import CardList from './components/CardList.vue';
import AddForm from './components/AddForm.vue';
export default {
  components: { CardList, AddForm },
  name: 'App',
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

.app {
  display: grid;
  grid-template-columns: min-content max-content;
}

.add-form {
  grid-column: 1/2;
}
</style>
