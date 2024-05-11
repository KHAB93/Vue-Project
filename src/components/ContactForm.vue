<template>
    <div class="col-span-2">
      <h3 class="m-8 flex justify-center font-sans text-2xl">Formulaire de contact</h3>
  
      <form @submit.prevent="handleSubmit">
        <label for="Nom">Nom:</label>
        <input type="text" required v-model="Nom" id="Nom">
  
        <label for="Email">Email:</label>
        <input type="email" required v-model="Email" id="email">
  
        <label for="Objet">Objet:</label>
        <input type="text" required v-model="Objet" id="objet">
  
        <label for="Demande">Demande:</label>
        <input type="text" required v-model="Message" id="demande">
  
        <div class="submit">
          <button type="submit" id="envoyer">Envoyer</button>
        </div>
      </form>
  
      <div class="message">
        <div class="success" v-show="success">Votre message a été envoyé avec succès!</div>
        <div class="danger" v-show="error">Les champs ne peuvent pas être vides</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        Nom: '',
        Email: '',
        Objet: '',
        Message: '',
        success: false,
        error: false
      }
    },
    methods: {
      handleSubmit() {
        if (this.Nom && this.Email && this.Objet && this.Message) {
          // Here you can add your logic to send the form data
          // For example, you can use axios to send a POST request
          this.success = true;
          this.error = false;
        } else {
          this.success = false;
          this.error = true;
        }
      }
    }
  }
  </script>
  
  <style>



  form {
      max-width: 420px;
      margin: 30px auto;
      background: white;
      text-align: left;
      padding: 40px;
      border-radius: 10px;
     
  }
  
  label{
      color: #aaa;
      display: inline-block;
      margin: 25px 0 15px;
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
  }
  
  input {
      display:block;
      padding: 10px 6px;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #ddd;
      color: #555;
  }
  
  
  .submit {
      text-align: center;
      background: #0b6dff;
      border-radius: 20px;
      color: white;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
  }
  
  .message .success {
      font-size: 20px;
      color: green;
      position: absolute;
      animation: buttons .3s linear;
      text-align: center;
      margin-left: 940px;
  }
  
  .message .danger {
      font-size: 20px;
      color: red;
      position: absolute;
      text-align: center;
      margin-left: 20px;
      margin-left: 940px;
  }

  </style>
