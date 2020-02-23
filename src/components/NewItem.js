import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

class NewItem extends Component {
  state = {
    title: '',
    type: ''
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addItem(this.state.title, this.state.type);
    this.setState({ title: '', type: '' });
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <NewItemWrapper>
        <h2>Adicionar item</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='title'
            placeholder='feijão, arroz, leite...'
            onChange={this.handleInput}
            value={this.state.title}
          />

          <input
            type='text'
            name='type'
            placeholder='tipo de item...'
            onChange={this.handleInput}
            value={this.state.type}
          />

          <button className='add-item'>
            <FaPlus />
          </button>
        </form>
      </NewItemWrapper>
    );
  }
}

const NewItemWrapper = styled.div`
  form {
    display: flex;
    flex-direction: row;
    margin: 3.2em auto;
  }

  input {
    width: 47%;
    height: 3em;
    border: none;
    background-color: #6b5799;
    margin: 1px;
    padding-left: 1em;
    color: #e7e7e7;
    border-radius: 5px;
    font-size: 1.6em;
    color: inherit;
    outline-style: none;
  }
  input:last-child {
    border-radius: 0 !important;
  }
  input::placeholder {
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.9em;
  }

  button {
    width: 6%;
    border: none;
    background-color: #6b5799;
    margin: 1px;
    border-radius: 5px;
    font-size: 1.6em;
    color: inherit;
    font-size: 1.2em;
    transition: all ease 0.4s;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;
export default NewItem;
