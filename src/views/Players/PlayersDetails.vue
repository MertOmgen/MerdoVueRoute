<template>
  <h1 style="background:darkblue;color:yellow">EN BUYUK FENERBAHCE</h1>
  <div v-if="player">
 <p> {{player.Name}} </p>
  <p> {{id}} </p>
  <p> {{player.Position}} </p>
  </div>
 
</template>

<script>
export default {
   props:['id'],

data(){
  return{
        // id: this.$route.params.id

        player:null
        
    }
},
mounted(){
  fetch('http://localhost:3000/players/' + this.id)
  .then(res=>res.json())
  .then(data=>this.player = data)
  .catch(err=> console.error(err.message))
}
}
</script>

<style>

</style>