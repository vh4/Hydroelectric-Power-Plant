    
      const socket = io();
      var checked_mcb1,checked_mcb2,checked_mcb3,checked_mcb4,checked_mcb5,checked_mcb6,checked_mcb7,checked_mcb8,checked_mcb9,checked_mcb10 = 0;
      var main_mcb = 0;

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
      var RELAY = document.getElementById('Relay');

    //add disaplay and css in card
      var disabled1 = document.getElementById('disabled1');
      var disabled2 = document.getElementById('disabled2');
      var disabled3 = document.getElementById('disabled3');
      var disabled4 = document.getElementById('disabled4');
      var disabled5 = document.getElementById('disabled5');
      var disabled6 = document.getElementById('disabled6');
      var disabled7 = document.getElementById('disabled7');
      var disabled8 = document.getElementById('disabled8');
      var disabled9 = document.getElementById('disabled9');
      var disabled10 = document.getElementById('disabled10');

      //add cross in div
      var disabled1_html = document.getElementById('disabled1_html')
      var disabled2_html = document.getElementById('disabled2_html')
      var disabled3_html = document.getElementById('disabled3_html')
      var disabled4_html = document.getElementById('disabled4_html')
      var disabled5_html = document.getElementById('disabled5_html')
      var disabled6_html = document.getElementById('disabled6_html')
      var disabled7_html = document.getElementById('disabled7_html')
      var disabled8_html = document.getElementById('disabled8_html')
      var disabled9_html = document.getElementById('disabled9_html')
      var disabled10_html = document.getElementById('disabled10_html')

      //id mcb for inner htm to given data from socket.io
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

        //disable mcb
            disabled1.style.display = 'block';
            disabled2.style.display = 'block';

            $('#Relay').click(function(){
                if(RELAY.checked == true){
                    //mcb1
                    disabled1.classList.add("crossed")
                    disabled1_html.innerHTML = '<svg><line x1="0" y1="100%" x2="100%" y2="0" /><line x1="0" y1="0" x2="100%" y2="100%" /></svg>'
                    //mcb2
                    disabled2.classList.add("crossed")
                    disabled2_html.innerHTML = '<svg><line x1="0" y1="100%" x2="100%" y2="0" /><line x1="0" y1="0" x2="100%" y2="100%" /></svg>'
                    //mcb3
                    disabled3.classList.add("crossed")
                    disabled3_html.innerHTML = '<svg><line x1="0" y1="100%" x2="100%" y2="0" /><line x1="0" y1="0" x2="100%" y2="100%" /></svg>'
                    //mcb4
                    disabled4.classList.add("crossed")
                    disabled4_html.innerHTML = '<svg><line x1="0" y1="100%" x2="100%" y2="0" /><line x1="0" y1="0" x2="100%" y2="100%" /></svg>'
                    //mcb5
                    disabled5.classList.add("crossed")
                    disabled5_html.innerHTML = '<svg><line x1="0" y1="100%" x2="100%" y2="0" /><line x1="0" y1="0" x2="100%" y2="100%" /></svg>'
                    //mcb6
                    disabled6.classList.add("crossed")
                    disabled6_html.innerHTML = '<svg><line x1="0" y1="100%" x2="100%" y2="0" /><line x1="0" y1="0" x2="100%" y2="100%" /></svg>'
                    //mcb7
                    disabled7.classList.add("crossed")
                    disabled7_html.innerHTML = '<svg><line x1="0" y1="100%" x2="100%" y2="0" /><line x1="0" y1="0" x2="100%" y2="100%" /></svg>'
                    //mcb8
                    disabled8.classList.add("crossed")
                    disabled8_html.innerHTML = '<svg><line x1="0" y1="100%" x2="100%" y2="0" /><line x1="0" y1="0" x2="100%" y2="100%" /></svg>'
                    //mcb9
                    disabled9.classList.add("crossed")
                    disabled9_html.innerHTML = '<svg><line x1="0" y1="100%" x2="100%" y2="0" /><line x1="0" y1="0" x2="100%" y2="100%" /></svg>'    
                    //mcb10
                    disabled10.classList.add("crossed")
                    disabled10_html.innerHTML = '<svg><line x1="0" y1="100%" x2="100%" y2="0" /><line x1="0" y1="0" x2="100%" y2="100%" /></svg>'                                      
                }else{
                    //mcb1
                    disabled1.style.display = 'block';
                    disabled1_html.innerHTML = ''
                    //mcb2
                    disabled2.style.display = 'block';
                    disabled2_html.innerHTML = ''
                    //mcb3
                    disabled3.style.display = 'block';
                    disabled3_html.innerHTML = ''
                    //mcb4
                    disabled4.style.display = 'block';
                    disabled4_html.innerHTML = ''                    
                    //mcb5
                    disabled5.style.display = 'block';
                    disabled5_html.innerHTML = ''
                    //mcb6
                    disabled6.style.display = 'block';
                    disabled6_html.innerHTML = ''
                    //mcb7
                    disabled7.style.display = 'block';
                    disabled7_html.innerHTML = ''
                    //mcb8
                    disabled8.style.display = 'block';
                    disabled8_html.innerHTML = ''
                    //mcb9
                    disabled9.style.display = 'block';
                    disabled9_html.innerHTML = ''
                    //mcb10
                    disabled10.style.display = 'block';
                    disabled10_html.innerHTML = ''

                }
            })


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
        
        //checked mcb
        checked_mcb1 = parseInt(result.data_dummy[10])
        checked_mcb2 = parseInt(result.data_dummy[11])
        checked_mcb3 = parseInt(result.data_dummy[12])
        checked_mcb4 = parseInt(result.data_dummy[13])
        checked_mcb5 = parseInt(result.data_dummy[14])
        checked_mcb6 = parseInt(result.data_dummy[15])
        checked_mcb7 = parseInt(result.data_dummy[16])
        checked_mcb8 = parseInt(result.data_dummy[17])
        checked_mcb9 = parseInt(result.data_dummy[18])
        checked_mcb10 = parseInt(result.data_dummy[19])

        //mcb1 checked from arduino
        if(checked_mcb1 == 1){
            power_mcb1.checked = true;
        }else{
            power_mcb1.checked = false;
        }
        //mcb2 checked
        if(checked_mcb2 == 1){
            power_mcb2.checked = true;
        }else{
            power_mcb2.checked = false;
        }
        //mcb3 checked
        if(checked_mcb3 == 1){
            power_mcb3.checked = true;
        }else{
            power_mcb3.checked = false;
        }        
        //mcb4 checked
        if(checked_mcb4 == 1){
            power_mcb4.checked = true;
        }else{
            power_mcb4.checked = false;
        }
        //mcb5 checked
        if(checked_mcb5 == 1){
            power_mcb5.checked = true;
        }else{
            power_mcb5.checked = false;
        }
        //mcb6 checked
        if(checked_mcb6 == 1){
            power_mcb6.checked = true;
        }else{
            power_mcb6.checked = false;
        }
        //mcb7 checked
        if(checked_mcb7 == 1){
            power_mcb7.checked = true;
        }else{
            power_mcb7.checked = false;
        }
        //mcb8 checked
        if(checked_mcb8 == 1){
            power_mcb8.checked = true;
        }else{
            power_mcb8.checked = false;
        }
        //mcb9 checked
        if(checked_mcb9 == 1){
            power_mcb9.checked = true;
        }else{
            power_mcb9.checked = false;
        }
        //mcb8 checked
        if(checked_mcb10 == 1){
            power_mcb10.checked = true;
        }else{
            power_mcb10.checked = false;
        }

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
