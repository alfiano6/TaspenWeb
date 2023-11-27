describe('FAQ', () => {
    it('FAQ1', () => {
      cy.visit('https://dev-website-app.tabungselalu.id/')
      cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1)").click()
      cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > h2:nth-child(2)').click()
      cy.get('.styles_cssTextTitle__cQOyH')
        .should('contain', 'Pertanyaan Umum')
    })
  
    it('FAQ2', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)').click()
      cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > h2:nth-child(2)').click()
      cy.get('.styles_cssTextTitle__cQOyH')
        .should('contain', 'Pertanyaan Umum')
      cy.get("div[class='accordion'] div:nth-child(1) div:nth-child(1) div:nth-child(1)").click()
      cy.get("div[class='collapse show'] div[class='card-body']")
        .should('include.text', 'Untuk melakukan mutasi antar mitra bayar Taspen (Bank/Pos) adalah :')
    })

    it('FAQ3', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)').click()
      cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > h2:nth-child(2)').click()
      cy.get('.styles_cssTextTitle__cQOyH')
        .should('contain', 'Pertanyaan Umum')
      cy.get("input[placeholder='Cari Pertanyaan Umum']").type('mutasi')
      cy.wait(2000)
      cy.contains('.accordion', 'mutasi')
    })

    it('FAQ4', () => {
      cy.visit('https://dev-website-app.tabungselalu.id')
      cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)').click()
      cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > h2:nth-child(2)').click()
      cy.get('.styles_cssTextTitle__cQOyH')
        .should('contain', 'Pertanyaan Umum')
      cy.get("input[placeholder='Cari Pertanyaan Umum']").type('unknown')
      cy.wait(2000)
      cy.get("img[alt='not-found']")
    })
  })