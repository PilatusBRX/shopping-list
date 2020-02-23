import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import List from './components/List';
import NewItem from './components/NewItem';
import uuid from 'uuid/v4';

class App extends Component {
  state = {
    items: [
      { title: 'feijão', type: 'cereal', id: uuid(), done: false },
      { title: 'leite', type: 'bebida', id: uuid(), done: true },
      { title: 'toalha', type: 'banho', id: uuid(), done: false }
    ]
  };

  componentDidMount() {
    const items = localStorage.getItem('items');
    if (items) {
      this.setState({ items: JSON.parse(items) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.items !== this.state.items) {
      localStorage.setItem('items', JSON.stringify(this.state.items));
    }
  }

  addItem = (title, type) => {
    const newItem = {
      id: uuid(),
      title,
      type,
      done: false
    };
    this.setState({ items: [...this.state.items, newItem] });
  };

  removeItem = id => {
    this.setState({
      items: [...this.state.items.filter(item => item.id !== id)]
    });
  };

  markDone = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      })
    });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Navbar items={this.state.items} />
        </header>
        <main className='App-main'>
          <NewItem addItem={this.addItem} />
          <List
            items={this.state.items}
            removeItem={this.removeItem}
            markDone={this.markDone}
          />
        </main>
      </div>
    );
  }
}

export default App;
