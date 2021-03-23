import { useEffect, useState } from 'react';
import { message, Card, Button, Spin } from 'antd';
import { CheckOutlined, CloseSquareOutlined, DeleteOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom';

import './style.css'

import TractianApi from '../../app/apis/backend/api'
import { CompanyOut } from 'app/apis/backend/output-ports'

const api = new TractianApi('company')

export const CompanyPage = () => {

    const history = useHistory();
    const [fetching, setFetching] = useState(true)
    const [companies, setCompanies] = useState<CompanyOut[]>([])
    const [registering, setRegistering] = useState(false)
    const [newName, setNewName] = useState('')

    // --- CRUD LOGIC --------------------------------------------------

    const getCompanies = () => {
        return api.getAll()
            .then(companies => {
                setCompanies(companies.sort())
                setFetching(false)
            })
            .catch(error => {
                console.error(error.message)
                message.error('Falha ao consultar empresas');
                setFetching(false)
            })
    }

    const addCompany = () => {
        const obj = {
            name: newName,
        }
        console.log(`adding: `)
        console.log(obj)
        return api.add(obj)
        .then((company: CompanyOut) => {
            if (!companies.includes(company))
                companies.unshift(company)
                setCompanies(companies)
            setRegistering(false)
            setNewName('')
        })
        .catch(error => {
            console.error(error)
            message.error('Falha ao cadastrar empresas');
        })
    }

    useEffect(() => {
        getCompanies()
    }, [])

    const deleteCompany = (id: string) => {
        return api.delete(id)
            .then((company: CompanyOut) => {
                setCompanies(companies.filter(c => c.id !== id))
            })
            .catch(error => {
                console.error(error)
                message.error('Falha ao deletar empresas');
            })
    }

    // --- COMPONENT LOGIC ------------------------------------------------

    const CompanyTile = (company: CompanyOut) => (
        <div onClick={() => history.push(`${company.id}`)}>
            <Card.Grid 
                key={company.id}
                className="card-tile"
            >
                <div className='card-content'>
                    <p className='centered-text'>{company.name}</p>
                    <div style={{ display: 'flex'}}>
                        {/* <EditOutlined className='tile-icon' /> */}
                        <DeleteOutlined
                            className='tile-icon'
                            onClick={() => deleteCompany(company.id)}
                        />
                    </div>
                </div>
            </Card.Grid>
        </div>
    )

    const onCloseRegistration = () => {
        setNewName('')
        setRegistering(false)
    }
    
    const RegistrationTile = () => (
        <Card.Grid hoverable={false} className="card-tile">
            <div className='card-content'>
                <input
                  className='centered-text'
                  placeholder='Empresa'
                  type='text'
                  onChange={e => setNewName(e.target.value)}
                />
                <div>
                    <CheckOutlined
                        className='tile-icon'
                        onClick={addCompany}
                    />
                    <CloseSquareOutlined
                        className='tile-icon'
                        onClick={onCloseRegistration}
                    />
                </div>
            </div>
        </Card.Grid>
    )

    return (
        <div className='wrapper'>
        { fetching
            ? <Spin size='large' tip='Carregando...'/>
            :
                <div className='black-bg'>
                    <header className='comp-header'>
                        <h1 className='comp-h1'>Empresas</h1>
                        <Button 
                        type="default"
                        size="large"
                        onClick={() => setRegistering(true)}
                        >
                            Adicionar
                        </Button>
                    </header>
                    <div className='tiles-wrapper'>
                        {registering ? RegistrationTile() : ''}
                        {companies.map((company: CompanyOut) => CompanyTile(company))}
                    </div>

                </div>
        }
        </div>
    )
}