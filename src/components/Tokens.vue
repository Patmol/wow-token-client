<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <TokenComponent v-bind:token="tokenUS"></TokenComponent>
          <TokenComponent v-bind:token="tokenEU"></TokenComponent>
          <TokenComponent v-bind:token="tokenUS"></TokenComponent>
        </div>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <TokenComponent v-bind:token="tokenUS"></TokenComponent>
          <TokenComponent v-bind:token="tokenUS"></TokenComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Token from '@/models/token';
import TokenComponent from '@/components/Token.vue';

export default {
  name: 'Tokens',
  data() {
    return {
      tokenUS: new Token(102334, 1591614218, 'us', -142),
      tokenEU: new Token(143782, 1591614218, 'eu', -142),
    };
  },
  components: {
    TokenComponent,
  },
};
</script>

<style>

</style>
