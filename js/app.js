const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [],

      inputTask: "",
      classList: "small hidden",
    };
  },

  methods: {
    addTask() {
      const item = {
        text: this.inputTask.trim(),
        done: false,
      };
      //   item.text = this.inputTask.trim();
      console.log(item.text.length);

      if (item.text.length >= 5) {
        this.classList = "small hidden";
        this.todos.unshift(item);
      } else {
        this.classList = "small";
      }
      this.inputTask = "";
    },
    taskChecked(indexTask) {
      if (this.todos[indexTask].done === false) {
        this.todos[indexTask].done = true;
      } else {
        this.todos[indexTask].done = false;
      }
    },
    removeTask(indexTask) {
      this.todos.splice(indexTask, 1);
    },
  },
  mounted() {
    console.log("VUE OK");
  },
}).mount("#app");
