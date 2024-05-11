<template>

    <div class="container my-5">
    
    <modale v-bind:revele="revele"
    v-bind:toggleModale="toggleModale"></modale>
    <div v-on:click="toggleModale" class="btn btn-sucess ">Mes projets</div>
  
  </div>
</template>

<script>

import Modale from './Modale.vue'

export default {
  name: "Contenumodal",
  data() {
    return {
      revele: false
    }
  },
  components: {
    'modale': Modale
  },
  methods: {
    toggleModale: function(){
      this.revele = !this.revele
    }
  },
}

</script>

<style>

.btn {
position: fixed;
margin-left: 10px;
background-color: rgb(86, 188, 103);
color: white;
}

</style>