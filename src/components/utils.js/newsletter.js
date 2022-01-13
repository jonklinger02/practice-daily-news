import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "./tools";
import { addNewsLetter } from "../../store/actions";

const NewsLetter = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const textInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    console.log(value);
    dispatch(addNewsLetter({ email: value }));
  };

  useEffect(() => {
    if (userData.NewsLetter) {
      if (userData.NewsLetter === "added") {
        showToast("SUCCESS", "Thanking you for subscribing");
        textInput.current.value = "";
      } else {
        showToast("ERROR", "Thanking you for trying, but try again");
        textInput.current.value = "";
      }
    } else {
    }
  }, [userData]);

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
                name="email"
                ref={textInput}
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
