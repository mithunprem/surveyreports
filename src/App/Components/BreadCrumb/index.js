import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb as Crumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumb = ({ pageName }) => {
  return (
    <Fragment>
      <Crumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
        <BreadcrumbItem active tag="span">{pageName}</BreadcrumbItem>
      </Crumb>
    </Fragment>
  );
}

Breadcrumb.propTypes = {
  pageName: PropTypes.string
}

export default Breadcrumb;
