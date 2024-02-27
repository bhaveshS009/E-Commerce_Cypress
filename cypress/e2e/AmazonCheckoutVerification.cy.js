describe('Amazon Kindle Purchase Flow', () => {
    // Amazon Login and Login Verification
    it('Suceesfly Cart verification Amazon Kindle', () => {
      //Sucesful URL  lauch verification
      cy.visit('https://www.amazon.in/');
      cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
      cy.url().should('eq', 'https://www.amazon.in/');
  
      //Search verification - product Kindle
      cy.get('#twotabsearchtextbox').type('Kindle').should('have.value', 'Kindle').should('be.visible');
  
      // Search Execution
      cy.get('#nav-search-submit-button').click();
  
      //Expected Kindle Indentification & verification - checkout
      cy.get('.a-size-medium')
      .contains('All-new Kindle Paperwhite (8 GB) – Now with a 6.8" display and adjustable warm light');
      // .invoke('removeAttr','target')
      // .click();

      //Acess on new navigated page



      // //Price Capture
      // cy.get('.a-size-medium')
      // .contains('All-new Kindle Paperwhite (8 GB) – Now with a 6.8" display and adjustable warm light')
      // .get('span.a-price-whole').invoke('text').then((price) => {
      //   cy.log('Extracted Price', price);
      //   expect(price).to.equal('13,999');

      //cy.get(title)

            // Acess the url of add on cart
      cy.get('a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal')
      .should('have.attr', 'href')
      .then((href) => {
      cy.visit('https://www.amazon.in' + href);
      });
 
      // Wait for the new page to load
      cy.url().should('include', '/All-new-Kindle-Paperwhite-GB-adjustable/');

      //Cart Verification
      const price = cy.get('span.a-price-whole').text;
      cy.log(price)


      //Product Title Verification
      cy.get('#productTitle')
      .contains('All-new Kindle Paperwhite (8 GB) – Now with a 6.8" display and adjustable warm light');
  
      // Continue with your test logic for the new page
      cy.get('#add-to-cart-button').should('be.visible').click();

      });

    });

 // });

      // // Acess the url of add on cart
      // cy.get('a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal')
      // .should('have.attr', 'href')
      // .then((href) => {
      // cy.visit('https://www.amazon.in' + href);
      // });
 
      // // Wait for the new page to load
      // cy.url().should('include', '/All-new-Kindle-2022-');

      // //Cart Verification
      // const price = cy.get('span.a-price-whole').text;
      // cy.log(price)


      // //Product Title Verification
      // cy.get('#productTitle')
      // .contains('All-new Kindle (2022 release) – The lightest and most compact Kindle, now with a 6” 300 ppi high-resolution display, and 2x the storage (Black)');
  
      // // Continue with your test logic for the new page
      // cy.get('#add-to-cart-button').should('be.visible').click();
      // });
    //});
  