import { DATA_HEADERS } from "../constants";

const orclFunctions = {
  async fetchApi(
    miUrl,
    miMetodo,
    miObjetoDb,
    miParams = "",
    miFuncion,
    miBody
  ) {
    //const urlm = `${miUrl}${miObjetoDb}${miParams}`;
    const urlm = miUrl + miObjetoDb + (miParams ? "?" + miParams : "");
    console.log("Acción", miMetodo, urlm, miBody);
    await fetch(urlm, {
      method: miMetodo,
      body: JSON.stringify(miBody),
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        ...DATA_HEADERS,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const datReturn = res.outdata;
        miFuncion(datReturn);
      })
      .catch((err) => console.log("Error: ", err));
  },

  retParam(param) {
    return param;
  },
};
//module.exports = {functions};
export default orclFunctions;
