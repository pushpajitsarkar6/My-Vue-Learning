new Vue({
      el: "#Joining-Vue",
      data: {
            name: "",
            age: "",
      },
      methods: {
            logName: function () {
                  this.name = this.name.toUpperCase();
            },
            logAge: function () {
                  this.age = this.age - 2004;
            }
      }
})