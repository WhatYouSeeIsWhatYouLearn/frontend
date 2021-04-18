import React from 'react'
import {Form, Formik} from 'formik'
import TextLabelField from '../../components/form/TextLabelField'
import SelectLabelField from '../../components/form/SelectLabelField'
import { Button } from 'antd'

const initialValues = {

}

export default function PredictPage() {

    const onSubmit = (values: any) => {
        console.log(values)
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}>
                {(formikBag: any) => {
                    return (
                        <Form>
                            <TextLabelField
                                name="bloodPressure"
                                label="Blood Pressue"
                                type="tel"
                                formikBag={formikBag}/>
                            <SelectLabelField
                                name="graph"
                                label="Graphs"
                                mode="multiple"
                                placeholder="Please elect"
                                formikBag={formikBag}/>
                            <Button htmlType="submit">Submit</Button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
