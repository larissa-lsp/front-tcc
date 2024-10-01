import http from '../common/http-common';
const API_URL = "noticia/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const createComFoto = (file, data, email) => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('manchete', data.manchete);
    formData.append('conteudo', data.conteudo);
    formData.append('palavrasChave', data.palavrasChave);
    formData.append('fonte', data.fonte);

    for (const key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }

    return http.multipartInstance.post(API_URL + `createComFoto/${email}`, formData);
};

const inativar = (id) => {
    return http.mainInstance.put(API_URL + `inativar/${id}`);
};

const alterar = (file, id, data) => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('manchete', data.manchete);
    formData.append('conteudo', data.conteudo);
    formData.append('palavrasChave', data.palavrasChave);
    formData.append('fonte', data.fonte);
  
    for (const key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    } 
  
    return http.multipartInstance.put(API_URL + `alterar/${id}`, formData);
  };

const NoticiaService = {
    findAll,
    findById,
    getCurrentUser,
    createComFoto,
    inativar,
    alterar,
};

export default NoticiaService;