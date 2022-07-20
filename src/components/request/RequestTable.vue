<template>
  <div>
    <h4 v-if="!requests?.length" class="text-center">No Applications yet</h4>
    <table v-else class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Summ</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(request, idx) in requests" :key="request.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ request.name }}</td>
          <td>{{ request.phone }}</td>
          <td>{{ currency(request.amount) }}</td>
          <td><app-status :type="request.status"></app-status></td>
          <td>
            <router-link
              v-slot="{ navigate }"
              custom
              :to="{ name: 'Request', params: { id: request.id } }"
              ><button class="btn" @click="navigate">Open</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { currency } from '../../utils/currency';
import AppStatus from '../ui/AppStatus.vue';

export default {
  props: ['requests'],
  components: { AppStatus },
  setup() {
    return {
      currency,
    };
  },
};
</script>

<style></style>
