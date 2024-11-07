import { json } from "react-router-dom";

class ServicoUsuarios {
     
    istar() {
        const usuariosDolocalStore = localStorage.getItem(
          'lista-usuarios'
        );
        if (usuariosDolocalStore) {
          return JSON.parse(usuariosDolocalStore);
        }
    
        return [];
      }
    
      cadastrarCliente(usuario) {
        const usuariosDolocalStore= this.listar();
        usuariosDolocalStore.push(usuario);
        localStorage.setItem('lista-usuarios', JSON.stringify(usuariosDolocalStore));
      }
    cadastrarUsuario(usuario){}
}

export default ServicoUsuarios;