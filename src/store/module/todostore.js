import { SET_TODO_LIST } from "@/store/mutation-types";

const state = {
  todoList: [
    {
      name: "Learn Vue",
      discription: "Learn Vue from vuejs website",
      id: 1,
    },
    {
      name: "Fix Issue 1",
      discription: "Fix Issue 1 already deployed",
      id: 2,
    },
  ],
};

const getters = {
  getToDoList: (state) => state.todoList,
};

const mutations = {
  [SET_TODO_LIST](state, payload) {
    state.todoList = payload;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
