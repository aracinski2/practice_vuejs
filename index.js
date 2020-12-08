var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Alex",
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      message2: 'Hello Vue.js!',
      message3: 'Hello Vue!'
    };
  },
  methods: {
    reverseMessage: function () {
      this.message2 = this.message2.split('').reverse().join('')
    },
    changeMessage: function () {
      this.message = "Hello from Chicago";
    }
  },

});