const fs = require('fs');

if(!fs.existsSync('data/')){
    fs.mkdirSync('data/')
}

if(!fs.existsSync('data/mcb.json')){
    fs.writeFileSync('data/mcb.json','[]', 'utf-8')
}

if(!fs.existsSync('data/notification.json')){
    fs.writeFileSync('data/notification.json','[]', 'utf-8')
}

if(!fs.existsSync('data/notification.json')){
    fs.writeFileSync('data/mcbDatabase.json','[]', 'utf-8')
}


const MCB = ()=>{
    const file = fs.readFileSync('data/mcb.json', 'utf-8');
    const parse = JSON.parse(file)
    return parse
}
const MCB2 = ()=>{
    const file = fs.readFileSync('data/mcb2.json', 'utf-8');
    const parse = JSON.parse(file)
    return parse
}
const MCB3 = ()=>{
    const file = fs.readFileSync('data/mcb3.json', 'utf-8');
    const parse = JSON.parse(file)
    return parse
}
const MCB4 = ()=>{
    const file = fs.readFileSync('data/mcb4.json', 'utf-8');
    const parse = JSON.parse(file)
    return parse
}
const MCB5 = ()=>{
    const file = fs.readFileSync('data/mcb5.json', 'utf-8');
    const parse = JSON.parse(file)
    return parse
}
const MCB6 = ()=>{
    const file = fs.readFileSync('data/mcb6.json', 'utf-8');
    const parse = JSON.parse(file)
    return parse
}
const MCB7 = ()=>{
    const file = fs.readFileSync('data/mcb7.json', 'utf-8');
    const parse = JSON.parse(file)
    return parse
}
const MCB8 = ()=>{
    const file = fs.readFileSync('data/mcb8.json', 'utf-8');
    const parse = JSON.parse(file)
    return parse
}
const MCB9 = ()=>{
    const file = fs.readFileSync('data/mcb9.json', 'utf-8');
    const parse = JSON.parse(file)
    return parse
}
const MCB10 = ()=>{
    const file = fs.readFileSync('data/mcb10.json', 'utf-8');
    const parse = JSON.parse(file)
    return parse
}



//delete all mcb 1 -10
const deleteAllMCB = ()=>{
    fs.writeFileSync('data/mcb.json','[]', 'utf-8')
}
const deleteAllMCB2 = ()=>{
    fs.writeFileSync('data/mcb2.json','[]', 'utf-8')
}

const deleteAllMCB3 = ()=>{
    fs.writeFileSync('data/mcb3.json','[]', 'utf-8')
}
const deleteAllMCB4 = ()=>{
    fs.writeFileSync('data/mcb4.json','[]', 'utf-8')
}
const deleteAllMCB5 = ()=>{
    fs.writeFileSync('data/mcb5.json','[]', 'utf-8')
}
const deleteAllMCB6 = ()=>{
    fs.writeFileSync('data/mcb6.json','[]', 'utf-8')
}
const deleteAllMCB7 = ()=>{
    fs.writeFileSync('data/mcb7.json','[]', 'utf-8')
}
const deleteAllMCB8 = ()=>{
    fs.writeFileSync('data/mcb8.json','[]', 'utf-8')
}
const deleteAllMCB9= ()=>{
    fs.writeFileSync('data/mcb9.json','[]', 'utf-8')
}
const deleteAllMCB10 = ()=>{
    fs.writeFileSync('data/mcb10.json','[]', 'utf-8')
}


//push mcb

const PushDataIntoMCB = (data) =>{
    const load = MCB()
    load.push(data)
    fs.writeFileSync('data/mcb.json', JSON.stringify(load))
}

const PushDataIntoMCB2 = (data) =>{
    const load = MCB2()
    load.push(data)
    fs.writeFileSync('data/mcb2.json', JSON.stringify(load))
}

const PushDataIntoMCB3 = (data) =>{
    const load = MCB3()
    load.push(data)
    fs.writeFileSync('data/mcb3.json', JSON.stringify(load))
}

const PushDataIntoMCB4 = (data) =>{
    const load = MCB4()
    load.push(data)
    fs.writeFileSync('data/mcb4.json', JSON.stringify(load))
}

const PushDataIntoMCB5 = (data) =>{
    const load = MCB5()
    load.push(data)
    fs.writeFileSync('data/mcb5.json', JSON.stringify(load))
}

const PushDataIntoMCB6 = (data) =>{
    const load = MCB6()
    load.push(data)
    fs.writeFileSync('data/mcb6.json', JSON.stringify(load))
}

const PushDataIntoMCB7 = (data) =>{
    const load = MCB7()
    load.push(data)
    fs.writeFileSync('data/mcb7.json', JSON.stringify(load))
}
const PushDataIntoMCB8 = (data) =>{
    const load = MCB8()
    load.push(data)
    fs.writeFileSync('data/mcb8.json', JSON.stringify(load))
}
const PushDataIntoMCB9 = (data) =>{
    const load = MCB9()
    load.push(data)
    fs.writeFileSync('data/mcb9.json', JSON.stringify(load))
}
const PushDataIntoMCB10 = (data) =>{
    const load = MCB10()
    load.push(data)
    fs.writeFileSync('data/mcb10.json', JSON.stringify(load))
}


//------------------------------------------------------------------------------------------------

//notification
const Notification = () =>{
    const file = fs.readFileSync('data/notification.json', 'utf-8')
    const parse = JSON.parse(file)
    return parse
}

const SaveNotification = (data)=>{
    fs.writeFileSync('data/notification.json', JSON.stringify(data))
}

const deleteAllNotification = ()=>{
    fs.writeFileSync('data/notification.json','[]', 'utf-8')
}

const PushDataIntoNotification = (data) =>{
    const load = Notification()
    load.push(data)
    fs.writeFileSync('data/notification.json', JSON.stringify(load))
}

const DeleteDataNotification = (id) =>{
    const load = Notification()
    const hapus = load.filter(data => data.id.toString() !== id.toString())
    SaveNotification(hapus);
}


// toggle MCB
const toogleMCB = () =>{
    const file = fs.readFileSync('data/toggleMCB.json', 'utf-8')
    const parse = JSON.parse(file)
    return parse
}

const toggleMCBupdate = (data)=>{
    fs.writeFileSync('data/toggleMCB.json', JSON.stringify(data))
}

module.exports = {
    Notification,
    PushDataIntoNotification,
    DeleteDataNotification,
    deleteAllNotification,
    //mcb delete 
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
    
    toggleMCBupdate,
    toogleMCB
}
