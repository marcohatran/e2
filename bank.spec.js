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
		cy.viewport(375, 667)
	})

	it('Select the link', () => {
		cy.visit("https://vote.banker.vn/")
	})
})