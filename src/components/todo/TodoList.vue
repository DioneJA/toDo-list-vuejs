<template>
<div class="app">
</div>
</template>

<script>
import bus from '../../bus'
export default {
    props:{
        toDo: {type: Array, required:true}
    },
    methods:{
        adicionarNaLista(nameAux){
            let aux = {
                name: nameAux,
                completed:false
            }
            this.toDo.push(aux)
        }
    },
    created(){
        bus.adicionouToDo(name=>{
            this.adicionarNaLista(name)
        })
    }
}
</script>

<style>

</style>