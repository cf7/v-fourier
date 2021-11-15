<template>
  <!--class: (this.props.highlightTranslate ? 'translate-highlighted' : '') -->
  <!--click: {this.props.loading ? null : this.handleClick} -->
  <b-button
    class="submit-btn"  
    v-on:click="onClick"
    type="submit"
    disabled="loading"
    value="value"
    variant="outline-primary"
  >
  {{ text }}
  </b-button>
</template>

<script>
  /* eslint-disable */
  import BButton from 'bootstrap-vue';

  export default {
    name: "FourierButton",
    props: {
      loading: Boolean,
      highlightTranslate: Boolean,
      click: Function,
    },
    computed: {
      text: function () {
        return this.loading ? 'Loading...' : 'Translate';
      }
    },
    components: {
      BButton,
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


