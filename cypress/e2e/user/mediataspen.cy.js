describe('Media Taspen', () => {
    it('MT1', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.scrollTo('0', '2800')
      cy.get(".styles_cssTitle__o75U1").should('include.text', 'Konten Terbaru')
      cy.get("div[class='col-sm-12 mt-5'] div[class='row']").should('have.length', '1')
    })
  
    it('MT2', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.scrollTo('0', '2800')
      cy.get(".styles_cssTitle__o75U1").should('include.text', 'Konten Terbaru')
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > a:nth-child(2) > p:nth-child(1)").click()
      cy.url().should('include', '/content')
    })
  
    it('MT3', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.scrollTo('0', '2800')
      cy.get(".styles_cssTitle__o75U1").should('include.text', 'Konten Terbaru')
      cy.get("body div[id='__next'] div[class='row'] div[class='row'] div:nth-child(1) a:nth-child(1)").click()
      cy.url().should('include', '/content/detail/1')
      cy.get(".styles_cssTitleLists__b2f6J").should("have.css", "font-family")
    })
  })