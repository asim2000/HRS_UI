import { useField } from 'formik'
import React, { useEffect, useState } from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function TextInput({...props}) {
    const [field,meta] = useField(props)
  return (
    
    <FormField error={meta.touched && !!meta.error}>
        <input {...props} {...field} value={props.value}/>
        {
            (meta.touched) && !!meta.error ? (<Label pointing basic color='red' content={meta.error}></Label>) : null
        }
    </FormField>
  )
}
