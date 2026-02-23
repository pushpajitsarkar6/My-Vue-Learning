new Vue({
      el: '#vue-app-16',
      data: {
            output: ""

      },
      methods: {
            readRefs: function () {
                  console.log(this.$refs.ref2_of_div.innerText);
                  console.log(this.$refs.ref_of_input.value);
                  this.output = this.$refs.ref_of_input.value;
            }
      },
})