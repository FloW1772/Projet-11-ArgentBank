import React from 'react';
import './header.scss';
import argentBankLogo from '../../assets/img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logout } from '../../redux-toolkit/reducers/authSlice';


export function Header() {
  const token = useSelector((state) => state.auth.token);
  const userName = useSelector((state) => state.profile);
  const [email, setEmail] = useState('');
  const dispatch= useDispatch()

  return (
    <div>
      <title>Argent Bank - Home Page</title>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <Link to="/">
            <img
              className="main-nav-logo-image"
              src={argentBankLogo}
              alt="Argent Bank Logo"
            />
          </Link>
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          {token ? (
            <>
              <p>
                {console.log(userName)}
                <i className="fa fa-user-circle sign-in-icon" />
              {userName.userName ? userName.userName : userName.firstName} <span className="main-nav-username"></span>
              <Link onClick={()=>{
                dispatch(logout())
              }}  className="main-nav-item" to="/">
                <i className="fa fa-sign-out" />
                Sign Out
              </Link>
              </p>

            </>
          ) : (
            <Link className="main-nav-item" to="/connect-page">
              <i className="fa fa-user-circle" />
            Sign In
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}