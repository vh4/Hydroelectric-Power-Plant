const socket = io();

      var mcb1 = document.getElementById('mcb1');
      var mcb2 = document.getElementById('mcb2');
      var mcb3 = document.getElementById('mcb3');
      var mcb4 = document.getElementById('mcb4');
      var mcb5 = document.getElementById('mcb5');
      var mcb6 = document.getElementById('mcb6');
      var mcb7 = document.getElementById('mcb7');
      var mcb8 = document.getElementById('mcb8');
      var mcb9 = document.getElementById('mcb9');
      var mcb10 = document.getElementById('mcb10');

      var total_mcb = document.getElementById('total_mcb');

      var power_mcb1 = document.getElementById('chk1');
      var power_mcb2 = document.getElementById('chk2');
      var power_mcb3 = document.getElementById('chk3');
      var power_mcb4 = document.getElementById('chk4');
      var power_mcb5 = document.getElementById('chk5');
      var power_mcb6 = document.getElementById('chk6');
      var power_mcb7 = document.getElementById('chk7');
      var power_mcb8 = document.getElementById('chk8');
      var power_mcb9 = document.getElementById('chk9');
      var power_mcb10 = document.getElementById('chk10');

      var main_mcb = 0;

        //power mcb 1
        $('#chk1').click(function(){
            console.log("benar")
            if(power_mcb1.checked == true){
                socket.emit('mcb1_power', 1)
            }else{
                socket.emit('mcb1_power', 2)
            }
        })

        //power mcb 2
        $('#chk2').click(function(){

        if(power_mcb2.checked == true){
            socket.emit('mcb2_power', 3)
        }else{
            socket.emit('mcb2_power', 4)
        }

        })

        //power mcb 3
        $('#chk3').click(function(){

            if(power_mcb3.checked == true){
                socket.emit('mcb3_power', 5)
            }else{
                socket.emit('mcb3_power', 6)
            }

            })

        //power mcb 4
        $('#chk4').click(function(){

            //power mcb 2
            if(power_mcb4.checked == true){
                socket.emit('mcb4_power', 7)
            }else{
                socket.emit('mcb4_power', 8)
            }

            })

        //power mcb 5
        $('#chk5').click(function(){

            if(power_mcb5.checked == true){
                socket.emit('mcb5_power', 9)
            }else{
                socket.emit('mcb5_power', 10)
            }

            })

        //power mcb 6
        $('#chk6').click(function(){

            if(power_mcb6.checked == true){
                socket.emit('mcb6_power', 11)
            }else{
                socket.emit('mcb6_power', 12)
            }

            })

        //power mcb 7
        $('#chk7').click(function(){

            if(power_mcb7.checked == true){
                socket.emit('mcb7_power', 13)
            }else{
                socket.emit('mcb7_power', 14)
            }

            })

        //power mcb 8
        $('#chk8').click(function(){

            if(power_mcb8.checked == true){
                socket.emit('mcb8_power', 15)
            }else{
                socket.emit('mcb8_power', 16)
            }

            })

        //power mcb 9
        $('#chk9').click(function(){

            if(power_mcb9.checked == true){
                socket.emit('mcb9_power', 17)
            }else{
                socket.emit('mcb9_power', 18)
            }

            })
        //power mcb 10
        $('#chk10').click(function(){

            if(power_mcb10.checked == true){
                socket.emit('mcb10_power', 19)
            }else{
                socket.emit('mcb10_power', 20)
            }

            })
      socket.on('data_dummy', (result)=>{

        mcb1.innerHTML = result.data_dummy[0];
        mcb2.innerHTML = result.data_dummy[1];
        mcb3.innerHTML = result.data_dummy[2];
        mcb4.innerHTML = result.data_dummy[3];
        mcb5.innerHTML = result.data_dummy[4];
        mcb6.innerHTML = result.data_dummy[5];
        mcb7.innerHTML = result.data_dummy[6];
        mcb8.innerHTML = result.data_dummy[7];
        mcb9.innerHTML = result.data_dummy[8];
        mcb10.innerHTML = result.data_dummy[9];

        total_mcb.innerHTML = result.data_dummy[0]
        main_mcb = parseFloat(result.data_dummy[0])

      })

      function getRnd(min, max) {
        return Math.random() * (max - min) + min;
      }

      $(function(){

        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        Highcharts.stockChart('container', {
            chart: {
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = main_mcb;
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },

            time: {
                useUTC: false
            },

            rangeSelector: {
                buttons: [{
                    count: 1,
                    type: 'minute',
                    text: '1M'
                }, {
                    count: 5,
                    type: 'minute',
                    text: '5M'
                }, {
                    type: 'all',
                    text: 'All'
                }],
                inputEnabled: false,
                selected: 0
            },

            title: {
                text: 'Live data KWh'
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: 'Live data Kwh',
                type:'area',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -999; i <= 0; i += 1) {
                        data.push([
                            time + i * 1000,
                            main_mcb
                        ]);
                    }
                    return data;
                }())
            }]
        });


    });
