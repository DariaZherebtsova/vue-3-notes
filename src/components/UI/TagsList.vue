<template>
  <div class="tags-list">
    <div class="tag-item" 
      v-for="item in items"
      :key="item"
      @click="onItemClick($event, item)" 
      :class="{ isPreview: isPreview }" 
    >
      <span>{{ item }}</span>
    </div>
  </div> 
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
    needClear: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    needClear(newValue) {
      if (newValue) {
        document.getElementsByClassName('tag-item').forEach(element => {
          element.classList.remove('isActive');
        });
      }
    }
  },
  methods: {
    onItemClick(event, item) {
      event.currentTarget.classList.toggle('isActive');
      this.$emit('onItemClick', item);
    }
  },
}
</script>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }

  &.isActive {
    background-color: #4468e0;
    color: #fff;
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>