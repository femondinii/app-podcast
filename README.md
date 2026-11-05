# 🎙️ App Podcast — Podcast Episodes API

> **Projeto de estudo.** Este repositório foi criado com fins exclusivamente educacionais, para praticar conceitos de Node.js, TypeScript e arquitetura em camadas. Não é uma aplicação de produção.

API REST para listagem e filtragem de episódios de podcasts, construída com **Node.js puro e TypeScript** — sem nenhum framework como Express ou Fastify. Os dados são servidos a partir de um arquivo JSON local que simula um banco de dados.

---

## O que foi praticado

- Criação de um servidor HTTP com o módulo nativo `http` do Node.js
- Roteamento manual de requisições sem framework
- Arquitetura em camadas: **Controller → Service → Repository**
- Tipagem com TypeScript e uso de interfaces e enums
- Separação de responsabilidades e organização de projeto

---

## Estrutura do projeto

```
src/
├── controllers/        # Recebe a requisição e devolve a resposta
├── services/           # Regras de negócio
├── repositories/       # Acesso aos dados (podcasts.json)
├── models/             # Interfaces e tipos
├── routes/             # Enum com as rotas disponíveis
├── utils/              # Constantes utilitárias (status codes, métodos HTTP, content-type)
├── app.ts              # Roteamento central
└── server.ts           # Inicialização do servidor
```

---

## Como rodar localmente

**Pré-requisitos:** Node.js 18+ e npm instalados.

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/app-flow.git
cd app-flow

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env

# 4. Inicie o servidor em modo de desenvolvimento
npm run start:dev
```

O servidor estará disponível em `http://localhost:3000`.

---

## Endpoints

### `GET /api/list`
Retorna todos os episódios de todos os podcasts.

**Resposta de exemplo:**
```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #001 - O campeão de fisiculturismo mais dominante da história",
    "videoId": "pQSuQmUfS30",
    "categories": ["fitness", "esporte", "lifestyle"]
  }
]
```

---

### `GET /api/podcasts?p={podcastName}`
Retorna os episódios filtrados pelo nome do podcast.

| Parâmetro | Tipo | Descrição |
|---|---|---|
| `p` | `string` | Nome do podcast a ser filtrado |

**Exemplo de requisição:**
```
GET /api/podcasts?p=flow
GET /api/podcasts?p=nerdcast
GET /api/podcasts?p=podpah
```

**Podcasts disponíveis no mock:**
- `flow`
- `inteligencia-ltda`
- `venus`
- `nerdcast`
- `podpah`

---

## 🛠️ Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run start:dev` | Inicia o servidor com `tsx` (sem build) |
| `npm run start:watch` | Inicia com hot-reload ao salvar arquivos |
| `npm run dist` | Compila o TypeScript para JavaScript em `/dist` |
| `npm run start:dist` | Compila e inicia a versão de produção |

---

## Sobre a abordagem

Este projeto usa **HTTP puro do Node.js** intencionalmente — sem Express, Fastify ou qualquer framework. O objetivo é entender o que acontece por baixo dos panos antes de abstrair com um framework.

Em uma API real, o repositório consultaria um banco de dados (PostgreSQL, MongoDB etc.) ou uma API externa, em vez de ler um arquivo `.json` local.
