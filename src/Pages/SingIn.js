import React from 'react'

export default function SingIn() {
    return (
        <div class="container" id="formContainer">

        <form class="form-signin" id="login" role="form">
          <h3 class="form-signin-heading">Please sign in</h3>
          <a href="#" id="flipToRecover" class="flipLink">
            <div id="triangle-topright"></div>
          </a>
          <input type="email" class="form-control" name="loginEmail" id="loginEmail" placeholder="Email address" required autofocus/>
          <input type="password" class="form-control" name="loginPass" id="loginPass" placeholder="Password" required/>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
  

      </div> 
    )
}
