const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    addBtn(num) {
      this.counter = this.counter + num;
    },
    reduceBtn(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
