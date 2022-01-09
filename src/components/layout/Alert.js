import React from 'react'

function Alert({ alert }) {
    return (
        alert !== null && (
            <div className={`py-2 d-flex alert alert-${alert.type}`}>
                <i class="bi bi-info-circle"></i>
                <p className='p-0 m-0 ms-3'>{alert.msg}</p>
            </div>
        )
    )
}

export default Alert
