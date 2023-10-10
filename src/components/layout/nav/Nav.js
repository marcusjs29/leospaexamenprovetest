import logo from "../../../img/logo.png";

const Nav = () => {
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="d-flex">
                    <a href="/" className="navbar-brand">
                        <img className="img-fluid" src={logo} alt="logo" />
                    </a>
                </div>
                <nav className="navbar navbar-expand-lg">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#leospa-nav" aria-controls="leospa-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="leospa-nav">
                        <div className="navbar-nav me-auto">
                            <a className="nav-link active" aria-current="page" href="#home">HOME</a>
                            <a className="nav-link active" aria-current="page" href="#about">ABOUT</a>
                            <a className="nav-link" href="#feature">FEATURE</a>
                            <a className="nav-link" href="#service">SERVICE</a>
                            <a className="nav-link" href="#contact">CONTACT</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    );
};

export default Nav;
