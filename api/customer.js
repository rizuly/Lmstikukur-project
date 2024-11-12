const express = require('express')
const api = express.Router()
const db = require('knex')(require('../config/db').db);


api.get('/list', async (req, res) => {
    const body = req.body
    try {
        let data = await db('t_customer')
        data = data.map((o,i)=>{
          o.no = i + 1
          return o
        })
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
})

api.get('/detail/:id', async (req, res) => {
    const body = req.body
    try {
        const  id  = req.params.id;
        let data = await db('t_customer').where('id',id)
        res.send({
            success: true,
            data : data,
        })
    } catch (error) {
        console.log(error);
        res.send({
            success: false,
            msg: 'error'
        })
    }
});

api.post('/Kirim', async (req, res) => {
    const body = req.body;
    try {
      await db('t_customer').insert({
        nama: body.Data1,
        alamat: body.Data2,
        no_tlp: body.Data3,
        // active: body.Data4,
        area: body.Data5,
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

api.post('/post', async (req,res)=>{
  const body = req.body;
  try {
    await db('t_customer').insert({
      nama: 'uname',
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
})

api.post('/edit/:id', async (req,res)=>{
    const body= req.body;
    try {
      const id = req.params.id;
      await db('t_customer').update({
        nama              : body.Data1,
        no_tlp            : body.Data2,
        penagnggung_jawab : body.Data3,
        no_tlp_pj         : body.Data4,
        jenis_cst         : body.Data5,
        alamat            : body.Data6,
        active            : body.Data7,
      }).where('id',id)
      res.send({
        success: true,
      })
    } catch (error) {
      console.log(error);
      res.send({
        success: false,
        msg: 'error'
      })
    }
})
module.exports = api;