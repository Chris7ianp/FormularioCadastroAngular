# 📋 Formulário de Cadastro — Angular Material

Aplicação web de **cadastro com operações CRUD** construída com Angular 19 e Angular Material. Permite criar, listar, editar e remover registros por meio de um formulário com campos mascarados e identificadores únicos gerados no frontend.

---

## 🚀 Tecnologias

| Tecnologia | Versão | Função |
|---|---|---|
| [Angular](https://angular.dev) | 19 | Framework principal |
| [Angular Material](https://material.angular.io) | 19 | Componentes de UI (tema Indigo/Pink) |
| [Angular CDK](https://material.angular.io/cdk) | 19 | Utilitários de layout e acessibilidade |
| [Angular Flex Layout](https://github.com/angular/flex-layout) | 15 beta | Responsividade |
| [ngx-mask](https://www.npmjs.com/package/ngx-mask) | 19 | Máscaras de input (CPF, telefone, etc.) |
| [uuid](https://www.npmjs.com/package/uuid) | 11 | Geração de IDs únicos |
| [RxJS](https://rxjs.dev) | 7.8 | Programação reativa |
| [TypeScript](https://www.typescriptlang.org) | 5.6 | Tipagem estática |

---

## 📁 Estrutura do Projeto

```
FormularioCadastroAngular/
├── src/
│   ├── app/               # Componentes, serviços e módulos
│   ├── styles.scss        # Estilos globais
│   ├── index.html
│   └── main.ts
├── public/                # Assets estáticos
├── angular.json           # Configurações do Angular CLI
├── package.json
└── tsconfig.json
```

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org) v18 ou superior
- [Angular CLI](https://angular.dev/tools/cli) v19

```bash
npm install -g @angular/cli
```

---

## 🛠️ Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Chris7ianp/FormularioCadastroAngular.git
cd FormularioCadastroAngular
npm install
```

> Caso ocorra conflito de dependências:
> ```bash
> npm install --legacy-peer-deps
> ```

---

## ▶️ Rodando o projeto

### Desenvolvimento

```bash
ng serve
```

Acesse em [http://localhost:4200](http://localhost:4200). A aplicação recarrega automaticamente ao salvar arquivos.

### Build de produção

```bash
ng build
```

Os artefatos são gerados em `dist/crud-angular-material/`.

---

## 🧪 Testes

### Unitários (Karma + Jasmine)

```bash
ng test
```

### End-to-End

```bash
ng e2e
```

> O Angular CLI não inclui framework e2e por padrão. Configure o de sua preferência (ex: Cypress, Playwright).

---

## 🧩 Funcionalidades

- ✅ Formulário de cadastro com validação
- ✅ Máscaras de input (CPF, telefone, etc.) via `ngx-mask`
- ✅ IDs únicos por registro gerados com `uuid`
- ✅ Interface responsiva com Angular Flex Layout
- ✅ Componentes de UI com Angular Material (tema Indigo/Pink)
- ✅ Operações CRUD completas

---

## 📦 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run watch` | Build contínuo em modo desenvolvimento |
| `npm test` | Executa os testes unitários |

---

## 📄 Licença

Projeto privado. Todos os direitos reservados.

---

Desenvolvido por [Chris7ianp](https://github.com/Chris7ianp) 🚀
