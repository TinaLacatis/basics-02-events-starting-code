const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
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
