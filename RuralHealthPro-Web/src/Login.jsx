import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f4f4f4;
`;

const LoginBox = styled.div`
  width: 350px;
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const LogoSection = styled.div`
  margin-bottom: 0px;
`;

const Logo = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 5px;
`;

const Title = styled.h2`
  margin-top: -35px;
  font-size: 25px;
  color: black;
  margin-bottom: 5px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
  color: black;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  color: black;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
`;

const Option = styled.option`
  font-size: 16px;
`;

const Input = styled.input`
  width: 95%;
  padding: 8px;
  font-size: 16px;
  color: black;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #26C6DA;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #00BCD4;
  }
`;

const RuralHealthLogin = () => {
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <LoginBox>
        <LogoSection>
          <Logo src="/RHnobg.png" alt="Rural Health Logo" />
        </LogoSection>
        <Title>SIGN IN</Title>
        <InputGroup>
          <Label htmlFor="user-type">User Type</Label>
          <Select
            id="user-type"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <Option value="" disabled selected>Log in As</Option>
            <Option value="Staff-Admin">Staff - Admin</Option>
            <Option value="Staff-FrontDesk">Staff - Front Desk</Option>
            <Option value="Doctor-Physician">Doctor - Physician</Option>
            <Option value="Specialist-Dentist">Specialist - Dentist</Option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </InputGroup>
        <LoginButton>Login</LoginButton>
      </LoginBox>
    </Container>
  );
};

export default RuralHealthLogin;
