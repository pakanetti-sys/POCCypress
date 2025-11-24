🚀 Automação JotForm – Cypress + Cucumber
📌 Sobre o Projeto

Este repositório contém a automação completa do Cadastro de Alunos no JotForm, utilizando:

Cypress (framework de testes E2E)

Cucumber (BDD – Gherkin)

Page Objects para organização

Screenshots automáticos por seção

Estrutura modular e preparada para manutenção e expansão

📂 Estrutura do Projeto

cypress/
 ├── e2e/
 │    ├── 1-getting-started/
 │    ├── 2-advanced-examples/
 │    └── features/
 │         └── cadastro_alunos.feature
 ├── elements/
 │    └── CadastroAlunoElements.js
 ├── fixtures/
 ├── pages/
 │    └── CadastroAlunoPage.js
 ├── plugins/
 ├── screenshots/
 └── support/
      ├── step_definitions/
      │     └── cadastro_alunos_steps.js
      ├── commands.js
      ├── component-index.html
      └── e2e.js

▶ Como executar no Visual Studio Code

1️⃣ Requisitos

Certifique-se de ter instalado:

Node.js 18+

NPM (vem junto com Node)

Visual Studio Code

Extensões recomendadas:

ESLint (opcional)

Cypress Helper (opcional)

2️⃣ Baixar o projeto

No terminal do VS Code:
git clone https://github.com/pakanetti-sys/POCCypress/tree/main

Acessar o Projeto: cd POCCypress

3️⃣ Instalar dependências
npm install

Instalar também os preprocessadores:

npm install

Isso instalará:

Cypress

Cucumber Preprocessor

Esbuild + plugins necessários

4️⃣ Abrir o Cypress

Interface gráfica:

npx cypress open


Modo headless (terminal):

npx cypress run

5️⃣ Executar o teste de cadastro

No Cypress:

E2E Testing → Start Testing

Navegue até:

cypress/e2e/features/cadastro_alunos.feature


Clique para rodar o cenário.

6️⃣ Onde ficam os screenshots?

Os prints são gerados automaticamente por:

cy.stepScreenshot("nome-da-secao");


Localização:

cypress/screenshots/

🧱 Estrutura Técnica
📘 Feature (Gherkin)

cypress/e2e/features/cadastro_alunos.feature
Contém o cenário completo do cadastro em linguagem natural (Given/When/Then).

🧩 Step Definitions

cypress/support/step_definitions/cadastro_alunos_steps.js
Implementa cada step usando Cypress + Page Objects.

🏗 Page Object

cypress/pages/CadastroAlunoPage.js
Contém toda a lógica de preenchimento do formulário.

🎯 Elements (Mapeamento de seletores)

cypress/elements/CadastroAlunoElements.js
Centraliza todos os seletores usados na automação.

