<template>
    
    <header class = "mt-8 flex flex-row">

        <form class="flex-col">

          <img src="/Profil.png" alt="profil">

          <h1 class="text-center">BAHAA KHATIBI</h1>
          <p class="text-center">Développeuse Web</p>
        
        </form>

    </header>
    <nav>

      <div class="flex flex-row bg-gray-400">

        <router-link to="/" class="m-8 text-center basis-1/2">HomeFeed</router-link>
        <router-link to="/PageNoFound" class="m-8 basis-1/2 text-center">PageNoFound</router-link>

      </div>

    </nav>

</template>


<script>
  
export default {
    name: "HeaderNavbar",
}

</script>

<style>




</style>
