import React from 'react';
import './header.scss';
import argentBankLogo from '../../assets/img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';


export function Header() {
  const token = useSelector ((state)=>state.auth.token)
    return (
      <div>
        <title>Argent Bank - Home Page</title>
        <nav className="main-nav">
          <a className="main-nav-logo" href="./index.html">
            <Link to="/" >
            <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
            </Link>
            <h1 className="sr-only">Argent Bank</h1>
          </a>
          <div>
            {token?(
              <>
              <p>je suis connecté</p>
              </>
            ):(
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
  // return (
  //   <div className="sign-in">
  //     <h1>ARGENTBANK</h1>
  //     <button>Sign In</button>
  //   </div>
  // );
