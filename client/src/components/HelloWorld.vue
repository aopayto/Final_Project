<template>
  <div>
    <h1>Random video generator</h1>
    <button @click="generate">Generate</button>
  </div>
</template>

<script>
import generate from '@/services/generate'
export default {
  data () {
    return {
    }
  },
  methods: {
    generate () {
      let url = new URL(generate.generate)
      console.log(url)
      window.location.href = (url)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
