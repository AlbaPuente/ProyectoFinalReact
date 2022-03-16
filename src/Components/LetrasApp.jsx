import React from 'react';
import Alert from './Alert';

const LetrasApp = () => {
    
    return (
    <>
        <header></header>

        <div>
            {alert && <Alert>{alert}</Alert>}
        </div>
    </>
  )
}

export default LetrasApp
