import React from 'react';
import _ from 'lodash';

function Presentation(props) {
  const results = props.dataReady[1].map((result, index) => {
    const keyUnique = _.uniqueId('key_');
    return (
      <a
        href={props.dataReady[3][index]}
        key={keyUnique}
        className="single-result"
        target="_blank"
        rel="noopener noreferrer"
      >
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
}

export default Presentation;
