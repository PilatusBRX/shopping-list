import React, { Component } from 'react';
import ListItem from './ListItem';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';

class List extends Component {
  render() {
    return (
      <div>
        <h2>Lista de compras</h2>
        <ul className='list'>
          <FlipMove duration={500} ease-in-out='true'>
            {this.props.items.map(item => {
              return (
                <ListItem
                  item={item}
                  key={item.id}
                  removeItem={this.props.removeItem}
                  markDone={this.props.markDone}
                />
              );
            })}
          </FlipMove>
        </ul>
      </div>
    );
  }
}
List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
