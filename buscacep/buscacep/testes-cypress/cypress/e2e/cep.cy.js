describe('Testes viaCep', () => {
  it('fazendo uma requisição valida', () => {
    cy.visit('/')
    cy.contains('Consulta viaCEP').should('be.visible')
    cy.get('input').type('01001000')
    cy.get('.buttonSearch').click()
    cy.get('h2').should('contain', '01001-000').should('be.visible')
    cy.get('.main > :nth-child(2)').should('contain', 'Praça da Sé').should('be.visible')
    cy.get('.main > :nth-child(3)').should('contain', 'lado ímpar').should('be.visible')
    cy.get('.main > :nth-child(4)').should('contain', 'Sé').should('be.visible')
    cy.get('.main > :nth-child(5)').should('contain', 'São Paulo - SP').should('be.visible')
  })

  it.only('fazendo uma requisição invalida', () => {
    cy.visit('/')
    cy.contains('Consulta viaCEP').should('be.visible')
    cy.get('input').type('01001')
    cy.get('.buttonSearch').click()
    cy.on('window:alert', (txt) => {
    expect(txt).to.contains('ERRO na requisição!')
    });
  })

  it.only('fazendo uma requisição sem cep', () => {
    cy.visit('/')
    cy.contains('Consulta viaCEP').should('be.visible')
    cy.get('.buttonSearch').click()
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Insira o CEP!');
    })
  })
})