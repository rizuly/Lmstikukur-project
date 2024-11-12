<template>
    <div class="container-fluid">
        <h1>Detail dan Update Harga</h1>
        <div class="card">
            <div class="card-body">
                <form @submit="submitForm" class="mt-3 mb-4">
                    <!-- kode_pekerjaan Data1-->
                    <div class="form-group mt-3">
                        <label>Kode Pekerjaan</label>
                        <input type="text" v-model="formData.Data1" class="form-control col-md-8">
                    </div>
                    <!-- Pekerjaan Data2-->
                    <div class="form-group mt-3">
                        <label>Pekerjaan</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="formData.Data2"></textarea>
                    </div>
                    <!-- PK Data3-->
                    <div class="form-group mt-3">
                        <label>PK</label>
                        <input type="text" v-model="formData.Data3" class="form-control col-md-8">
                    </div>
                    <!-- Harga Teknisi jawab Data4 -->
                    <div class="form-group mt-3">
                        <label>Harga Teknisi</label>
                        <input type="number" v-model="formData.Data4" class="form-control col-md-8">
                    </div>
                    <!-- Harga Customer Data5 -->
                    <div class="form-group mt-3">
                        <label>Harga Teknisi</label>
                        <input type="number" v-model="formData.Data5" class="form-control col-md-8">
                    </div>
                    <!-- Jasa Data7 -->
                    <div class="form-group mt-3">
                        <label class="col-md-4 h6" >jasa</label>
                            <select v-model="formData.Data7" class="form-control">
                                <option value="" selected>pilih Tipe...</option>
                                <option value="JASA - AC SPLIT">JASA - AC SPLIT</option>
                                <option value="REFRIGERANT & SPAREPART">REFRIGERANT & SPAREPART</option>
                                <option value="AC CASSETTE CEILING FLOOR & DUCT">AC CASSETTE CEILING FLOOR & DUCT</option>
                                <option value="MATERIAL">MATERIAL</option>
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
    axios.post(`/api/harga/edit/${this.x}`, this.formData)
    .then((res) => {
      // Tanggapan setelah permintaan berhasil
        this.$router.push('/');
    })
    .catch((err) => {
      // Tangani kesalahan jika permintaan gagal
    });
},
    getList(){
        axios.get(`/api/harga/detail/${this.x}`)
        .then((res)=>{
            this.content = res.data.data;
                this.formData = {
            Data1: this.content[0].kode_pekerjaan,
            Data2: this.content[0].pekerjaan,
            Data3: this.content[0].pk,
            Data4: this.content[0].harga_teknisi,
            Data5: this.content[0].harga_customer,
            Data7: this.content[0].jasa,
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