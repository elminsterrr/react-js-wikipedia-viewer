import React from 'react';

const Presentation = (props) => {
  // just to determine array length^
  const results = props.dataReady[1].map((result, index) => {
    return (
      <a href={props.dataReady[3][index]} className="single-result" key={index} target="_blank">
        <h3>{props.dataReady[1][index]}</h3>
        <p>{props.dataReady[2][index]}</p>
      </a>
    );
  });

  return (
    <div>
      <div>{results}</div>
    </div>
  );
};

export default Presentation;
