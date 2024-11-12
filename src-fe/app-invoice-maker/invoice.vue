<template>
    <div>
        <div id="main-invoice">
            <div class="invoice-head">
                <div>
                    <h2 v-if="status.id !== 4 ">INVOICE</h2>
                    <h2 v-if="status.id === 4 ">SURAT PENAWARAN HARGA</h2>
                    <p class="mb-0" v-if="content.rekening_id !== 3"><strong>{{ rekening.name }}</strong></p>
                    <p>www.jasaservice.id</p>
                </div>
                <img src="/images/logo.webp" alt="">
            </div>
            <hr>
            <div class="invoice-info">
                <div class="row">
                    <div class="col-6 row">
                        <div class="col-5 mb-2">
                            <strong>Kode Order:</strong>
                        </div>
                        <div class="col-7 invoice-info-content mb-2">
                            <span>{{ $route.params.id }}</span>
                        </div>
                        <div class="col-5 mb-2">
                            <strong>Kepada Sdr/i:</strong>
                        </div>
                        <div class="col-7 invoice-info-content mb-2">
                            <span>{{ content.customer }}</span>
                        </div>
                        <div class="col-5 mb-2">
                            <strong>Cabang JSA:</strong>
                        </div>
                        <div class="col-7 invoice-info-content mb-2">
                            <span>{{ cabangJSA }}</span>
                        </div>
                    </div>
                    <div class="col-6 row">
                        <div class="col-5 mb-2">
                            <strong>Tanggal:</strong>
                        </div>
                        <div class="col-7 invoice-info-content mb-2">
                            <span>{{ tanggal }}</span>
                        </div>
                        <div class="col-5 mb-2">
                            <strong>Handphone:</strong>
                        </div>
                        <div class="col-7 invoice-info-content mb-2">
                            <span>{{ content.handphone }}</span>
                        </div>
                        <div class="col-5 mb-2">
                            <strong>Alamat:</strong>
                        </div>
                        <div class="col-7 invoice-info-content mb-2">
                            <span>{{ content.alamat }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="invoice-table">
                <table class="">
                    <thead>

                        <tr>
                            <th style="width: 10%">No</th>
                            <th style="width: 40%">Deskripsi</th>
                            <th>Harga</th>
                            <th>Qty</th>
                            <th>Satuan</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody style="border: none;">
                        <tr v-for="(vm, idx) in order.list" :key="idx">
                            <td>{{ vm.description_label }}</td>
                            <td>
                                <ul v-if="vm.description_label === ''">
                                    <li>{{ vm.description }}</li>
                                </ul>
                                <span v-else>{{ vm.description }}</span>
                            </td>
                            <td>
                                <span v-if="vm.unit === ''"></span>
                                <div v-else>
                                    <span v-if="vm.discount === 1" class="discount-class">Rp {{
                                        vm.price.toLocaleString('id')
                                    }}</span>
                                    <span v-else>Rp {{ vm.price.toLocaleString('id') }}</span>
                                </div>
                            </td>
                            <td>
                                <span v-if="vm.unit !== ''">{{ vm.qty }}</span>
                            </td>
                            <td>
                                <span v-if="vm.unit !== ''">{{ vm.unit }}</span>
                            </td>
                            <td>
                                <span v-if="vm.unit === ''"></span>
                                <div v-else>
                                    <span v-if="vm.discount === 1">Rp 0</span>
                                    <span v-else>Rp {{ (Number(vm.price) * Number(vm.qty)).toLocaleString('id')
                                    }}</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="note" v-if="status.id !== 4 ">
                                <p>Catatan: </p>
                                <ul>
                                    <li>Supaya AC memiliki durability
                                        yang bagus disarankan untuk
                                        melakukan service cuci setiap 3-4
                                        bulan sekali</li>
                                    <li>Apabila ada keluhan dengan hasil
                                        service kami, silahkan untuk
                                        menghubungi nomor admin (0812-1427-1724)</li>
                                </ul>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="garansi">
                            <td colspan="3" class="text-garansi">GARANSI PEKERJAAN</td>
                            <td colspan="3" class="text-minggu">2 MINGGU</td>
                        </tr>
                        <tr class="total-harga">
                            <td colspan="3"></td>
                            <td colspan="2" class="total-harga-content">DOWN PAYMENT</td>
                            <td class="total-harga-content">Rp 0</td>
                        </tr>
                        <tr class="total-harga">
                            <td colspan="3"></td>
                            <td colspan="2" class="total-harga-content"><strong>GRAND TOTAL</strong></td>
                            <td class="total-harga-content">Rp {{ total.toLocaleString('id') }}</td>
                        </tr>
                    </tbody>
                    <tfoot>

                        <tr>
                            <td colspan="6" class="py-4">
                                <strong>Rekening</strong><br>{{ rekening.bank }}<br>{{ rekening.name }}<br>{{
                                    rekening.number }}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
        <button class="btn btn-info" @click="downloadReport()">Download</button>
        <button class="btn btn-primary" @click="downloadReportPDF()">Download PDF</button>

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
                rekening_id: null
            },
            area_opt: [],
            order: {
                list: []
            },
            rekening_opt: [],
            status:[]
        }
    },
    computed: {
        rekening() {
            try {
                return _.chain(this.rekening_opt).find({ id: this.content.rekening_id }).value()
                // return {
                //     bank: '',
                //     pt: ''
                // }
            } catch (error) {
                return {
                    bank: '',
                    name: '',
                    number: '',
                    id: null
                }
            }
        },
        total() {
            return _.chain(this.order.list).filter(o => o.discount === 0).map(o => o.price * o.qty).sum().value()
        },
        cabangJSA() {
            return _.chain(this.area_opt).find({ value: Number(this.content.cabang) }).get('text', '').value()
        },
        tanggal() {
            return moment(this.content.tanggal, 'YYYY-MM-DD').locale('id').format('D MMM YYYY')
        }
    },
    methods: {
        downloadReport() {
            let filename = `${this.content.customer}_${this.cabangJSA}`
            html2canvas(document.querySelector("#main-invoice")).then(canvas => {
                var anchor = document.createElement("a");
                anchor.href = canvas.toDataURL("image/jpeg");
                anchor.download = filename + ".jpg";
                anchor.click();
            });
        },
        downloadReportPDF() {
            let filename = `${this.content.customer}_${this.cabangJSA}`
            // console.log(filename)
            // html2canvas(document.querySelector("#main-invoice")).then(canvas => {
            //     var anchor = document.createElement("a");
            //     anchor.href = canvas.toDataURL("image/jpeg");
            //     anchor.download = filename + ".jpg";
            //     anchor.click();
            // });
            window.jsPDF = window.jspdf.jsPDF;

            var doc = new jsPDF();
            var elementHTML = document.querySelector("#main-invoice");

            doc.html(elementHTML, {
                callback: function (doc) {
                    // Save the PDF
                    doc.save(`${filename}.pdf`);
                },
                margin: [10, 10, 10, 10],
                autoPaging: 'text',
                x: 0,
                y: 0,
                width: 190, //target width in the PDF document
                windowWidth: 675 //window width in CSS pixels
            });

        },
        getDetail() {
            axios.post(`/api/invoice-maker/detail`, {
                id: this.$route.params.id
            }).then((res) => {
                this.content = res.data.detail
                this.area_opt = res.data.area_opt
                this.order.list = res.data.order_list
                this.rekening_opt = res.data.rekening_opt
                this.status = res.data.status
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
<style lang="scss" scoped>
#main-invoice {
    max-width: 800px;
    min-height: 100px;
    color: black;
    padding: 40px;

    .invoice-head {
        display: flex;
        justify-content: space-between;

        h2 {
            font-size: 2rem;
            margin-bottom: 0;
            color: black;
        }

        p {
            color: black;
        }

        img {
            height: 100px;
        }
    }

    .invoice-info {
        .invoice-info-content {
            border-bottom: 1px dotted grey;
        }
    }

    .invoice-table {
        table {
            width: 100%;

            thead {
                th {
                    border-top: 1px solid grey;
                    border-bottom: 1px solid grey;
                    padding: 6px 0;
                }
            }

            tbody {
                td {
                    padding: 10px 0;
                    list-style-type: disc;

                    ul {
                        margin-left: 0;
                        padding-left: 0;
                        list-style-position: inside;
                    }
                }
            }
        }

        .discount-class {
            text-decoration: 2px red line-through;
        }

        .note {
            font-size: 90%;
            color: grey;
        }

        .garansi {
            border-top: 1px solid grey;
            border-bottom: 1px solid grey;

            .text-garansi {
                padding-left: 20px;
                color: grey;
            }

            .text-minggu {
                padding-right: 20px;
                text-align: right;
                color: grey;
            }
        }

        .total-harga {
            .total-harga-content {
                // border-top: 1px solid grey;
                border-bottom: 1px solid grey;
            }
        }
    }
}
</style>