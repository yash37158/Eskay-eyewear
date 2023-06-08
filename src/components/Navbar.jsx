import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { NavDropdown, Container} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import userRedux from "../redux/userRedux";


const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center; 
`;


const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h2`
  font-weight: bold;
  ${mobile({ fontSize: "10px", justifyContent: "center" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {

  const quantity = useSelector(state=> state.cart.quantity);
  const userLogin  = useSelector((state) => state.user);
  const {currentUser} = userLogin;
  const history = useHistory();

  // Route to register 
 const routeRegister = () => {
  history.push("/register");
 }

//  Route to Login
const routeLogin = () => {
  history.push("/login");
}
// Route to Cart
const routeCart = () => {
  history.push("/cart");
}

// Route to Home
const routeHome = () => {
  history.push("/");
}
// REMOVE in Production
console.log(quantity);





  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>IN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={routeHome}>ESKAY EYEWEAR.</Logo>
        </Center>
        <Right path>

          { currentUser ? (
            <NavDropdown title={currentUser.username}>
                <NavDropdown.Item>
                Profile
                </NavDropdown.Item>
                <NavDropdown.Item >
                Logout
                </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
            <MenuItem onClick={routeLogin}>SIGN IN</MenuItem>
            <MenuItem onClick={routeRegister}>REGISTER</MenuItem>
            </>
          ) }
          <MenuItem onClick={routeCart}>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;