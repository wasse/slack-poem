import React from 'react'

const RadioButtonField = ({ fieldLabel, children }) => (
    <div className="field is-horizontal">
        <div className="field-label">
        <label htmlFor="" className="label">
            {fieldLabel}
        </label>
        </div>
        <div className="field-body">
        <div className="field is-narrow">
            <div className="control is-vertical">
            {/* <Button {...props} value="kg" />
            <Button {...props} value="lb" /> */}
            {children}
            </div>
        </div>
        </div>
    </div>
)


export default RadioButtonField