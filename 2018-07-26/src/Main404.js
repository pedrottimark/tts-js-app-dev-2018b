import React from 'react';
import DocumentTitle from 'react-document-title';

import src404 from './404.svg';
import {title} from './content';

const Main404 = () => (
  <DocumentTitle title={`404 ${title}`}>
     <main className="unexpected">
      <section>
        <img src={src404} alt="404 Not Found"/>
      </section>
    </main>
  </DocumentTitle>
);

export default Main404;
