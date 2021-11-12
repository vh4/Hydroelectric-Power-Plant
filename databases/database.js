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

const mcbDatabases = ()=>{
    const file = fs.readFileSync('data/mcbDatabase.json', 'utf-8');
    const parse = JSON.parse(file)
    return parse
}

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

const deletemcbDatabases = ()=>{
    fs.writeFileSync('data/mcbDatabase.json','[]', 'utf-8')
}

const deleteAllMCB = ()=>{
    fs.writeFileSync('data/mcb.json','[]', 'utf-8')
}


const PushDataIntoNotification = (data) =>{
    const load = Notification()
    load.push(data)
    fs.writeFileSync('data/notification.json', JSON.stringify(load))
}


const PushDataIntoMCB = (data) =>{
    const load = MCB()
    load.push(data)
    fs.writeFileSync('data/mcb.json', JSON.stringify(load))
}

const pushDataIntoMcbDatabases = (data) =>{
    const load = mcbDatabases()
    load.push(data)
    fs.writeFileSync('data/mcbDatabase.json', JSON.stringify(load))
}

const DeleteDataNotification = (id) =>{
    const load = Notification()
    const hapus = load.filter(data => data.id.toString() !== id.toString())
    console.log(hapus)
    SaveNotification(hapus);
}


module.exports = {
    MCB,
    Notification,
    PushDataIntoNotification,
    PushDataIntoMCB,
    DeleteDataNotification,
    deleteAllNotification,
    deleteAllMCB,
    mcbDatabases,
    pushDataIntoMcbDatabases,
    deletemcbDatabases
}
