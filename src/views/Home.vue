<template>
  <div>
    <app-loader v-if="loading"></app-loader>
    <app-page v-else title="Applications List">
      <template #header>
        <button class="btn primary" @click.prevent="modal = true">
          Create
        </button>
      </template>

      <request-filter v-model="filter"></request-filter>
      <request-table :requests="requests"></request-table>

      <teleport to="body"
        ><app-modal
          v-if="modal"
          title="Create Application"
          @close="modal = false"
          ><request-modal @created="modal = false"></request-modal></app-modal
      ></teleport>
    </app-page>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import RequestTable from '../components/request/RequestTable.vue';
import AppPage from '../components/ui/AppPage.vue';
import AppModal from '../components/ui/AppModal.vue';
import RequestModal from '../components/request/RequestModal.vue';
import AppLoader from '../components/ui/AppLoader.vue';
import RequestFilter from '../components/request/RequstFilter.vue';

export default {
  components: {
    AppPage,
    RequestTable,
    AppModal,
    RequestModal,
    AppLoader,
    RequestFilter,
  },
  name: 'Home',
  emits: ['close'],
  setup() {
    const store = useStore();
    const modal = ref(false);
    const loading = ref(false);
    const filter = ref({});

    onMounted(async () => {
      loading.value = true;
      await store.dispatch('request/load');
      loading.value = false;
    });

    const requests = computed(() =>
      store.getters['request/requests']
        .filter((request) => {
          if (filter.value.name) {
            return request.name.includes(filter.value.name);
          }
          return request;
        })
        .filter((request) => {
          if (filter.value.status) {
            return request.status === filter.value.status;
          }
          return request;
        })
    );

    return {
      modal,
      requests,
      loading,
      filter,
    };
  },
};
</script>
