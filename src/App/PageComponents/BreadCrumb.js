import React, { Fragment } from 'react';
import { Breadcrumb as Crumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumb = ({ name }) => {
  return (
    <Fragment>
      <Crumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
        <BreadcrumbItem active tag="span">{name}</BreadcrumbItem>
      </Crumb>
    </Fragment>
  );
}

export default Breadcrumb;
