const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addBtn() {
      this.counter++;
    },
    reduceBtn() {
      this.counter--;
    },
  },
});

app.mount("#events");
