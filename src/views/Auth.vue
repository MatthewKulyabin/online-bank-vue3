<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Sign In</h1>

    <div :class="['form-control', { invalid: eError }]">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" @blur="eBlur" />
      <small v-if="eError">{{ eError }}</small>
    </div>
    <div :class="['form-control', { invalid: pError }]">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" @blur="pBlur" />
      <small v-if="pError">{{ pError }}</small>
    </div>

    <button
      class="btn btn-primary"
      type="submit"
      :disabled="isSubmitting || isTooManyAttempts"
    >
      Sign In
    </button>
    <span class="text-danger" v-if="isTooManyAttempts"
      >To many attempts to Sign In. Try it latter</span
    >
  </form>
</template>

<script>
import { useLoginForm } from '../use/login-form.js';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { error } from '../utils/error';

export default {
  setup() {
    const route = useRoute();
    const store = useStore();

    if (route.query.message) {
      store.dispatch('setMessage', {
        value: error(route.query.message),
        type: 'warning',
      });
    }
    return { ...useLoginForm() };
  },
};
</script>

<style></style>
