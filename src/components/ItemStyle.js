import styled from 'styled-components';

export const ItemWrapper = styled.div`
  .list-item {
    font-size: 1.8em;
    list-style: none;
    background-color: #6b5799;
    color: #e7e7e7;
    border-radius: 5px;
    height: 3em;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 1em;
    justify-content: space-between;
  }
  .float-left {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .float-left p {
    padding: 0.45em;
    padding-left: 1.6em;
    font-size: 1.1em;
    text-transform: lowercase;
    transition: all ease-in-out 0.2s;
  }
  .float-left span {
    margin-left: 0.5em;
  }

  .float-left code {
    padding: 0.45em;
    border-radius: 8px;
    font-size: 0.95em;
    color: #b3b1b1;
    text-transform: lowercase;
  }

  .float-right {
    background-color: rgba(0, 0, 0, 0.15);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all ease 0.4s;
  }

  .float-right .remove-item {
    padding: 1em;
    font-size: 0.75em;
    transition: all ease 0.4s;
  }

  .float-right .remove-item:hover {
    border: none;
    cursor: pointer;
    color: #c0c0c0;
  }

  /* custom checkbox */
`;
