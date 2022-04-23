<template>
  <ValidationProvider v-slot="{ errors }" rules="required">
    <input
      :placeholder="placeholder"
      :value="value"
      type="text"
      class="input"
      @input="updateInput"
    />
    <div class="error">{{ errors[0] }}</div>
  </ValidationProvider>
</template>

<script>
import global from '../mixins/global'

export default {
  name: 'MyInput',
  mixins: [global],
  methods: {
    updateInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  @include user-input;
  width: 100%;
}

.error {
  color: $pale-red;
  font-size: 0.5rem;
  margin-top: 4px;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
  &:last-of-type {
    margin-bottom: 1.5rem;
  }
}
</style>
