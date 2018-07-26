import React from 'react';

const ExternalLink = ({children, to}) => (
  <a href={to} target="_blank">{children}</a>
);

export default ExternalLink;
