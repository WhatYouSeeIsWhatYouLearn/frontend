import React, { useEffect, useState } from 'react'
import {Card, Row, Col, Statistic, Button, Spin} from 'antd'
import './DashboardPage.scss'
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2'
import { barData, doughnutData, lineData, minMaxStep, options, schemes } from '../../constants/datasets'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import DashboardDesktopLayout from './DashboardDesktopLayout'
import ValidationCurve from '../../components/graphs/examples/ValidationCurve'
import ROCCurve from '../../components/graphs/examples/ROCCurve'
import PCAScatterPlot from '../../components/graphs/examples/PCAScatterPlot'
import PetalHistogram from '../../components/graphs/examples/PetalHistogram'
import GridGroup from '../../components/layout/GridGroup'
import BoxPlot from '../../components/graphs/examples/BoxPlot'
import CarBrandDoughnut from '../../components/graphs/examples/CarBrandDoughnut'
import DynamicChart from '../../components/graphs/DynamicChart'
import { formatBoxPlotTemplate, formatLineChartTemplate, formatTemplates } from '../../utils/formatter'
import { getTemplates } from '../../constants/api'

export default function DashboardPage() {

    const [graphs, setGraphs]: any = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        generateGraphs()
        return () => {
        }
    }, [])


    const generateGraphs = async () => {
        setLoading(true)

        const templates = await getTemplates()
        
        const formattedTemplates = formatTemplates(templates)
        setGraphs(formattedTemplates);

        setLoading(false)
    }

    return (
        <div>
            {/* {loading && } */}
            {/* <Button onClick={generateGraphs}>Generate Graphs</Button> */}
                {loading && 
                <div className="loading-div">
                    <Spin tip="Loading..."/>
                </div>
                }
            <Row gutter={[8,8]} align="middle">
                
                {graphs && graphs.map((dataset: any, key: number) => {
                    return (
                        <Col key={key} xs={24} md={12}>
                            <Card>
                                <DynamicChart formattedData={dataset} />
                            </Card>
                        </Col>

                    )
                })}
            </Row>

            <h2>Example Graphs</h2>
            <Row gutter={[8,8]} className="equal-heights">
                <Col xs={24} lg={14}>
                <Card>
                    <ValidationCurve/>
                </Card>
                </Col>

                <Col xs={24} lg={10}>
                    <Card >
                        <CarBrandDoughnut/>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
            <GridGroup title="Iris Dataset">
            <Row gutter={[8,8]}>
                <Col xs={24} md={12}>
                    <Card>
                        <PetalHistogram
                            label="Petal Width"
                            labels={[1,2,3,4,5,6,7,8]}
                            scheme={schemes.blueScheme}
                            data={[35,11,0,2,8,26,39,18,11,5]}
                            />
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card>
                        <PetalHistogram
                            label="Petal Length"
                            labels={[1,2,3,4,5,6,7,8]}
                            scheme={schemes.redScheme}
                            data={[35,11,0,2,8,26,39,18,11,5]}
                            />
                    </Card>
                </Col>
            </Row>
            <Row gutter={[8,8]}>
                <Col xs={24} md={12}>
                    <Card>
                        <PetalHistogram
                            label="Sepal Width"
                            labels={[1,2,3,4,5,6,7,8]}
                            scheme={schemes.orangeScheme}
                            data={[35,11,0,2,8,26,39,18,11,5]}
                            />
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card>
                        <PetalHistogram
                            label="Sepal Length"
                            labels={[1,2,3,4,5,6,7,8]}
                            scheme={schemes.purpleScheme}
                            data={[35,11,0,2,8,26,39,18,11,5]}
                            />
                    </Card>
                </Col>
            </Row>
            </GridGroup>

            <Row gutter={[8,8]}>
                <Col xs={24} lg={12}>
                <Card>
                    <PCAScatterPlot/>
                </Card>
                </Col>
                <Col xs={24} lg={12}>
                <Card>
                    <ROCCurve/>
                </Card>
                </Col>
            </Row>

            <Card>
                <BoxPlot/>
            </Card>
        </div>
    )
}
