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

	it('Select the link', () => {
		// cy.visit("https://google.com.vn/");
		// cy.visit("https://vote.banker.vn/", {
		// 	    // headers: {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15',}
		// 	});
		cy.visit(
			// "https://www.google.com/search?q=check+user+agent&oq=check+user+agent&aqs=chrome..69i57j0i512j0i20i263i512j0i67j0i512l6.2115j0j7&sourceid=chrome&ie=UTF-8", 
			"https://vote.banker.vn/",
			{
				headers: {'user-agent': 'Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0',}
			})
		cy.wait(5000)
		// cy.contains("TPBANK MOBILE").click({force: true});
		// cy.contains("Bình Chọn").click();
		cy.get('.bm-button').click();

		
	})
})