<template>
    <div>
        <div class="card" v-if="chart.show">
            <div class="card-body">
                <apexchart type="bar" height="380" :options="chart.chartOptions" :series="chart.series" :key="chart.key"></apexchart>
            </div>
        </div>
        <div class="card">
            <div class="card-header bg-info">
                <div class="d-flex justify-content-between">
                    <strong class="mb-0">Invoice</strong>
                    <div>
                        <button class="btn btn-warning btn-xs mb-0" @click="showChart('money')"><i class="fa fa-bar-chart"></i></button>
                        <button class="btn btn-primary btn-xs mb-0" @click="showChart('order')"><i class="fa fa-user"></i></button>
                        <button class="btn btn-danger btn-xs mb-0" @click="closeChart()"><i class="fa fa-times"></i></button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <b-nav pills variant="danger">
                    <b-nav-item variant="info" :active="current === 1" @click="changeCurrent(1)">Ongoing</b-nav-item>
                    <b-nav-item :active="current === 4" @click="changeCurrent(4)">Sph</b-nav-item>
                    <b-nav-item :active="current === 2" @click="changeCurrent(2)">Done</b-nav-item>
                    <b-nav-item :active="current === 3" @click="changeCurrent(3)">Deleted</b-nav-item>
                </b-nav>
                <br>
                <div class="d-flex">
                    <input type="text" class="form-control form-control-sm mb-2" placeholder="Search ..." v-model="search">
                    <button class="btn btn-sm btn-info ml-2" @click="Add()" v-if="current === 1"><i class="fa fa-plus"></i></button>
                </div>
                <b-table :fields="columns" :items="list" hover :current-page="pagination.current" :per-page="pagination.per" style="cursor: pointer" @row-clicked="openDetail" :filter="search">
                    <template #cell(no)="data">
                        <div>
                            {{ (data.index + 1) + ((pagination.current - 1) * pagination.per) }}
                        </div>
                    </template>
                </b-table>
                <b-pagination v-model="pagination.current" :total-rows="pagination.total" :per-page="pagination.per" align="center" v-if="pagination.total > pagination.per"
                    class="mt-5"></b-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            chart: {
                show: false,
                key: 1,
                series: [{
                    name: "sales",
                    data: []
                }],
                chartOptions: {
                    chart: {
                        type: 'bar',
                        height: 380
                    },
                    dataLabels: {
                        formatter: function (val, x) {
                            
                            return `${val.toLocaleString('id')}`
                        }
                    },
                    xaxis: {
                        type: 'category',
                        labels: {
                            formatter: function (val) {
                                return val
                            }
                        },
                        group: {
                            style: {
                                fontSize: '10px',
                                fontWeight: 700
                            }
                        }
                    },
                    yaxis: {
                        labels: {
                            formatter: function (val) {
                                return val.toLocaleString('id')
                            }
                        }
                    },
                    title: {
                        text: '',
                    },
                    tooltip: {
                        x: {
                            formatter: function (val) {
                                return val
                                // return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
                            }
                        }
                    },
                }
            },
            search: '',
            current: 1,
            columns: [
                'no',
                'customer',
                'cabang',
                'tanggal',
                'handphone',
                'alamat',
                'rekening'
            ],
            list: [],
            pagination: {
                current: 1,
                total: 0,
                per: 10
            }
        }
    },
    methods: {
        closeChart() {
            this.chart.show = false

        },
        showChart(parameter) {
            this.chart.show = true
            this.getChartData(parameter)
        },
        changeCurrent(current) {
            this.search = ''
            this.current = current
            this.getList()
        },
        openDetail(e) {
            this.$router.push(`/detail/${ e.id }`)
        },
        Add() {
            axios.post(`/api/invoice-maker/add`)
                .then((res) => {
                    this.getList()
                }).catch(() => {

                })
        },
        getList() {
            axios.post(`/api/invoice-maker/list`, {status: [this.current]})
                .then((res) => {
                    this.list = res.data.list
                    this.pagination.total = res.data.list.length
                }).catch(() => {
                
            })
        },
        getChartData(parameter) {
            axios.post(`/api/invoice-maker/chart-data`, { status: [2], parameter })
                .then((res) => {
                    this.chart.series[0]['data'] = res.data.list
                    this.chart.key += 1
                }).catch(() => {

                })
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getList()
        })
    },
}
</script>