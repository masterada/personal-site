<template>
  <Card class=" p-m-2">
    <template v-slot:content>
      404 - Not Found
    </template>
  </Card>
</template>

<script lang="ts">
import Card from 'primevue/card'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Card
  }
})
</script>
