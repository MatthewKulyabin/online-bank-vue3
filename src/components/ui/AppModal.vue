<template>
  <div>
    <div class="modal-backdrop" @click.prevent="$emit('close')"></div>

    <div class="modal">
      <h3 v-if="title">{{ title }}</h3>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: { title: { type: String, required: false } },
};
</script>

<style></style>
