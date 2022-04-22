<template>
  <input
    required
    :value="value"
    type="text"
    class="input"
    @input="updateInput"
  />
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    value: [String, Number],
  },
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
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
  &:last-of-type {
    margin-bottom: 1.5rem;
  }
}
</style>
