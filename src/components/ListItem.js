import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import { ItemWrapper } from './ItemStyle';
import PropTypes from 'prop-types';

class Item extends Component {
  doneStyle = () => {
    const { done } = this.props.item;
    return {
      textDecoration: done ? 'line-through' : 'none',
      fontStyle: done ? 'italic' : 'inherit',
      color: done ? '#b3b1b1' : ''
    };
  };

  render() {
    const { id, title, type } = this.props.item;
    return (
      <ItemWrapper>
        <li className='list-item'>
          <div className='float-left'>
            <p style={this.doneStyle()}>
              <input
               checked={this.props.item.done}
                type='checkbox'
                id='check'
                onChange={this.props.markDone.bind(this, id)}
                className='check'
              />
              <span> {title}</span>
            </p>
            <code> {type}</code>
          </div>
          <div className='float-right'>
            <span className='remove-item'>
              <FaTrash onClick={this.props.removeItem.bind(this, id)} />
            </span>
          </div>
        </li>
      </ItemWrapper>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired
};

export default Item;
