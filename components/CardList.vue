<template>
  <ul v-if="items.length > 0" class="list">
    <list-item v-for="item in items" :key="item.id" :item="item" />
  </ul>
  <div v-else>
    <h1 class="heading-1">Кажется у нас больше нет товаров :(</h1>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($min-width, max-content));
  gap: 1rem;
  animation: enter 0.6s ease;
}

.heading-1 {
  text-align: center;
}
</style>
