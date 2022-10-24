import Vue from 'vue'

export default new Vue({
    methods:{
        adicionarToDo(toDo){
            this.$emit("adicionouToDo",toDo)
        },
        adicionouToDo(callback){
            this.$on("adicionouToDo",callback)
        }
    }
})