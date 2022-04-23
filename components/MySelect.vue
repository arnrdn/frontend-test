<template>
  <select class="select" :value="value" @change="changeOptions">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'MySelect',
  props: {
    value: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOptions(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.select {
  align-self: start;
}
</style>
