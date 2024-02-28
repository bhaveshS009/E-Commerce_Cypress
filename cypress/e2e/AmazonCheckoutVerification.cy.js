describe('Amazon Kindle Purchase Flow', () => {
    // Amazon Web Page Lauch Verification
    it('Verify Product Purchase - Kindle', () => {
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
  
      //Acess the url of add on cart on new tab
      cy.get('a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal')
      .should('have.attr', 'href')
      .then((href) => {
      cy.visit('https://www.amazon.in' + href);
      cy.log("Item Kindle Paperwhite 8 GB Selected");
      // product page URL verificaion
      cy.url().should('include', '/All-new-Kindle-Paperwhite-GB-adjustable/');

      //Capture sanp before checkout
      cy.screenshot('Snap_BeforeCheckout');
                 
      // Continue checkout
      cy.get('#add-to-cart-button').should('be.visible').click();

      //Capture sanp after checkout
      cy.screenshot('Snap_AfterCheckout');
      cy.log("Item Added to Cart");
      cy.url().should('include','https://www.amazon.in/cart/');
      cy.title().should('eq', 'Amazon.in Shopping Cart');

  });

});
})
