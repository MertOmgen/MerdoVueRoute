<template>
  <h1>Players</h1>
  <div v-for="player in players" :key="player.id">
      <router-link :to="{name:'Players Details',params:{ id:player.id }}">

          <!-- router-link icerisinde bulunan 'params' propertysi ile bu linke tıklandıgında gonderilecek propertylerimizi tanımlıyoruz
          Burada bir key-value pair duzeni bulunmakta. Her key router parametresini temsil eder
          Key; Gonderecegimiz parametre adi('id')
          Value; Parametre ile tasinacak veri ('player.id') 
            -->
      <h2>{{player.Name}}</h2>

      </router-link> 
  </div>
</template>

<script>
export default {
data(){
    return {
        // players:[
        //     {title: 'Alex de Souza',id:10,details:'MO'},
        //     {title: 'Moussa Sow',id:7,details:'ST'},
        //     {title: 'Dirk Kuyt',id:11,details:'RW'},

        // ]

        players:[]
    }
},
mounted(){
     fetch('http://localhost:3000/players')
  .then(res=>res.json())
  .then(data=>this.players = data)
  .catch(err=> console.error(err.message))
}
}
</script>

<style>

</style>