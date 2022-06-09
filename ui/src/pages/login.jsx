import React, {useState} from 'react'
import {useCookies} from 'react-cookie'

function Login() {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [cookies, setCookie] = useCookies(['authorId']);

    const login = (e) => {
        e.preventDefault();
       if(user === 'Rony'){
        setCookie('authorId', '1234', {path: '/home'})
       } else {
        setCookie('authorId', '5678', {path: '/home'})
       }  

       window.location.href = '/home';
    }

  return (
    <div className="container">
  <div className="row col-md-12">
    <h1>Login</h1>
    <form className="col-md-12">
      <div className="col-md-12">
        <div className="form-group">
          <label name="usuario">Usuario:</label>
          <input className="form-control" type="text" name="usuario" onChange={(e)=> setUser(e.target.value)}/>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <label name="password">Password:</label>
          <input className="form-control" type="password" name="password" onChange={(e)=> setPassword(e.target.value)}/>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onClick={login}>Ingresar</button>
        </div>
      </div>
    </form>
  </div>
</div>
  )
}

export default Login