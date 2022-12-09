export default function Store(storeName) {
  const store = storeName;
  let currentState = null;

  function getState() {
    const data = window.localStorage.getItem(store);
    if (data) {
      currentState = JSON.parse(data);
    }

    return currentState;
  }

  function setState(data) {
    window.localStorage.setItem(
      store,
      JSON.stringify(Object.assign({}, currentState, data))
    );
  }

  return {
    getState,
    setState,
  };
}
