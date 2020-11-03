<template>
  <div>
    <Card class=" p-m-2">
      <template v-slot:title>About me</template>
      <template v-slot:content>
        <p>
          My name is Adam Kiss (Kiss Ádám to be precise). I'm a Hungarian backend developer with knowledge of the dark arts (cloud infrastructure).
        </p>
      </template>
    </Card>
    <Card class=" p-m-2">
      <template v-slot:title>Color scheme helper</template>
      <template v-slot:content>
        <p>
          I'm just going to leave this here.
        </p>
        <Colors></Colors>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import Card from 'primevue/card'
import { defineComponent } from 'vue'
import Colors from '@/components/Colors.vue'

export default defineComponent({
  components: {
    Card,
    Colors
  }
})
</script>

<style lang="scss" scoped></style>
