import React, { useState } from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import DashboardPage from '../pages/dashboard/DashboardPage'
import {Layout, Menu} from 'antd';
import {
    BarChartOutlined,
    UploadOutlined,
    UserOutlined, VideoCameraOutlined
} from "@ant-design/icons"
import Navbar from './navbar/Navbar';

import './PublicLayout.scss';
import { DASHBOARD_ROUTE, PROFILE_ROUTE, PREDICT_ROUTE } from '../constants/routes';
import ProfilePage from '../pages/profile/ProfilePage';
import PredictPage from '../pages/predict/PredictPage';

export default function PublicLayout() {

    const {Sider} = Layout
    const [open, setOpen] = useState(false);

    
    return (
        <Layout >
            <Navbar
                open={open}
                setOpen={setOpen}/>  
            <div className="layout">
                <Layout.Sider
                    className={`sidebar ${open ? 'open' : ''}`}>
                    <div></div>
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="1" icon={<BarChartOutlined />}>
                            <NavLink to={DASHBOARD_ROUTE}>Dashboard</NavLink> 
                        </Menu.Item>
                        {/* <Menu.Item key="2" icon={<UserOutlined />}>
                            <NavLink to={PROFILE_ROUTE}>Profile</NavLink> 
                        </Menu.Item> */}
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            <NavLink to={PREDICT_ROUTE}>Predict</NavLink>
                        </Menu.Item>
                    </Menu>
                </Layout.Sider>
                <Layout className={`layout-content ${open ? 'open' : ''}`}>
                    <Layout.Content>
                        <Switch>
                            <Redirect exact to="/dashboard" from="/"/>
                            <Route path={DASHBOARD_ROUTE} component={DashboardPage}/>
                            <Route path={PREDICT_ROUTE} component={PredictPage}/>
                            <Route path={PROFILE_ROUTE} component={ProfilePage}/>
                        </Switch>
                    </Layout.Content>
                </Layout>
            </div>
        </Layout>
    )
}


