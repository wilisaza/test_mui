const jsFunctions = {
    
   retObjectoIni (objData = []){
      let objIni = {};
      for (let i=0; i< objData.length; i++){
         objIni[objData[i].field] = "";
      }
   return objIni;
    },

   retFiltroElemento(objData = [], elemento = {}){
      let filtro = '';
      for(let i=0; i< objData.length; i++){
         if(objData[i].primary_key){
         filtro += `${objData[i].field}=${elemento[objData[i].field]}&`;
         }
      }
      filtro += `)`;
      filtro =  filtro.replace('&)','');
      return filtro;
    },

   retObjetoMod(objData = [], elemento = {}){
      let objMod = {};
      for(let i=0; i< objData.length; i++){
         if(!objData[i].primary_key){
            objMod[objData[i].field] = elemento[objData[i].field];
         }
      }
      return objMod;
   },

   retActualizacionObjeto(objData = [], elementoOrig = {}, elementoMod = {}){
      for(let i=0; i< objData.length; i++){
         if(!objData[i].primary_key){
            elementoOrig[objData[i].field] = elementoMod[objData[i].field];
         }
      }
   },

}
export default jsFunctions;