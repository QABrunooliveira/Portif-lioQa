
//Cenários de login

describe('LoginSwagLabs', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login válido deve redirecionar para a página de produtos', () => {
        cy.login()
        cy.validoLogin()
    })

    it('Login inválido não deve redirecionar para a tela de produtos', () => {
        cy.loginInvalido()
        cy.validoMsgError()
        cy.validarNaoRedirecionamento()
    })

    it('cliente tenta logar com campos vazios', () => {
        cy.BtnLogin()
        cy.ValidoMsgDeErroCamposVazios()
    })
})