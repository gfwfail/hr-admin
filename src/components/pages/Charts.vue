<style>

.item-move {
    /* applied to the element when moving */
    transition: transform .5s cubic-bezier(.55, 0, .1, 1);
}

.sweet-alert .form-control input {
   display: initial;
   width: auto;
   height: auto;
   margin: auto;
}

</style>

<template>
<div class="row">
    <div class="col-md-6">

      <div class="box">
                  <div class="box-header">
                    <h3 class="box-title">Results</h3>
                  </div>
                  <!-- /.box-header -->
                  <div class="box-body table-responsive">
                    <canvas id="radar" width="500" height="500"></canvas>
                  </div>
                  <!-- /.box-body -->
                </div>

    </div>

    <div class="col-md-6">

      <div class="box">
                  <div class="box-header">
                    <h3 class="box-title">Results</h3>
                  </div>
                  <!-- /.box-header -->
                  <div class="box-body table-responsive">
                    <canvas id="line" width="500" height="500"></canvas>
                  </div>
                  <!-- /.box-body -->
                </div>

    </div>

</div>

</template>

<script>

import {
    SurveyResource
}
from '../../api'

export default {
    replace: true,
    data: function() {
        return {
          surveys:[]
        }
    },
  ready() {
    var data = {
      labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
      datasets: [
          {
              label: "My First dataset",
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(179,181,198,1)",
              pointBackgroundColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
              label: "My Second dataset",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: [28, 48, 40, 19, 96, 27, 100]
          }
      ]
  }

  var radar = document.getElementById("radar");
  new Chart(radar, {
    type: "radar",
    data: data,
    options: {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
    }
})


var data2 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    ]
};

var line = document.getElementById("line");

new Chart(line, {
    type: 'line',
    data: data2,
    options: {
        xAxes: [{
            display: false
        }]
    }
});
  }
}

</script>
