import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000"
});

async function brastlewarkService(page) {
  try {
    const paginationObj = {
      pageSize: 20,
      pageNumber: page
    };
    const { data } = await api.post("/", paginationObj);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}

export default brastlewarkService;
