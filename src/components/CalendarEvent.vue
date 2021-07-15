<template>
  <div
    class="alert text-center"
    :class="getEventColor"
  >
    <div v-if="!event.edit">
      <div>{{ event.title }}</div>
      <div>
        <i
          class="fas fa-edit me-2"
          style="cursor:pointer;"
          @click="editEvent(day.id, event.title)"
        ></i>
        <i
          class="far fa-trash-alt"
          style="cursor:pointer;"
        ></i>
      </div>
    </div>

    <div v-if="event.edit">
      <input
        type="text"
        class="form-control"
        :placeholder="event.title"
      >
      <br>
      <i class="fas fa-check"></i>
    </div>

  </div>
</template>

<script>
import { store } from '../store.js'
export default {
  name: 'CalenderEvent',
  props: ['event', 'day'],
  computed: {
    getEventColor() {
      return 'alert-' +this.event.color;
    }
  },
  methods: {
    editEvent(dayId, eventTitle) {
      store.editEvent(dayId, eventTitle);
    }
  }
}
</script>

<style scoped>

</style>