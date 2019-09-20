import React, { Fragment } from 'react';
import { Progress } from 'reactstrap';

const ProgressBar = () => {
  return (
    <Fragment>
      <div className="ml-3 mb-4">
        <span className="small" >Theme cards coloring legend :</span>
        <Progress multi>
          <Progress bar color="danger" value="33.3">
            rating &lt; 3.5
          </Progress>
          <Progress bar color="warning" value="33.3">
            3.5 &lt; rating &lt; 4
          </Progress>
          <Progress bar color="success" value="33.3">
            rating &gt; 4
          </Progress>
        </Progress>
      </div>
    </Fragment>
  )
}

export default ProgressBar;
