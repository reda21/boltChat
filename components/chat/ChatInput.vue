<template>
  <div class="border-t border-gray-200 px-4 py-4 sm:px-6">
    <div class="flex space-x-3">
      <div class="flex-1">
        <textarea
          v-model="message"
          rows="1"
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Type your message..."
          @keydown.enter.prevent="sendMessage"
        />
      </div>
      <div class="flex-shrink-0">
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          @click="sendMessage"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const message = ref('');
const emit = defineEmits(['send']);

const sendMessage = () => {
  if (message.value.trim()) {
    emit('send', message.value);
    message.value = '';
  }
};
</script>