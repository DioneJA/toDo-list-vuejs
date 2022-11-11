<template >
<div class="input">
  <div class="input-to-do">
    <input type="text" placeholder="Nova tarefa?" ref="add" v-model="name" @keyup.13="adicionarToDo()"><button @click="adicionarToDo()">+</button>
  </div>  
</div>
</template>

<script>
import bus from '../../bus'
export default {
  data(){
    return{
      name:''
    }
  },
  methods:{
    adicionarToDo(){
      if(this.name!=""){
        bus.adicionarToDo(this.name)
        this.name = ""
      }

    }
  },
}
</script>

<style scoped>
.input{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100%;
}
.input-to-do{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 20%;
    margin-top: 5%;
    height: 100%;
    border-radius: 8px;
}
input{
    flex: 9;
    font-size: 17px;
    height: 100%;
    outline: none;
    border: none;
    padding-left: 10px;
    border-radius: 8px 0 0 8px;
}
input::placeholder{
  font-size: 17px;
}
button{
    flex: 1;
    transition: .3s;
    height: 100%;
    border-radius: 0 8px 8px 0;
    border: none;
    color:white;
    background-color: rgb(24, 24, 173);
    cursor: pointer;
}
button:hover{

  background-color: rgb(44, 44, 176);
}
</style>