import React from 'react';

import SubmitForm from './SubmitForm';

export default class Layout extends React.Component {

  render() {

    return(
      
      <section className="cover">
        <div className="cover-caption">
          <SubmitForm />
        </div>
      </section>
      
    );
  }
}