<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <Token v-bind:region="'us'"></Token>
          <Token v-bind:region="'eu'"></Token>
          <Token v-bind:region="'kr'"></Token>
        </div>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <Token v-bind:region="'tw'"></Token>
          <Token v-bind:region="'cn'"></Token>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Token from '@/components/Token.vue';

export default {
  name: 'Tokens',
  components: {
    Token,
  },
};
</script>

<style>

</style>
