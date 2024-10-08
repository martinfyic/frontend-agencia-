import apiClient from '@/lib/api/axios';

interface LoginInterface {
  email: string;
  password: string;
}

export const loginUser = async ({ email, password }: LoginInterface) => {
  try {
    const { data } = await apiClient.post('/auth/login', { email, password });
    return data;
  } catch (error) {
    return error;
  }
};
