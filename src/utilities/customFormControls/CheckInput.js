import { Field, useField } from 'formik'
import React from 'react'
import { Label } from 'semantic-ui-react';

export default function CheckInput(props) {
    const random = Date.now().toString(36) + Math.random().toString(36).substr(2);
    const [field,meta] = useField(props)
    return (
        <div>
            <p>{props.labelValue}</p>
            {
                props.options.map(option => (
                    <div className='field' style={{display:props.br?'block':'inline-block'}}>
                        <div className='ui checkbox'>
                            <Field id={option.value + random} value={option.value.toString()} type={props.type} name={props.name} />
                            <label className='radio-inline' style={{margin:'10px'}} for={option.value + random}>{option.text}</label>
                        </div>
                    </div>

                ))
            }
            {meta.touched && !!meta.error ? (<Label pointing className='d-block' basic color='red' content={meta.error}></Label>) : null}
        </div>
    )
}
