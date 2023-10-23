describe('FAQ', () => {
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
})

describe('Kamus Taspen', () => {
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
})

describe('Call Center', () => {
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

describe('Formulir Pengajuan', () => {
  it('NL8', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '2500')
    cy.get("div[class='d-flex flex-row align-items-center justify-content-between mb-3 styles_cssContentTitle__R6tGb'] h1[class='styles_cssTitle__o75U1']").should('include.text', 'Formulir Pengajuan')
    cy.get(".styles_cssBoxDocument__HB9aS").should('have.length', '4')
  })

  it('NL9', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '2500')
    cy.get("div[class='d-flex flex-row align-items-center justify-content-between mb-3 styles_cssContentTitle__R6tGb'] h1[class='styles_cssTitle__o75U1']").should('include.text', 'Formulir Pengajuan')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > a:nth-child(2) > p:nth-child(1)").click()
    cy.get(".styles_cssBoxDocument__bMKlB")
    cy.get(".styles_cssTitle__G9q8g").should('include.text', 'Formulir Pengajuan')
  })

  it('NL10', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '2500')
    cy.get("div[class='d-flex flex-row align-items-center justify-content-between mb-3 styles_cssContentTitle__R6tGb'] h1[class='styles_cssTitle__o75U1']").should('include.text', 'Formulir Pengajuan')
    cy.get("div[class='col-sm-6 mt-4 mb-4'] button[type='button']").click()
  })

  it('NL11', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '2500')
    cy.get("div[class='d-flex flex-row align-items-center justify-content-between mb-3 styles_cssContentTitle__R6tGb'] h1[class='styles_cssTitle__o75U1']").should('include.text', 'Formulir Pengajuan')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > a:nth-child(2) > p:nth-child(1)").click()
    cy.get(".styles_cssBoxDocument__bMKlB")
    cy.get("button[class='btn btn-info']").click()
  })
})

describe('Dokumen Taspen', () => {
  it('NL12', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '2500')
    cy.get("div[class='col-sm-5 mt-4'] h1[class='styles_cssTitle__o75U1']").should('include.text', 'Dokumen Taspen')
    cy.get(".styles_cssBoxDocument__HB9aS").should('have.length', '4')
  })

  it('NL13', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '2500')
    cy.get("div[class='col-sm-5 mt-4'] h1[class='styles_cssTitle__o75U1']").should('include.text', 'Dokumen Taspen')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > p:nth-child(1)").click()
    cy.get(".w-100.styles_cssBox__H_Ds0")
    cy.get(".styles_cssTitle__G9q8g").should('include.text', 'Dokumen Taspen')
  })

  it('NL14', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '2500')
    cy.get("div[class='col-sm-5 mt-4'] h1[class='styles_cssTitle__o75U1']").should('include.text', 'Dokumen Taspen')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(2) > button:nth-child(1)").click()
  })

  it('NL15', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '2500')
    cy.get("div[class='col-sm-5 mt-4'] h1[class='styles_cssTitle__o75U1']").should('include.text', 'Dokumen Taspen')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > p:nth-child(1)").click()
    cy.get(".w-100.styles_cssBox__H_Ds0")
    cy.get(".styles_cssTitle__G9q8g").should('include.text', 'Dokumen Taspen')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > a:nth-child(2) > button:nth-child(1)").click()
  })
})

describe('Dokumen Taspen', () => {
  it('NL16', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '2800')
    cy.get(".styles_cssTitle__o75U1").should('include.text', 'Konten Terbaru')
    cy.get("div[class='col-sm-12 mt-5'] div[class='row']").should('have.length', '1')
  })

  it('NL17', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '2800')
    cy.get(".styles_cssTitle__o75U1").should('include.text', 'Konten Terbaru')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > a:nth-child(2) > p:nth-child(1)").click()
    cy.url().should('include', '/content')
  })

  it('NL18', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '2800')
    cy.get(".styles_cssTitle__o75U1").should('include.text', 'Konten Terbaru')
    cy.get("body div[id='__next'] div[class='row'] div[class='row'] div:nth-child(1) a:nth-child(1)").click()
    cy.url().should('include', '/content/detail/1')
    cy.get(".styles_cssTitleLists__b2f6J").should("have.css", "font-family")
  })
})

describe('Lokasi Layanan', () => {
  it('NL19', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '800')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(11) > a:nth-child(1) > div:nth-child(1)").click()
    cy.url().should('include', '/location-services')
    cy.get(".styles_cssTextTitle__fP0F_").should("include.text", "Lokasi Layanan")
  })

  it('NL20', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '800')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(11) > a:nth-child(1) > div:nth-child(1)").click()
    cy.url().should('include', '/location-services')
    cy.get("input[placeholder='Cari Lokasi, Tempat Layanan']").type('jos{enter}')
    cy.get("div[class='d-flex flex-column'] div[class='container-fluid']").should("include.text", "jos")
  })

  it('NL21', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '800')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(11) > a:nth-child(1) > div:nth-child(1)").click()
    cy.url().should('include', '/location-services')
    cy.get("input[placeholder='Cari Lokasi, Tempat Layanan']").type('gaada{enter}')
    cy.get("img[alt='not-found']").should('be.visible')
  })

  it('NL22', () => {
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

describe('Pengaduan & Pertanyaan', () => {
  it('NL23', () => {
    cy.visit('https://dev-website-app.tabungselalu.id')
    cy.scrollTo('0', '800')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)").click()
    cy.url().should('include', '/taspen-care')
    cy.get("body > div:nth-child(1) > main:nth-child(1) > nav:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1)").click()
    cy.url().should('include', '/taspen-care/complaint')
    cy.get("#ticket_category_id-2").click()
    cy.get("#email").type('al@gmail.com')
    cy.get("#phone_no").type('081234567890')
    cy.get("#name").type('al')
    cy.get("#status_member").select(1).invoke("val").should("eq", "Peserta Aktif")
    cy.get("#nip").type('111222333444')
    cy.get(".css-19bb58m").type('yogya')
    cy.wait(2000)
    cy.xpath("/html/body/div/main/nav/main/div/div/div/div[1]/div/form/div[7]/div/div[2]/div/div").click()
    cy.get("#message").type('cekhalo')
    cy.get("div[class='col-md-8 mt-3'] p[class='m-0']").click()
    cy.get(".modal-content.styles_cssContentModal__3MgwF").should('include.text','Pengaduan Berhasil')
  })

})