import Axios, { type AxiosError, type AxiosRequestConfig } from 'axios';
import { env } from '@/env/client';

export const AXIOS_INSTANCE = Axios.create({ baseURL: env.NEXT_PUBLIC_API_URL }); // use your own URL here or environment variable

// add a second `options` argument here if you want to pass extra options to each generated query
export const fetchInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const source = Axios.CancelToken.source();

  AXIOS_INSTANCE.interceptors.request.use((config) => {
    // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  });

  AXIOS_INSTANCE.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-expect-error
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;
