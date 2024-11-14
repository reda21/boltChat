<template>
  <div class="min-h-screen bg-gray-50">
    <NuxtLoadingIndicator />
    <div v-if="isAuthenticated">
      <AppHeader />
      <main class="container mx-auto px-4 py-8">
        <NuxtPage />
      </main>
    </div>
    <div v-else>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const { isAuthenticated } = useAuth();
</script>