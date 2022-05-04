import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Colors from '../../helpers/Colors';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &.active {
    color: ${Colors.default};
  }
  &:hover {
    color: ${Colors.default};
  }
`;

export const Nav = styled.div`
  padding: 0 20px 0 20px;
  border: 1px solid #dadce0;
  min-height: 70px;
  width: 100vw;
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  text-align: center;
  font-size: 1em;
`;

export const UserDetails = styled.div`
  margin-right: auto;
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Ul = styled.ul`
  margin: auto;
  width: 100%;
  max-width: 1000px;
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: right;
  height: 100%;
  list-style: none;
  padding: 0;
`;

export const Span = styled.span`
  font-size: 0.9em;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const Icon = styled.i`
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
