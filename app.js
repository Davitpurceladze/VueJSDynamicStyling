const app = Vue.createApp({
  data() {
    return {
      textValue1: "",
      switch: false,
      textValue2: "",
    };
  },
  computed: {
    switched() {
      if (this.switch === true) {
        return { hidden: this.switch };
      }
    },
    boxClasses() {
      if (this.textValue1 === "user1") {
        return { user1: this.textValue1 };
      } else if (this.textValue1 === "user2") {
        return { user2: this.textValue1 };
      }
    },
  },
  methods: {
    getTextValue2(event) {
      this.textValue2 = event.target.value;
    },
    getTextValue1(event) {
      this.textValue1 = event.target.value;
    },
    switchClasses() {
      this.switch = !this.switch;
    },
  },
});

app.mount("#assignment");
