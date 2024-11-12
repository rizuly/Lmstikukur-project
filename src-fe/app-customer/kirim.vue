<template>
    <div class="container-fluid">
		<h1>Tambah Customer</h1>
        <div class="card">
            <div class="card-body">
                <form @submit="submitForm" class="mt-3 mb-4">
                    <!-- nama Data1-->
                    <div class="form-group mt-3">
                        <label>Nama</label>
                        <input type="text" v-model="formData.Data1" class="form-control col-md-8">
                    </div>
                    <!-- no tlp Data3-->
                    <div class="form-group mt-3">
                        <label>Nomer Telepon</label>
                        <input type="text" v-model="formData.Data3" class="form-control col-md-8">
                    </div>
                    <!-- area Data5-->
                    <div class="form-group mt-3">
                        <label class="col-md-4 h6" >Area</label>
                        <select v-model="formData.Data5" class="form-control">
                            <option value="" disabled selected>pilih area...</option>
                            <option v-for="(fm, index) in area" :value="fm.id" :key="index">{{ fm.label }} || {{ fm.area }}</option>
                            <!-- <option value=" 1">{{area[0].label}}</option> -->
                        </select>
                    </div>
                    <!-- alamat Data2-->
                    <div class="form-group mt-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Alamat</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="formData.Data2"></textarea>
                    </div>
                    <!-- active Data4 -->
                    
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
    area: [],
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
    axios.post(`/api/customer/kirim`, this.formData)
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
            this.area = res.data.area
            
        }).catch((err)=>{

        })
    },
},
mounted() {
this.getList();
},
};

</script>