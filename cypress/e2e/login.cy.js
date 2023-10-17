describe('LOGIN', () => {
  it('LOG1', () => {
    cy.visit('https://dev-website-app.tabungselalu.id/auth/login')
    cy.get("#username").type("yopidm")
    cy.get("#password").type("satu2345")
    cy.get("button[type='submit']").click()
    cy.get('.toast-state.show.success').should('include.text', 'Masuk Berhasil')
  })

  it('LOG2', () => {
    cy.visit('https://dev-website-app.tabungselalu.id/auth/login')
    cy.get("#username").type("yopidm")
    cy.get("#password").type("wrong-psw")
    cy.get("button[type='submit']").click()
    cy.get('.toast-state.show.error').should('include.text', 'Username atau password yang anda masukkan salah.')
  })

  it('LOG3', () => {
    cy.visit('https://dev-website-app.tabungselalu.id/auth/login')
    cy.get("#username").type("wrong-uname")
    cy.get("#password").type("satu2345")
    cy.get("button[type='submit']").click()
    cy.get('.toast-state.show.error').should('include.text', 'Username atau password yang anda masukkan salah.')
  })

  it('LOG4', () => {
    cy.visit('https://dev-website-app.tabungselalu.id/auth/login')
    cy.get("#username")
    cy.get("#password")
    cy.get("button[type='submit']").click()
    cy.xpath("//div[normalize-space()='Username wajib diisi']").should('have.text', 'Username wajib diisi')
    cy.xpath("//div[normalize-space()='Password wajib diisi']").should('have.text', 'Password wajib diisi')
  })

  it('LOG5', () => {
    cy.visit('https://dev-website-app.tabungselalu.id/auth/login')
    cy.get("#username")
    cy.get("#password").type('satu2345')
    cy.get("button[type='submit']").click()
    cy.xpath("//div[normalize-space()='Username wajib diisi']").should('have.text', 'Username wajib diisi')
  })

  it('LOG6', () => {
    cy.visit('https://dev-website-app.tabungselalu.id/auth/login')
    cy.get("#username").type('yopidm')
    cy.get("#password")
    cy.get("button[type='submit']").click()
    cy.xpath("//div[normalize-space()='Password wajib diisi']").should('have.text', 'Password wajib diisi')
  })

  it('LOG7', () => {
    cy.visit('https://dev-website-app.tabungselalu.id/auth/login')
    cy.get("#username").type("ronaldo")
    cy.get("#password").type("ronaldo7")
    cy.get("button[type='submit']").click()
    cy.get('.toast-state.show.error').should('include.text', 'Username atau password yang anda masukkan salah.')
  })

})