<template>
  <header class="bg-white shadow">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold text-gray-900">
            Chat App
          </NuxtLink>
        </div>

        <div class="flex items-center space-x-4">
          <button
            class="relative p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" />
            <span
              v-if="unreadNotifications > 0"
              class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"
            />
          </button>

          <Menu as="div" class="relative ml-3">
            <MenuButton
              class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">Open user menu</span>
              <img
                :src="user?.avatar || '/default-avatar.png'"
                alt=""
                class="h-8 w-8 rounded-full"
              />
            </MenuButton>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <NuxtLink
                    to="/profile"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                  >
                    Your Profile
                  </NuxtLink>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    @click="logout"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { BellIcon } from '@heroicons/vue/24/outline';

const auth = useAuth();
const { user } = storeToRefs(auth);
const unreadNotifications = ref(0);

const logout = () => {
  auth.logout();
};
</script>