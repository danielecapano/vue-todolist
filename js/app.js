const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        {
          text: "Fare i compiti",
          done: false,
        },
        {
          text: "Fare la spesa",
          done: true,
        },
        {
          text: "Fare il bucato",
          done: false,
        },
      ],
    };
  },
  mounted() {
    console.log("VUE OK");
  },
}).mount("#app");
