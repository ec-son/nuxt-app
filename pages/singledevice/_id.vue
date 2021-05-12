<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title"> {{ device.name }} </h5>
      <div class="etat">
          <span class="titre">Etat: </span>
          <span :class=" device.etat == 'Eteint'?'etatRed':'etatGreen'" > {{ device.etat }} </span>
      </div>
      <div class="card-text">
        <span class="titre"> Description: </span> <span> {{ device.description }} </span>
      </div>
      <div>
          <button class="btn btn-danger float-right" @click="onDeleteOneDevice()"> Supprimer </button>
      </div>
    </div>
  </div>
</template>

<script>
    import Vuex from 'vuex'
    export default {
      data(){
        return {
          idDevice: this.$route.params.id,
          device: {}
        }
      },
      computed:{
        ...Vuex.mapGetters(['oneDevice'])
      },
      methods: {
        ...Vuex.mapActions(['deleteOneDevice']),
        onDeleteOneDevice(){
          this.deleteOneDevice(this.idDevice)
          this.$router.push('/')
        }
      },
      created() {
        this.device = this.oneDevice(this.idDevice)
      },
    }
</script>

<style scoped>
  .titre {
    font-weight: bold;
  }
  .etatGreen {
    color: green;
  }
  .etatRed {
    color: red
  }
</style>