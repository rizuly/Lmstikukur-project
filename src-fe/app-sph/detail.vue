<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header bg-info">
                <strong>Sph Info</strong>
            </div>
            <div class="card-body">
                <form @submit="submitForm" class="mt-3 mb-4">
                    <div class="row mb-2">
                        <div class="col-4"><label for="">No Order</label></div>
                        <div class="col"><input type="text" class="form-control" :value="$route.params.id" disabled></div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-4"><label for="">Customer</label></div>
                        <div class="col"><input type="text" class="form-control" v-model="formData.Data2"></div>
                    </div>
                    <!-- cabang  -->
                    <div class="row mb-2">
                        <div class="col-4"><label for="">Cabang JSA</label></div>
                        <div class="col">
                            <select v-model="formData.Data3" class="form-control">
                                <option v-for="(fm, index) in area" :value="fm.id" :key="index">{{ fm.label }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-4"><label for="">Tanggal</label></div>
                        <div class="col"><input type="date" class="form-control" v-model="formData.Data4"></div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-4"><label for="">Handphone</label></div>
                        <div class="col"><input type="number" class="form-control" v-model="formData.Data5"></div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-4"><label for="">Alamat</label></div>
                        <div class="col">
                            <textarea class="form-control" v-model="formData.Data6"></textarea>
                        </div>
                    </div>
                    <hr>
                    <div class="row mb-2">
                        <div class="col-4"><label for="">Invoice Status</label></div>
                        <div class="col">
                            <select v-model="formData.Data7" class="form-control">
                                <option v-for="(fm, index) in status" :value="fm.id" :key="index">{{ fm.label }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-4"><label for="">Rekening</label></div>
                        <div class="col">
                            <select v-model="formData.Data8" class="form-control">
                                <option v-for="(fm, index) in rekening" :value="fm.id" :key="index">{{ fm.bank }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- button -->
                    <div class="card-footer mt-3">
                        <div>
                            <input type="submit" class="btn btn-primary " value="Save">
                            <a class="btn btn-info btn-sm" href="#">SHP</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <hr>
        <div class="card">
            <div class="card-header bg-info d-flex justify-content-between">
                <div>
                    <strong>Order Detail</strong>
                </div>
                <div>
                    <button class="btn btn-sm" @click="addOrder()"><i class="fa fa-plus"></i></button>
                    <!-- <button class="btn btn-sm" @click="openModal"><i class="fa fa-plus"></i></button> -->
                </div>
            </div>
            <div class="card-body">

                <!-- Modal -->


                <!-- <div class="container">
                    <div class="row">
                        <div class="col">
                            <select name="dropdown1" v-model="formData.dropdown1" class="form-control">
                                <option v-for="(option, index) in dropdownOptions1" :value="option.kode_pekerjaan"
                                    :key="index">{{ option.pekerjaan }}</option>
                            </select>
                        </div>
                        <div class="col">
                            <input type="text" name="input2" v-model="formData.input2" class="form-control">
                        </div>
                        <div class="col">
                            <input type="text" name="input2" v-model="formData.input3" class="form-control">
                        </div>
                    </div>

                </div> -->



                <b-table :fields="order.columns" :items="order.list">
                    <template #cell(price_data)="data">
                        <div>
                            <b-form-select :options="dropdownOptions1" value-field="id" text-field="pekerjaan"
                                @change="UpdateValue($event, data)"></b-form-select>
                        </div>
                    </template>
                    <template #cell(price)="data">
                        <div>
                            <input type="number" class="form-control" v-model="data.item.price">
                        </div>
                    </template>
                    <template #cell(discount)="data">
                        <div>
                            <b-form-select v-model="data.item.discount"
                                :options="[{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }]"></b-form-select>
                        </div>
                    </template>
                    <template #cell(unit)="data">
                        <div>
                            <input type="text" class="form-control" v-model="data.item.unit">
                        </div>
                    </template>
                    <template #cell(qty)="data">
                        <div>
                            <input type="number" class="form-control" v-model="data.item.qty">
                        </div>
                    </template>
                    <!-- <template #cell(description_label)="data">
                        <div>
                            <input type="text" class="form-control" v-model="data.item.description_label">
                        </div>
                    </template>
                    <template #cell(description)="data">
                        <div>
                            <input type="text" class="form-control" v-model="data.item.description">
                        </div>
                    </template>
                    
                    <template #cell(total)="data">
                        <div>
                            Rp {{ (data.item.price * data.item.qty).toLocaleString() }}
                        </div>
                    </template>


                    <template #cell(act)="data">
                        <div>
                            <button class="btn btn-sm btn-info" @click="updateOrder(data.item)"><i
                                    class="fa fa-save"></i></button>
                            <button class="btn btn-sm btn-danger" @click="updateOrder({ ...data.item, active: 0 })"><i
                                    class="fa fa-trash"></i></button>
                        </div>
                    </template> -->
                </b-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showModal: false,
            text: '',
            onChange(e) {
                console.log(e.target.value)
                this.text = e.target.value
            },
            content: [],
            dropdownOptions1: [], // Menampung opsi dropdown 
            area: [],
            status: [],
            rekening: [],
            formData: {},
            order: {
                columns: [
                    {
                        key: 'description_label',
                        label: '',
                        thStyle: {
                            width: `10%`
                        }
                    },
                    {
                        key: 'price_data'
                    },
                    'description',
                    'price',
                    'discount',
                    {
                        key: 'qty',
                        label: 'Qty',
                        thStyle: {
                            width: `10%`
                        }
                    },
                    'unit',
                    'total',
                    {
                        key: 'act',
                        label: ''
                    }
                ],
                list: []
            },
            columns: [
                {
                    key: 'description_label',
                    label: '',
                    thStyle: {
                        width: `10%`
                    }
                },
                'description',
                'price',
                'discount',
                {
                    key: 'qty',
                    label: 'Qty',
                    thStyle: {
                        width: `10%`
                    }
                },
                'unit',
                'total',
                {
                    key: 'act',
                    label: ''
                }
            ],
        };
    },
    computed: {
        x() {
            return this.$route.params.id
        }
    },
    methods: {
        UpdateValue(e, data) {
            let value = _.find(this.dropdownOptions1, { id: e })
            this.order.list[data.index].description = value.pekerjaan
            this.order.list[data.index].price = value.harga_customer
            console.log(e)
            console.log(value)
            console.log(data)
        },
        submitForm(event) {
            event.preventDefault();
            axios.post(`/api/sph/edit/${this.x}`, this.formData)
                .then((res) => {
                    // Tanggapan setelah permintaan berhasil
                    this.$router.push('/');
                })
                .catch((err) => {
                    // Tangani kesalahan jika permintaan gagal
                });
        },
        getList() {
            axios.get(`/api/sph/detail/${this.x}`)
                .then((res) => {
                    this.content = res.data.data;
                    this.area = res.data.area;
                    this.status = res.data.status;
                    this.rekening = res.data.rekening
                    this.order.list = res.data.order
                    this.dropdownOptions1 = res.data.harga
                    // this.formData = {
                    //     Data1: this.content[0].id,
                    //     Data2: this.content[0].customer,
                    //     Data3: this.content[0].cabang,
                    //     Data4: this.content[0].tanggal,
                    //     Data5: this.content[0].handphone,
                    //     Data6: this.content[0].alamat,
                    //     Data7: this.content[0].status,
                    //     Data8: this.content[0].rekening_id,
                    // };
                }).catch((err) => {
                    // console.log(err)
                })
        },
        addOrder() {
            axios.post(`/api/sph/addOrder/${this.x}`)
                .then((res) => {
                    this.getList()
                })
                .catch((err) => {

                })
        },
        updateOrder(obj) {
            axios.post(`/api/sph/update-order`, obj)
                .then((res) => {
                    this.getDetail()
                }).catch((err) => {

                })
        },
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        // saveData() {
        //   // Ambil nilai input dari formulir
        //     const inputData = {
        //         // Ambil nilai input sesuai dengan struktur formulir Anda
        //     };

        //     // Kirim permintaan POST ke backend menggunakan Axios
        //     axios.post('/api/data', inputData)
        //         .then(response => {
        //         // Tangani respon dari backend jika sukses
        //         console.log(response.data);
        //         // Tutup modal
        //         this.closeModal();
        //         })
        //         .catch(error => {
        //         // Tangani kesalahan jika terjadi
        //         console.error(error);
        //         });
        //     }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getList()
        })
    }
    // mounted() {
    //     this.getList();
    // },
};

</script>