const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server);
const bodyparser = require('body-parser')
const Router = require('./Router/web')
const path = require('path')
const expressLayouts = require('express-ejs-layouts');
const {PushDataIntoMCB, PushDataIntoNotification} = require('./databases/database')
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
    going_to_database_file = data.toString().replace(/(\r\n\n\r)/gm, ",").split(","); //parsing data important !!!
    var today = new Date();

    //mcb 1
    if(going_to_database_file[0] != 'undefined'){
        if(going_to_database_file[0] > 200 && going_to_database_file[0] <= 220){
            const databsaes_data_notification_mcb1 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[0],
                mcb:1,
                status: 'HATI-HATI',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb1)
        }else if(going_to_database_file[0] > 220){
            const databsaes_data_notification_mcb1 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[0],
                mcb:1,
                status: 'KELEBIHAN DAYA, SEGERA DI CHECK !',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb1)
        }
    }
    //mcb 2
    if(going_to_database_file[1] !== 'undefined'){
        if(going_to_database_file[1] > 200 && going_to_database_file[1] <= 220){
            const databsaes_data_notification_mcb2 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[1],
                mcb:2,
                status: 'HATI-HATI',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb2)
        }else if(going_to_database_file[1] > 220){
            const databsaes_data_notification_mcb2 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[1],
                mcb:2,
                status: 'KELEBIHAN DAYA, SEGERA DI CHECK !',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb2)
        }
    }
    //mcb 3
    if(going_to_database_file[2] !== 'undefined'){
        if(going_to_database_file[2] > 200 && going_to_database_file[2] <= 220){
            const databsaes_data_notification_mcb3 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[2],
                mcb:3,
                status: 'HATI-HATI',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb3)
        }else if(going_to_database_file[2] >= 220){
            const databsaes_data_notification_mcb3 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[2],
                mcb:3,
                status: 'KELEBIHAN DAYA, SEGERA DI CHECK !',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb3)
        }
    }
    //mcb 4
    if(going_to_database_file[3] != 'undefined'){
        if(going_to_database_file[3] > 200 && going_to_database_file[3] <= 220){
            const databsaes_data_notification_mcb4 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[3],
                mcb:4,
                status: 'HATI-HATI',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb4)
        }else if(going_to_database_file[3] > 220){
            const databsaes_data_notification_mcb4 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[3],
                mcb:4,
                status: 'KELEBIHAN DAYA, SEGERA DI CHECK !',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb4)
        }
    }
       //mcb 5

       if(going_to_database_file[4] != 'undefined'){
        if(going_to_database_file[4] > 200 && going_to_database_file[4] <= 220){
            const databsaes_data_notification_mcb5 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[4],
                mcb:5,
                status: 'HATI-HATI',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb5)
        }else if(going_to_database_file[4] > 220){
            const databsaes_data_notification_mcb5 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[4],
                mcb:5,
                status: 'KELEBIHAN DAYA, SEGERA DI CHECK !',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb5)
        }
       }

       //mcb 6
      if(going_to_database_file[5] != 'undefined'){
        if(going_to_database_file[5] > 200 && going_to_database_file[5] <= 220){
            const databsaes_data_notification_mcb6 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[5],
                mcb:6,
                status: 'HATI-HATI',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb6)
        }else if(going_to_database_file[5] > 220){
            const databsaes_data_notification_mcb6 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[5],
                mcb:6,
                status: 'KELEBIHAN DAYA, SEGERA DI CHECK !',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb6)
        }
      }
       //mcb 7
    if(going_to_database_file[6] !== 'undefined'){
        if(going_to_database_file[6] > 200 && going_to_database_file[6] <= 220){
            const databsaes_data_notification_mcb7 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[6],
                mcb:7,
                status: 'HATI-HATI',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb7)
        }else if(going_to_database_file[6] > 220){
            const databsaes_data_notification_mcb7 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[6],
                mcb:7,
                status: 'KELEBIHAN DAYA, SEGERA DI CHECK !',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb7)
        }

    }
       //mcb 8
    if(going_to_database_file[7] != 'undefined'){
        if(going_to_database_file[7] > 200 && going_to_database_file[7] <= 220){
            const databsaes_data_notification_mcb8 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[7],
                mcb:8,
                status: 'HATI-HATI',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb8)
        }else if(going_to_database_file[7] > 220){
            const databsaes_data_notification_mcb8 =
            {
                id:Math.random(),
                kelebihan_daya:going_to_database_file[7],
                mcb:8,
                status: 'KELEBIHAN DAYA, SEGERA DI CHECK !',
                tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
            }
            PushDataIntoNotification(databsaes_data_notification_mcb8)
        }
    }

           //mcb 9
        if(going_to_database_file[8] != 'undefined'){
            if(going_to_database_file[8] > 200 && going_to_database_file[8] <= 220){
                const databsaes_data_notification_mcb9 =
                {
                    id:Math.random(),
                    kelebihan_daya:going_to_database_file[8],
                    mcb:9,
                    status: 'HATI-HATI',
                    tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
                }
                PushDataIntoNotification(databsaes_data_notification_mcb9)
            }else if(going_to_database_file[8] > 220){
                const databsaes_data_notification_mcb9 =
                {
                    id:Math.random(),
                    kelebihan_daya:going_to_database_file[8],
                    mcb:9,
                    status: 'KELEBIHAN DAYA, SEGERA DI CHECK !',
                    tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
                }
                PushDataIntoNotification(databsaes_data_notification_mcb9)
            }
        }
           //mcb 10
        if(going_to_database_file[9] != 'undefined'){
            if(going_to_database_file[9] > 200 && going_to_database_file[9] <= 220){
                const databsaes_data_notification_mcb10 =
                {
                    id:Math.random(),
                    kelebihan_daya:going_to_database_file[9],
                    mcb:10,
                    status: 'HATI-HATI',
                    tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
                }
                PushDataIntoNotification(databsaes_data_notification_mcb10)
            }else if(going_to_database_file[9] > 220){
                const databsaes_data_notification_mcb10 =
                {
                    id:Math.random(),
                    kelebihan_daya:going_to_database_file[9],
                    mcb:10,
                    status: 'KELEBIHAN DAYA, SEGERA DI CHECK !',
                    tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
                }
                PushDataIntoNotification(databsaes_data_notification_mcb10)
            }
        }
            // var today1 = new Date();
            //
            //
            // var database_data =
            // {
            //     mcb1:{
            //         id:Math.random(),
            //         data: going_to_database_file[0],
            //         tanggal:today1.getFullYear()+'-'+(today1.getMonth()+1)+'-'+today1.getDate() + ' ' + today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds()
            //     },
            //     mcb2:{
            //         id:Math.random(),
            //         data:going_to_database_file[1],
            //         tanggal:today1.getFullYear()+'-'+(today1.getMonth()+1)+'-'+today1.getDate() + ' ' + today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds()
            //     },
            //     mcb3:{
            //         id:Math.random(),
            //         data:going_to_database_file[2],
            //         tanggal:today1.getFullYear()+'-'+(today1.getMonth()+1)+'-'+today1.getDate() + ' ' + today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds()
            //     },
            //     mcb4:{
            //         id:Math.random(),
            //         data:going_to_database_file[3],
            //         tanggal:today1.getFullYear()+'-'+(today1.getMonth()+1)+'-'+today1.getDate() + ' ' + today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds()
            //     },
            //     mcb5:{
            //         id:Math.random(),
            //         data:going_to_database_file[4],
            //         tanggal:today1.getFullYear()+'-'+(today1.getMonth()+1)+'-'+today1.getDate() + ' ' + today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds()
            //     },
            //     mcb6:{
            //         id:Math.random(),
            //         data:going_to_database_file[5],
            //         tanggal:today1.getFullYear()+'-'+(today1.getMonth()+1)+'-'+today1.getDate() + ' ' + today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds()
            //     },
            //     mcb7:{
            //         id:Math.random(),
            //         data:going_to_database_file[6],
            //         tanggal:today1.getFullYear()+'-'+(today1.getMonth()+1)+'-'+today1.getDate() + ' ' + today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds()
            //     },
            //     mcb8:{
            //         id:Math.random(),
            //         data:going_to_database_file[7],
            //         tanggal:today1.getFullYear()+'-'+(today1.getMonth()+1)+'-'+today1.getDate() + ' ' + today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds()
            //     },
            //     mcb9:{
            //         id:Math.random(),
            //         data:going_to_database_file[8],
            //         tanggal:today1.getFullYear()+'-'+(today1.getMonth()+1)+'-'+today1.getDate() + ' ' + today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds()
            //     },
            //     mcb10:{
            //         id:Math.random(),
            //         data:going_to_database_file[9],
            //         tanggal:today1.getFullYear()+'-'+(today1.getMonth()+1)+'-'+today1.getDate() + ' ' + today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds()
            //     },
            // }
            //
            // setTimeout(()=>{
            //   PushDataIntoMCB(1)
            // },3000)
            //
            // if(MCB().length > 5){
            //   deleteAllMCB()
            //   pushDataIntoMcbDatabases(database_data)
            // }

})


// IMPORTANT : ngk bisa membuat delay pada serialPort
// karena antrian berjalan 1 detik dari arduino tidak berhenti !!




// var data = 0;
// parses.on("data", function(data){
//   setInterval(() =>{
//     database_data_val = data.toString().replace(/(\r\n\n\r)/gm, " ").split(" "); //parsing data important !!!
//     console.log(database_data_val)
//   }, 3000)
// })


io.sockets.on('connection',(socket)=>{
    socket.on('mcb1_power', (datamcb1) =>{
        console.log(datamcb1)
    })
    socket.on('mcb2_power', (datamcb2) =>{
        console.log(datamcb2)
    })
    socket.on('mcb3_power', (datamcb3) =>{
        console.log(datamcb3)
    })
    socket.on('mcb4_power', (datamcb4) =>{
        console.log(datamcb4)
    })
    socket.on('mcb5_power', (datamcb5) =>{
        console.log(datamcb5)
    })
    socket.on('mcb6_power', (datamcb6) =>{
        console.log(datamcb6)
    })
    socket.on('mcb7_power', (datamcb7) =>{
        console.log(datamcb7)
    })
    socket.on('mcb8_power', (datamcb8) =>{
        console.log(datamcb8)
    })
    socket.on('mcb9_power', (datamcb9) =>{
        console.log(datamcb9)
    })
    socket.on('mcb10_power', (datamcb10) =>{
        console.log(datamcb10)
    })
     parses.on('data',(data)=>{
        hasil = data.toString().replace(/(\r\n\n\r)/gm, " ").split(" "); //parsing data important !!!
        socket.emit('data_dummy', {data_dummy : hasil});
     })

})

server.listen(port, ()=>{
    console.log('listening on port' + port)
});
