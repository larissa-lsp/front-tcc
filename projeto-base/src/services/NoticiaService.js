import http from '../common/http-common';
const API_URL = "noticia/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

{/* verificar com o professor sobre essa função, se será utilizada ou nao!!!!
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
*/}

// em atualizações !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const create = data => {
    const formData = new FormData();
    formData.append('manchete', data.manchete);
    formData.append('conteudo', data.conteudo);
    formData.append('palavrasChave', data.palavrasChave);
    // formData.append('dataEnvio', now.getDate());
    formData.append('dataPublicacao', data.dataPublicacao);
    formData.append('fonte', data.fonte);
    // formData.append('usuario_id', now.getId());

    return http.mainInstance.post(API_URL + "create", formData);
};

const update = (id, data) => {
    return http.multipartInstance.put(API_URL + `update/${id}`, data);
};

const inativar = (id) => {
    return http.mainInstance.put(API_URL + `inativar/${id}`);
};

const UsuarioService = {
    findAll,
    findById,
    // getCurrentUser,
    create,
    update,
    inativar,
}

export default UsuarioService;