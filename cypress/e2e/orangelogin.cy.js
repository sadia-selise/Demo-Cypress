
describe('Orangehrm', () => {


  beforeEach("",() => {
    cy.login("Admin" , "admin123")
  });

  it('click', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
    cy.get('.oxd-userdropdown-name').click();
    cy.wait(3000);
    cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text').click();

  });


  
})