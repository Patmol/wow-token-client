<template>
  <div class="tile is-parent">
    <article class="tile is-child notification is-dark">
      <template v-if="isRequesting">
        <Loader></Loader>
      </template>
      <template v-else-if="information">
        <h2 class="title">{{ $t(`token.region-${information.region}`) }}</h2>
        <p class="price">
          <i18n-n :value="(information.price / 10000)"></i18n-n> <i
            class="fas fa-coins has-text-warning"></i>
        </p>
        <p class="price">
          <i v-if="isUp" class="fas fa-arrow-up has-text-success"></i>
          <i v-else class="fas fa-arrow-down has-text-danger"></i> <i18n-n
            :value="(information.priceDifference / 10000)"></i18n-n>
        </p>
        <p>{{ $t('token.updated-at') }} {{ $d(latestUpdate, 'time') }}</p>
      </template>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Loader from '@/components/common/Loader.vue';
import types from '@/store/types';

export default {
  name: 'Token',
  components: {
    Loader,
  },
  computed: {
    ...mapGetters({
      isRequesting: 'wowToken/isRequesting',
      informations: 'wowToken/informations',
      hasFailed: 'wowToken/hasFailed',
    }),
    isUp() {
      return this.information.priceDifference > 0;
    },
    latestUpdate() {
      return new Date(this.information.lastUpdatedTimestamp);
    },
    information() {
      return this.informations[this.region];
    },
  },
  props: {
    region: String,
  },
  methods: {
    ...mapMutations({
      initialization: `wowToken/${types.WOW_TOKEN_INITIALIZATION}`,
    }),
  },
  mounted() {
    this.initialization(this.region);
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
