describe('Kamus Taspen', () => {
    it('KT1', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1)').click()
      cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').click()
      cy.get('.styles_cssTextTitle__cQOyH')
        .should('contain', 'Kamus Taspen')
    })
  
    it('KT2', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1)').click()
      cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').click()
      cy.get('.styles_cssTextTitle__cQOyH')
        .should('contain', 'Kamus Taspen')
      cy.get("div[class='accordion'] div:nth-child(1) div:nth-child(1) div:nth-child(1)").click()
      cy.get("div[class='collapse show'] div[class='card-body']")
        .should('include.text', 'Aparatur Sipil Negara')
    })
  })