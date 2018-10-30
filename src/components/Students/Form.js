import React, { Fragment, Component } from 'react'
import * as Yup from 'yup'
import { Form, Formik, ErrorMessage } from 'formik'
import styled from 'styled-components'
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core'

const INITIAL_VALUES = {
  name: '',
  isActive: true,
}

const SCHEMA = Yup.object().shape({
  name: Yup.string().required(`Name is required`).trim().min(2, `Name is at least 2 characters.`).max(128, `Name is no more than 128 characters.`),
  isActive: Yup.boolean().default(true),
})

const Fields = styled.div`
  margin-bottom: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
`

const Actions = styled.div`
  padding: 8px;
`

const RENDER_FORM = ({ values, handleChange, handleBlur }) => (
  <Form>
    <Fields>
      <TextField name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} label="Name" />
      <ErrorMessage name="name" />
    </Fields>
    <Fields>
      <FormControlLabel
        control={
          <Switch
            name="isActive"
            checked={values.isActive}
            onChange={handleChange}
            value={values.isActive}
          />
        }
        label="Is Active?"
      />
    </Fields>
    <Actions>
      <Button variant="contained" size="large" color="primary" type="submit">Save</Button>
    </Actions>
  </Form>
)

export default class extends Component {
  
  render() {
    
    return (
      <Fragment>
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={SCHEMA}
          onSubmit={(values) => {
            console.log(values)
          }}
          render={RENDER_FORM}
        />
      </Fragment>
    )
  }
}

