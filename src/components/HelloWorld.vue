<template>
  <div class="hello">
   <h1>{{getCount}}</h1>
   <button @click="dem()">Click</button>
  </div>
</template>

<script>

import {mapMutations} from 'vuex'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  data() {
    return {

    }
  },
  methods: {
    dem() {
      this.setCount(6);
    },
    ...mapMutations(['increment']),
    ...mapActions(['setCount']),
    
  },
  computed: {
    ...mapGetters(['getCount']),
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
