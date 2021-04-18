import { Divider } from 'antd';
import React from 'react'
import './GridGroup.scss'

export default function GridGroup(props: any) {
    const {title, children} = props;
    return (
        <div className="grid-group">
            <div className="grid-group-title">{title}</div>
            {children}
            <Divider/>
        </div>
    )
}
