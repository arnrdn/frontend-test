<template>
  <div class="app">
    <h1 class="heading-1">Добавление товара</h1>
    <my-select
      v-model="selectedOption"
      :options="options"
      @input="setSelectedOption"
    />
    <add-form class="add-form" />
    <card-list :items="sortedItems" class="card-list" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({
      selectedOption: (state) => state.selectedOption,
      options: (state) => state.sortOptions,
      items: (state) => state.items,
    }),
    ...mapGetters({
      sortedItems: 'sortedItems',
    }),
  },
  methods: {
    ...mapMutations({
      setSelectedOption: 'setSelectedOption',
    }),
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

.app {
  padding: 2rem;
  min-width: 100%;
  height: 100%;
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

.select {
  justify-self: start;
}
</style>
