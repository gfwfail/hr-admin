

<template>

<!-- Info boxes -->

<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div class="box-header with-border">
                <h3 class="box-title">Survey charts</h3>
                <div class="box-tools pull-right">
                    <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    <div class="btn-group">
                        <button class="btn btn-box-tool dropdown-toggle" data-toggle="dropdown"><i class="fa fa-wrench"></i></button>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                    <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="row">
                <div class="col-md-6">
                  <canvas id="myChart" width="400" height="400"></canvas>

                </div>
                <div class="col-md-6">
                  <canvas id="myChart2" width="400" height="400"></canvas>

                </div>
              </div>

            </div>
            <!-- ./box-body -->
            <div class="box-footer">
            </div>
            <!-- /.box-footer -->
        </div>
        <!-- /.box -->
    </div>
    <!-- /.col -->
</div>
<!-- /.row -->

</template>

<script>

export default {
    ready() {
        var ctx = document.getElementById("myChart");
        var ctx2 = document.getElementById("myChart2");

        console.log(ctx)
        var data = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                label: "My Second dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }]
        };
        var myRadarChart = new Chart(ctx, {
            type: 'radar',
            data: data,
            options: {
                scale: {
                    reverse: true,
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        });

        var myRadarChart = new Chart(ctx2, {
            type: 'radar',
            data: data,
            options: {
                scale: {
                    reverse: true,
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        });


    }
}

</script>
