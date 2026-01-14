import { elements as el } from "./elements"
class Inventory{
    validarAcessoPagia(){
       cy.url().should('eq','https://www.saucedemo.com/inventory.html')
              cy.screenshot('Acesso pagina Inventario')
    }
}

export default new Inventory;