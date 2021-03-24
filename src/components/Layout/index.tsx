import {
  Layout,
  Menu,
} from 'antd';

import 'antd/dist/antd.css';
import './style.css'

const { Header, Content, Footer } = Layout;

export default (props: any) => {
  
  return (
    <Layout className="layout full-page">
      <Header className="layout-header">
        <div className="logo" />
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Empresas</Menu.Item>
          {props.currCompany
            ? <>
                <Menu.Item key="2">{props.currCompany}</Menu.Item>
                <Menu.Item key="3">Unidades</Menu.Item>
                <Menu.Item key="4">Usuários</Menu.Item>
                <Menu.Item key="5">Ativos</Menu.Item>
              </>
            : null
          }
        </Menu> */}
      </Header>
      <Content className="layout-body">
        {props.children}
      </Content>
      <Footer
        className="layout-footer"
        style={{ textAlign: 'center' }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
};