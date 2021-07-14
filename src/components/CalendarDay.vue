<template>
  <div class="card">
    <div class="card-header text-center bg-vue">
      <strong>{{ day.fullname }}</strong>
    </div>
    <div class="card-body">
      <div>{{ day.id }}</div>
      <CalenderEvent
        v-for="(event, index) in day.events"
        :key="index"
        :event="event"
        :day="day"
      />
    </div>
  </div>
</template>

<script>
import CalenderEvent from './CalendarEvent';

export default {
  name: 'CalendarDay',
  props: ['day'],
  components: {
    CalenderEvent
  }
}
</script>

<style>
  .bg-vue {
    background-color: rgb(52, 73, 94);
    color: #fff;
  }
</style>