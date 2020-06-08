<template>
  <div id="app">
    <Navbar></Navbar>
    <section class="section" id="app">
      <div class="container">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
</style>
