import axios from "axios";

const url = "https://budget-eats.herokuapp.com";
export async function appendRow(preference: PreferenceEntry) {
  return axios({
    method: "post",
    url: `${url}/preference/create`,
    data: preference,
  });
}
