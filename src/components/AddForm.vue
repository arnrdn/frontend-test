<template>
  <form class="form">
    <label class="form__label form__label--marked" for="title">
      Наименование товара
    </label>
    <my-input
      type="text"
      v-model="item.title"
      name="title"
      placeholder="Введите наименование товара"
    />
    <label class="form__label" for="body"> Описание товара </label>
    <textarea
      class="form__textarea"
      height="50"
      type="text"
      v-model="item.body"
      name="body"
      placeholder="Введите описание товара"
    />
    <label class="form__label form__label--marked" for="link">
      Ссылка на изображение товара
    </label>
    <my-input
      type="text"
      v-model="item.link"
      name="link"
      placeholder="Введите ссылку"
    />
    <label class="form__label form__label--marked" for="price">
      Цена товара
    </label>
    <my-input
      type="text"
      v-model="item.price"
      name="price"
      placeholder="Введите цену"
    />
    <button class="btn">Добавить товар</button>
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

<style lang="scss" scoped>
.form {
  padding: 1.5rem;
  min-width: 20.75rem;
  display: flex;
  flex-direction: column;
  background-color: $component-bg-color;
  align-self: start;
  border-radius: $radius;

  &__label {
    font-size: 0.625rem;
    margin-bottom: 4px;
    position: relative;
    color: $color-font-label;
  }

  &__label--marked::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #ff8484;
  }

  &__textarea {
    @include user-input;
    font-family: $font;
    height: 6.75rem;
    resize: none;
    margin-bottom: 1rem;
  }

  .btn {
    border: none;
    padding: 0.625rem;
    font-weight: 600;
    background-color: $color-bg-btn-disabled;
    border-radius: 10px;
    color: $color-font-input;
    font-size: 0.75rem;
  }
}
</style>
