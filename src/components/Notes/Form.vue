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
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value)
      console.log('--value', this.value);
      this.value = '';
    },
    handleTagClick(tag) {
      console.log(tag);
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