var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
      number1: 0,
      number2: 0,
      number3: 0,
      product: 0
    };
  },
  methods: {
    computeProduct: function () {
      // console.log(this.number1);
      // console.log(this.number2);
      // console.log(this.number3);
      console.log(this.product = this.number1 * this.number2 * this.number3);
    },
    computeDivision: function () {
      console.log(this.product = this.number1 * this.number2 / this.number3);
    }
  }
});