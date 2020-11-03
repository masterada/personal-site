<template>
  <div>
    <Card class="p-m-2">
      <template v-slot:title>My little page</template>
      <template v-slot:content>
        <div class="p-text-center">
          <img alt="MyGopher" src="../assets/gopher.png" class="gopher-img" />
          <h3>Welcome to my awesome Site!</h3>
        </div>
      </template>
    </Card>
    <Card class="p-m-2">
      <template v-slot:title>Why does it suck?</template>
      <template v-slot:content>Because I'm a backend developer. That's why.</template>
    </Card>
  </div>
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

<style lang="scss" scoped>
.gopher-img {
  height: 10rem;
}
</style>
