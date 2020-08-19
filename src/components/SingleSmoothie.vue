<template>
  <div v-if="smoothie" class="single-smoothie">
    <h2>{{smoothie.title}}</h2>
      <div class="card medium">
        <div class="card-image">
          <img src="https://thefirstyearblog.com/wp-content/uploads/2016/02/Rainbow-Smoothie-9B-480x360.jpg" alt="Smoothie" />
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
            <router-link :to="{ name: 'EditSmoothie', params: {smoothie_slug: smoothie.slug}} "><i class="material-icons edit">edit</i></router-link>
            <h3>Ingredients:</h3>
            <ul>
              <li v-for="(ing, index) in smoothie.ingredients" :key="index"><span class="chip">
                {{ing}}</span> </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import db from "@/firebase/init"
import slugify from "slugify"
export default {
  name: "SingleSmoothie",
  data() {
    return {
      smoothie: null
    }
  },
  methods: {
      deleteSmoothie(id) {
      db.collection('smoothies').doc(id).delete()
      .then(() => {
        this.smoothies = this.smoothies.filter(smoothie => smoothie.id !== id)
      })
    }
  },
  created() {
    let ref = db
      .collection("smoothies")
      .where("slug", "==", this.$route.params.smoothie_slug)
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.smoothie = doc.data()
        this.smoothie.id = doc.id
      })
    })
  }
}
</script>

<style>
.single-smoothie h2 {
  text-align: center;
  margin-bottom: 30px;
}
.single-smoothie .card {
  width: 25%;
  margin: auto;
}
.single-smoothie .card {
  height: 450px;
  margin-bottom: 2em;
}
.single-smoothie .card-content h3 {
  margin-top: 0.6em;
  margin-bottom: 24px;
}
.single-smoothie .card-content ul li {
  display: inline-block;
}
  .single-smoothie .edit {
    position: absolute;
    left: 4px;
    font-size: 1.4em;
    cursor: pointer;
  }
  .single-smoothie .delete {
    position: absolute;
    right: 4px;
    cursor: pointer;
    color: red;
    font-size: 1.4em;
  }
</style>