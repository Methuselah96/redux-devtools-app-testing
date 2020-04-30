import React from 'react';
import JSONTree from 'react-json-tree';

const map = new Map();
map.set("key1", 1);
map.set("key2", 2);

const json = {
  thisIsAMap: map,
};

function App() {
  return (
    <JSONTree data={json} />
  );
}

export default App;
