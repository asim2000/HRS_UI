import { Field } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function CheckInput(props) {
    const random = Date.now().toString(36) + Math.random().toString(36).substr(2);
    return (
            <div>
                <p>{props.labelValue}</p>
                {
                    props.options.map(option => (
                        <div className='field'>
                          <div className='ui checkbox'>
                             <Field id={option.value+random} value={option.value.toString()} type={props.type} name={props.name}/>
                         <label for={option.value+random}>{option.text}</label>
                         </div>
                        </div>
                    
                 ))
                }
            </div>
    )
}
