const express = require('express');
const api = express.Router();
const db = require('knex')(require('../config/db').db);

api.get('/listmurid', async (req, res) => {
  try {
    let data = await db('t_murid');
    res.send({
      success: true,
      data: data
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      msg: 'error'
    });
  }
});

api.get('/detail/:id', async (req, res) => {
  try {
    const id = req.params.id;
    let data = await db('t_murid').where({ id: id }).first();
    res.send({
      success: true,
      data: data
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      msg: 'error'
    });
  }
});

api.post('/kirim', async (req, res) => {
  const body = req.body;
  try {
    await db('t_murid').insert({
      nis: body.nis,
      nama: body.nama,
      kelas: body.kelas,
      jk: body.jk,
      tahunmasuk: body.tahunmasuk,
      tempatlahir: body.tempatlahir,
      tanggallahir: body.tanggallahir,
      alamat: body.alamat,
      nohp: body.nohp,
    });
    res.send({
      success: true
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      msg: 'error'
    });
  }
});

api.post('/update/:id', async (req, res) => {
    const body = req.body;
    try {
        let id = req.params.id;
        await db('t_murid').update({
        nis: body.nis,
        nama: body.nama,
        kelas: body.kelas,
        jk: body.jk,
        tahunmasuk: body.tahunmasuk,
        tempatlahir: body.tempatlahir,
        tanggallahir: body.tanggallahir,
        alamat: body.alamat,
        nohp: body.nohp,
      }) .where('id',id)
      res.send({
        success: true
      });
    } catch (error) {
      console.log(error);
      res.send({
        success: false,
        msg: 'error'
      });
    }
  });

  api.post('/delete/:id', async (req, res) => {
    try {
      const id = req.params.id;
      let data = await db('t_murid').del().where({ id: id });
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

module.exports = api;
