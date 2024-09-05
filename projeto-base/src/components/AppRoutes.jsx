import { Routes, Route } from "react-router-dom"
import App from "../templates/App/App"
import Home from "../templates/Home/Home"
import HomeNoticia from "../templates/HomeNoticia/HomeNoticia"

import LoginForgotPass from "../templates/Login/LoginForgotPass"
import Login from "../templates/Login/Login"

import Mensagem from "../templates/Mensagem/Mensagem"
import MensagemLer from "../templates/Mensagem/MensagemLer"

import Usuario from "../templates/Usuario/Usuario"
import UsuarioEditar from "../templates/Usuario/UsuarioEditar"
import UsuarioNovo from "../templates/Usuario/UsuarioNovo"
import UsuariosLista from "../templates/Usuario/UsuariosLista"
import LoginNewPass from "../templates/Login/LoginNewPass"
import UsuarioPerfil from "../templates/Usuario/UsuarioPerfil"
import FaleConosco from "../templates/Mensagem/FaleConosco"
import UsuarioAlterarSenha from "../templates/Usuario/UsuarioAlterarSenha"

// import Noticia from "../templates/Noticia/Noticia"

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<LoginForgotPass />} />
        <Route path="/newpass/:id" element={<LoginNewPass/>} />

        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/mensagemler/:id" element={<MensagemLer />} />
        <Route path="/faleconosco" element={<FaleConosco />} />

        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuarioslista" element={<UsuariosLista />} />
        <Route path="/usuarionovo" element={<UsuarioNovo />} />
        <Route path="/usuarioeditar/:id" element={<UsuarioEditar />} />
        <Route path="/usuarioperfil/:id" element={<UsuarioPerfil />} />
        <Route path="/usuarioalterarsenha/:id" element={<UsuarioAlterarSenha />} />

{/*
        <Route path="/noticia" element={<Noticia />} />
        <Route path="/noticiaslista" element={<NoticiaLista />} />
        <Route path="/noticianova" element={<NoticiaNova />} />
        <Route path="/noticiaeditar/:id" element={<NoticiaEditar />} />
  */}

      </Routes>
    </div>
  )
}
export default AppRoutes