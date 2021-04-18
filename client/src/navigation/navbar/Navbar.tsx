import React, { useEffect, useState } from 'react';
import { isMobileDevice } from '../../constants/global';
import { Menu } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { DASHBOARD_ROUTE, PROFILE_ROUTE } from '../../constants/routes';
import Icon from '@ant-design/icons/lib/components/AntdIcon';
import { MenuOutlined } from '@ant-design/icons';

import './Navbar.scss';

export default function Navbar({open, setOpen}: any){
    
    return(
        <div className="navbar">
            <div className="left-navbar-actions">
                <div className="menu-toggle" 
                onClick={() => setOpen(!open)}>
                <MenuOutlined className="" />
                </div>

                <div className="logo">EasyAI</div>
            </div>
        </div>
    )
}

// function NavbarLinks(){
//     return (
//         <>
//             <Link to={DASHBOARD_ROUTE} className={`link`}>
//                 <div className={'link-button'}>
//                     Dashboard
//                 </div>
//             </Link>
//             <Link to={ABOUT_PATH} className={`link`}>
//                 <div className={'link-button'}>
//                     about
//                 </div>
//             </Link>
//         </>
//     )
// }
