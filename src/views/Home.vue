<template>
  <div class="home">
    <Tokens></Tokens>
    <h2 class="is-size-2">{{ $t('evolution') }}</h2>
    <ChartLine :chart-data="dataCollection" :options="options"></ChartLine>
  </div>
</template>

<script>
import ChartLine from '@/components/common/ChartLine.vue';
import Tokens from '@/components/Tokens.vue';

export default {
  name: 'Home',
  components: {
    Tokens,
    ChartLine,
  },
  data() {
    return {
      dataCollection: {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'Europe',
            borderColor: '#f87979',
            data: [10, 100, 30],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>
