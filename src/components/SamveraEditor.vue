<template>
  <div class="multi-value-form">
    <template v-for="field in schema">
      <MultiValuedField
        v-model="values[field.name]"
        v-bind:field="field"
        v-bind:key="field.name">
      </MultiValuedField>
    </template>
    <button v-on:click="save()">Save</button>
  </div>
</template>

<script>
import MultiValuedField from './MultiValuedField.vue'

export default {
  components: { MultiValuedField },
  name: 'SamveraEditor',
  data () {
    return {
      schema: [
        { 'name': 'title',
          'label': 'Title',
          'help': 'A name to aid in identifying a work.',
          'required': true },
        { 'name': 'description',
          'label': 'Abstract or Summary',
          'help': 'Free-text notes about the work. Examples include abstracts of a paper or citation information for a journal article.',
          'required': false } ],
      values: {
        'title': [''],
        'description': ['']
      }
    }
  },
  methods: {
    save () {
      console.log('Save')
      console.log(this.values.title)
      console.log(this.values.description)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
