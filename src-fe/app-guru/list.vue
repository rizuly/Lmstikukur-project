<template>
    <div>
	<div>
        <h1>SMK Tikukur</h1>
    <hr>
  <ul class="list-unstyled">
    <li><h1>Filter Pengajar</h1></li>
    <b-container class="bv-example-row">
  <b-row>
    <h3>Parameter Pencarian</h3>
    <b-col></b-col>
    <b-col></b-col>
    <b-col></b-col> 
    <b-col></b-col>
    <b-col></b-col>
    <b-col><br> 
        <button class="btn btn-primary" @click="OpenModal()">Add</button>
    </b-col>
  </b-row>
</b-container>
  </ul>
    </div>


    <div class="card">
        <div class="card-body">
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Infromasi Pengajar</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(vm, idx) in data" :key="idx">
        <td>

        </td>
        <td> 
            <div class="container">
                <div class="row">
                    <div class="col-md-2">
                    <img :src="vm.foto_path " class="img-fluid img-thumbnail" alt="Dummy Image">
                    </div>
                    <div class="col-md-10">
                    <h5>Nama: {{ vm.nama_guru}}, ({{ vm.nip }})</h5>
                    <h5>Alamat : {{ vm.alamat }}</h5>
                    </div>
                </div>
            </div>
        </td>
        <td>
            <a class="btn btn-primary" :href="'/guru#/' + vm.id" role="button">
                <i class="fa fa-address-card" aria-hidden="true"></i> Detail
            </a>

            </td>

    </tr>


      <!-- <tr>
        <th scope="row">1</th>
        <td> <div class="container">
      <div class="row">
        <div class="col-md-2">
          <img src="\images\dummy.jpg" class="img-fluid img-thumbnail" alt="Dummy Image">
        </div>
        <div class="col-md-10">
          <h5>Muhammad Arif Rahman, S.Pd (202307006)</h5>
          <h5>Alamat : JL.PAHLAWAN</h5>
        </div>
      </div>
    </div></td>
        <td></td>
        <td><a class="btn btn-primary" href="/guru#/123 " role="button"><i class="fa fa-address-card" aria-hidden="true"></i> Detail</a></td>
      </tr> -->
  </tbody>
</table>
        </div>
    </div>

    <b-modal v-model="AddModal.show" hide-backdrop>
        <template #modal-header>
            <h5>Tambah Pengajar/Guru</h5>
            </template>
            <div class="mb-3">
                <label for="formFile" class="form-label">Masukan Foto Anda</label>
                <input class="form-control" type="file" id="formFile">
            </div>
            <div class="form-group mt-3">
                <label>NIP</label>
                <input type="text" v-model="add.nip" class="form-control     ">
            </div>
            <div class="form-group mt-3">
                  <label>Nama</label>
                  <input type="text" v-model="add.nama" class="form-control     ">
            </div>
            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">Jenis Kelamin</label>
              <select class="form-select form-control" id="inputGroupSelect01" v-model="add.jk">
                <option selected>Pilih</option>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div class="form-group mt-3">
                <label>Tempat Lahir</label>
                <input type="text" v-model="add.tempatlahir" class="form-control     ">
            </div>
            <div class="form-group mt-3">
                <label>Tanggal Lahir</label>
                <input type="date" v-model="add.tanggallahir" class="form-control     ">
            </div> 
            <div class="form-group mt-3">
                <label>Alamat</label>
                <input type="text" v-model="add.alamat" class="form-control     ">
            </div>
    <template #modal-footer>
      <button class="btn btn-primary" @click="kirimData">Kirim Data</button>
    </template>
    </b-modal>


    </div>


</template>
<script>
	export default {
        data() {
            return{
                data: [],
                AddModal: {
                    show:false,
                },
                add:{
                },
                post:{

                }
            }
        },
        methods: {
          kirimData(){
            axios.post('/api/guru/kirim',this.add)
            .then((res)=> {
              location.reload()
            })
            .catch((err)=> {

            })
          },
        OpenModal(){
            this.AddModal.show = true
        },
        getList() {
            axios.get('/api/guru/listguru')
            .then((res) => {
                this.data = res.data.data;
            })
            .catch((err) => {
                // Tangani kesalahan jika permintaan gagal
            });
        },
    },
    mounted() {
        this.getList();
    }
};
</script>
<style lang=""></style>
