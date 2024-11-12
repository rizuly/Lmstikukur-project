<template>
  <div class="card mx-4 my-4">
    <div class="card-header">
      <h3 class="text-bold">Detail Siswa</h3>
    </div>
    <table class="table table-sm">
      <tbody>
        <tr>
          <th scope="row">NIS</th>
          <td>:</td>
          <td><input v-model="content.nis" class="form-control" type="text"></td>
        </tr>
        <tr>
          <th scope="row">NAMA</th>
          <td>:</td>
          <td><input v-model="content.nama" class="form-control" type="text"></td>
        </tr>
        <tr>
          <th scope="row">KELAS</th>
          <td>:</td>
          <td><input v-model="content.kelas" class="form-control" type="text"></td>
        </tr>
        <tr>
          <th scope="row">TAHUN MASUK</th>
          <td>:</td>
          <td><input v-model="content.tahunmasuk" class="form-control" type="text"></td>
        </tr>
        <tr>
          <th scope="row">TEMPAT LAHIR</th>
          <td>:</td>
          <td><input v-model="content.tempatlahir" class="form-control" type="text"></td>
        </tr>
        <tr>
          <th scope="row">TANGGAL LAHIR</th>
          <td>:</td>
          <td><input v-model="content.tanggallahir" class="form-control" type="date"></td>
        </tr>
        <tr>
          <th scope="row">ALAMAT</th>
          <td>:</td>
          <td><input v-model="content.alamat" class="form-control" type="text"></td>
        </tr>
        <tr>
          <th scope="row">NO TELEPON</th>
          <td>:</td>
          <td><input v-model="content.nohp" class="form-control" type="text"></td>
        </tr>
        <tr>
          <th scope="row">STATUS</th>
          <td>:</td>
          <td><input v-model="content.status" class="form-control" type="text"></td>
        </tr>
        <button class="btn btn-success" @click="updatemurid">Update</button>
        <button class="btn btn-danger" @click="deletemurid">Delete</button>
        <!-- Tambahkan baris untuk atribut lainnya -->
      </tbody>
    </table>
    <div class="my-4">
      <a href="/murid" class="btn btn-primary">Keluar</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      content: {},
    };
  },
  computed: {
    x() {
      return this.$route.params.id;
    },
  },
  methods: {

    deletemurid() {
      axios.post(`/api/murid/delete/${this.x}`)
      .then((res) => {
        this.$router.push('/');
      })
      .catch((err) => {
        
      })
    },

    updatemurid() {
    axios.post(`/api/murid/update/${this.x}`, this.content)
      .then((res) => {
        // Tangani respons jika update berhasil
        console.log("Siswa berhasil diupdate:", res.data);
        location.reload()
        // Anda dapat melakukan tindakan lain seperti menampilkan notifikasi atau mengubah status
      })
      .catch((err) => {
        // Tangani kesalahan jika update gagal
        console.error("Gagal mengupdate siswa:", err);
        // Anda dapat melakukan tindakan lain seperti menampilkan pesan kesalahan
      });
  },

    getList() {
      axios.get(`/api/murid/detail/${this.x}`)
        .then((res) => {
          this.content = res.data.data;
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

<style>
/* Gaya untuk card */
.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  background-color: #fff;
}

/* Gaya untuk judul di card header */
.card-header {
  background-color: #f2f2f2;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

/* Gaya untuk tabel */
.table {
  width: 100%;
  border-collapse: collapse;
}

/* Gaya untuk sel header tabel */
th {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

/* Gaya untuk sel isi tabel */
td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

/* Gaya untuk tombol keluar */
.btn-primary {
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
