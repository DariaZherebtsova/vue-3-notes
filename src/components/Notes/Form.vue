<template>
  <div class="note-form__wrapper">
    <form class="note-form"
      @submit.prevent="onSubmit"
    >
      <textarea
        required
        v-model="value"
        placeholder="Type ur note"
      />
      <TagsList 
        :items="tags"
        :needClear="clearTags"
        @onItemClick="handleTagClick"
      />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue';
export default {
  components: { TagsList },
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel'],
      selectedTags: [],
      clearTags: false,
    }
  },
  methods: {
    onSubmit() {
      const result = {
        title: this.value,
        // ?? какой правильный способ получить из Proxy обычный объект
        tags: JSON.parse(JSON.stringify(this.selectedTags)),
      }
      this.$emit('onSubmit', result)
      this.value = '';
      this.clearTags = true;
      this.selectedTags = [];
    },
    handleTagClick(tag) {
      this.clearTags = false;
      const index = this.selectedTags.indexOf(tag);
      if (index === -1) {
        this.selectedTags.push(tag);
      } else {
        this.selectedTags.splice(index, 1);
      }
    }
  }
}
</script>
<style lang="scss">
  .note-form__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .note-form {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    width: 100%;

    textarea {
      margin-bottom: 0;
    }

  }
</style>