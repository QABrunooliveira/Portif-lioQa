
//Cenários de ordenação

describe('OrdenacaoSwagLabs', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')

        cy.login()
        cy.validoLogin()
    })

    it('Ordenar produtos de a para z', () => {
        cy.selecionoFiltro('az')
        cy.validarOrdenacao('az')
    })

    it('Ordenar produtos de z para a', () => {
        cy.selecionoFiltro('za')
        cy.validarOrdenacao('za')
    })

    it('Ordenar produtos por preço maior para menor', () => {
        cy.selecionoFiltro('hilo')
        cy.validarOrdenacao('hilo')
    })

    it('Ordenar produtos por preço menor para maior', () => {
        cy.selecionoFiltro('lohi')
        cy.validarOrdenacao('lohi')
    })

})