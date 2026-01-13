<script setup lang="ts">
import { useRoute } from "vue-router";
import { toggleUser, userProfile } from "./user-store";

const route = useRoute();
</script>

<template>
  <div class="shell-container">
    <div class="header">
      <div>
        <h2 class="title">Shell (Vue)</h2>
        <div class="user-info">
          Current User: <b>{{ userProfile.name }}</b> ({{ userProfile.role }})
        </div>
      </div>
      <button @click="toggleUser" class="switch-btn">
        Switch User Profile
      </button>
    </div>
    <div class="nav">
      <router-link to="/vue" class="nav-link">
        <button :class="['nav-btn', { active: route.path.startsWith('/vue') }]">
          Vue App
        </button>
      </router-link>
      <router-link to="/react" class="nav-link margin-left">
        <button :class="['nav-btn', { active: route.path.startsWith('/react') }]">
          React App
        </button>
      </router-link>
    </div>
    <router-view :key="`${route.path.split('/')[1]}-${userProfile.name}`"></router-view>
  </div>
</template>

<style scoped>
.shell-container {
  font-family: sans-serif;
  padding: 16px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eee;
  padding-bottom: 16px;
  margin-bottom: 16px;
}

.title {
  margin: 0;
}

.user-info {
  color: #666;
  font-size: 14px;
}

.switch-btn {
  padding: 8px 16px;
  cursor: pointer;
}

.nav {
  display: flex;
}

.nav-link {
  display: inline-block;
  text-decoration: none;
  color: black;
}

.margin-left {
  margin-left: 8px;
}

.nav-btn {
  padding: 8px 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  background: #fff;
}

.nav-btn.active {
  background: #eee;
}
</style>
