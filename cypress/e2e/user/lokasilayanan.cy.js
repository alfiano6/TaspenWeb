describe('Lokasi Layanan', () => {
    it('LL1', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.scrollTo('0', '800')
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(11) > a:nth-child(1) > div:nth-child(1)").click()
      cy.url().should('include', '/location-services')
      cy.get(".styles_cssTextTitle__fP0F_").should("include.text", "Lokasi Layanan")
    })
  
    it('LL', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.scrollTo('0', '800')
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(11) > a:nth-child(1) > div:nth-child(1)").click()
      cy.url().should('include', '/location-services')
      cy.get("input[placeholder='Cari Lokasi, Tempat Layanan']").type('jos{enter}')
      cy.get("div[class='d-flex flex-column'] div[class='container-fluid']").should("include.text", "jos")
    })
  
    it('LL3', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.scrollTo('0', '800')
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(11) > a:nth-child(1) > div:nth-child(1)").click()
      cy.url().should('include', '/location-services')
      cy.get("input[placeholder='Cari Lokasi, Tempat Layanan']").type('gaada{enter}')
      cy.get("img[alt='not-found']").should('be.visible')
    })
  
    it('LL4', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.scrollTo('0', '800')
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(11) > a:nth-child(1) > div:nth-child(1)").click()
      cy.url().should('include', '/location-services')
      cy.get("input[placeholder='Cari Lokasi, Tempat Layanan']").type('jos{enter}')
      cy.get("div[class='d-flex flex-column'] div[class='container-fluid']").should("include.text", "jos")
      cy.get(".styles_cssSubTitle__pBWg8").should("have.css", "font-family")
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)")
        .should("have.css", "font-family")
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)")
        .should("have.css", "font-family")
    })
  })