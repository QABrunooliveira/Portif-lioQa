Cypress.Commands.add('selecionoFiltro', (NomeFiltro) => {
    cy.get('[data-test="product-sort-container"]')
    .select(NomeFiltro)
})

Cypress.Commands.add('validarOrdenacao', (filtro) => {
    let lista = []

  if (filtro.includes('lohi') || filtro.includes('hilo')) {
    cy.get('.inventory_item_price').each(($el) => {
      lista.push(Number($el.text().replace('$', '')))
    }).then(() => {
      const ordenado = [...lista].sort((a, b) =>
        filtro === 'lohi' ? a - b : b - a
      )

      expect(lista).to.deep.equal(ordenado)
    })
  }

  if (filtro.includes('az') || filtro.includes('za')) {
    cy.get('.inventory_item_name').each(($el) => {
      lista.push($el.text())
    }).then(() => {
      const ordenado = [...lista].sort((a, b) =>
        filtro === 'az'
          ? a.localeCompare(b)
          : b.localeCompare(a)
      )

      expect(lista).to.deep.equal(ordenado)
    })
  }

})
