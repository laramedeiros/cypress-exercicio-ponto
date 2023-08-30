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

    it.only('Validar login com um usuário sem informar o campo senha', () => {
        cy.visit('https://app2.pontomais.com.br/registrar-ponto')
        cy.get('.form-control').first().type('lara.medeiros@atlastechnol.com')
        cy.contains('Entrar').click()
        cy.contains('[Campo obrigatório.]').should('be.visible')
    })
    
    it.skip('Validar o fluxo de Bater ponto', () => {
        cy.visit('https://app2.pontomais.com.br/registrar-ponto')
        cy.get('.form-control').first().type('lara.medeiros@atlastechnol.com')
        cy.get('.form-control').eq(1).type('L@r@0104')
        cy.contains('Entrar').click()
        cy.get('button[type="button"][class="pm-button pm-primary"]').eq(1).click()
    })

})