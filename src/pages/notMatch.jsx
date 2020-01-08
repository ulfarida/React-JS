
import React from "react";
import Header from "../components/header";

const NotMatch = props => {
  return (
    <div>
      <Header {...props} />
  <div className="auth text-center">Page : {window.location.pathname} are Not Found</div>
    </div>
  );
};

export default NotMatch;