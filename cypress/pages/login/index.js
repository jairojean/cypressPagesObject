import cypress from "cypress"
import { elements as el } from "./elements"
class Login{
    visitarPaginaLogin(){
       cy.visit ('https://www.saucedemo.com/')
    }

    preencherCredenciaisValidas(){
        cy.get(el.username).type(cypress.env(username))
        cy.get(el.password).type(cypress.env(password))
        cy.get(el.loginButton).click()
    }
      preencherCredenciaisInvalidas(){
        cy.get(el.username).type('standard_user_Fail')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.loginButton).click()
    }
     validarErrorCredenciaisInvalidas(){
        cy.get(el.errorMenssageLogin).should(
            'contain.text',
            'Epic sadface: Username and password do not match any user in this service'
        )
        cy.screenshot('Erro credenciais inválidas username.')
    }
}

export default new Login;