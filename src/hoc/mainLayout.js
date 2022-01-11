import React from "react";
import { Container, ToastContainer } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = (props) => {
  return (
    <Container ClassName="mt-5 mb-5">
      {props.children}
      <ToastContainer />
    </Container>
  );
};
export default MainLayout;
