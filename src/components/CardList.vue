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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, max-content));
}
</style>
