<template>
  <div class="card">
    <div class="card-header text-center bg-vue">
      <strong>{{ day.fullname }}</strong>
    </div>
    <div class="card-body">
      <div>{{ day.id }}</div>
      <div class="alert alert-success text-center">
        <div>Müll rausbringen</div>
        <div>
          <i class="fas fa-edit me-2"></i>
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarDay',
  props: ['day']
}
</script>

<style>
  .bg-vue {
    background-color: rgb(52, 73, 94);
    color: #fff;
  }
</style>