import React from 'react'


function Alert(props) {
    const capatalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <> 
        <div style={{height:'60px'}}>
            {props.alert && <div align="center" className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capatalize(props.alert.type)}</strong>{props.alert.msg}
            </div>}
        </div>
        </>
    )
}

export default Alert