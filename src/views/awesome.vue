<template>
  <div>
    <Card class=" p-m-2">
      <template v-slot:title>Golang</template>
      <template v-slot:content>
        <ul>
          <li><a href="https://github.com/labstack/echo" target="_blank">Echo http server</a></li>
          <li><a href="https://github.com/h2non/gentleman" target="_blank">Gentleman http client</a></li>
          <li>
            <a href="https://github.com/json-iterator/go" target="_blank">JsonIterator</a> - an alternative json reader with useful config options
          </li>
          <li><a href="https://github.com/pion/webrtc" target="_blank">Pion webrtc server</a></li>
        </ul>
      </template>
    </Card>
    <Card class=" p-m-2">
      <template v-slot:title>Infra</template>
      <template v-slot:content>
        <ul>
          <li><span class="strikethrough">terraform</span> <a href="https://www.pulumi.com/" target="_blank">pulumi</a></li>
          <li><span class="strikethrough">helm</span> <a href="https://www.pulumi.com/" target="_blank">pulumi</a></li>
        </ul>
      </template>
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
