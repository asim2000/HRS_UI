import { Field } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function CheckInput(props) {
    return (
            <div>
                <p>{props.labelValue}</p>
                {
                    props.options.map(option => (
                        <div className='field'>
                          <div className='ui checkbox'>
                             <Field id={option.value.toString()} value={option.value.toString()} type={props.type} name={props.name}/>
                         <label for={option.value.toString()}>{option.text}</label>
                         </div>
                        </div>
                    
                 ))
                }
            </div>
    )
}
