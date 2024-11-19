# pizzashop-api

Este repositório contém um projeto desenvolvido usando Bun.js, Typescript, Elysia e Drizzle ORM. O Projeto consiste em uma API para controle pedidos de pizzaria como um iFood. Neste arquivo README, você encontrá um guia passo a passo para abrir o projeto em seu ambiente local.

---

## Funcionalidades

A API da Pizzaria oferece as seguintes funcionalidades:

- **Cadastro e autenticação de usuários:** Permite que clientes e administradores se registrem e façam login via magic link.
- **Gestão de pedidos:** Criação, atualização e listagem de pedidos, com informações como status e itens do pedido.
- **Estatísticas de vendas:** Geração de métricas para identificar os produtos mais vendidos e faturamento.
- **Filtros avançados:** Pesquisa de pedidos por cliente, status, data ou identificador específico.
- **Paginação:** Listagem de resultados paginados para melhor desempenho.

---

## Pré-requisitos
Antes de começar, verifique se você possui as seguintes ferramentas instaladas em sua máquina:

 - Bun.js
 - Docker

---

### Passo 1: Clonar o repositório
Comece clonando este repositório para sua máquina local. Abra o terminal e execute o seguinte comando:

```bash
  git clone https://github.com/edurodrigues0/pizza.shop-api.git
```
Isso crirá uma cópia local do repositório em seu ambiente.

---

### Passo 2: Instalar depedências
Navegue até o diretório ráiz do projeto e execute o seguinte comando para instalar as dependências do Bun.js

```bash
  cd nome-do-repo
  bun install
```
Esste comando irá ler o arquivo package.json e instalar todas as dependências necessárias para o projeto.

---

### Passo 3: Configurar variáveis de ambiente
O projeto pode exigir algumas variáveis de ambiente para funcionar corretamente. Verifique se existe um arquivo .env.example no diretório raiz do projeto. Se existir, faça uma cópia desse arquivo e renomeie-o para .env.local. Em seguida, atualize as variáveis de ambiente de acordo com as configurações do seu ambiente local.

---

### Passo 4: Iniciar o Banco de dados
Para iniciar o banco de dados use o comando:

```bash
  docker compose up -d
```
Isso irá levantar a imagem do banco de dados dentro do Docker, e em seguida use os comandos:
```bash
  bun run db:generate
  bun run db:migrate
  bun run db:seed
```
Isso irá preparar o banco de dados e logo em seguida irá alimentar o mesmo com informações para serem testadas.

---

### Passo 5: Iniciar o servidor
Para iniciar o servidor Bun.js, execute o seguinte comando:

```bash
  bun run dev
```

## Contribuição
Se você deseja contribuir com melhorias para o projeto, siga as etapas abaixo:

1. Faça um fork do repositório e clone-o em sua máquina.
2. Crie uma nova branch para suas modificações.
3. Faça as alterações necessárias e adicione-as ao stage.
4. Envie um pull request para que suas modificações sejam revisadas.
5. Ficarei felize em receber suas contribuições!

✨ Divirta-se explorando e personalizando o Projeto! Se tiver alguma dúvida ou precisar de suporte, fique à vontade para entrar em contato. Aproveite! ✨