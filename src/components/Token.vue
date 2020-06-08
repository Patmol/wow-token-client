<template>
  <div class="tile is-parent">
    <article class="tile is-child notification is-dark">
        <h2 class="title">{{ $t(`token.region-${token.region}`) }}</h2>
        <p class="price">
          <i18n-n :value="token.price"></i18n-n> <i class="fas fa-coins has-text-warning"></i>
        </p>
        <p  class="price">
          <i v-if="isUp" class="fas fa-arrow-up has-text-success"></i>
          <i v-else class="fas fa-arrow-down has-text-danger"></i>
          {{ token.differenceWithprevious }}
        </p>
        <p>
          {{ $t('token.updated-at') }} {{ $d(latestUpdate, 'time') }}
        </p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Token',
  computed: {
    isUp() {
      return this.token.differenceWithprevious > 0;
    },
    latestUpdate() {
      return new Date(this.token.timestamp);
    },
  },
  props: {
    token: Object,
  },
};
</script>

<style>
.tile {
    text-align: center;
}

.price {
  font-size: 2rem;
}
</style>
