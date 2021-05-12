<template>
    <form>
    <div class="form-group row"> 
      <label for="name" class="col-form-label col-sm-4">Ajouter un appareil: </label>
      <input type="text" class="form-control col-sm-8" name="name" id="name" placeholder="nom de l'appareil" v-model="newDevice.name">
    </div>
    <div class="form-group row">
      <label for="desc" class="col-sm-4 col-form-label"> Description </label>
      <textarea class="form-control col-sm-8" name="desc" id="desc" rows="3" v-model="newDevice.description"></textarea>
    </div>
    <div class="form-check">
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input" name="etat" id="etat" v-model="newDevice.etat">
        Etat de l'appareil 
      </label>
    </div>
    <div>
      <button type="button" class="btn btn-primary float-right" :disabled = "newDevice.name == ''" @click="onSubmit()"> Valider </button>
    </div>
  </form> 
</template>

<script>
import Vuex from 'vuex'
export default {
  data() {
    return {
      newDevice:  {
        etat: true,
        name: '',
        description: ''
      }
    }
  },
  methods:{
    ...Vuex.mapActions(['addNewDevice']),
    onSubmit(){
      this.addNewDevice(this.newDevice)
      this.$router.push('/')
    },
  }
}
</script>

<style scoped>
    .row {
        margin: 0;
        margin-bottom: 1rem;
    }
</style>