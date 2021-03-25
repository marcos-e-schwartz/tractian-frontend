import {
  Layout,
  Menu,
  Button,
} from 'antd';
import { HomeFilled, ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import 'antd/dist/antd.css';
import './style.css'

const { Header, Content, Footer } = Layout;

export default (props: any) => {

  const history = useHistory();
  
  return (
    <Layout className="layout full-page">
      <Header className="layout-header">
        
        {/* <div className="logo" /> */}
        <Menu 
          className="menu"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          <Menu.Item className="left">
            <Button 
              className="menu-icon"
              type="text"
              icon={<ArrowLeftOutlined />}
              size="large"
              onClick={() => history.goBack()}
            />
          </Menu.Item>
          <Menu.Item className="right">
            <Button 
              className="menu-icon"
              type="text"
              icon={<HomeFilled />}
              size="large"
              onClick={() => history.push('/companies')}
            />
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="layout-body">
        {props.children}
      </Content>
      <Footer
        className="layout-footer"
        style={{ textAlign: 'center' }}
      >
        Criado por Marcos Schwartz
      </Footer>
    </Layout>
  )
};