import React, { Fragment } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = ({ children }) => {
  return (
    <Fragment>
      <Navbar color="dark" dark expand="xs">
        <NavbarBrand href="/">
          <span>Survey Reports</span>
        </NavbarBrand>
      </Navbar>
      { children }
    </Fragment>
  );
}

export default Header;
