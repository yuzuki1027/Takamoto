
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">高本電業株式会社</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link" href="#intro">ごあいさつ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#business">事業内容</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#office">事業所</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="#company">会社概要</a>
          </li>
        </ul>
      </div>
            </div>
          </nav>
      );
}

export default Header;