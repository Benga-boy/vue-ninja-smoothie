<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.name">
      <router-link :to="{name: 'SingleSmoothie', params: {smoothie_slug: smoothie.slug}} ">
      <div class="card-content">
        <h2 class="indigo-text">{{smoothie.title}}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ingredient}} </span>
          </li>
        </ul>
      </div>
      </router-link>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Index',
  data () {
    return {
      smoothies: []
    }
  },
  created() {
    // * Fetch data from the firestore
    db.collection('smoothies').get()
    .then(response => {
        response.forEach(doc => {
        let smoothie = doc.data()
        smoothie.id = doc.id
        this.smoothies.push(smoothie)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .index {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin-top: 60px;
    height: 70vh;
  }
  .index .card {
    height: 200px;
  }
  .index h1 {
    display: block;
  }
  .index h2 {
    font-size: 1.8em;
    text-align: center;
    margin-top: 0;
  }
  .index .ingredients {
    margin: 30px auto;
  }
  .index .ingredients li {
    display: inline-block;
  }
</style>
