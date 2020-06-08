<template>
  <div class="tile is-parent">
    <article class="tile is-child notification is-dark">
        <p class="title">Title : {{ region }}</p>
        <p class="subtitle">Top tile</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Token',
  props: {
    region: String,
  },
};
</script>

<style>

</style>
