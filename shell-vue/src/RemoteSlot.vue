<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { userProfile } from "./user-store";

const props = defineProps<{
  remote: "vue" | "react";
}>();

const container = ref<HTMLElement | null>(null);
let unmountFn: (() => void) | null = null;

const loadRemote = async () => {
  // Clean up previous instance
  if (unmountFn) {
    unmountFn();
    unmountFn = null;
  }

  if (!container.value) return;

  try {
    let mod;
    if (props.remote === "vue") {
      mod = await import("vue/mount");
    } else {
      mod = await import("react/mount");
    }

    const mount = mod.mount || (mod.default && mod.default.mount);
    if (typeof mount === "function") {
      unmountFn = mount(container.value, { user: userProfile });
    }
  } catch (err) {
    console.error(`Failed to load remote ${props.remote}:`, err);
  }
};

onMounted(loadRemote);
onUnmounted(() => unmountFn?.());

// Watch for remote changes if we don't want to use :key in the parent
watch(() => props.remote, loadRemote);
</script>

<template>
  <div ref="container" class="remote-container"></div>
</template>

<style scoped>
.remote-container {
  margin-top: 16px;
  min-height: 100px;
}
</style>
