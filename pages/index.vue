<template>
  <div class="flex h-[calc(100vh-4rem)]">
    <!-- Sidebar -->
    <div class="w-80 bg-white border-r border-gray-200">
      <ChatSidebar />
    </div>

    <!-- Main chat area -->
    <div class="flex-1 flex flex-col">
      <template v-if="selectedChat">
        <ChatHeader :chat="selectedChat" />
        <ChatMessages :messages="messages" />
        <ChatInput @send="sendMessage" />
      </template>
      <div v-else class="flex-1 flex items-center justify-center text-gray-500">
        Select a chat to start messaging
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { selectedChat } = useChatStore();
const messages = ref([]);

const sendMessage = async (content: string) => {
  // Implementation will be added
};
</script>