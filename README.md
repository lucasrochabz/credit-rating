# credit-rating

Este é o frontend desenvolvido em React para consumo da [Credit Rating Api](https://github.com/lucasrochabz/credit-rating-api).

O formulário permite que o usuário insira seus dados financeiros e receba uma resposta da API indicando a classificação de crédito.

## Pré-requisitos

- **Node.js** 18 ou superior
- **npm** (gerenciador de pacotes do Node.js)
- **Git**

## Iniciar aplicação

1. Faça uma cópia do arquivo `.env.example`:

```bash
cp .env.example .env
```

2. Edite o arquivo `.env` com os valores apropriados para o seu ambiente.

3. Instale as dependências do projeto:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

### Estrutura do projeto

```bash
credit-rating/
├── src/
│   ├── api/                # Comunicação com a API Flask
│   ├── assets/             # Imagens e arquivos estáticos
│   ├── components/         # Componentes reutilizáveis
│   │   ├── MultiStepForm/
│   │   ├── ProgressBar/
│   │   └── Result/
│   │
│   ├── schemas             # Schemas de validação (Yup)
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── config.js
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```
