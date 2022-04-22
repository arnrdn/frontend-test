<template>
  <ul class="list">
    <list-item v-for="item in items" :key="item.id" :item="item" />
  </ul>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.items
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
}
</style>
