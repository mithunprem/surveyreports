import React, { Fragment } from 'react';
import { Progress } from 'reactstrap';
import './colorLegendView.scss';

const ColourLegendView = () => {
  return (
    <Fragment>
      <div className="ml-3 mb-4 color-legend">
        <span className="small" >Color legend :</span>
        <Progress multi>
          <Progress bar color="danger" value="33.3">
            Rating &lt; 3.5
          </Progress>
          <Progress bar color="warning" value="33.3">
            3.5 &lt; Rating &lt; 4
          </Progress>
          <Progress bar color="success" value="33.3">
            Rating &gt; 4
          </Progress>
        </Progress>
      </div>
    </Fragment>
  )
}

export default ColourLegendView;
