# 📌 Automação de Testes com Cypress

Este projeto tem como objetivo demonstrar a **automação de testes end-to-end utilizando Cypress**, com foco na aplicação do **Page Object Model (POM)**, boas práticas de organização, reutilização de código e manutenção de testes.

---

## 🧪 Tecnologias Utilizadas

* **Cypress** – Framework de testes E2E
* **JavaScript**
* **Node.js**
* **Page Object Model (POM)**

---

## 📂 Estrutura do Projeto

A estrutura do projeto foi organizada para separar responsabilidades e facilitar a manutenção:

```
cypress/
 ├── e2e/
 │   └── login.cy.js
 ├── pages/
 │   ├── login/
 │   │   ├── index.js
 │   │   └── elements.js
 │   └── inventory/
 ├── fixtures/
 ├── support/
 └── reports/
```

---

## 🧩 Page Object Model (POM)

O **Page Object Model** foi utilizado para encapsular as ações e os elementos de cada página, promovendo:

* Reutilização de código
* Melhor legibilidade dos testes
* Facilidade de manutenção
* Redução de duplicidade de seletores

Cada página possui:

* **elements.js**: mapeamento dos seletores
* **index.js**: métodos e ações da página

### Exemplo – Login Page

* `visitarPaginaLogin()`
* `preencherCredenciaisValidas()`
* `preencherCredenciaisInvalidas()`
* `validarErrorCredenciaisInvalidas()`

---

## 🪝 Hooks do Cypress

Foram utilizados **hooks** para garantir melhor organização e reaproveitamento de código.

### beforeEach

O hook `beforeEach` é utilizado para garantir que a página de login seja acessada antes de cada teste:

* Evita repetição de código
* Garante estado inicial consistente

```js
beforeEach(() => {
  Login.visitarPaginaLogin();
})
```

---

## 🔐 Variáveis de Ambiente

As **variáveis de ambiente** foram utilizadas para armazenar dados sensíveis, como credenciais de login, evitando hardcode nos testes.

### Benefícios:

* Maior segurança
* Facilidade de troca de ambientes
* Melhor reutilização dos testes

Exemplo de uso:

```js
cy.get(el.username).type(Cypress.env('username'))
cy.get(el.password).type(Cypress.env('password'))
```

---

## ✅ Casos de Teste Automatizados

O arquivo `login.cy.js` contempla diferentes cenários:

* Login com credenciais válidas
* Login com username inválido
* Login com senha inválida

Os testes validam:

* Comportamento esperado da aplicação
* Mensagens de erro
* Acesso à página de inventário após login bem-sucedido

---

## 📸 Evidências e Screenshots

Em cenários de falha, são gerados **screenshots automáticos**, facilitando a análise de erros e evidências de teste:

```js
cy.screenshot('Erro credenciais inválidas')
```

---

## 📈 Boas Práticas Aplicadas

* Separação de responsabilidades
* Uso de Page Objects
* Seletores estáveis (`data-test`)
* Hooks para setup de testes
* Variáveis de ambiente
* Testes claros e descritivos

---

## 🚀 Conclusão

Este projeto demonstra uma abordagem profissional para **automação de testes com Cypress**, utilizando **Page Object Model**, boas práticas de código e organização, tornando os testes mais confiáveis, escaláveis e fáceis de manter.

Sinta-se à vontade para evoluir a estrutura, adicionar relatórios, integração com CI/CD e novos cenários de teste.

---

🧑‍💻 **Autor:** Jean Oliveira
