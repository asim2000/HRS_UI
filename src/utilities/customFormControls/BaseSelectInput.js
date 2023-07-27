import React from 'react'
import { FormField } from 'semantic-ui-react'

export default function BaseSelectInput({...props}) {

  return (
    <FormField className='form ui'>
        <select {...props}>
          <option>{props.defaultValue}</option>
          {
            props.options.map(option=>(
                <option value={option.value} key={option.value}>{option.text}</option>
            ))
          }
        </select>
    </FormField>
  )
}
