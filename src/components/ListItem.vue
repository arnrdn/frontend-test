<template>
  <li class="list__item">
    <button class="delete-btn">
      <my-delete-icon />
    </button>
    <div class="list__img-container">
      <img class="list__img" :src="item.imgLink" :alt="`${item.id} photo`" />
    </div>
    <div class="list__information-container">
      <h3 class="list__item-title">{{ item.title }}</h3>
      <p class="list__item-body">{{ item.body }}</p>
      <h2 class="list__price">{{ item.price }}</h2>
    </div>
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
.delete-btn {
  background-color: red;
  height: 100px;
  width: 100px;
  position: absolute;
}
.list__item {
  position: relative;
  border-radius: $radius;
  overflow: hidden;
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
  width: $min-width;
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
