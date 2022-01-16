import axios from "axios";

const instance = axios.create({
  baseURL: "https://json-server-yugioh.herokuapp.com/cards",
});

export const getCards = (url) => {
    return instance.get(url).then(response => {
        return response.data
    })
}
