<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Username</label>
            <input
              id="username"
              v-model="username"
              name="username"
              type="text"
              required
              class="input rounded-t-md"
              placeholder="Username"
            />
          </div>
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              required
              class="input"
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

        <div>
          <button type="submit" class="btn btn-primary w-full">
            Sign up
          </button>
        </div>
      </form>

      <div class="text-center">
        <p class="text-sm text-gray-600">
          Already have an account?
          <NuxtLink to="/login" class="text-indigo-600 hover:text-indigo-500">
            Sign in
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const auth = useAuth();
const username = ref('');
const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  try {
    await auth.register(username.value, email.value, password.value);
    navigateTo('/');
  } catch (error) {
    // Handle error
  }
};
</script>