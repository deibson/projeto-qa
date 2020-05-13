#language: pt
Funcionalidade: Registro de Books

    Cenario: Cadastrar Books

        Dado que seja cadastrado um novo livro

    Cenario: Listar Livros cadastrados

        Dado que seja listados os livros cadastrados

    Cenario: Listar Livro cadastrado

        Dado que seja cadastrado um novo livro
        E que seja listado o livro cadastrado

    Cenario: Deletar Livro cadastrado

        Dado que seja cadastrado um novo livro
        E que seja deletado um livro cadastrado

    Cenario: Atulizar Livro cadastrado

        Dado que seja listados os livros cadastrados
        E que seja atualizado os dados de um livro
        E que seja listado o livro cadastrado