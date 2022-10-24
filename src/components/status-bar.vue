<template>
  <div class="bar">
    <div class="status-bar">
      <div class="progress-status-bar" :style="{width:filterByCompleted + '%'}">
      </div>
    </div>
    <p>{{filterByCompleted}}%</p>
</div>
</template>

<script>
export default {
  props:{
      toDo:Array
  },
  computed:{
      filterByCompleted(){
      let size = this.toDo.length
      let completed = this.toDo.filter(x=>x.completed).length
      return Math.round((completed/size)*100)||0
      }
  },
}
</script>

<style>
.bar{
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 80%;
}
.status-bar{
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 20px;
    border: 1px solid white;
    border-top: none;
    border-radius: 8px;
  }
.progress-status-bar{
    float: left;
    height: 100%;
    text-align: center;
    background-color: green;
    border-radius: 8px;
}
p{
  position: absolute;
  z-index: 2;
}
</style>