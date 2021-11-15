<template>
  <!--class: (this.props.highlightTranslate ? 'translate-highlighted' : '') -->
  <!--click: {this.props.loading ? null : this.handleClick} -->
  <b-button
    class="submit-btn"  
    v-on:click="onClick"
    type="submit"
    v-bind:disabled="disabled"
    variant="outline-primary"
  >
  {{ text }}
  </b-button>
</template>

<script>
  /* eslint-disable */
  import { BButton } from 'bootstrap-vue';

  export default {
    name: "FourierButton",
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      highlightTranslate: Boolean,
      click: {
        type: Function,
        default: () => console.log("clicked!"),
      },
    },
    computed: {
      text: function () {
        return this.loading ? 'Loading...' : 'Translate';
      },
      disabled: function () {
        return this.loading ? true : false;
      },
    },
    components: {
      'b-button': BButton,
    },
    methods: {
      onClick: function (event) {
        this.click();
      }
    }
  }
</script>

<style scoped>
  
</style>


