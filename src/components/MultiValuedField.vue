<template>
  <div class="form-group">
    <label class="control-label" v-bind:for="field.name">{{field.label}}</label>
    <p class="help-block">{{field.help}}</p>
    <ol>
      <ItemField
        v-for="(value, index) in values"
        v-bind:value="value"
        v-bind:index="index"
        v-bind:field="field">
      </ItemField>
    </ol>
    <button class="btn btn-link add" @click="addItem">Add another {{field.name}}</button>
  </div>
</template>

<script>
import ItemField from './ItemField.vue'
export default {
  components: { ItemField },
  name: 'MultiValuedField',
  props: {
    field: {
      type: Object,
      required: true
    },
    values: {
      type: Array,
      default: () => ['']
    }
  },
  methods: {
    addItem () {
      // force the user to enter something
      console.log(this.values)
      console.log(this.values.slice(-1)[0])

      // if (this.values.slice(-1)[0] === '') {
      //   return
      // }
      this.values.push('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
