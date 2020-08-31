import { loginToImgurAPI } from "@/services/imgurApi";
import { router } from "@/main";

import qs from "qs";

const tokenKey = "imgur_token";

// ---- State ----
const state = {
  token: window.localStorage.getItem(tokenKey),
};

// ---- Getters ----
const getters = {
  isLoggedIn: (state) => !!state.token,
};

// ---- Mutations ----
const mutations = {
  setToken: (state, token) => (state.token = token),
};

// ---- Actions ----
const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem(tokenKey);
  },
  login: () => loginToImgurAPI(),
  finalizeLogin: ({ commit }, hash) => {
    const parsedHash = qs.parse(hash.replace("#", ""));
    const accessToken = parsedHash.access_token;
    commit("setToken", accessToken);
    window.localStorage.setItem(tokenKey, accessToken);
    return router.push("/");
  },
};

export default { state, getters, mutations, actions };
