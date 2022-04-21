<template>
  <form class="form">
    <label for="title"> Наименование товара </label>
    <my-input
      type="text"
      v-model="item.title"
      name="title"
      placeholder="Введите наименование товара"
    />
    <label for="body"> Описание товара </label>
    <my-input
      type="text"
      v-model="item.body"
      name="body"
      placeholder="Введите описание товара"
    />
    <label for="link"> Ссылка на изображение товара </label>
    <my-input
      type="text"
      v-model="item.link"
      name="link"
      placeholder="Введите ссылку"
    />
    <label for="price"> Цена товара </label>
    <my-input
      type="text"
      v-model="item.price"
      name="price"
      placeholder="Введите цену"
    />
    <button>Добавить товар</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      item: {
        title: '',
        body: '',
        link: '',
        price: '',
      },
    };
  },
};
</script>

<style></style>
