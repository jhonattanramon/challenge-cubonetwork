import axios, { AxiosResponse } from "axios";
import configApi from "./config.json";

export async function API_addParticipation(participation: TypeParticipation) {
  return await axios
    .post(`${configApi.urlBaseDev}/dashboard/add-participation`, {
      ...participation,
    })
    .then((res) => res)
    .catch((err) => err)
}

export async function API_getAllParticipats(): Promise<AxiosResponse<TypeParticipation[]>> {
  return await axios
    .get(`${configApi.urlBaseDev}/dashboard/get-all-participants`)
}
