describe('Feauture Non Login', () => {
  it('NL1', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1)').click()
    cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').click()
    cy.get('.styles_cssTextTitle__cQOyH')
      .should('contain', 'FAQ')
  })

  it('NL2', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1)').click()
    cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').click()
    cy.get('.styles_cssTextTitle__cQOyH')
      .should('contain', 'FAQ')
    cy.get("div[class='accordion'] div:nth-child(1) div:nth-child(1) div:nth-child(1)").click()
    cy.get("div[class='collapse show'] div[class='card-body']")
      .should('include.text', 'Enrollment Taspen adalah')
  })

  it('NL3', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1)').click()
    cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').click()
    cy.get('.styles_cssTextTitle__cQOyH')
      .should('contain', 'Kamus Taspen')
  })

  it('NL4', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1)').click()
    cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').click()
    cy.get('.styles_cssTextTitle__cQOyH')
      .should('contain', 'Kamus Taspen')
    cy.get("div[class='accordion'] div:nth-child(1) div:nth-child(1) div:nth-child(1)").click()
    cy.get("div[class='collapse show'] div[class='card-body']")
      .should('include.text', 'Aparatur Sipil Negara')
  })

  it('NL5', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1)").click()
    cy.get(".styles_cssCard__RT02o")
      .should('include.text', 'Telepon Call Center')
    cy.get(".styles_cssDesc__cmbtW")
      .should('include.text', '1500919')
  })

  it('NL6', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1)").click()
    cy.xpath("//h2[normalize-space()='Whatsapp']")
      .should('include.text', 'Whatsapp')
    cy.xpath("//p[normalize-space()='+62811170463']")
      .should('include.text', '+62811170463')
  })

  it('NL7', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2)").click()
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1)").click()
    cy.xpath("//h2[normalize-space()='Email']")
      .should('include.text', 'Email')
    cy.xpath("//p[normalize-space()='taspen@taspen.co.id']")
      .should('include.text', 'taspen@taspen.co.id')
  })
})


