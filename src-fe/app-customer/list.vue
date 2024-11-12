<template>
    <div>
      <div class="card">
        <div class="container"></div>
        <div class="card-header bg-info">
          <div class="d-flex justify-content-between">
            <strong class="mb-0">Customer</strong>
            <div>
              <button class="btn btn-sm btn-info ml-2" @click="kirim"><i class="fa fa-plus"></i></button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="d-flex">
            <input type="text" class="form-control form-control-sm mb-2" placeholder="Search ..." v-model="search">
            <button class="btn btn-sm btn-info ml-2" @click="kirim"><i class="fa fa-plus"></i></button>
          </div>
          <b-table :fields="columns" :items="paginatedData" style="cursor: pointer" hover :filter="search" @row-clicked="openDetail">
          </b-table>
  
          <b-pagination v-model="currentPage" :total-rows="data.length" :per-page="perPage" align="center" class="mt-5">
          </b-pagination>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: [],
        search: '',
        currentPage: 1,
        perPage: 3,
        columns: [
          { key: 'no', label: 'No' },
          { key: 'nama', label: 'Nama Customer' },
          { key: 'alamat', label: 'Alamat' },
          { key: 'no_tlp', label: 'No Telepon' },
          { key: 'jenis_cst', label: 'Jenis Customer' },
          { key: 'active', label: 'Active' }
        ]
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.data.length / this.perPage);
      },
      paginatedData() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.data.slice(start, end);
      }
    },
    methods: {
      getList() {
        axios
          .get('/api/customer/list')
          .then((res) => {
            this.data = res.data.data;
          })
          .catch((err) => {
            // Tangani kesalahan jika permintaan gagal
          });
      },
      openDetail(vm) {
        // Logika untuk membuka detail data yang diklik
        this.$router.push(`/${vm.id}`);
      },
      kirim() {
        axios
          .post('/api/customer/post')
          .then((res) => {
            this.getList();
          })
          .catch((err) => {
            // Tangani kesalahan jika permintaan gagal
          });
      }
    },
    mounted() {
      this.getList();
    }
  };
  </script>
  