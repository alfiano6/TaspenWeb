beforeEach(() =>
{
    cy.login('yopidm', 'satu2345')
})

it('get card', () => {
    cy.get('body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1)').should('include.text', 'Masuk Berhasil')
}
)