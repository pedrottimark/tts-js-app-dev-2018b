import React from 'react';
import DocumentTitle from 'react-document-title';

import ExternalLink from './ExternalLink';

import {title} from './content';

const MainHome = () => (
  <DocumentTitle title={title}>
    <main className="home">
      <section>
        <img
          alt="Healthy Eating Plate"
          src="https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2012/09/HEPJan2015.jpg"
        />
        <aside>
          <p>Copyright © 2011 Harvard University</p>
          <p>For more information about <ExternalLink to="https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/">The Healthy Eating Plate</ExternalLink>, please see</p>
          <p><ExternalLink to="https://www.hsph.harvard.edu/nutritionsource/">The Nutrition Source</ExternalLink>, Department of Nutrition, Harvard School of Public Health, and</p>
          <p><ExternalLink to="https://www.health.harvard.edu">Harvard Health Publications</ExternalLink></p>
        </aside>
      </section>
    </main>
  </DocumentTitle>
);

export default MainHome;
