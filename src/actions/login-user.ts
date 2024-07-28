import apiBackend from '@/lib/api/axios';

interface LoginInterface {
  email: string;
  password: string;
}

export const loginUser = async ({ email, password }: LoginInterface) => {
  const { data } = await apiBackend.post('/auth/login', { email, password });
  return data;
};
