import React, { Fragment } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header () {
  return (
    <Fragment>
      <Navbar color="dark" dark expand="xs">
        <NavbarBrand href="/">
          <span>Survey Reports</span>
        </NavbarBrand>
      </Navbar>
    </Fragment>
  );
}

export default Header;
