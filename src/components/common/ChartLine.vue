<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'ChartLine',
  extends: Line,
  props: {
    chartData: Object,
    options: Object,
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
