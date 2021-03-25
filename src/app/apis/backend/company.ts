/* eslint array-callback-return: 0 */ //
import axios, { AxiosResponse, AxiosInstance } from 'axios';

import TractianApi from './base';
import { CompanyIn } from './input-ports'
import { CompanyOut, CompanyStatsOut } from './output-ports'

export default class TractianCompanyApi extends TractianApi<CompanyIn, CompanyOut>{

  constructor() {
    super('companies');
  }

  public getOneByIdWithStats = (id: string): Promise<CompanyStatsOut> => {
    return this.api.get(`/${id}/stats`)
  }

}
