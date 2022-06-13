//import { FaBars } from "react-icons";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  

export const NavBox = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height:10vmin;
  width: calc(100vw-10px);
  z-index: 12;
  &:hover > Nav {
    transform: translateY(0vmin);
  }
`;

export const Nav = styled.nav`
  background: #101010;
  height: 5vmin;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  transform: translateY(-5.2vmin);
  transition: 0.2s;
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex; 
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
    background: #202020;
  }
  &:hover {
    color:#606060;
  }
`;
  
export const Bars = styled.div`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;