<template>
  <div class="tile is-parent">
    <article class="tile is-child notification is-dark"
      v-bind:class="hasBeenUpdated ? (isUp ? 'tile-updated-up' : 'tile-updated-down')  : ''">
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
      if (this.information) {
        return this.information.priceDifference > 0;
      }

      return false;
    },
    latestUpdate() {
      if (this.information) {
        return new Date(this.information.lastUpdatedTimestamp);
      }

      return Date.now;
    },
    information() {
      if (this.informations !== null) {
        return this.informations[this.region];
      }

      return null;
    },
  },
  data() {
    return {
      hasBeenUpdated: Boolean,
    };
  },
  watch: {
    informations(newInformations, oldInformations) {
      if (oldInformations != null
          && newInformations[this.region] !== undefined
          && oldInformations[this.region] !== undefined) {
        if ((newInformations[this.region].lastUpdatedTimestamp
                !== oldInformations[this.region].lastUpdatedTimestamp)
            || (newInformations[this.region].priceDifference
                !== oldInformations[this.region].priceDifference)) {
          this.hasBeenUpdated = true;

          setTimeout(() => {
            this.hasBeenUpdated = false;
          }, 5000);
        }
      }
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
    this.hasBeenUpdated = false;
    this.initialization(this.region);
  },
};
</script>

<style lang="scss">
@import 'bulma/sass/utilities/initial-variables.sass';
@import 'bulma/sass/utilities/derived-variables.scss';

.price {
  font-size: 2rem;
  transition: all 0.5s linear;
}

.tile {
  text-align: center;
}

.tile-updated {
  &-down .price {
    color: $danger;
  }

  &-up .price {
    color: $success;
  }
}
</style>
