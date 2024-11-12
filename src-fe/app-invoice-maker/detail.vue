<template>
    <div>
        <div class="card">
            <div class="card-header bg-info">
                <strong>Invoice Info</strong>
            </div>
            <div class="card-body">
                <div class="row mb-2">
                    <div class="col-4"><label for="">No Order</label></div>
                    <div class="col"><input type="text" class="form-control" :value="$route.params.id" disabled></div>
                </div>
                <div class="row mb-2">
                    <div class="col-4"><label for="">Customer</label></div>
                    <div class="col"><input type="text" class="form-control" v-model="content.customer"></div>
                </div>
                <div class="row mb-2">
                    <div class="col-4"><label for="">Cabang JSA</label></div>
                    <div class="col">
                        <b-form-select v-model="content.cabang" :options="area_opt"></b-form-select>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-4"><label for="">Tanggal</label></div>
                    <div class="col"><input type="date" class="form-control" v-model="content.tanggal"></div>
                </div>
                <div class="row mb-2">
                    <div class="col-4"><label for="">Handphone</label></div>
                    <div class="col"><input type="number" class="form-control" v-model="content.handphone"></div>
                </div>
                <div class="row mb-2">
                    <div class="col-4"><label for="">Alamat</label></div>
                    <div class="col">
                        <textarea class="form-control" v-model="content.alamat"></textarea>
                    </div>
                </div>
                <hr>
                <div class="row mb-2">
                    <div class="col-4"><label for="">Invoice Status</label></div>
                    <div class="col">
                        <b-form-select v-model="content.status" :options="status_opt"></b-form-select>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-4"><label for="">Rekening</label></div>
                    <div class="col">
                        <b-form-select v-model="content.rekening_id" :options="rekening_opt" value-field="id" text-field="bank"></b-form-select>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-primary btn-sm" @click="update()">Save</button>
                <!-- <button class="btn btn-danger btn-sm" @click="deleteInvoice()">Delete</button> -->
                <a class="btn btn-info btn-sm" :href="`/invoice-maker#/invoice/${$route.params.id }`">Invoice</a>
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
                </div>
            </div>
            <div class="card-body">
                <b-table :fields="order.columns" :items="order.list">
                    <template #cell(description_label)="data">
                        <div>
                            <input type="text" class="form-control" v-model="data.item.description_label">
                        </div>
                    </template>
                    <template #cell(harga)="data">
                        <div>
                            <b-form-select :options="dropdownOption" value-field="id" text-field="pekerjaan"
                                @change="UpdateValue($event, data)">
                                
                            </b-form-select>
                        </div>
                    </template>
                    <template #cell(description)="data">
                        <div>
                            <input type="text" class="form-control" v-model="data.item.description">
                        </div>
                    </template>
                    <template #cell(price)="data">
                        <div>
                            <input type="number" class="form-control" v-model="data.item.price">
                        </div>
                    </template>
                    <template #cell(discount)="data">
                        <div>
                            <b-form-select v-model="data.item.discount" :options="[{ value: 0, text: 'No' }, { value: 1, text: 'Yes'}]"></b-form-select>
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
                    <template #cell(total)="data">
                        <div>
                            Rp {{ (data.item.price * data.item.qty).toLocaleString() }}
                        </div>
                    </template>


                    <template #cell(act)="data">
                        <div>
                            <button class="btn btn-sm btn-info" @click="updateOrder(data.item)"><i
                                    class="fa fa-save"></i></button>
                            <button class="btn btn-sm btn-danger"  @click="updateOrder({...data.item, active: 0})"><i class="fa fa-trash"></i></button>
                        </div>
                    </template>
                </b-table>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            content: {
                customer: '',
                cabang: '',
                tanggal: '',
                handphone: '',
                alamat: '',
                status: null,
                rekening_id: null
            },
            area_opt: [],
            status_opt: [],
            rekening_opt: [],
            dropdownOption:[],
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
                        label: 'Item',
                        key: 'harga'
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
                    {
                        key:'unit',
                        label: 'Satuan'
                    },
                    'total',
                    {
                        key: 'act',
                        label: ''
                    }
                ],
                list: []
            }
        }
    },
    methods: {
        UpdateValue(e, data){
            let value = _.find(this.dropdownOption, { id: e})
            this.order.list[data.index].description = value.pekerjaan
            this.order.list[data.index].price =value.harga_customer
            console.log(e)
            console.log(value)
            console.log(data)
        },
        updateOrder(obj) {
            axios.post(`/api/invoice-maker/update-order`, obj)
                .then((res) => {
                    this.getDetail()
                }).catch((err) => {

                })
        },
        addOrder() {
            axios.post(`/api/invoice-maker/add-order`, {
                id: this.$route.params.id
            }).then((res) => {
                this.getDetail()
            }).catch((err) => {

            })
        },
        deleteInvoice() {
            alert('tetot')
        },
        update() {
            axios.post(`/api/invoice-maker/update`, {
                ...this.content,
                id: this.$route.params.id
            }).then((res) => {
                this.getDetail()
            }).catch((err) => {

            })
        },
        getDetail() {
            axios.post(`/api/invoice-maker/detail`, {
                id: this.$route.params.id
            }).then((res) => {
                this.content = res.data.detail
                this.area_opt = res.data.area_opt
                this.status_opt = res.data.status_opt
                this.rekening_opt = res.data.rekening_opt
                this.order.list = res.data.order_list
                this.dropdownOption = res.data.harga
            }).catch((err) => {

            })
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getDetail()
        })
    },
}
</script>
<style lang="">
    
</style>