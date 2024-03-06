var MyClass = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Argent Bank - Home Page</title>
        <link rel="stylesheet" href="./css/main.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <nav className="main-nav">
          <a className="main-nav-logo" href="./index.html">
            <img className="main-nav-logo-image" src="./img/argentBankLogo.png" alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
          </a>
          <div>
            <a className="main-nav-item" href="./sign-in.html">
              <i className="fa fa-user-circle" />
              Sign In
            </a>
          </div>
        </nav>
      </div>
    );
  }
});