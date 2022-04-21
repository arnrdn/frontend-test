<template>
  <li class="list__item">
  <img src="item.imgLink" alt="">
  <h3>{{item.title}}</h3>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  }

}
</script>

<style>

</style>