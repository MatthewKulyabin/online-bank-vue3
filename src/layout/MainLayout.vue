<template>
  <div>
    <the-navbar></the-navbar>
    <the-sidebar v-if="isSidebarOpen"></the-sidebar>

    <div class="container with-nav">
      <app-message></app-message>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import TheNavbar from '../components/TheNavbar.vue';
import TheSidebar from '../components/TheSidebar.vue';
import AppMessage from '../components/ui/AppMessage.vue';
export default {
  components: { TheNavbar, AppMessage, TheSidebar },
  setup() {
    const store = useStore();

    return {
      isSidebarOpen: computed(() => store.state.sidebar),
    };
  },
};
</script>

<style></style>
