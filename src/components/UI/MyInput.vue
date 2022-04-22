<template>
  <input
    required
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="input"
  />
</template>

<script>
export default {
  name: 'my-input',
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
  props: {
    modelValue: [String, Number],
  },
};
</script>

<style lang="scss" scoped>
.input {
  @include user-input;
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  &:last-of-type {
    margin-bottom: 1.5rem;
  }
}
</style>
