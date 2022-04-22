<template>
  <ValidationObserver v-slot="{ invalid }">
    <form class="form" @submit.prevent="onSubmit">
      <label class="form__label form__label--marked" for="title">
        Наименование товара
      </label>
      <my-input
        v-model="item.title"
        type="text"
        name="title"
        placeholder="Введите наименование товара"
      />
      <label class="form__label" for="body"> Описание товара </label>
      <textarea
        v-model="item.body"
        class="form__textarea"
        height="50"
        type="text"
        name="body"
        placeholder="Введите описание товара"
      />
      <label class="form__label form__label--marked" for="link">
        Ссылка на изображение товара
      </label>
      <my-input
        v-model="item.imgLink"
        type="text"
        name="link"
        placeholder="Введите ссылку"
      />
      <label class="form__label form__label--marked" for="price">
        Цена товара
      </label>
      <my-price
        v-model="item.price"
        type="text"
        name="price"
        placeholder="Введите цену"
      />
      <button class="btn" :disabled="invalid">Добавить товар</button>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  data() {
    return {
      item: {
        title: '',
        body: '',
        imgLink: '',
        price: '',
      },
    }
  },
  methods: {
    onSubmit() {
      this.item.id = Date.now()
      this.$store.commit('addItem', this.item)
    },
  },
}
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
    border-radius: 10px;
    font-size: 0.75rem;
    background-color: $green;
    color: #fff;
    transition: all 0.2s;
    cursor: pointer;

    &:disabled {
      cursor: default;
      background-color: $color-bg-btn-disabled;
      color: $color-font-input;
    }
  }
}
</style>
