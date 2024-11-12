const express = require('express')
const api = express.Router()
const db = require('knex')(require('../config/db').db);

api.get('/listguru', async (req, res) => {
    const body =req.body
    try {
        let data = await db('t_guru')
        res.send({
            success: true,
            data: data
        })
    } catch (error) {
        console.log(error);
        res.send({
            success: false,
            msg: 'error'
        })
    }
});

api.get('/guru/:id', async (req,res) => {
    const body = req.body
    try {
        let id =req.params.id;
        let data = await db('t_guru').where('id',id)
        data = data[0]
        res.send({
            success: true,
            data : data,
        })
    } catch (error) {
        console.log(error)
        res.send({
            success: false,
            msg: error
        })
    }
});

api.post('/Kirim', async (req, res) => {
    const body = req.body;
    try {
      await db('t_guru').insert({
        nama_guru:body.nama,
        nip:body.nip,
        jeniskelamin:body.jk,
        tanggal_lahir:body.tanggallahir,
        tempat_lahir:body.tempatlahir,
        alamat:body.alamat,
      });
      res.send({
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.send({
        success: false,
        msg: 'error'
      });
    }
  });

api.post('/update/:id', async (req,res) => {
    const body = req.body
    try {
        let id =req.params.id;
        await db('t_guru').update({
        nama_guru:body.nama,
        nip:body.nip,
        jeniskelamin:body.jk,
        tanggal_lahir:body.tanggallahir,
        tempat_lahir:body.tempatlahir,
        alamat:body.alamat,
        }).where('id',id)
        res.send({
            success: true,

        })
    } catch (error) {
        console.log(error)
        res.send({
            success: false,
            msg: error
        })
    }
});

api.post('/delete/:id', async (req,res) => {
    const body = req.body
    try {
        const id =req.params.id;
        let data = await db('t_guru').del().where( 'id', id);
        res.send({
            success: true,

        })
    } catch (error) {
        console.log(error)
        res.send({
            success: false,
            msg: error
        })
    }
});

  
module.exports = api;