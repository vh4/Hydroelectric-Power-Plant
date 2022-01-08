
const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server);
const bodyparser = require('body-parser')
const Router = require('./Router/web')
const path = require('path')
const expressLayouts = require('express-ejs-layouts');
const {
    PushDataIntoNotification, 
    Notification, 
    deleteAllNotification,
    //mcb
    MCB,
    PushDataIntoMCB,
    deleteAllMCB, 

    MCB2,
    PushDataIntoMCB2,
    deleteAllMCB2,

    MCB3,
    PushDataIntoMCB3,
    deleteAllMCB3,

    MCB4,
    PushDataIntoMCB4,
    deleteAllMCB4,

    MCB5,
    PushDataIntoMCB5,
    deleteAllMCB5,

    MCB6,
    PushDataIntoMCB6,
    deleteAllMCB6,

    MCB7,
    PushDataIntoMCB7,
    deleteAllMCB7,

    MCB8,
    PushDataIntoMCB8,
    deleteAllMCB8,

    MCB9,
    PushDataIntoMCB9,
    deleteAllMCB9,

    MCB10,
    PushDataIntoMCB10,
    deleteAllMCB10,

    toggleMCBupdate
} = require('./databases/database')

const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//flash message
app.use(cookieParser('secret'))
app.use(session({
    cookie:{maxAge: 3000},
    secret:'secret',
    resave: true,
    saveUninitialized:true
}
))
app.use(flash())

const serialPort = require('serialport');
const readline   = require('@serialport/parser-readline');
const com = new serialPort("COM5",{baudRate:9600});
process.setMaxListeners(0);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public'));
app.use(express.static(__dirname + '/public'))
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(expressLayouts);

const port = process.env.PORT || 3000;
app.use(Router)
com.on('open',function(){
    console.log( "terhubung serial communicaction");
});

const parses = com.pipe(new readline({
    delimiter: '\r\n'
}))

// data dummy dari server Arduino Parsing
parses.on("data", function(data){
    going_to_database_file = data.toString().replace(/(\r\n\n\r)/gm, ",").split(","); //parsing data important !!!
    var today = new Date();

    //ototmatis delete 
    if(Notification().length > 100){
        deleteAllNotification()
    }

    //declaraction mcb

    function hati_hati(value, no_mcb){
        
        const databsaes_data_notification_mcb =
        {
            id:Math.random(),
            kelebihan_daya:value,
            mcb:no_mcb,
            status: 'HATI-HATI, HAMPIR KELEBIHAN DAYA',
            tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
        }

        return databsaes_data_notification_mcb;
    }

    function Kelebihan_daya(value, no_mcb){

        const databsaes_data_notification_mcb =
        {
            id:Math.random(),
            kelebihan_daya:value,
            mcb:no_mcb,
            status: 'KELEBIHAN DAYA, SEGERA DI CHECK !',
            tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
        }

        return databsaes_data_notification_mcb;

    }

    //mcb 1
    if(going_to_database_file[0] != 'undefined'){
        if(going_to_database_file[0] > 390 && going_to_database_file[0] <= 400){
            setTimeout(()=>{
                PushDataIntoMCB(1)
              },3000)
              
              if(MCB().length > 60){
                deleteAllMCB()
                PushDataIntoNotification(hati_hati(going_to_database_file[0], 1))
              }
              
            
        }else if(going_to_database_file[0] > 400){
            setTimeout(()=>{
                PushDataIntoMCB(1)
              },3000)
              
              if(MCB().length > 60){
                deleteAllMCB()
                PushDataIntoNotification(Kelebihan_daya(going_to_database_file[0], 1))
              }
        }
    }

        //mcb 2
        if(going_to_database_file[1] !== 'undefined'){
            if(going_to_database_file[1] > 390 && going_to_database_file[1] <= 400){

                setTimeout(()=>{
                    PushDataIntoMCB2(1)
                  },3000)
                  
                  if(MCB2().length > 60){
                    deleteAllMCB2()
                    PushDataIntoNotification(hati_hati(going_to_database_file[1], 2))
                }
                  
            }else if(going_to_database_file[1] > 400){
                setTimeout(()=>{
                    PushDataIntoMCB2(1)
                  },3000)
                  
                  if(MCB2().length > 60){
                    deleteAllMCB2()
                    PushDataIntoNotification(Kelebihan_daya(going_to_database_file[1], 2))
                }
            }
        }

        //mcb 3
    if(going_to_database_file[2] !== 'undefined'){
        if(going_to_database_file[2] > 390 && going_to_database_file[2] <= 400){
            setTimeout(()=>{
                PushDataIntoMCB3(1)
              },3000)
              
              if(MCB3().length > 60){
                deleteAllMCB3()
                PushDataIntoNotification(hati_hati(going_to_database_file[2], 3))
            }
        }else if(going_to_database_file[2] > 400){

            setTimeout(()=>{
                PushDataIntoMCB3(1)
              },3000)
              
              if(MCB3().length > 60){
                deleteAllMCB3()
                PushDataIntoNotification(Kelebihan_daya(going_to_database_file[2], 3))
            }
        }
    }

        //mcb 4
        if(going_to_database_file[3] !== 'undefined'){
            if(going_to_database_file[3] > 390 && going_to_database_file[3] <= 400){
                setTimeout(()=>{
                    PushDataIntoMCB4(1)
                  },3000)
                  
                  if(MCB4().length > 60){
                    deleteAllMCB4()
                    PushDataIntoNotification(hati_hati(going_to_database_file[3], 4))
                }
            }else if(going_to_database_file[3] > 400){
    
                setTimeout(()=>{
                    PushDataIntoMCB4(1)
                  },3000)
                  
                  if(MCB4().length > 60){
                    deleteAllMCB4()
                    PushDataIntoNotification(Kelebihan_daya(going_to_database_file[3], 4))
                }
            }
        }

        //mcb 5
        if(going_to_database_file[4] !== 'undefined'){
            if(going_to_database_file[4] > 390 && going_to_database_file[4] <= 400){
                setTimeout(()=>{
                    PushDataIntoMCB5(1)
                  },3000)
                  
                  if(MCB5().length > 60){
                    deleteAllMCB5()
                    PushDataIntoNotification(hati_hati(going_to_database_file[4], 5))
                }
            }else if(going_to_database_file[4] > 400){
    
                setTimeout(()=>{
                    PushDataIntoMCB5(1)
                  },3000)
                  
                  if(MCB5().length > 60){
                    deleteAllMCB5()
                    PushDataIntoNotification(Kelebihan_daya(going_to_database_file[4], 5))
                }
            }
        }
        //mcb 6
        if(going_to_database_file[5] !== 'undefined'){
            if(going_to_database_file[5] > 390 && going_to_database_file[5] <= 400){
                setTimeout(()=>{
                    PushDataIntoMCB6(1)
                  },3000)
                  
                  if(MCB6().length > 60){
                    deleteAllMCB6()
                    PushDataIntoNotification(hati_hati(going_to_database_file[5], 6))
                }
            }else if(going_to_database_file[5] > 400){
    
                setTimeout(()=>{
                    PushDataIntoMCB6(1)
                  },3000)
                  
                  if(MCB6().length > 60){
                    deleteAllMCB6()
                    PushDataIntoNotification(Kelebihan_daya(going_to_database_file[5], 6))
                }
            }
        }

        //mcb 7
        if(going_to_database_file[6] !== 'undefined'){
            if(going_to_database_file[6] > 390 && going_to_database_file[6] <= 400){
                setTimeout(()=>{
                    PushDataIntoMCB7(1)
                  },3000)
                  
                  if(MCB7().length > 60){
                    deleteAllMCB7()
                    PushDataIntoNotification(hati_hati(going_to_database_file[6], 7))
                }
            }else if(going_to_database_file[6] > 400){
    
                setTimeout(()=>{
                    PushDataIntoMCB7(1)
                  },3000)
                  
                  if(MCB7().length > 60){
                    deleteAllMCB7()
                    PushDataIntoNotification(Kelebihan_daya(going_to_database_file[6], 7))
                }
            }
        }        
        //mcb 8
        if(going_to_database_file[7] !== 'undefined'){
            if(going_to_database_file[7] > 390 && going_to_database_file[7] <= 400){
                setTimeout(()=>{
                    PushDataIntoMCB8(1)
                  },3000)
                  
                  if(MCB8().length > 60){
                    deleteAllMCB8()
                    PushDataIntoNotification(hati_hati(going_to_database_file[7], 8))
                }
            }else if(going_to_database_file[7] > 400){
    
                setTimeout(()=>{
                    PushDataIntoMCB8(1)
                  },3000)
                  
                  if(MCB8().length > 60){
                    deleteAllMCB8()
                    PushDataIntoNotification(Kelebihan_daya(going_to_database_file[7], 8))
                }
            }
        } 
        //mcb 9
        if(going_to_database_file[8] !== 'undefined'){
            if(going_to_database_file[8] > 390 && going_to_database_file[8] <= 400){
                setTimeout(()=>{
                    PushDataIntoMCB9(1)
                  },3000)
                  
                  if(MCB9().length > 60){
                    deleteAllMCB9()
                    PushDataIntoNotification(hati_hati(going_to_database_file[8], 9))
                }
            }else if(going_to_database_file[8] > 400){
    
                setTimeout(()=>{
                    PushDataIntoMCB9(1)
                  },3000)
                  
                  if(MCB9().length > 60){
                    deleteAllMCB9()
                    PushDataIntoNotification(Kelebihan_daya(going_to_database_file[8], 9))
                }
            }
        }
        //mcb 10
        if(going_to_database_file[9] !== 'undefined'){
            if(going_to_database_file[9] > 390 && going_to_database_file[9] <= 400){
                setTimeout(()=>{
                    PushDataIntoMCB10(1)
                  },3000)
                  
                  if(MCB10().length > 60){
                    deleteAllMCB10()
                    PushDataIntoNotification(hati_hati(going_to_database_file[9], 10))
                }
            }else if(going_to_database_file[9] > 400){
    
                setTimeout(()=>{
                    PushDataIntoMCB10(1)
                  },3000)
                  
                  if(MCB10().length > 60){
                    deleteAllMCB10()
                    PushDataIntoNotification(Kelebihan_daya(going_to_database_file[9], 10))
                }
            }
        } 
})

//
 io.sockets.on('connection',(socket)=>{
    socket.on('mcb1_power', (datamcb1) =>{
        com.write('1')
    })
    socket.on('mcb2_power', (datamcb2) =>{
        com.write(datamcb2.toString())
    })
    socket.on('mcb3_power', (datamcb3) =>{
        com.write(datamcb3.toString())
    })
    socket.on('mcb4_power', (datamcb4) =>{
        com.write(datamcb4.toString())
    })
    socket.on('mcb5_power', (datamcb5) =>{
        com.write(datamcb5.toString())
    })
    socket.on('mcb6_power', (datamcb6) =>{
        com.write(datamcb6.toString())
    })
    socket.on('mcb7_power', (datamcb7) =>{
        com.write(datamcb7.toString())
    })
    socket.on('mcb8_power', (datamcb8) =>{
        com.write(datamcb8.toString())
    })
    socket.on('mcb9_power', (datamcb9) =>{
        com.write(datamcb9.toString())
    })
    socket.on('mcb10_power', (datamcb10) =>{
        com.write(datamcb10.toString())
    })

     parses.on('data',(data)=>{
        hasil = data.toString().replace(/(\r\n\n\r)/gm, ",").split(","); //parsing data important !!!
        toggleMCBupdate([
            parseInt(hasil[10]), //mcb1
            parseInt(hasil[11]), //mcb2
            parseInt(hasil[12]), //mcb3
            parseInt(hasil[13]), //mcb4 
            parseInt(hasil[14]), //mcb5
            parseInt(hasil[15]), //mcb6
            parseInt(hasil[16]), //mcb7
            parseInt(hasil[17]), //mcb8
            parseInt(hasil[18]), //mcb9
            parseInt(hasil[19]), //mcb10
        ])
        socket.emit('data_dummy', {data_dummy : hasil});
     })

})

server.listen(port, ()=>{
    console.log('listening on port' + port)
});
