<template>
  <div>
    <div class="card"  v-for="(item,index) in allDevices" v-bind:key="item.id">
      <div class="card-body">
        <h5 class="card-title" title="Détail">
          <nuxt-link :to="{name:'singledevice-id',params:{id:index}}"> {{ item.name }} </nuxt-link> 
        </h5> 
        <div class="etat">
          <div>
            <span class="titre">Etat: </span>
            <span :class=" item.etat == 'Eteint'?'etatRed':'etatGreen'" > {{ item.etat }} </span>
          </div>
          <div>
            <button class="btn btn-danger float-right" @click="onChangeEtat(index,false)" :disabled="item.etat == 'Eteint'" > Eteindre </button>
            <button class="btn btn-primary float-right" @click="onChangeEtat(index,true)" :disabled="item.etat == 'Allumé'" > Allumer </button>
          </div>
        </div>
        <div class="card-text">
          <span class="titre" v-if="item.description != '' "> Description: </span> <span> {{ item.description }} </span>
        </div>
      </div>
    </div>

    <div class="alert alert-warning" role="alert" v-if="allDevices.length == 0">
      <strong> Désolé ! </strong> Aucun appareil n'est enregistré pour le moment.
    </div>
  </div>
</template>

<script>
  import Vuex from 'vuex'
  export default {
    data(){
      return {
        devices: {}
      }
    },
    computed:{
      ...Vuex.mapGetters(['allDevices','oneDevice'])
    },
    methods: {
      ...Vuex.mapActions(['switchStatus']),
      onChangeEtat(id,etat) {
        const statusDevice = {
          etat: etat,
          id: id
        }
        this.switchStatus(statusDevice)
      }
    }
  }
</script>

<style scoped>
  .card {
    margin-bottom: 2rem;
  }
  .etat {
    display: flex;
    justify-content: space-between;
  }
  .btn {
    margin-left: 1rem;
  }
  .titre{
    font-weight: bold;
  }
  .etatGreen {
    color: green;
  }
  .etatRed {
    color: red
  }
</style>