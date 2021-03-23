<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name:'Players'}">Players</router-link> |
    <!-- <router-link :to="{name:'Players Details'}">Players Details</router-link> -->
  </div>

<button @click="redirect">Redirect</button>
<button @click="back">Back</button>
<button @click="forward">Forward</button>

  <router-view/> 
  <!-- 
    router-view => Her zaman root dosyamızın içerisinde bulunmalıdır. router-view ile router da tanımlamış olduğumuz sayfaların
    root file içerisinde çağrılmasını sağlarız. router-view root file içerisinde nerede tanımlandıysa gösterim de orada gerçekleştirilir.
    Footer,navbar tarzı bir yapıyı sayfamıza entegre etmek istediğimiz de router-view dan önce veya sonra root file template import
    etmeliyiz.

    router-link =>  router-link servera istek yollamadan ilgili componentin dönmesini sağlayan vue yapıdısır. 
    router-link yapısının "a href" kullanımı ile arasındaki en büyük fark budur. a tagi ile aynı path cagırdıgınızda istek yollamak
    durumunda kalırsınız ve bu da performans kayıplarına yol açar. router-link ise Vue gücünden yararlanarak hali hazırda servera ilk
    istek yollandığı durumda getirilen componentlerin yapısını tekrar istek yollamaya gerek duymadan component template bize gösterir.
    "to" propertysi ile gitmek istediğimiz sayfanın pathini belirtiriz.
    ':to="{name: 'About'}"' yapısını kullanmak ise ileride path değiştirdiğiniz de bütün projedeki "to" pathlerini değiştirmenize gerek
    duymadan "name" propertysine bakıp About gördüğünde verdiğiniz path ne ise onu çağırır. Böylelikle sadece route ait "path" propertysini
    değiştirmek yeterli olacaktır.
   -->
</template>

<script>
export default {
  methods:{

    /**----- Programmatic Navigation Begin ------* */
    redirect(){
this.$router.push({name:'Home'})
    },
    back(){
this.$router.go(-1)
    },
    forward(){
this.$router.go(1)
    }

     /**----- Programmatic Navigation End ------* */
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

