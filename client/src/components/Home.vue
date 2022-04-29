
<template>
  <div>
  <table style="width:100%">
  <tr>
  <td>
    <h1>Random YouTube Video Generator</h1>
    <button class='button button1' @click='generate'>Generate</button>
  </td>
  <td>
    <h1>Random Amazon Listing Generator</h1>
    <button class='button button2' @click='aznGenerate'>Generate</button>
  </td>
  </tr>
</table>
  </div>
</template>

<script>
import genamazon from '@/services/genamazon'
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
      window.open(url, '_blank')
      window.location.reload()
    },
    aznGenerate () {
      let aznUrl = new URL(genamazon.genamazon)
      console.log(aznUrl)
      window.open(aznUrl, '_blank')
      window.location.reload()
    }
  }
}

</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
