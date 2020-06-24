import React, { useState, useContext } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { createBusiness } from "../../../util/HPserver";
import { AuthContext } from "../../../context/auth";

export const CreateBusiness = () => {
  const { user } = useContext(AuthContext);
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  function validateForm() {
    return businessName.length > 0 && email.length > 0;
  }

  return (
    <Container>
      <h1>Start a business.</h1>
      <FormGroup controlId="businessName">
        <FormLabel>Business Name</FormLabel>
        <FormControl
          autoFocus
          type="businessName"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </FormGroup>

      <FormGroup controlId="email">
        <FormLabel>Email</FormLabel>
        <FormControl
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </FormGroup>

      <Button
        block
        disabled={!validateForm()}
        onClick={async () => {
          const businessInfo = {
            businessName: businessName,
            email: email,
          };
          const business = await createBusiness(businessInfo, user);
          if (business) {
            alert("Business Successfully Created.");
          } else {
            alert("Something went wrong...");
          }
        }}
      >
        Create Business
      </Button>
    </Container>
  );
};
