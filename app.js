const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addBtn(num) {
      this.counter = this.counter + num;
    },
    reduceBtn(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
