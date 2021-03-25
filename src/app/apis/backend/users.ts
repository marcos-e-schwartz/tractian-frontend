/* eslint array-callback-return: 0 */ //
import axios, { AxiosResponse, AxiosInstance } from 'axios';

import TractianApi from './base';
import { UserIn } from './input-ports'
import { UserOut } from './output-ports'

export default class TractianCompanyApi extends TractianApi<UserIn, UserOut>{

  constructor() {
    super('users');
  }

}
