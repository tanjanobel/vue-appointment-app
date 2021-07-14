<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card">
          <div class="card-header text-center bg-vue">
            <h5>Neuer Termin für: <strong>{{ getNameOfActiveDay }}</strong></h5>
          </div>
          <div class="card-body">
            <input
              type="text"
              class="form-control"
              placeholder="Neuer Termin"
              v-model="eventTitle"
            >
            <div class="mt-3 text-center">
              <span
                v-for="(color, index) in ['primary', 'success', 'info', 'warning', 'danger']"
                :key="index"
                class="alert me-2 square"
                :class="[eventColor === color ? getBorderColor: '', 'alert-' +color]"
                style="cursor: pointer;"
                @click="changeEventColor(color)"
              >
              </span>
            </div>
            <br>
            <button
              class="btn bg-vue2 w-100"
              @click="storeEvent(eventTitle, eventColor)"
            >
              Eintragen
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store';

  export default {
    name: 'CalendarEntry',
    data() {
      return {
        eventColor: 'primary',
        eventTitle: ''
      }
    },
    computed: {
      getBorderColor() {
        return 'border border-' +this.eventColor;
      },
      getNameOfActiveDay() {
        return store.getActiveDay().fullname;
      }
    },
    methods: {
      changeEventColor: function (color) {
        this.eventColor = color;
      },
      storeEvent: function (eventTitle, eventColor) {
        store.storeEvent(eventTitle, eventColor);
        this.eventTitle = '';
        this.eventColor = 'primary'
      }
    }
  }
</script>

<style scoped>
  .bg-vue2 {
    background-color: rgb(65, 184, 131);
  }

  .square {
    height: 40px;
    width: 40px;
  }
</style>