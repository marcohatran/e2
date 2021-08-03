describe('Fetch Get data', () => {
	beforeEach(() => {
		// prevent exit from LinkedIn JS errors.
		cy.on('uncaught:exception', (err, runnable) => {
			done()
			return false
		})

		// This page never done => cause of loading error exception
		Cypress.on('fail', (error, runnable) => {
			return false
		})
		cy.viewport(1366, 647)

		Cypress.config('userAgent', "Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0) Gecko/20100101 Firefox/10.0 Fennec/10.0")
	})

	it('Select the link1', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link12', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link13', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link14', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link15', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link16', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link17', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link18', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link19', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link10', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link111', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link122', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link133', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link144', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link155', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link166', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link177', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link188', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link199', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link1222', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link1332', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link1123', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link1234', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link1345', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link1456', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link17567', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link1567', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link1678', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })
	it('Select the link1678', () => { cy.visit('https://vote.banker.vn', { onBeforeLoad(win) { Object.defineProperty(win.navigator, 'language', { value: Math.random().toString(36).substring(2, 5) }) } }); cy.contains("TPBANK MOBILE").closest("label").get("input").eq(1).check(); cy.get(".bm-button").first().click(); expect(true).to.equal(true); cy.wait(3000); })

})

// cypress run --parallel  --spec 'cypress/integration/packages/guest 
