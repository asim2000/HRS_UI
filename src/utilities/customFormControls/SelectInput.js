import { useField } from 'formik'
import React from 'react'
import { FormField,Label } from 'semantic-ui-react'

export default function SelectInput({...props}) {
    const [field,meta] = useField(props)
  return (
    <FormField error={meta.touched && !!meta.error}>
        <select {...props} {...field}>
          <option>{props.defaultValue}</option>
          {
            props.options.map(option=>(
                <option value={option.value} key={option.value}>{option.text}</option>
            ))
          }
        </select>
        {
            meta.touched && !!meta.error ? (<Label pointing basic color='red' content={meta.error}></Label>) : null
        }
    </FormField>
  )
}
