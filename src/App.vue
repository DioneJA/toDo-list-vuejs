<template>
	<div id="app">
		<h1>Tarefas</h1>
		<status-bar :toDo="toDo"></status-bar>
		<input-to-do></input-to-do>
		<listToDo :toDo="toDo" @alterouLista="this.toDo = $event"></listToDo>
		<div class="to-do-point">
		<template v-if="toDo.length>0" >
			<template v-for="(x,index) in toDo">
				<to-do :key="index" :toDo="toDo" :index="index">
					<p slot="toDo">{{x.name}}</p>
				</to-do>
			</template>
		</template>
			<template v-else>
			<p>Sua vida está em dia! :)</p>
			</template>

		</div>
	</div>
</template>

<script>
import StatusBar from './components/status-bar.vue'
import inputToDo from './components/input-to-do.vue'
import toDo from './components/to-do.vue'
import listToDo from './components/list-of-to-do.vue'
export default {
  components: { StatusBar,inputToDo,toDo,listToDo},
  data(){
	return{
		toDo: []
	}
  }, 
	watch:{
		toDo:{
			deep:true,
			handler(){
				localStorage.setItem('toDo',JSON.stringify(this.toDo))
			}
		}
	},
	created(){
		const json = localStorage.getItem('toDo')
		const aux = JSON.parse(json)
		if(Array.isArray(aux)){
			this.toDo = JSON.parse(json)
		}else{
			this.toDo = []
		}
	}
}
</script>

<style>
	*{
	box-sizing: border-box;
	}
	.to-do-point{
		margin-top: 5%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		width: 90%;
	}

	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>