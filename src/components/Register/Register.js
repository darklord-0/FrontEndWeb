import React from 'react'

const Register = (onRouteChange) => {

    return (
        <div>
                    <div className="sans-serif w-90 white mw6 center relative cover bg-top mt2 shadow-5" >
                <div id="overlay" className="absolute absolute--fill bg-navy o-50 z-unset">
                </div>
                    
                <div className="relative pa4 pa5-m">

                    <h1 className="serif tracked ma0 mb4 pv3">Register yourself</h1>
                    <form action="" id="login" className="">
                    <div className="mb3">
                        <label for="username" className="db f6 white-80 ttu ph2 mb2">Fullname</label>
                        <input type="text" name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                    </div>
                    <div className="mb4">
                        <label for="password" className="db f6 white-80 ttu ph2 mb2">Email</label>
                        <input type="password" name="password" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                    </div>
                    <div className="mb4">
                        <label for="password" className="db f6 white-80 ttu ph2 mb2">Password</label>
                        <input type="password" name="password" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
                    </div>
                    <div>
                        <button onClick={() => onRouteChange('signin')} className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill">Register</button>
                    </div>
                    </form>
                
                    
                </div>
                </div>
        </div>
    )
  
}

export default Register;
