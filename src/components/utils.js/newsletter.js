import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addNewsLetter } from "../../store/actions";
import { addNewsletter } from "../../api";

const NewsLetter = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const textInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    dispatch(addNewsletter({ email: value }));
  };

  return (
    <>
      <div className="newsletter_container">
        <h1>Join our newsletter</h1>
        <div className="form">
          <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Example: youremail@gmail.com"
              />
            </Form.Group>
            <Button variant="primary" tpye="submit">
              Add me to the List
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
