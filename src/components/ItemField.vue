<template>
  <li>
    idx: {{index}}
    <input v-if="index === 0"
           v-bind:id="field.name"
           v-bind:name="field.name"
           v-bind:value="value"
           v-on:input="updateValue($event.target.value)" />
    <input v-if="index !== 0"
           v-bind:name="field.name"
           v-bind:value="value"
           v-on:input="updateValue($event.target.value)" />
    <button>Remove</button>
  </li>
</template>

<script>
export default {
  name: 'ItemField',
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
