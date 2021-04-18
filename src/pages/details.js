import React from "react";
import Header from "../header";
import Body from "../body";

import { useParams } from "react-router-dom";

function Details() {
  let { email } = useParams();
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default Details;
