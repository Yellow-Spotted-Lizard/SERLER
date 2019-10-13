import React, { useState } from 'react';

function useJsonState(init) {
  const [state, setState] = useState(() => 
    ({ref: init instanceof Function ? init() : init}));
  return [
    state.ref, 
    function() {
      setState({ref: state.ref});
      return state.ref;
    }
  ]
}

export {
  useJsonState,
};