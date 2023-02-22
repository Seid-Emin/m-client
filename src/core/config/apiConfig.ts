const apiBaseUrl: string = import.meta.env.MODE === 'development' ? 'http://localhost:5000' : '/';

const baseApi = 'api/';
export const apiConfig: { [key: string]: string } = {
  baseUrl: apiBaseUrl,

  // auth
  login: `${baseApi}auth/login`,
  register: `${baseApi}auth/register`,
  logout: `${baseApi}auth/logout`,
  changePassword: `${baseApi}auth/changePassword`,

  // user/s
  userGet: `${baseApi}user`,
  refresh: '/refresh',
  persistLogin: '/persistLogin',
};
