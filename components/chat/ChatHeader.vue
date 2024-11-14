<template>
  <div class="border-b border-gray-200 px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="flex-shrink-0">
          <img
            :src="chat.avatar || '/default-avatar.png'"
            alt=""
            class="h-10 w-10 rounded-full"
          />
        </div>
        <div>
          <h2 class="text-lg font-medium text-gray-900">
            {{ chat.name }}
          </h2>
          <p class="text-sm text-gray-500">
            {{ chat.isGroup ? `${chat.membersCount} members` : chat.status }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Chat {
  id: string;
  name: string;
  avatar?: string;
  status?: string;
  isGroup?: boolean;
  membersCount?: number;
}

defineProps<{
  chat: Chat;
}>();
</script>