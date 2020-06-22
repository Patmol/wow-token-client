<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <TokenComponent v-bind:region="'us'"></TokenComponent>
          <TokenComponent v-bind:region="'eu'"></TokenComponent>
          <TokenComponent v-bind:region="'kr'"></TokenComponent>
        </div>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <TokenComponent v-bind:region="'tw'"></TokenComponent>
          <TokenComponent v-bind:region="'cn'"></TokenComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TokenComponent from '@/components/Token.vue';
import wowTokenService from '../services/wow-token-service';

export default {
  name: 'Tokens',
  components: {
    TokenComponent,
  },
  mounted() {
    wowTokenService.connect();
  },
};
</script>

<style>

</style>
