<template>
  <div class="card">
    <div class="card-header bg-info fst-italic text-bold text-center">
      SISWA SMK TIKUKUR
    </div>
    <div class="card-body">
      <div class="d-flex">
        <input
          type="text"
          class="form-control form-control-sm mb-2"
          placeholder="Cari ..."
          v-model="search"
        />
        <b-button v-b-modal.modal-lg class="btn btn-sm btn-info ml-2">
          <i class="fa fa-plus"></i>
        </b-button>
        <b-modal id="modal-lg" size="lg" hide-backdrop title="Tambah Siswa" v-model="AddModal.show">
          <div>
            <label>NIS:</label>
            <input v-model="add.nis" class="form-control mb-2" type="text">
            <label>Nama:</label>
            <input v-model="add.nama" class="form-control mb-2" type="text">
            <label>Kelas:</label>
            <input v-model="add.kelas" class="form-control mb-2" type="text">
            <label>Jenis Kelamin:</label>
            <select v-model="add.jk" class="form-control mb-2">
              <option value="" disabled>Pilih Kelamin</option>
              <option value="Laki-Laki">Laki-Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <label>Tahun Masuk:</label>
            <input v-model="add.tahunmasuk" class="form-control mb-2" type="text">
            <label>Tempat Lahir:</label>
            <input v-model="add.tempatlahir" class="form-control mb-2" type="text">
            <label>Tanggal Lahir:</label>
            <input v-model="add.tanggallahir" class="form-control mb-2" type="date">
            <label>Alamat:</label>
            <input v-model="add.alamat" class="form-control mb-2" type="text">
            <label>No HP:</label>
            <input v-model="add.nohp" class="form-control mb-2" type="text">
          </div>
          <button class="btn btn-primary" @click="kirimData">Kirim Data</button>
        </b-modal>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Kelas</th>
            <th scope="col">Jenis Kelamin</th>
            <th scope="col">Alamat</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(siswa, idx) in data" :key="idx">
            <th scope="row">{{ idx + 1 }}</th>
            <td>{{ siswa.nama }}</td>
            <td>{{ siswa.kelas }}</td>
            <td>{{ siswa.jk }}</td>
            <td>{{ siswa.alamat }}</td>
            <td>
              <a class="btn btn-primary" :href="'/murid#/' + siswa.id" role="button">
                <i class="fa fa-address-card" aria-hidden="true"></i> Detail
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
      search: '',
      AddModal: {
        show: false,
      },
      add: {
        nama: '',
        kelas: '',
        jk: '',
        tahunmasuk: '',
        tempatlahir: '',
        tanggallahir: '',
        alamat: '',
        nohp: '',
      },
    };
  },
  methods: {
    kirimData() {
      axios.post('/api/murid/kirim', this.add)
        .then((res) => {
          this.getList();
          this.AddModal.show = false;
          this.add = {
            nama: '',
            kelas: '',
            jk: '',
            tahunmasuk: '',
            tempatlahir: '',
            tanggallahir: '',
            alamat: '',
            nohp: '',
          };
        })
        .catch((err) => {
          // Tangani kesalahan jika permintaan gagal
        });
    },
    getList() {
      axios.get('/api/murid/listmurid')
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
  },
};
</script>

<style lang="scss">
/* Tambahkan gaya kustom Anda di sini */
</style>
