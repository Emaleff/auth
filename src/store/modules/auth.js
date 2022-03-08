
const Auth = {
  state() {
    return {
      tkn: null,
      email: null,
    };
  },
  getters: {
    checkAuth(state) {
      if (state.tkn) {
        return true;
      } else return false;
    },
    getEmail(state) {
      return state.email;
    },
  },
  actions: {
    checkTkn(ctx) {
      if (localStorage.getItem("tkn")) {
        ctx.commit("updateTkn", localStorage.getItem("tkn"));
        ctx.commit("updateMail", localStorage.getItem("email"));
        return true;
      }
    },

  },
  mutations: {
    updateTkn(state, tkn) {
      state.tkn = tkn;
    },
    updateMail(state, email) {
      state.email = email;
    },
  },
};

export default Auth;
