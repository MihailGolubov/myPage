const works = {
  namespaced: true,
  state: {
    works: []
  },
  mutations: {
    addNewWork: (state, work) => state.works.push(work),
    fillUpWorks: (state, works) => (state.works = works),
    editWork: (state, editedWork) =>
      (state.works = state.works.map(work => {
        return work.id === editedWork.id ? editedWork : work;
      }))
  },
  actions: {
    add({ commit }, work) {
      const formData = new FormData();

      Object.keys(work).forEach(key => {
        const value = work[key];
        formData.append(key, value);
      });

      this.$axios.post("/works", formData).then(response => {
        commit("addNewWork", response.data);
      });
    },
    edit({ commit }, work) {
      const formData = new FormData();

      Object.keys(work).forEach(key => {
        const value = work[key];
        formData.append(key, value);
      });

      this.$axios.post(`/works/${work.id}`, formData).then(response => {
        commit("editWork", response.data.work);
      });
    },
    fetch({ commit }) {
      this.$axios.get("/works/1").then(response => {
        commit("fillUpWorks", response.data);
      });
    }
  }
};

export default works;
