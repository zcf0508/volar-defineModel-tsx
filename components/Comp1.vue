<script setup lang="ts">
const open = defineModel<boolean>('open', {
  default: false
})

const emits = defineEmits<{
  (event: 'cancel'): void
}>()
</script>

<template>
  <div>
    <slot />
  </div>
</template>
