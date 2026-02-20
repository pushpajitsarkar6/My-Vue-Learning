// Create new Vue instance
new Vue({
      // Element to mount Vue on
      el: "#connecting-Vue",
      // Reactive data
      data: {
            // Current age
            age: 22,
            // Mouse X coordinate
            x: 0,
            // Mouse Y coordinate
            y: 0,
      },
      methods: {
            // Method to add to age
            addMethod: function (inc) {
                  this.age += inc;
            },
            // Method to subtract from age
            subMethod: function (dec) {
                  this.age -= dec;
            },
            // Method to update mouse coordinates
            updateXY: function (event) {
                  // Set x to mouse offset X
                  this.x = event.offsetX;
                  // Set y to mouse offset Y
                  this.y = event.offsetY;
            },
      },

});