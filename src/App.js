import React from 'react'
import Navigation from './components/Navigation/Navigation'
import SignIn from './components/Signin/Signin';
import Register from './components/Register/Register';
import Main from './components/Main/Main';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      route : 'signin',
      isSignedIn : false
    }
  }

  onRouteChange = (route) => {
    if ( route === 'signout'){
      this.setState({isSignedIn : false})
    }else if(route === 'home'){
      this.setState({isSignedIn : true})
    }
    this.setState({route : route} );
  }
  
  render(){
    return (
      <div className="App">
        <Navigation isSignedIn = {this.state.isSignedIn} onRouteChange={this.onRouteChange} />
          {
            this.state.route === 'home'  ?
            <Main /> :
            (this.state.route === 'signin'?
            <SignIn onRouteChange = {this.onRouteChange} />  :
            <Register /> 
            )
          }
      </div>
    )
  }
}
         

export default App;
