<template>
  <li
    class="list__item"
    @mouseover="showDelete = true"
    @mouseleave="showDelete = false"
  >
    <button
      :class="`delete-btn ${toggleDelete}`"
      @click="commitDeleteItem(item)"
    >
      <my-delete-icon class="delete-btn__icon" />
    </button>
    <div class="list__img-container">
      <img class="list__img" :src="item.imgLink" :alt="`${item.id} photo`" />
    </div>
    <div class="list__information-container">
      <h3 class="list__item-title">{{ item.title }}</h3>
      <p class="list__item-body">{{ item.body }}</p>
      <h2 class="list__price">{{ item.price }} руб.</h2>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showDelete: false,
    }
  },
  computed: {
    toggleDelete() {
      return this.showDelete ? 'active' : null
    },
  },
  methods: {
    ...mapActions({
      commitDeleteItem: 'commitDeleteItem',
    }),
  },
}
</script>

<style lang="scss" scoped>
/* DELETE BUTTON */

.delete-btn {
  background-color: $pale-red;
  top: 0;
  right: 0;
  opacity: 0;
  height: 2rem;
  width: 2rem;
  border: none;
  border-radius: 10px;
  position: absolute;
  transition: all 0.2s;

  &.active {
    opacity: 1;
    top: -8px;
    right: -8px;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }

  &__icon {
    padding: 0.45rem;
    display: block;
    margin: auto;
    height: 2rem;
    width: 2rem;
  }
}

/* LIST ITEM */

.list__item {
  position: relative;
  border-radius: $radius;
  background-color: $component-bg-color;
  width: $min-width;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.1);

  display: grid;
  grid-template-rows: min-content;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.025);
  }
}

.list__img {
  height: 12.5rem;
  width: $min-width;
  object-fit: cover;
  border-top-left-radius: $radius;
  border-top-right-radius: $radius;
}

.list__information-container {
  padding: 1rem;
  display: grid;
  grid-template-rows: max-content 1fr;
  gap: 1rem;
}

.list__item-title {
  font-size: 1.25rem;
  font-weight: 600;
  align-self: start;
}

.list__item-body {
  font-size: 1rem;
  align-self: start;
}

.list__price {
  margin-top: 1rem;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  align-self: end;
}
</style>
