var app = new Vue({
    el: '#app',
    data: {
        pageInfo:'',
        pageNum:1
    },
    mounted() {
        console.log("view mounted")
        this.getsearch();
    },
    methods: {
        getsearch(){
            axios.get("/product/search",{
                param:{
                    pageNum:this.pageNum
                }
            }).then(function (response){
                console.log(response)
                app.pageInfo = response.data.list;
            }).catch(function (error){
                console.log(error)
            })
        }
    },
})