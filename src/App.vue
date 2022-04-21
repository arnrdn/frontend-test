<template>
  <div>
    <card-list/>
  </div>
</template>

<script>
import CardList from './components/CardList.vue'
export default {
  components: {CardList},
  name: 'App',
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

</style>
