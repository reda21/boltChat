<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              required
              class="input rounded-t-md"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              required
              class="input rounded-b-md"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm">
            <NuxtLink to="/forgot-password" class="text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </NuxtLink>
          </div>
        </div>

        <div>
          <button type="submit" class="btn btn-primary w-full">
            Sign in
          </button>
        </div>
      </form>

      <div class="text-center">
        <p class="text-sm text-gray-600">
          Don't have an account?
          <NuxtLink to="/register" class="text-indigo-600 hover:text-indigo-500">
            Sign up
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const auth = useAuth();
const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  try {
    await auth.login(email.value, password.value);
    navigateTo('/');
  } catch (error) {
    // Handle error
  }
};
</script>