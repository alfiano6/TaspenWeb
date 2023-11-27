describe('Call Center', () => {
    it('CC1', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1)").click()
      cy.get(".styles_cssCard__RT02o")
        .should('include.text', 'Telepon Call Center')
      cy.get(".styles_cssDesc__cmbtW")
        .should('include.text', '1500919')
    })
  
    it('CC2', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1)").click()
      cy.xpath("//h2[normalize-space()='Whatsapp']")
        .should('include.text', 'Whatsapp')
      cy.xpath("//p[normalize-space()='+62811170463']")
        .should('include.text', '+62811170463')
    })
  
    it('CC3', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1)").click()
      cy.xpath("//h2[normalize-space()='Email']")
        .should('include.text', 'Email')
      cy.xpath("//p[normalize-space()='taspen@taspen.co.id']")
        .should('include.text', 'taspen@taspen.co.id')
    })
  })