import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abromov',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onSearchChange(event){
    this.setState({searchTerm: event.target.value});
  }

  render() {
    const pageTitle = "Hacker News";
    const { searchTerm, list } = this.state;

    return (
      <div className="App">
        <h2>{pageTitle}</h2>
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        >
          Search
        </Search>
        <Table
          list={list}
          pattern={searchTerm}
          onChange={this.onDismiss}
        />
      </div>
    );
  }
}

const Search = ({ value, onChange, children }) => {
  return (
    <form>
    {children} <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>
  );
}

const Table = ({ list, pattern, onDismiss }) => {
  const isSearched = (searchTerm) => (item) =>
    !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <div>
      { list.filter(isSearched(pattern)).map(item =>
        <div key={item.objectID}>
          <span><a href={item.url}>{item.title}</a></span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span>
            <Button
              onClick={() => onDismiss(item.objectID)}
            >
              Dismiss
            </Button>
          </span>
        </div>
      )}
    </div>
  );
}

const Button = ({ onClick, className = '', children }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
}

export default App;
