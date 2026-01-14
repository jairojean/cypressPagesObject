import Login from '../pages/login'
import Inventory from '../pages/inventory'
describe('Login',() => {

    beforeEach(() =>{
      Login.visitarPaginaLogin();
    })

    it('Realizar login com sucesso', () =>{
       Login.preencherCredenciaisValidas();
       Inventory.validarAcessoPagia();
    })

    it('Realizar login com Falha no username', () =>{
       Login.preencherCredenciaisInvalidas();
       Login.validarErrorCredenciaisInvalidas();
      
    })

    it('Realizar login com Falha na Senha', () =>{
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauceFail')
        cy.get('[data-test="login-button"]').click()
         cy.get('[data-test="error"]').should(
            'contain.text',
            'Epic sadface: Username and password do not match any user in this service'
        )
        cy.screenshot('Erro credenciais inválidas Senha.')
    })
})