import {
    ActionTypes,
    Company
} from './types'

export const requestGetCompanies = (id?: string) => ({
    type: ActionTypes.REQUEST_GET_COMPANY,
    id
})

export const receiveGetCompanies = () => ({
    type: ActionTypes.RECEIVE_GET_COMPANY
})

export const requestAddCompany = (id: string, company: Company) => ({
    type: ActionTypes.REQUEST_ADD_COMPANY,
    id,
    company,
})

export const receiveAddCompany = (id: string, company: Company) => ({
    type: ActionTypes.REQUEST_ADD_COMPANY,
    id,
    company,
})

export const requestUpdateCompany = (id: string, company: Company) => ({
    type: ActionTypes.REQUEST_UPDATE_COMPANY,
    id,
    company,
})

export const receiveUpdateCompany = (id: string, company: Company) => ({
    type: ActionTypes.REQUEST_UPDATE_COMPANY,
    id,
    company,
})

export const requestDeleteCompany = (id: string) => ({
    type: ActionTypes.REQUEST_DELETE_COMPANY,
    id,
})

export const receiveDeleteCompany = (id: string, company: Company) => ({
    type: ActionTypes.REQUEST_UPDATE_COMPANY,
    id,
    company,
})