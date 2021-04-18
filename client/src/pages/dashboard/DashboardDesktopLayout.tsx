import { ArrowUpOutlined } from '@ant-design/icons'
import { Card, Col, Row, Statistic } from 'antd'
import React from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import { barData, doughnutData, lineData, options, schemes } from '../../constants/datasets'

export default function DashboardDesktopLayout() {
    return (
        <div>
            
            <Row align="middle" gutter={[8,8]} className="spaced-row">
                <Col xs={12} sm={6}>
                    <Card>
                        <Statistic
                            title="Iris Accuracy"
                            value={15.8}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined/>}
                            suffix={"%"}/>
                    </Card>
                </Col>
                <Col xs={12} sm={6}>
                    <Card>
                        <Statistic
                            title="Face Recognition Accuracy"
                            value={1.2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined/>}
                            suffix={"%"}/>
                    </Card>
                </Col>
                <Col xs={12} sm={6}>
                    <Card>
                        <Statistic
                            title="Accuracy"
                            value={5.8}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined/>}
                            suffix={"%"}/>
                    </Card>
                </Col>
                <Col xs={12} sm={6}>
                    <Card>
                        <Statistic
                            title="Accuracy"
                            value={5.8}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined/>}
                            suffix={"%"}/>
                    </Card>
                </Col>
            </Row>
            {/* Main Graph */}
            <Row gutter={[8, 8]} className="spaced-row">
                <Col xs={24} >
                    <Card className="graph-card" style={{marginBottom: "8px"}}>    
                        <Bar
                            data={barData(schemes.purpleScheme, schemes.greenScheme)}
                            options={options("Day (Week)", "Accuracy")}/>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[8,8]}>

                <Col xs={24} md={12}>
                    <Card style={{marginBottom: "8px"}}>
                        <Doughnut
                            data={doughnutData(schemes.orangeScheme)}
                            options={options}/>
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card >
                        <Doughnut
                            data={doughnutData(schemes.orangeScheme)}
                            options={options}/>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[8,8]}>
                <Col xs={24} sm={12}>
                <Card>
                    <Line
                        data={lineData(schemes.blueScheme)}
                        options={options("Time", "Accuracy")}
                        />
                        </Card>
                </Col>
                <Col xs={24} sm={12}>
                <Card>
                    <Line
                        data={lineData(schemes.purpleScheme)}
                        options={options("Time", "Accuracy")}
                        />
                        </Card>
                </Col>
            </Row>
        </div>
    )
}
