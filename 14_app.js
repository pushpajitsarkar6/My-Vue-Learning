var nameData = {        // external data reffed by component
      name: "Deep"
}


Vue.component('greeting', {      // global component       // its `Vue` not `vue`
      template: '<p>Hello i am {{name}}!  <button v-on:click="changeName">Change name</button></p>',

      data: function () {       // with internal data   // effects only a particular instance of component
            return {
                  name: "Deep"
            }
      },
      // data: function () {       // with external data   // effects all instances of component
      //       return nameData;
      // },


      methods: {
            changeName: function () {
                  this.name = "Pushpajit";
            }
      }

})


var one = new Vue({
      el: '#vue-app-14-1',

});

var two = new Vue({
      el: '#vue-app-14-2',

});
