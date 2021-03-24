import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import logo from '../../assets/tractian.png';
import './style.css';

export const Home = () => {

  const history = useHistory();

  const onStart = () => history.push('/companies')

  return (
    <div>
      <header className="land-header">
        <div className="black-bg">
          <div className='signature-wrapper'>
          <img src={logo} className="logo" alt="logo" />
            <p className='signature'>
              Por Marcos Schwartz
            </p>
          </div>
          <div>
            <Button 
              type="default"
              shape="round"
              icon={<RightOutlined />}
              size="large"
              className="start"
              onClick={onStart}
            >
              Começar
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
