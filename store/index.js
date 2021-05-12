export default {
  state(){
    return {
      devices: [
        {
          name: "Machine à laver",
          etat: "Allumé",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          name: "Machine à café",
          etat: "Allumé",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          name: "Machine à coudre",
          etat: "Allumé",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
      ]
    }
  },
  getters: {
    allDevices: (state) => state.devices.slice(),
    oneDevice: (state) => (id) => state.devices.find( (value,index) => index == id)
  },
  mutations: {
    SWITCH_STATUS: (state,status) => {
      state.devices[status.id].etat = status.etat == true? 'Allumé':'Eteint'
    },
    ADD_NEW_DEVICE: (state,newDevice) => {
      newDevice.etat = newDevice.etat == true? 'Allumé':'Eteint'
      state.devices.push(newDevice)
    },
    DELETE_ONE_DEVICE: (state , idDevice) => {
      state.devices.splice(idDevice,1)
    }
  },
  actions: {
    switchStatus(context,status){
      context.commit('SWITCH_STATUS',status)
    },
    addNewDevice(context,newDevice){
      context.commit('ADD_NEW_DEVICE',newDevice)
    },
    deleteOneDevice(context,idDevice){ 
      context.commit('DELETE_ONE_DEVICE',idDevice)
    }
  }
};