import axios from "axios";

const baseUrl = "http://localhost:51044/api/";

export default {
  offerAsset(url = baseUrl + "Asset/GetAsset") {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },

  offers(url = baseUrl + "Asset/GetOffer") {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },

  assetTypes(url = baseUrl + "Asset/GetAssetTypes") {
    return {
      fetchAll: () => axios.get(url),
    };
  },

  carMakes(url = baseUrl + "Asset/GetCarMakes") {
    return {
      fetchAll: () => axios.get(url),
    };
  },

  leasingDocument(url = baseUrl + "Asset/GetLeasingDocument/") {
    return {
      fetchById: (id) => axios.get(url + id),
    };
  },

  carModels(url = baseUrl + "Asset/GetCarModels/") {
    return {
      fetchById: () => axios.get(url),
    };
  },

  carVersions(url = baseUrl + "Asset/GetCarVersions") {
    return {
      fetch: () => axios.get(url),
    };
  },
};
