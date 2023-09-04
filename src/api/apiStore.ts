import axios from 'axios';

const fakeStore = {
  async getItems() {
    const resp = await axios.get(`${import.meta.env.VITE_STORE_API}`);
    if(resp.status == 200) {
      return resp.data;
    } else {
      return [];
    }
  }
}

export default fakeStore;