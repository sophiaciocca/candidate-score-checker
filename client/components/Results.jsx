import React from "react";

const Results = props => {
  let codePercentile = props.percentiles[0];
  let formattedCodePercentile = (codePercentile * 100).toFixed(1)
  let commPercentile = props.percentiles[1];
  let formattedCommPercentile = (commPercentile * 100).toFixed(1)

  return (
    <div id='results'>
      <h2>Your Percentiles:</h2>
      <div className='row'>
        <div className='col-lg-6'>
          <h3>Code Percentile:</h3>
          <h1>{formattedCodePercentile}%</h1>
          <h5>You code better than {formattedCodePercentile}% of other similar candidates.</h5>
        </div>
        <div className='col-lg-6'>
          <h3>Communication Percentile:</h3>
          <h1>{(commPercentile * 100).toFixed(1)}%</h1>
          <h5>You communicate better than {formattedCommPercentile}% of other similar candidates.</h5>
        </div>
      </div>
      <div id='endnote'>*Note: Your percentile is calculated by comparing you to other candidates with similar titles and at similar companies.</div>
    </div>
  );
};

export default Results;
