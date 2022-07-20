<template>
  <div class="sidebar">
    <span class="sidebar-close" @click.prevent="close">&times;</span>

    <div class="sidebar-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      molestias voluptates fuga voluptatibus velit assumenda odit saepe corporis
      non consequatur.
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();

    const sidebar = computed(() => store.state.sidebar);

    return { sidebar, close: () => store.commit('closeSidebar') };
  },
};
</script>

<style></style>
