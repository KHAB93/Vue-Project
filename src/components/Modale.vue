<template>

<div class="bloc-modale " v-if="revele">

    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">

        <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>

        <h2 class="flex justify-center font-bold">PRESENTATION DES MES PROJETS : </h2> <br>

        
        <h1 class="text-center underline">Création de mon CV à l'aide des languages HTML et CSS :</h1>

        <p>
          - HTML <br>
          - CSS <br>
          - Flexbox <br>
          - GIT HUB <br>

        </p>
        
        <h1 class="text-center underline">Dynamisation d'un espace commentaire à l'aide de Javascript : </h1> <br>

        <p>

          - Ce code JavaScript écoute l'événement submit sur un élément de formulaire.<br>
          - Il empêche le comportement de soumission de formulaire par défaut à l'aide de event.preventDefault().<br>
          - Si tous les champs de saisie ont des valeurs, un nouveau commentaire est créé en créant plusieurs éléments DOM.<br>
          - Le nouveau commentaire est ensuite ajouté à l' commentListélément.<br>
          - Les champs du formulaire sont réinitialisés en définissant leurs valeurs.<br>
          - Le code utilise la querySelector est une méthode pour sélectionner les éléments HTML et la addEventListener est une méthode pour attacher un écouteur d'événement à l'élément de formulaire. <br>


        </p>

          
      </div>

</div>     




</template>

<script>

export default {
    name: 'Modale',
    props: ['revele','toggleModale']
};

</script>

<style scoped>

.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: #f1f1f1;
  color: #333;
  padding: 200px;
  position: fixed;
  top: 30px;
  bottom: 30px;
}

.btn-modale {
  position: absolute;
  top: 20px;
  right: 20px;
}

.btn {

  position: fixed;
  background-color: white;
}
</style>