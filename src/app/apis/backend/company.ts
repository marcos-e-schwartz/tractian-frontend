/* eslint array-callback-return: 0 */ //
import axios, { AxiosResponse, AxiosInstance } from 'axios';
import { CompanyIn } from './input-ports'
import { CompanyOut, CompanyStatsOut } from './output-ports'

export default class TractianCompanyApi {

  private readonly api: AxiosInstance;

  constructor() {

    this.api = axios.create({
      baseURL: `http://localhost:8000/api/company`,
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

  public getAll = (): Promise<CompanyOut[]> => {
    return this.api.get(`/`)
  }

  public getOneById = (id: string): Promise<CompanyOut|null> => {
    return this.api.get(`/${id}`)
  }

  public getOneByIdWithStats = (id: string): Promise<CompanyStatsOut> => {
    return this.api.get(`/${id}/stats`)
  }

  public add = (data: CompanyIn): Promise<CompanyOut> => {
    return this.api.post(`/`, data)
  }

  public update = (id: string, data: CompanyIn): Promise<CompanyOut> => {
    return this.api.put(`/${id}`, data)
  }

  public delete = (id:string): Promise<CompanyOut> => {
    return this.api.delete(`/${id}`)
  }

}
