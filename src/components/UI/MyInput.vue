<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input" />
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
  border: 2px solid black;
}
</style>
