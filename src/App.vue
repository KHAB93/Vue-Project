
<template>

    <headerNavbar />

    <Contenumodal />

    <div id="app"></div>

    <RouterView/>
    
<body>

    <main>
      
          <ProjetCard />

          <ContactForm />

    </main>

</body>

          <FooterCard />
  
</template>

<script>

import HeaderNavbar from "./components/HeaderNavbar.vue";
import ProjetCard from "./components/ProjetCard.vue";
import FooterCard from "./components/FooterCard.vue";
import ContactForm from "./components/ContactForm.vue";
import Contenumodal from "./components/Contenumodal.vue";
import Page404 from "./components/Page404.vue";



import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "App",
  components: {
    HeaderNavbar,
    ProjetCard,
    FooterCard,
    ContactForm,
    Contenumodal,
    Page404
    
  }
}
</script>

