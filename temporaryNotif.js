const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server);
const bodyparser = require('body-parser')
const Router = require('./Router/web')
const path = require('path')
const expressLayouts = require('express-ejs-layouts');
const {PushDataIntoMCB, PushDataIntoNotification, deleteAllMCB, MCB, Notification, deleteAllNotification} = require('./databases/database')
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
const com = new serialPort("COM5",{baudRate:57600});
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
    going_to_database_file = data.toString().replace(/(\r\n\n\r)/gm, " ").split(" "); //parsing data important !!!
    var today = new Date();

    const databsaes_data_notification_mcb1 =
    {
        id:Math.random(),
        kelebihan_daya:going_to_database_file[0],
        mcb:1,
        status: 'HATI-HATI, HAMPIR KELEBIHAN DAYA',
        tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
    }

    const databsaes_data_notification_mcb2 =
    {
        id:Math.random(),
        kelebihan_daya:going_to_database_file[1],
        mcb:2,
        status: 'HATI-HATI, HAMPIR KELEBIHAN DAYA',
        tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
    }
    const databsaes_data_notification_mcb3 =
    {
        id:Math.random(),
        kelebihan_daya:going_to_database_file[2],
        mcb:3,
        status: 'HATI-HATI, HAMPIR KELEBIHAN DAYA',
        tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
    }
    //ototmatis delete 
    if(Notification().length > 20){
        deleteAllNotification()
    }

    //mcb 1
    if(going_to_database_file[0] != 'undefined'){
        if(going_to_database_file[0] > 390 && going_to_database_file[0] <= 400){
            if(going_to_database_file[1] > 390 && going_to_database_file[1] <= 400){
                  if(going_to_database_file[2] > 390 && going_to_database_file[2] <= 400){
                    setTimeout(()=>{
                        PushDataIntoMCB(1)
                      },3000)
                      
                      if(MCB().length > 3){
                        deleteAllMCB()
                        PushDataIntoNotification(databsaes_data_notification_mcb1)
                        PushDataIntoNotification(databsaes_data_notification_mcb2)
                        PushDataIntoNotification(databsaes_data_notification_mcb3)
                      }
                  }else{
                    setTimeout(()=>{
                        PushDataIntoMCB(1)
                      },3000)
                      
                      if(MCB().length > 3){
                        deleteAllMCB()
                        PushDataIntoNotification(databsaes_data_notification_mcb1)
                        PushDataIntoNotification(databsaes_data_notification_mcb2)
                      }
                  }
            }else{
                setTimeout(()=>{
                    PushDataIntoMCB(1)
                  },3000)
                  
                  if(MCB().length > 3){
                    deleteAllMCB()
                    PushDataIntoNotification(databsaes_data_notification_mcb1)
                  }
            }         
            
        }else if(going_to_database_file[0] > 400){
            if(going_to_database_file[1] > 400){
                setTimeout(()=>{
                    PushDataIntoMCB(1)
                  },3000)
                  
                  if(MCB().length > 5){
                    deleteAllMCB()
                         PushDataIntoNotification(databsaes_data_notification_mcb1)
                         PushDataIntoNotification(databsaes_data_notification_mcb2)

                  }
            }else{
                setTimeout(()=>{
                    PushDataIntoMCB(1)
                  },3000)
                  
                  if(MCB().length > 5){
                    deleteAllMCB()
                         PushDataIntoNotification(databsaes_data_notification_mcb1)
                  }
            }
        }
    }
 
})

io.sockets.on('connection',(socket)=>{
    socket.on('mcb1_power', (datamcb1) =>{
        com.write(datamcb1.toString())
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
        hasil = data.toString().replace(/(\r\n\n\r)/gm, " ").split(" "); //parsing data important !!!
        socket.emit('data_dummy', {data_dummy : hasil});

     })

})

server.listen(port, ()=>{
    console.log('listening on port' + port)
});
