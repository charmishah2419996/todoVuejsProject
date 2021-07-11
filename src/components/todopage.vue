<template>
  <div class="todocontainer">
    <button type="button" @click="backToList" class="btn">BACK</button>
    <div v-if="currentObj != null">
      <div>
        <h3>Name</h3>
        <input
          v-model="currentObj.name"
          placeholder="Enter To Do Name"
          class="inputText"
        />
      </div>
      <div>
        <h3>Discription</h3>
        <textarea
          v-model="currentObj.discription"
          placeholder="Enter To Do Discription"
          class="inputText"
        />
        <div>
          <button type="button" @click="updateToList" class="btn">
            UPDATE
          </button>
          <button type="button" @click="deleteTodo" class="btn btnDelete">
            DELETE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { SET_TODO_LIST } from "@/store/mutation-types";
export default {
  name: "todopage",

  data: () => ({
    chart: null,
    currentObj: null,
    currentVuexObj: null,
  }),

  watch: {},
  created() {
    this.getToDoList.forEach((toDoItem) => {
      if (toDoItem.id == this.$route.params.id) {
        this.currentObj = Object.assign({}, toDoItem);
      }
    });
  },
  methods: {
    ...mapMutations("todostore", [SET_TODO_LIST]),
    updateToList() {
      this.currentVuexObj = this.getToDoList;
      this.currentVuexObj.forEach((toDoItem) => {
        if (toDoItem.id == this.$route.params.id) {
          toDoItem.name = this.currentObj.name;
          toDoItem.discription = this.currentObj.discription;
        }
      });

      this[SET_TODO_LIST](this.currentVuexObj);
      this.backToList();
    },
    backToList() {
      this.$router.push("/");
    },
    deleteTodo() {
      this.getToDoList.splice(this.getToDoList.indexOf(this.currentObj), 1);
      this.backToList();
    },
  },
  computed: {
    ...mapGetters("todostore", ["getToDoList"]),
  },
};
</script>

<style scoped>
.todocontainer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.inputText {
  padding: 10px;
  border: 2px solid black;
  width: 500px;
}
.btn {
  all: unset;
  color: purple;
  cursor: pointer;
  margin: 20px 10px 10px 0;
}
.btnDelete {
  color: red;
}
</style>


