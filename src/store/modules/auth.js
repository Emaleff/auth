import axios from "axios";
import router from "../../router";

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
    logout(ctx) {
      ctx.commit("updateTkn", null);
      localStorage.removeItem("tkn");
      ctx.commit("updateMail", null);
      localStorage.removeItem("email");

      router.push("/");
    },
    async login(ctx, { email, password }) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`;
        const { data } = await axios.post(url, {
          email: email,
          password: password,
          returnSecureToken: true,
        });
        ctx.commit("updateTkn", data.idToken);
        localStorage.setItem("tkn", data.idToken);
        ctx.commit("updateMail", data.email);
        localStorage.setItem("email", data.email);
      } catch (e) {
        alert(e.response.data.error.message);
      }
    },
    async registration(ctx, { email, password }) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FB_KEY}`;
        const { data } = await axios.post(url, {
          email: email,
          password: password,
          returnSecureToken: true,
        });
        ctx.commit("updateTkn", data.idToken);
        localStorage.setItem("tkn", data.idToken);
        ctx.commit("updateMail", data.email);
        localStorage.setItem("email", data.email);
      } catch (e) {
        alert(e.response.data.error.message);
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
