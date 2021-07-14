<template>
  <div
    class="alert text-center"
    :class="getEventColor"
  >
    <div>{{ event.title }}</div>
    <div>
      <i class="fas fa-edit me-2"></i>
      <i class="far fa-trash-alt"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalenderEvent',
  props: ['event', 'day'],
  computed: {
    getEventColor() {
      return 'alert-' +this.event.color;
    }
  }
}
</script>

<style scoped>

</style>