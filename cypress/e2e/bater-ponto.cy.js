describe('Validar Fluxo de Bater Ponto', () => {

    it('Este é o meu primeiro teste', () => {
      expect(true).to.equal(true)
    })

    it.skip('Este é o meu segundo teste', () => {
        expect(true).to.equal(false)
    })

    it('Visitando a página de sistema de ponto do PontoMais', () => {
       cy.visit('https://app2.pontomais.com.br/registrar-ponto')
    })

    it('Clicando no botão entrar', () => {
        cy.visit('https://app2.pontomais.com.br/registrar-ponto')
        cy.contains('Entrar').click()
    })

    it.only('Digitar e-mail', () => {
        cy.visit('https://app2.pontomais.com.br/registrar-ponto')
        cy.get('.form-control').first().type('lara.medeiros@atlastechnol.com')
    })
    

})