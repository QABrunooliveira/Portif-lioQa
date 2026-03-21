Feature: SwagLabs


    Scenario:Login válido
        Dado que o usuário acessa a página de login
        E possui um usuário válido cadastrado
        Quando insere usuário válido
        E insere senha válida
        E clica em login
        Então deve ser redirecionado para a página de produtos

    Scenario: Login inválido
        Dado que o usuário acessa a página de login
        Quando insere usuário inválido
        E insere senha inválida
        E clica em login
        Então não deve ser redirecionado para a página de produtos
        E deve visualizar mensagem de erro


    Scenario: Login com campos vazios 
        Dado que o usuário está na tela de login
        Quando clica em login sem preencher os campos
        Então o sistema deve impedir o login
        E deve apresentar aviso ao usuário


    Scenario: Ordenar produtos por preço maior para menor
        Dado que o usuário está logado
        Quando seleciona o filtro preço maior para menor
        Então os produtos devem aparecer do maior para o menor preço


    Scenario: Ordenar produtos de A para Z
        Dado que o usuário está logado
        Quando seleciona o filtro A para Z
        Então os produtos devem aparecer em ordem alfabética crescente


    Scenario: Adicionar produto ao carrinho
        Dado que o usuário está logado
        Quando clica em "Add to cart"
        Então o produto deve aparecer no carrinho


    Scenario: Finalizar compra
        Dado que o usuário está logado
        E adicionou um produto ao carrinho
        Quando acessa o carrinho
        E clica em "checkout"
        E preenche os dados obrigatórios
        E finaliza a compra
        Então deve visualizar mensagem de confirmação


    Scenario: Logout
        Dado que o usuário está logado
        Quando abre o menu
        E clica em logout
        Então deve ser redirecionado para a tela de login


    Scenario: Acessar página Sobre
        Dado que o usuário está logado
        Quando abre o menu
        E clica em Sobre
        Então deve visualizar a página informativa
    