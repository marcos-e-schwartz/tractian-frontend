import { useEffect, useState, useCallback } from 'react';
import { message, Card, Button, Spin } from 'antd';
import { CheckOutlined, CloseSquareOutlined, DeleteOutlined } from '@ant-design/icons'
import { useHistory, useLocation } from 'react-router-dom';

import './style.css'
import Layout from '../../components/Layout'
import StatContainer from './aux/StatContainer'

import TractianCompanyApi from '../../app/apis/backend/company'

const tractianCompanyApi = new TractianCompanyApi()

export const CompanyLandingPage = () => {

    const history = useHistory();
    const location = useLocation().pathname
    const companyId = location.slice(location.lastIndexOf('/') + 1)
    const [fetching, setFetching] = useState(false);
    const [name, setName] = useState('')
    const [assets, setAssets] = useState(0)
    const [offices, setOffices] = useState(0)
    const [users, setUsers] = useState(0)

    // --- CRUD LOGIC --------------------------------------------------

    const getCompanyData = useCallback(() => {
        return tractianCompanyApi.getOneByIdWithStats(companyId)
            .then(data => {
                setName(data.name)
                setAssets(data.assets)
                setOffices(data.offices)
                setUsers(data.users)
                setFetching(false)
            })
            .catch(error => {
                console.error(error.message)
                setName('-')
                setAssets(0)
                setOffices(0)
                setUsers(0)
                message.error('Falha ao consultar empresa');
                setFetching(false)
            })
    }, [])

    useEffect(() => {
        getCompanyData()
    }, [])

    return (
        <div className='wrapper'>
        { fetching
            ? <Spin size='large' tip='Carregando...'/>
            :
            <Layout>
                <h1 className="company-name">{name}</h1>
                <div className="stats-holder">
                    <StatContainer count={assets} text="Ativos" />
                    <StatContainer count={offices} text="Escritórios" />
                    <StatContainer count={users} text="Usuários" />
                </div>
            </Layout>
        }
        </div>
    )
}