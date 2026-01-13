<script setup lang="ts">
defineProps<{
  user?: {
    name: string;
    role: string;
  };
}>();
</script>

<template>
  <div class="remote-vue-container">
    <h3 class="remote-title">Vue app (Remote)</h3>
    <div v-if="user" class="user-data">
      Authenticated User: <b>{{ user.name }}</b> | Role: <i>{{ user.role }}</i>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.remote-vue-container {
  padding: 12px;
  border: 1px solid #42b883;
  background: #f0fdf4;
}

.remote-title {
  margin-top: 0;
  color: #42b883;
}

.user-data {
  margin-bottom: 12px;
  font-size: 0.9em;
  border-bottom: 1px dashed #42b883;
  padding-bottom: 8px;
}
</style>
