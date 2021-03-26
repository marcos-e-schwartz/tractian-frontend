/* eslint array-callback-return: 0 */ //
import axios, { AxiosResponse, AxiosInstance } from 'axios';

export default class TractianApi<In, Out> {

  protected readonly api: AxiosInstance;

  constructor(endpoint: string) {

    this.api = axios.create({
      baseURL: `https://backend-tractian.herokuapp.com/api/${endpoint}`,
      // baseURL: `http://localhost:8000/api/${endpoint}`,
      // headers: {
      //   'Content-Type': 'multipart/form-data',   
      // }
    });
    
    const interceptors = [
      (response: AxiosResponse) =>
        // Do something with response data
        response.data,
      (e: AxiosResponse): Promise<AxiosResponse> => {
        // Extract XMLHttpRequest object from error
        const req = e.request;
        // convert response body to object
        const body = JSON.parse(req.response);
        const reject: Promise<AxiosResponse> = Promise.reject(body);
        return reject;
      },
    ];
    this.api.interceptors.response.use(...interceptors);
  }

  public getAll = (): Promise<Out[]> => {
    return this.api.get(`/`)
  }

  public getOneById = (id: string): Promise<Out|null> => {
    return this.api.get(`/${id}`)
  }

  public add = (data: In): Promise<Out> => {
    return this.api.post(`/`, data)
  }

  public update = (id: string, data: In): Promise<Out> => {
    return this.api.put(`/${id}`, data)
  }

  public delete = (id:string): Promise<Out> => {
    return this.api.delete(`/${id}`)
  }

}
