<template>
  <div class="form-group">
    <label class="control-label" v-bind:for="field.name">{{field.label}}</label>
    <p class="help-block">{{field.help}}</p>
    <ol>
      <ItemField
        v-for="(item, index) in value"
        v-model="value[index]"
        v-bind:index="index"
        v-bind:field="field"
        v-bind:showRemove="showRemove()"
        v-on:delete="removeItem(index)">
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
    value: {
      type: Array,
      required: true
    }
  },
  methods: {
    // Create a new item with a blank value
    addItem () {
      // force the user to enter something
      if (this.value.slice(-1)[0] === '') {
        return
      }
      this.value.push('')
    },
    // Remove the item at the specified index
    removeItem (index) {
      this.value.splice(index, 1)
      this.$emit('change', this.value)
    },
    // Returns true if the remove buttons be shown for this field.
    // This is true if there's more than on entry.
    showRemove () {
      return this.value.length > 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
