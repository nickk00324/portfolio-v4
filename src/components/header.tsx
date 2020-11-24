import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Popup from "reactjs-popup"
import hamburger from "../images/hamburger.svg"
import cross from "../images/cross.svg"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

const Logo = styled.div`
  font-family: "Karla", sans-serif;
  font-weight: 700;
  color: ${props => props.theme.pink};
  font-size: 48px;
  padding-right: 20px;

  @media only screen and (max-width: 1000px) {
    font-size: 36px;
  }
`

const StyledPopup = styled(Popup)``

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 300px;

  @media only screen and (max-width: 1000px) {
    width: 230px;
  }
  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    display: none;
  }
`

const BurgerButton = styled.nav`
  display: none;

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    display: initial;
    img {
      width: 30px;
    }
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => props.theme.pink};
  a {
    margin: 5px 0;
    color: antiquewhite;

    &:hover {
      color: antiquewhite;
    }
  }
`

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo>nick kochornswasdi</Logo>
      </Link>
      <Nav>
        <Link to="/work">work</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </Nav>
      <StyledPopup
        trigger={open => (
          <BurgerButton>
            {open ? <img src={cross} /> : <img src={hamburger} />}
          </BurgerButton>
        )}
        position="bottom right"
      >
        <Menu>
          <Link to="/work">work</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </Menu>
      </StyledPopup>
    </Container>
  )
}

export default Header
