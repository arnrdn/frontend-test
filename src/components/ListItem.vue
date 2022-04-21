<template>
  <li class="list__item">
    <img class="list__img" :src="item.imgLink" :alt="`${item.id} photo`" />
    <h3 class="list__heading-3">{{ item.title }}</h3>
    <p class="list__paragraph">{{ item.body }}</p>
    <h2 class="list__heading-2">{{ item.price }}</h2>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.list__img {
  height: 100px;
}
</style>
