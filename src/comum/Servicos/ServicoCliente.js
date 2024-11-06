class ServicoCliente {
    listar() {
      const clientesDoLocalStorage = localStorage.getItem('lista-clientes');
      if (clientesDoLocalStorage) {
        return JSON.parse(clientesDoLocalStorage);
      }
      return [];
    }
  
    cadastrarCliente(novoCliente) {
      const clientesDoLocalStorage = this.listar();
      clientesDoLocalStorage.push(novoCliente); // Alterado de clienteParaSalvar para novoCliente
      localStorage.setItem(
        'lista-clientes',
        JSON.stringify(clientesDoLocalStorage)
      );
    }

    editarCliente(cliente) {
      const clientesDoLocalStorage = this.listar();
      const indexCliente = clientesDoLocalStorage.findIndex(
        (c) => c.id === +cliente.id
      );
      clientesDoLocalStorage[indexCliente] = cliente;
      localStorage.setItem(
        'lista-clientes',
        JSON.stringify(clientesDoLocalStorage)
      );
    }
  
    buscarPorId(idCliente) { // Agora o idCliente é um parâmetro da função
      const clientesDoLocalStorage = this.listar();
      return clientesDoLocalStorage.find(
        (c) => c.id === +idCliente // Corrigido o acesso ao idCliente
      );
    }
  }
  
  export default ServicoCliente;
  