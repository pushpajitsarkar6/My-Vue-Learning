new Vue({
      el: '#Vue-app-10',
      data: {
            available: false,
            nearby: false
      },
      methods: {

      },
      computed: {
            compClass: function () {
                  return {
                        available: this.available,
                        nearby: this.nearby,
                  }
            }
      }
})