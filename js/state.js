class State {
  constructor(defaultState) {
    this.state = defaultState;
    this.listeneres = [];
  }

  setState(state) {
    this.state = state;
    this.listeneres.map(listener => listener());
  }

  addListener(listenerFunction) {
    if(typeof listenerFunction !== 'function') {
      throw new Error('Listener is not a function');
    }
    this.listeneres.push(listenerFunction);
  }
}
