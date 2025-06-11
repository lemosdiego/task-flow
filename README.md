# Task Flow (Fluxo de tarefas)

## Descrição Geral

**Task Flow** é um sistema simples de gerenciamento de tarefas criado com o objetivo principal de aprofundar o aprendizado em React com Next.js e explorar o desenvolvimento colaborativo com inteligência artificial.

Diferente das listas básicas de tarefas, que geralmente possuem apenas um input e um botão de deletar, o Task Flow busca criar um fluxo completo de interações. A ideia é permitir que o usuário crie tarefas organizadas em cards, com subtarefas, possibilitando um controle mais detalhado e eficiente das suas atividades diárias.

Além de servir como prática de desenvolvimento técnico, o projeto foi idealizado com a intenção de simular o fluxo completo de criação de um software, mesmo em uma aplicação simples. A proposta é passar por todas as etapas essenciais do desenvolvimento:

Fase de preparação: criação de fluxogramas para mapear a lógica e as funcionalidades do sistema;

Gestão de projeto: organização das tarefas e cumprimento de prazos através de ferramentas como o Trello;

Prototipagem visual: desenvolvimento de uma interface no Figma, testando interações e usabilidade antes de iniciar a codificação.

Essa abordagem reforça a ideia de que, ao desenvolver um sistema — por mais simples que seja — o planejamento prévio torna o desenvolvimento mais fluido e eficiente. Afinal, não existe apenas código envolvido: o sucesso de uma aplicação depende também da organização, design, validação de ideias e visão de produto.

## Funcionalidades

- Criar novas tarefas com título, descrição e subtarefas.
- Editar tarefas existentes, incluindo subtarefas.
- Deletar tarefas e subtarefas individualmente.
- Sincronização com banco de dados Supabase para persistência dos dados.
- Feedback para o usuário nas ações de salvar, atualizar e deletar.

## Tecnologias Utilizadas

- **Next.js**: Framework utilizado para construir a interface do projeto com React. Ele facilita a criação de aplicações web modernas com roteamento automático, renderização do lado do servidor (SSR) e geração de sites estáticos.
- **React**: Biblioteca JavaScript responsável pela construção dos componentes da interface de forma declarativa e reativa, permitindo a atualização dinâmica dos dados no front-end.
- **Tailwind CSS**: Framework utilitário de CSS usado para estilizar rapidamente a interface do projeto com classes pré-definidas, mantendo o código visual limpo e eficiente.

- **Supabase**: Plataforma open source utilizada como backend e banco de dados do projeto, oferecendo autenticação, banco PostgreSQL e APIs em tempo real para persistência de dados.

- **Miro**: Ferramenta visual utilizada para desenhar o fluxograma e mapear a lógica de navegação e interações do sistema.  
  🔗 [Acessar Miro](https://miro.com/app/board/uXjVItanLo8=/?share_link_id=423484632477)

- **Trello**: Plataforma usada para organizar e gerenciar o progresso do projeto por meio de quadros e tarefas. Auxilia no controle de etapas e na produtividade.  
  🔗 [Acessar Trello](https://trello.com/invite/b/683ee68349b2264704339ade/ATTI52f58de464031214032b0d51155f60e2EF20AF82/trilha-back-end)

- **Figma**: Ferramenta de design utilizada para prototipar a interface antes da implementação. Com ela foi possível testar a experiência do usuário com mockups e interações no modo protótipo.  
  🔗 [Acessar Figma](https://www.figma.com/design/5zvyn6riBc5kJYMZUQSXdG/Task-flow?node-id=0-1&m=dev&t=D6lycau9SRX8ITQj-1)

## 🗂️ Estrutura do Projeto

```bash
task-flow
│
└───src                     # Pasta principal onde fica toda a lógica da aplicação
    │
    ├───app                 # Diretório de rotas (padrão do Next.js)
    │   ├───dashboard       # Página principal onde está o sistema de tarefas
    │   │   ├───form        # Formulário de criação/edição de tarefas
    │   │   │   └── form.css
    │   │   ├── dashboard.css
    │   │   └── page.js     # Componente de página do dashboard (renderiza os cards)
    │   │
    │   ├───login           # (Para futuras atualizações) Página de login/autenticação
    │   ├── global.css      # Estilos globais da aplicação
    │   ├── layout.js       # Layout raiz usado por todas as páginas
    │   └── page.js         # Página inicial da aplicação
    │
    ├───components          # Componentes reutilizáveis da aplicação
    │   ├───checkbox        # Componente de checkbox para marcar tarefas
    │   │   ├── checkbox.css
    │   │   └── CheckBox.js
    │   ├───card            # Componente visual dos cards de tarefas
    │   │   ├── card.css
    │   │   ├── CardPreview.js  # Visualização prévia de tarefas
    │   │   └── CardTasks.js    # Componente com as interações da tarefa
    │
    ├───hooks               # Custom Hooks criados para separar lógica
    │   ├── useDeleteSubTasks.js   # Lógica para deletar subtarefas
    │   ├── useDeleteTasks.js      # Lógica para deletar tarefas
    │   ├── useEditTasks.js        # Lógica de edição de tarefas
    │   ├── useFormVisibility.js   # Lógica para mostrar/esconder formulário
    │   ├── useGetTasks.js         # Lógica para buscar as tarefas no Supabase
    │   └── useSaveTasks.js        # Lógica para salvar novas tarefas/subtarefas
    │
    ├───lib
    │   └───supabase
    │       └── client.js     # Configuração do cliente Supabase para comunicação com o banco de dados
```

## 🔄 Fluxo de Dados e Estado

O Task Flow utiliza um fluxo de dados simples e eficiente, baseado em React e seus hooks, com gerenciamento de estado local e comunicação direta com o Supabase como backend. A lógica da aplicação foi organizada em hooks customizados para separar responsabilidades e facilitar a manutenção do código.

### 📦 Onde estão os estados?

- Os estados principais (como visibilidade de formulários, tarefas carregadas...) estão localizados dentro dos componentes React, especialmente na página do Dashboard e nos componentes de Cards.
- Hooks customizados são responsáveis por manipular esses estados, centralizando a lógica e evitando duplicação de código.

### ⚙️ Hooks Customizados

- `useGetTasks.js`: Responsável por buscar todas as tarefas do usuário diretamente do Supabase assim que a página é carregada.
- `useSaveTasks.js`: Lida com a criação de novas tarefas e subtarefas, salvando os dados no Supabase.
- `useDeleteTasks.js`: Deleta uma tarefa específica do banco de dados e atualiza a interface.
- `useDeleteSubTasks.js`: Responsável por remover apenas uma subtarefa de dentro de uma tarefa.
- `useEditTasks.js`: Permite editar o conteúdo de uma tarefa ou subtarefa existente.
- `useFormVisibility.js`: Controla a exibição do formulário de criação/edição de tarefas.

### 🔁 Como o fluxo acontece?

1. **Inicialização**: Ao carregar a página do Dashboard, o hook `useGetTasks` é chamado para buscar as tarefas no Supabase.
2. **Criação**: Quando o usuário cria uma nova tarefa, o `useSaveTasks` insere essa tarefa no banco e atualiza o estado local.
3. **Edição**: Se a tarefa ou subtarefa for editada, o `useEditTasks` atualiza os dados no Supabase.
4. **Exclusão**: Ao clicar em deletar, o `useDeleteTasks` ou `useDeleteSubTasks` remove os dados do banco e revalida a lista.
5. **Exibição Condicional**: A exibição do formulário é controlada pelo `useFormVisibility`, garantindo uma UX fluida e organizada.

   - Para aprimorar a experiência do usuário, um `useRef` é utilizado em conjunto com um event listener que detecta cliques fora do formulário.
   - Quando o usuário clica em qualquer área externa ao formulário, o formulário é automaticamente fechado, simulando um comportamento semelhante a modais ou dropdowns.
   - Essa abordagem evita a necessidade de botões extras para fechar e mantém a interface mais limpa e intuitiva.

### 🧠 Estratégia de Estado

- O estado é mantido localmente dentro de cada componente para facilitar a visualização reativa.
- As atualizações no Supabase são feitas de forma assíncrona, e os dados são atualizados no front-end assim que confirmada a persistência no backend.

Esse fluxo garante que o sistema permaneça simples, responsivo e escalável conforme novas funcionalidades forem adicionadas.

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para instalar e executar o Task Flow na sua máquina local.

### 1. Clone o repositório

````bash
### 1. Clone o repositório
git clone https://github.com/seu-usuario/task-flow.git

### 2. Navegue até a pasta do projeto
```bash
cd task-flow

### 3. Instale as dependências
```bash
npm install

### 4. Crie o Supabase
```bash
npm install supabase
##Configure o client do supabase

```bash
npm run dev
### 5. Inicie a aplicação

````

## 📌 Como Usar as Funcionalidades

O **Task Flow** foi pensado para oferecer uma experiência prática e intuitiva no gerenciamento de tarefas. Veja abaixo como utilizar os principais recursos do sistema:

### ✅ Criar uma Tarefa

1. Clique no botão **“Criar Tarefa”**.
2. Um formulário será aberto com campos para:
   - **Título** da tarefa.
   - **Descrição** detalhada.
   - Lista de **Subtarefas** (adicione quantas quiser).
3. Após preencher os campos, clique em **“Salvar”** para adicionar a tarefa.

> O formulário será automaticamente fechado após o envio, e a tarefa aparecerá como um card no painel.

---

### ✏️ Editar uma Tarefa

- Clique no botão de **editar** (ícone de lápis) em um card de tarefa.
- O formulário será aberto preenchido com os dados atuais da tarefa.
- Faça as alterações desejadas (inclusive nas subtarefas).
- Clique em **“Salvar”** para atualizar.

> Todas as alterações feitas nas subtarefas também são salvas.

---

### 🗑️ Deletar uma Tarefa ou Subtarefa

- Para deletar uma **tarefa inteira**, clique no ícone de **lixeira** no canto do card.
- Para deletar uma **subtarefa específica**, clique na lixeira ao lado da subtarefa, dentro do card da tarefa.

> A exclusão é imediata e irreversível.

---

### 🧩 Abrir e Fechar o Formulário

- Clicando em **“Criar Tarefa”** o formulário é exibido na tela.
- Caso o usuário clique fora do formulário (em qualquer parte vazia da tela), ele é automaticamente **fechado** graças ao uso de `useRef`.

> Isso garante uma experiência mais fluida e natural, sem depender de botões extras para fechar.

---

Com esses recursos simples, porém poderosos, o Task Flow permite que você organize seu dia a dia com mais eficiência e clareza.

## Decisões de Design e Arquitetura

A principal intenção deste projeto foi ir além do tradicional “todo list” simples e criar um fluxo completo de aplicação. Isso envolve uma interface interativa, a persistência dos dados em um banco real (Supabase) e uma arquitetura que separa bem a lógica da interface.

## Possíveis Melhorias e Próximos Passos

Embora o projeto já entregue um fluxo funcional e bastante completo, ainda há espaço para crescimento e refinamento, como por exemplo:

- Tornar o código mais enxuto e reaproveitável conforme os novos aprendizados.
- Implementar telas de **cadastro de usuários**, **login** e **autenticação** para permitir múltiplos perfis.
- Adicionar notificações e feedbacks mais elaborados para o usuário.

- Incrementar testes automatizados para maior confiabilidade.
- Otimizar a performance e acessibilidade da aplicação.

O objetivo é evoluir o projeto para um nível mais profissional e robusto, mantendo a qualidade do código.

---

## Referências e Recursos Usados

- [Next.js](https://nextjs.org/docs) — Framework React para aplicações modernas.
- [Tailwind CSS](https://tailwindcss.com/docs) — Framework CSS utilitário para estilos rápidos.
- [Supabase](https://supabase.com/docs) — Backend completo e fácil para banco de dados e autenticação.
- [Figma](https://figma.com) — Ferramenta para prototipagem de interfaces.
- [Trello](https://trello.com) — Plataforma para gestão ágil de projetos.
- [Miro](https://miro.com) — Quadro colaborativo para fluxogramas e brainstorms.
- [ChatGPT](https://chat.openai.com) — Assistente de inteligência artificial para suporte no desenvolvimento.

Esses recursos foram fundamentais para o planejamento, execução e aprendizado durante o desenvolvimento do Task Flow.
