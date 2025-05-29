import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const api = axios.create({
    baseURL: config.public.apiUrl,
  });

  return {
    provide: {
      api,
    },
  };
});
