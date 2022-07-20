<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Enter Name" v-model="name" />
    </div>
    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Choose Status</option>
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>

    <button class="btn warning" v-if="isActive" @click.prevent="clearFilter">
      Clear
    </button>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue';

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  name: 'RequestFilter',
  setup(_, { emit }) {
    const name = ref('');
    const status = ref();

    watch([name, status], (values) => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1],
      });
    });

    const clearFilter = () => {
      name.value = '';
      status.value = null;
    };

    const isActive = computed(() => name.value || status.value);

    return {
      name,
      status,
      isActive,
      clearFilter,
    };
  },
};
</script>

<style></style>
