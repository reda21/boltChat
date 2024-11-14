import { defineStore } from 'pinia';

interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  status: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

export const useAuth = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(email: string, password: string) {
      try {
        const { data: response } = await useFetch('/api/auth/login', {
          method: 'POST',
          body: { email, password },
        });

        if (response.value) {
          this.token = response.value.token;
          this.user = response.value.user;
          localStorage.setItem('token', this.token);
        }
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },

    async register(username: string, email: string, password: string) {
      try {
        const { data: response } = await useFetch('/api/auth/register', {
          method: 'POST',
          body: { username, email, password },
        });

        if (response.value) {
          this.token = response.value.token;
          this.user = response.value.user;
          localStorage.setItem('token', this.token);
        }
      } catch (error) {
        console.error('Registration error:', error);
        throw error;
      }
    },

    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('token');
      navigateTo('/login');
    },

    async checkAuth() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const { data: response } = await useFetch('/api/auth/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.value) {
            this.token = token;
            this.user = response.value;
          }
        } catch (error) {
          this.logout();
        }
      }
    },
  },
});