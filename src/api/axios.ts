import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
  Axios,
  AxiosRequestConfig
} from 'axios'
import { ResultEnum } from '@/enums/httpEnum'

export interface MyResponseType<T> {
  code: ResultEnum
  data: T
  message: string
}

export interface MyRequestInstance extends Axios {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <T = any>(config: AxiosRequestConfig): Promise<MyResponseType<T>>
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.DEV
    ? import.meta.env.VITE_DEV_PATH
    : import.meta.env.VITE_PRO_PATH,
  timeout: ResultEnum.TIMEOUT
}) as unknown as MyRequestInstance

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    const { code } = res.data as { code: number }
    if (code === undefined || code === null) return Promise.resolve(res.data)
    if (code === ResultEnum.SUCCESS) return Promise.resolve(res.data)
    return Promise.resolve(res.data)
  },
  (err: AxiosResponse) => {
    Promise.reject(err)
  }
)

export default axiosInstance
