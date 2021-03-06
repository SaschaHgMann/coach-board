import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Buttons";

function ButtonLink({ children, to, ...other }) {
  return (
    <Link to={to}>
      <Button {...other}>{children}</Button>
    </Link>
  );
}

export default ButtonLink;
