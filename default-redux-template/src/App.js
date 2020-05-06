import React from 'react';
import JSONTree from 'react-json-tree';

const map = new Map();
map.set("key1", 1);
map.set("key2", 2);

const json = {
  thisIsAMap: map,
};

class App extends React.Component {
  state = {
    expanded: false,
  }

  render() {
    return (
      <>
        <button onClick={() => this.setState((prevState) => ({ expanded: !prevState.expanded }))}>
          Test
        </button>
        <Tree expand={this.state.expanded} />
      </>
    );
  }
}

function Tree(props) {
  return <JSONTree data={json} shouldExpandNode={() => props.expand} />;
}

export default App;
