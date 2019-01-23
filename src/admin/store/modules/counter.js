const counter = {
  namespaced: true,
  state: {
    resetTime: 60,
    timeInMs: 0,
    interval: 0
  },
  actions: {
    countDown({ state }) {
      state.timeInMs = state.resetTime;

      if (state.interval !== 0) {
        clearInterval(state.interval);
      }

      state.interval = setInterval(() => {
        state.timeInMs = state.timeInMs - 1;
      }, 1000);
    }
  }
};

export default counter;
