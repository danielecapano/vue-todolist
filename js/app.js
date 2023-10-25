const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [],

      indexTask: 0,

      inputTask: "",
    };
  },

  methods: {
    addTask() {
      const item = {
        text: "",
        done: false,
      };
      item.text = this.inputTask;

      if (this.inputTask !== "") {
        this.todos.unshift(item);
      }
      this.inputTask = "";
      console.log(this.todos);
    },
    taskChecked(indexTask) {
      if (this.todos[indexTask].done === false) {
        this.todos[indexTask].done = true;
      } else {
        this.todos[indexTask].done = false;
      }
    },
  },
  mounted() {
    console.log("VUE OK");
  },
}).mount("#app");
