import { Button, Image, ListGroup, ListGroupItem, Nav, NavLink } from "react-bootstrap";

const MySidebar = () => {
  return (
    <>
      <div className="col col-2">
        <Nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
          <div className="container flex-column align-items-start">
            <NavLink className="navbar-brand" href="index.html">
              <Image src={"src/assets/logo/logo.png"} alt="Spotify Logo" width="131" height="40" />
            </NavLink>
            <Button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ListGroup as="ul">
                  <ListGroupItem className="p-0 border-0 bg-transparent">
                    <NavLink className="nav-item nav-link d-flex align-items-center">
                      <i className="bi bi-house-door-fill"></i>&nbsp; Home
                    </NavLink>
                  </ListGroupItem>
                  <ListGroupItem className="p-0 border-0 bg-transparent">
                    <NavLink className="nav-item nav-link d-flex align-items-center">
                      <i className="bi bi-book-fill"></i>&nbsp; Your Library
                    </NavLink>
                  </ListGroupItem>
                  <ListGroupItem className="p-0 border-0 bg-transparent">
                    <div className="input-group mt-3">
                      <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                      <div className="input-group-append">
                        <Button className="btn btn-outline-secondary bg-transparent btn-sm h-100">GO</Button>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </div>
          </div>
          <div className="nav-btn">
            <Button className="btn signup-btn" type="button">
              Sign Up
            </Button>
            <Button className="btn login-btn" type="button">
              Login
            </Button>
            <NavLink>Cookie Policy</NavLink>|<NavLink> Privacy</NavLink>
          </div>
        </Nav>
      </div>
    </>
  );
};
export default MySidebar;
