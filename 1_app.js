// Create a new Vue instance to control the app
new Vue({
      // Mount the Vue instance to the element with id "vue-controlled"
      el: "#vue-controlled",
      // Define the reactive data properties
      data: {
            name: "Deep",
            job: "Student"
      },
      methods: {
            greet: function (time) {
                  // this.data.name    // no need to write data, we can directly access the name variable using this.name
                  return 'Good ' + time + ' ' + this.name;
            }
      }
})