new Vue({
      el: '#vue-app-13',
      data: {
            health: 100,
            ended: false
      },
      methods: {
            punch: function () {
                  this.health -= 10;
                  // console.log(this.health);
                  if (this.health <= 0) {
                        this.ended = true;
                        // this.restart();
                  }
            },
            restart: function () {
                  this.health = 100;
                  // console.log(this.health);
                  this.ended = false;
            }

      }
})