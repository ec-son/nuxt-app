<template>
  <div>
   <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong> Plz ! </strong> {{ error.message }} <nuxt-link to="/"> Retour </nuxt-link>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'header'
  }
</script>