// Create a new Vue instance to control the app
new Vue({
      // Mount the Vue instance to the element with id "vue-controlled"
      el: "#vue-controlled",
      // Define the reactive data properties
      data: {
            name: "Deep",
            job: "Student",
            courseName: "Vue JS 2 Tutorial",
            website: "https://medium.com/@hyejunglim/summary-of-vue-js2-tutorial-by-net-ninja-part-1-of-3-402fec3a77ff",
            websiteTag: '<a href="https://youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&si=mEyDhxBnE9z_ClCE" target="_blank">That YT course we learning from.</a>'
      },
      methods: {
            greet: function (time) {
                  // this.data.name    // no need to write data, we can directly access the name variable using this.name
                  return 'Good ' + time + ' ' + this.name;
            }
      }
})