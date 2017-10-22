import React from "react";

const Results = props => {

  let codePercentile = props.percentiles[0]
  let commPercentile = props.percentiles[1]

  return (
    <div className="col-md-6">
      <h1>THIS IS RESULTS</h1>
      <h3>Code Percentile: {codePercentile * 100}%</h3>
      <h4>Comm Percentile: {commPercentile * 100}%</h4>
    </div>
  );
};

export default Results;
