import axios from "axios";

export const convertCSVToJSON = async (page = 1, resultsPerPage = 20, maxNumberOfRecords) => {
    let res = await axios("https://www.sii.cl/servicios_online/1047-nomina_inst_financieras-1714.csv");
    let arr = res.data.split("\r\n");
    let headings = arr[0].split(";");
    let arrResponse = [];
    for (let i = (page - 1) * resultsPerPage + 1; i <= (page - 1) * resultsPerPage + resultsPerPage; i++) {
        if (i <= maxNumberOfRecords) {
            let obj = {};
            arr[i].split(";").forEach((register, registerIndex) => {
                obj[headings[registerIndex]] = register;
            })
            arrResponse.push(obj);
        }
    }
    return arrResponse;
}