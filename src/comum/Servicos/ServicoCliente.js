class ServicoCliente {
    listar() {
      const clientesDoLocalStorage = localStorage.getItem('clientes');
      if (clientesDoLocalStorage) {
        return JSON.parse(clientesDoLocalStorage);
      }
      return [];
    }
  
    salvar(novoCliente) {
      const clientesDoLocalStorage = this.listar();
      clientesDoLocalStorage.push(novoCliente); // Alterado de clienteParaSalvar para novoCliente
      localStorage.setItem(
        'clientes',
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
  