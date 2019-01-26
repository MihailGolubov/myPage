const user = {
  namespaced: true,
  state: {
    isAuth: false
  },
  mutations: {
    authorize: state => (state.isAuth = true),
    unAuthorize: state => (state.isAuth = false)
  },
  actions: {
    logout({commit}) {
      commit('unAuthorize');
      localStorage.removeItem('token')
      window.location.reload();
    }
  }
};

export default user;
