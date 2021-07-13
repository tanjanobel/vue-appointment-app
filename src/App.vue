<template>
  <div id="app">
    <div id="calendar-week">
      <div class="container fluid mt-5">
        <div class="row">
          <div class="col-12">
            <div class="card-group">
              <!-- Tage -->
              <div class="card">
                <div class="card-header text-center bg-vue">
                  <strong>Montag</strong>
                </div>
                <div class="card-body">
                  <div>1</div>
                  <div class="alert alert-success text-center">
                    <div>Müll rausbringen</div>
                    <div>
                      <i class="fas fa-edit me-2"></i>
                      <i class="far fa-trash-alt"></i>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="calendar-entry">
      <div class="container mt-5">
        <div class="row">
          <div class="col-6 offset-3">
            <div class="card">
              <div class="card-header text-center bg-vue">
                <h5>Neuer Termin für: <strong>Dienstag</strong></h5>
              </div>
              <div class="card-body">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Neuer Termin"
                >
                <div class="mt-3 text-center">
                  <span
                    v-for="(color, index) in ['primary', 'success', 'info', 'warning', 'danger']"
                    :key="index"
                    class="alert me-2 square"
                    :class="['alert-' +color]"
                    style="cursor: pointer;"
                  >

                  </span>
                </div>
                <br>
                <button class="btn bg-vue2 w-100">Eintragen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
  .bg-vue {
    background-color: rgb(52, 73, 94);
    color: #fff;
  }

  .bg-vue2 {
    background-color: rgb(65, 184, 131);
  }

  .square {
    height: 40px;
    width: 40px;
  }
</style>