import http from '../common/http-common';
const API_URL = "mensagem/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const create = data => {
    const formData = new FormData();
    formData.append('emissorMensagem', data.emissorMensagem);
    formData.append('email', data.email);
    formData.append('telefone', data.telefone);
    formData.append('texto', data.texto);

    return http.mainInstance.post(API_URL + "create", formData);
};

const inativar = (id) => {
    return http.mainInstance.put(API_URL + `inativar/${id}`);
};

const marcarComoLida = (id) => {
    return http.mainInstance.put(API_URL + `marcarComoLida/${id}`);
};

const MensagemService = {
    findAll,
    findById,
    create,
    inativar,
    marcarComoLida,
}

export default MensagemService;