const express = require('express');
const Routers = express.Router()
const {Notification, DeleteDataNotification, deleteAllNotification, toogleMCB} = require('../databases/database')

Routers.get('/', (req, res)=>{
    res.render('index', {layout:'./layouts/app.ejs', notif:Notification(), toggleMCB:toogleMCB(), title: 'Dashboard'})

})
Routers.get('/notification', (req, res)=>{
    res.render('notification', {
        layout:'./layouts/app.ejs',
        notif:Notification(),
        title: 'Notif',
        msg: req.flash('delete')
    })
})

Routers.get('/notification/id/:id', async function (req, res) {
    DeleteDataNotification(req.params.id)
    await req.flash('delete', 'Data berhasil di hapus !');
    res.redirect('/notification')
})

Routers.get('/notification/deleted', async function (req, res) {
    deleteAllNotification()
    await req.flash('delete', 'semua data berhasil di hapus !');
    res.redirect('/notification')
})

Routers.get('/panduan', (req, res)=>{
    res.render('panduan', {layout:'./layouts/app.ejs', notif:Notification(), title: 'Panduan'})

})

module.exports = Routers
