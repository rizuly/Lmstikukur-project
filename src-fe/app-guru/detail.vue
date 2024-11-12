<template>
    <div>
	<div>
        <h1>SMK Tikukur</h1>
    <hr>
  <ul class="list-unstyled">
    <li><h3><p class="text-primary text-bold">Filter Pengajar/Detail pegajar</p></h3></li>
  </ul>
    </div>

    <div class="card">
        <div class="card-body">
  <thead>
    <tr>
      <th scope="col">Profil Guru</th>
    </tr>
  </thead>
  <table class="table">
  <tbody>
    <tr>
      <td>
        <div class="container">
          <div class="col-12 border">
            <div>
              <div class="col-md-2">
                <br>
          <img src="\images\dummy.jpg" class="img-fluid img-thumbnail" alt="Dummy Image">
        </div>
              <ul class="list-unstyled">
                <div class="form-group mt-3">
                <label>NIP</label>
                <input type="text" v-model="content.nip" class="form-control     ">
                <label>Nama Guru</label>
                <input type="text" v-model="content.nama_guru" class="form-control     ">
                <label>Jenis Kelamin</label>
                <input type="text" v-model="content.jeniskelamin" class="form-control     ">
                <label>Tempat Lahir</label>
                <input type="text" v-model="content.tempat_lahir" class="form-control     ">
                <label>Tanggal Lahir</label>
                <input type="date" v-model="content.tanggal_lahir" class="form-control     ">
                <label>Alamat</label>
                <input type="text" v-model="content.alamat" class="form-control     ">
            </div>
              </ul>
            </div>
          </div>
        </div>
      </td>
      <td></td>
    </tr>
    <button class="btn btn-warning" @click="updateData">Update Data</button>
      <button class="btn btn-danger" @click="deleteguru">Hapus Data</button>
  </tbody>
</table>

<td><a class="btn btn-primary" href="/guru" role="button"><i class="fa fa-backward" aria-hidden="true"></i>&nbsp;&nbsp;Kembali</a></td> 

        </div>
    </div>
    </div>


</template>
<script>
	export default {
    data() {
    return {
    content: {},
    detail:[],
    };
},
computed: {
        x() {
            return this.$route.params.id
        }
    },
    methods: {

      deleteguru() {
        axios.post(`/api/guru/delete/${this.x}`)
        .then((res)=>{
          this.$router.push('/');
        }
        ).catch((err)=>{}
        )
      },

      updateData() {
        axios.post(`/api/guru/update/${this.x}`, this.content)
        .then((res)=>{
            location.reload()
            
        }).catch((err)=>{

        })
 },
 deleteData() {
      const id = 1;
 },
    getList(){
        axios.get(`/api/guru/guru/${this.x}`)
        .then((res)=>{
            this.content = res.data.data;
            
        }).catch((err)=>{

        })
    },
},
mounted() {
this.getList();
},
  };
</script>
<style lang=""></style>
