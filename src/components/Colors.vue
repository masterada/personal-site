<template>
  <div class="colors">
    <div style="background: var(--surface-a);">--surface-a</div>
    <div style="background: var(--surface-b);">--surface-b</div>
    <div style="background: var(--surface-c);">--surface-c</div>
    <div style="background: var(--surface-d);">--surface-d</div>
    <div style="background: var(--surface-e);">--surface-e</div>
    <div style="background: var(--surface-f);">--surface-f</div>
    <div style="background: var(--text-color);">--text-color</div>
    <div style="background: var(--text-color-secondary);">--text-color-secondary</div>
    <div style="background: var(--primary-color);">--primary-color</div>
    <div style="background: var(--primary-color-text);">--primary-color-text</div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.colors {
  padding: 10px;
  background: chartreuse;
}

.colors div {
  padding: 10px;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>
