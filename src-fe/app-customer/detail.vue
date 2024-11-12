<template>
    <div class="container-fluid">
        <h1>Detail dan update Customer</h1>
        <div class="card">
            <div class="card-body">
                <form @submit="submitForm" class="mt-3 mb-4">
                    <!-- nama Data1-->
                    <div class="form-group mt-3">
                        <label>Nama</label>
                        <input type="text" v-model="formData.Data1" class="form-control col-md-8">
                    </div>
                    <!-- no tlp Data2-->
                    <div class="form-group mt-3">
                        <label>Nomer Telepon</label>
                        <input type="number" v-model="formData.Data2" class="form-control col-md-8">
                    </div>
                    <!-- pj Data3-->
                    <div class="form-group mt-3">
                        <label>Penanggung Jawab</label>
                        <input type="text" v-model="formData.Data3" class="form-control col-md-8">
                    </div>
                    <!-- nomer penanggung jawab Data4 -->
                    <div class="form-group mt-3">
                        <label>Nomer Telepon</label>
                        <input type="number" v-model="formData.Data4" class="form-control col-md-8">
                    </div>
                    <!-- Jenis Cst Data5-->
                    <div class="form-group mt-3">
                        <label class="col-md-4 h6" >Jenis Customer</label>
                        <select v-model="formData.Data5" class="form-control">
                            <option value="" disabled selected>pilih Jenis...</option>
                            <option value="perorang">PerOrangan</option>
                            <option value="perusahaan">Perusahaan</option>
                        </select>
                    </div>
                    <!-- alamat Data6-->
                    <div class="form-group mt-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Alamat</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="formData.Data6"></textarea>
                    </div>
                    <!-- active Data7 -->
                    <div class="form-group mt-3">
                        <label class="col-md-4 h6" >Active</label>
                            <select v-model="formData.Data7" class="form-control">
                                <option value="" selected>pilih Tipe...</option>
                                <option value="0">Non Active</option>
                                <option value="1">Active</option>
                            </select>
                    </div>
                    <!-- button -->
                    <div class="card-footer mt-3">
                        <input type="submit" class="btn btn-primary " value="Submit">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
data() {
    return {
    content: [],
    formData: {}
    };
},
computed: {
        x() {
            return this.$route.params.id
        }
    },
methods: {
    submitForm(event) {
        event.preventDefault();
    axios.post(`/api/customer/edit/${this.x}`, this.formData)
    .then((res) => {
      // Tanggapan setelah permintaan berhasil
        this.$router.push('/');
    })
    .catch((err) => {
      // Tangani kesalahan jika permintaan gagal
    });
},
    getList(){
        axios.get(`/api/customer/detail/${this.x}`)
        .then((res)=>{
            this.content = res.data.data;
                this.formData = {
            Data1: this.content[0].nama,
            Data2: this.content[0].no_tlp,
            Data3: this.content[0].penagnggung_jawab,
            Data4: this.content[0].no_tlp_pj,
            Data5: this.content[0].jenis_cst,
            Data6: this.content[0].alamat,
            Data7: this.content[0].active,
            };
        }).catch((err)=>{

        })
    },
},
mounted() {
this.getList();
},
};

</script>