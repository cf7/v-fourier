<template>
  <b-col class="col_1">
    <panel class="controls">
      <b-form className="controls-form">
        <b-row>
          <b-col>
            <label>
              <fourier-button
                
              />
            </label>
          </b-col>
        </b-row>
      </b-form>
    </panel>
    <panel class="editor"> <!-- + (this.props.highlightEditor ? 'editor-highlighted' : '')}> -->
      <b-form-textarea class="editor-textarea">
        
      </b-form-textarea>
    </panel>
</b-col>
</template>


<script>
/* eslint-disable */
import Panel from './Panel.vue';
import { BForm } from 'bootstrap-vue';
import { BFormTextarea } from 'bootstrap-vue';
import FourierButton from './FourierButton.vue';

export default {
  name: "Editor",
  props: {
    editorFontSize: Number,
    editorFontSizes: Array,
    displayText: String
  },
  components: {
    'panel': Panel,
    'fourier-button': FourierButton,
    'b-form': BForm,
    'b-form-textarea': BFormTextarea,
  }
}
</script>

<style scoped>

</style>