<template>

<div class="to-do" @click="setCompleted()" :class="{'completed': toDo[index].completed,'not-completed':!toDo[index].completed}">
            <slot name="toDo" :class="{'completed-through':toDo[index].completed}"></slot>
            <button class="remove" @click="deleteToDo(index)">X</button>
    </div>

</template>

<script>
export default {
    props:{
        toDo:Array,
        index: Number
    },
    methods:{
        setCompleted(){
            this.toDo[this.index].completed = !this.toDo[this.index].completed
        },
        deleteToDo(index){
		this.toDo.splice(index,1)
        this.toDo[this.index].completed = !this.toDo[this.index].completed
	    }
    }
}
</script>
<style>
.to-do{
    transition: .3s;
    font-family: monospace;
    font-size: 16px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    min-height: 125px;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
}
.to-do:hover{
    transform: scale(1.02);
}
.to-do p{
    padding: 5%;
}
.completed{
    background: rgb(7,40,0);
    background: linear-gradient(90deg, rgb(19, 114, 0) 0%, rgb(19, 114, 0) 4%, rgba(18,152,0,1) 5%);
}
.completed p{
    text-decoration: line-through;
}
.not-completed{
    background: rgb(7,40,0);
    background: linear-gradient(90deg, rgb(151, 1, 1) 0%, rgb(151, 1, 1) 4%, rgb(190, 45, 45) 5%);
}
.remove{
    transition: .3s;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    margin: 5px;
    border-radius: 50%;
    border: none;
    width: 30px;
    height: 30px;
    color: white;
    backdrop-filter: blur( 13.5px );
    background: rgba(40, 40, 40, 0.35);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    -webkit-backdrop-filter: blur( 13.5px );
    cursor: pointer;
}
.remove:hover{
    transform: scale(1.05);
     backdrop-filter: blur( 13.5px );
    background: rgba(140, 140, 140, 0.35);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    -webkit-backdrop-filter: blur( 13.5px );
}
</style>