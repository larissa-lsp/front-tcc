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

const createComFoto = (file, data, id) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('manchete', data.manchete);
    formData.append('conteudo', data.conteudo);
    formData.append('palavrasChave', data.palavrasChave);
    formData.append('fonte', data.fonte);

    for (const key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }

    return http.multipartInstance.post(API_URL + `createComFoto/${id}`, formData);
};

const update = (id, data) => {
    return http.multipartInstance.put(API_URL + `update/${id}`, data);
};

const inativar = (id) => {
    return http.mainInstance.put(API_URL + `inativar/${id}`);
};

const NoticiaService = {
    findAll,
    findById,
    getCurrentUser,
    createComFoto,
    update,
    inativar,
};

export default NoticiaService;