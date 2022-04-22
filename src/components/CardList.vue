<template>
  <ul class="list">
    <list-item v-for="item in items" :item="item" :key="item.id" />
  </ul>
</template>

<script>
import ListItem from './ListItem.vue';
export default {
  components: { ListItem },
  computed: {
    items() {
      return this.$store.state.card.items;
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($min-width, max-content));
  gap: 1rem;
}
</style>
