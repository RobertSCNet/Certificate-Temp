import axios from "axios";

const api = axios.create({
    baseURL:"https://scnetwebapi.azure-api.net/api",
    headers:{"Ocp-Apim-Subscription-Key":"91a75aab8cf248d2aca799f8546b1f6c","Content-Type":"application/json"}
});

export default api;