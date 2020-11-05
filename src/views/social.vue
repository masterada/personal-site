<template>
  <div>
    <Card class="p-m-2">
      <template v-slot:title>Social Media</template>
      <template v-slot:content>
        <a href="https://github.com/masterada" target="_blank" class=" p-mr-2">
          <Button icon="pi pi-github" label="GitHub" class="p-button-info" />
        </a>
        <a href="https://www.linkedin.com/in/kiss-%C3%A1d%C3%A1m-3009b08a/" target="_blank" class="p-mx-2">
          <Button class="p-button-info"><img src="@/assets/linkedin.png" alt="LinkedIn" class="icon-img" />LinkedIn</Button>
        </a>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Button,
    Card
  }
})
</script>

<style lang="scss" scoped>
.icon-img {
  height: 1rem;
}
</style>
