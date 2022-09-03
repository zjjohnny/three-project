<template>
  <div>
    <!-- Two-way Data-Binding -->
    <quill-editor
      ref="myQuillEditor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    />

    <!-- Or manually control the data synchronization -->
  </div>
</template>
  
  <script>
export default {
  props: ["msg"],
  data() {
    return {
      content: "",
      editorOption: {
        // Some Quill options...
      },
    };
  },
  mounted() {
    this.content = mes;
  },
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
};
</script>
  
  