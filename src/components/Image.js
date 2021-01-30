import React from "react";

const Image = ({ url, title }) => (
  <li>
    <img alt={title} src={url} />
  </li>
);

export default Image;
