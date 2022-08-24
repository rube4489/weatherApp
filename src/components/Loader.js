import React from "react";
import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div className="wrapper-loader">
      <Spinner type="grow" className="size-loader m-1" color="primary">
        Loading...
      </Spinner>
      <Spinner type="grow" className="size-loader m-1" color="primary">
        Loading...
      </Spinner>
      <Spinner type="grow" className="size-loader m-1" color="primary">
        Loading...
      </Spinner>
    </div>
  );
};

export default Loader;
