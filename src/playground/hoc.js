// Higher Order Component - It can render several components at the same time. Promotes reusability of code.

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
    <div>
        <h1>Info</h1>
<p>The information is: {props.info}</p>
    </div>
)


const withAdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>WARNING MESSAGE</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}


const AdminInfo = withAdminWarning(Info);

const withAuthentication = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {!props.isAuthenticated && <p>Login to see this information.</p>}
            {props.isAuthenticated && <WrappedComponent {...props}/>}
        </div>
    )
}

const AuthInfo = withAuthentication(Info);

// ReactDOM.render(<AdminInfo info="Whatever" isAdmin={true}/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo info="Whatever" isAuthenticated={true}/>, document.getElementById('app'));