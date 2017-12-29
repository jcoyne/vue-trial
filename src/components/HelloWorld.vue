<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ol>
      <multi-valued-field
        v-for="field in schema"
        v-bind:field="field"
        v-bind:key="field">
      </multi-valued-field>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      schema: ['title'],
      msg: 'hullo'
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
