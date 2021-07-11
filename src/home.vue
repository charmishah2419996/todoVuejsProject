<template>
  <div class="homecontainer">
    <input
      v-model="toDoname"
      placeholder="Enter To Do Name"
      class="inputText"
    />
    <button type="button" @click="createTodo" :disabled="!toDoname" class="btn">
      CREATE
    </button>
    <button type="button" @click="deleteTodoList" class="btn">
      REMOVE SELECTED
    </button>
    <ul class="listUl">
      <li
        v-for="(value, index) in toDoList"
        :key="index"
        style="cursor: pointer"
      >
        <input
          type="checkbox"
          id="jack"
          :value="value.id"
          v-model="checkedIds"
        />
        <router-link :to="`${'/todopage/' + value.id}`">{{
          value.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { SET_TODO_LIST } from "@/store/mutation-types";
import { mapGetters } from "vuex";

export default {
  name: "App",

  data: function () {
    return {
      msg: "child compo",
      toDoList: [],
      allRoutes: "",
      toDoCurId: 3,
      toDoname: null,
      checkedIds: [],
    };
  },
  created() {
    this.toDoList = this.getToDoList;
  },
  watch: {
    getToDoList(newVal) {
      this.toDoList = newVal;
    },
  },
  computed: {
    ...mapGetters("todostore", ["getToDoList"]),
  },

  methods: {
    ...mapMutations("todostore", [SET_TODO_LIST]),
    genrateNewId() {
      return this.toDoCurId++;
    },
    createTodo() {
      this.toDoList.push({
        id: this.genrateNewId(),
        name: this.toDoname,
        discription: "",
      });
      this.toDoname = null;
      this[SET_TODO_LIST](this.toDoList);
    },
    deleteTodoList() {
      this[SET_TODO_LIST](this.getToDoList.filter(this.filterList));
    },
    filterList(value) {
      return !this.checkedIds.includes(value.id);
    },
  },
};
</script>

<style>
.homecontainer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.inputText {
  padding: 10px;
  border: 2px solid black;
}
.btn {
  all: unset;
  color: purple;
  cursor: pointer;
  margin: 0 10px;
}
.listUl {
  list-style: none;
}
</style>
