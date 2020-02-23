import React from 'react';
import styled from 'styled-components';

const Navbar = props => {
  const { items } = props;
  return (
    <NavWrapper>
      <h2>List de compras</h2>
      <p>
        <span className='count'>{items.length}</span> itens
      </p>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  .count {
    font-style: italic;
    font-size: 2.4em;
  }
`;

export default Navbar;
