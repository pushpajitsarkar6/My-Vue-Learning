var one = new Vue({
      el: '#vue-app-14-1',
      data: {
            name: "Vue.js instance 1"
      },
      methods: {
            greet: function () {
                  return "Hello from app one.";
            }
      }
});

var two = new Vue({
      el: '#vue-app-14-2',
      data: {
            name: "Vue.js Instance 2"
      },
      methods: {
            greet: function () {
                  return "Hello from app two.";
            },
            changeTitle: function () {
                  one.name = "Title changed of app one from app two.";
            }
      }
});

two.name = "Title of app two changed from outside."