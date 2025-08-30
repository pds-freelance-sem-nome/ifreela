# Modelo de Dados

## Diagrama ER

![Diagrama](<>)

## Modelo Relacional

![Diagrama](<>)

# 📖 Dicionário de Dados

---

## **Tabela** : `Usuario`

**Descrição** : Armazena informações de login e autenticação dos usuários do sistema.  
**Observações** : Usuário pode ser aluno ou contratante.  

| Colunas     | Descrição                           | Tipo de Dado | Tamanho | Null | PK | FK | Unique | Identity | Default | Check |
|-------------|-------------------------------------|--------------|---------|------|----|----|--------|----------|---------|-------|
| id          | Identificador único                 | INT          | —       | ☐    | ☑️ | ☐  | ☑️     | ☑️       |         |       |
| email       | Email de login                      | VARCHAR      | 100     | ☐    | ☐  | ☐  | ☑️     | ☐        |         |       |
| senha       | Senha de acesso                     | VARCHAR      | 255     | ☐    | ☐  | ☐  | ☐      | ☐        |         |       |
| tipo        | Tipo de usuário (Aluno/Contratante) | VARCHAR      | 20      | ☐    | ☐  | ☐  | ☐      | ☐        |         |       |
| matricula   | Número de matrícula (apenas aluno)  | VARCHAR      | 15      | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| ativo       | Indica se está ativo                | BOOLEAN      | —       | ☐    | ☐  | ☐  | ☐      | ☐        | TRUE    |       |
| verificado  | Indica se a conta foi verificada    | BOOLEAN      | —       | ☐    | ☐  | ☐  | ☐      | ☐        | FALSE   |       |

---

## **Tabela** : `Perfil`

**Descrição** : Armazena os dados pessoais e profissionais do usuário.  
**Observações** : Relaciona 1:1 com `Usuario`.  

| Colunas         | Descrição                        | Tipo de Dado | Tamanho | Null | PK | FK | Unique | Identity | Default | Check |
|-----------------|----------------------------------|--------------|---------|------|----|----|--------|----------|---------|-------|
| id              | Identificador único              | INT          | —       | ☐    | ☑️ | ☐  | ☑️     | ☑️       |         |       |
| nome            | Nome                             | VARCHAR      | 100     | ☐    | ☐  | ☐  | ☐      | ☐        |         |       |
| sobrenome       | Sobrenome                        | VARCHAR      | 100     | ☐    | ☐  | ☐  | ☐      | ☐        |         |       |
| telefone        | Telefone                         | VARCHAR      | 20      | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| datanascimento  | Data de nascimento               | DATE         | —       | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| foto            | URL da foto                      | VARCHAR      | 255     | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| bio             | Biografia                        | TEXT         | —       | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| tituloprofissional | Título profissional           | VARCHAR      | 100     | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| curso           | Curso do usuário                 | VARCHAR      | 100     | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| periodo         | Período do curso                 | VARCHAR      | 50      | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| linkedin        | Link do LinkedIn                 | VARCHAR      | 255     | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| github          | Link do GitHub                   | VARCHAR      | 255     | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| site            | Site pessoal                     | VARCHAR      | 255     | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| id_usuario      | Usuário associado                | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |

---

## **Tabela** : `UsuarioEmpresa`

**Descrição** : Armazena informações de uma empresa vinculada a um usuário contratante.  
**Observações** : Relacionamento 1:1 com `Usuario`.  

| Colunas     | Descrição                          | Tipo de Dado | Tamanho | Null | PK | FK | Unique | Identity | Default | Check |
|-------------|------------------------------------|--------------|---------|------|----|----|--------|----------|---------|-------|
| id          | Identificador único                | INT          | —       | ☐    | ☑️ | ☐  | ☑️     | ☑️       |         |       |
| nome        | Nome da empresa                    | VARCHAR      | 100     | ☐    | ☐  | ☐  | ☐      | ☐        |         |       |
| tamanho     | Porte da empresa                   | VARCHAR      | 50      | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| setor       | Setor de atuação                   | VARCHAR      | 100     | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| localizacao | Localização geográfica             | VARCHAR      | 255     | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| id_usuario  | Usuário associado                  | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |

---

## **Tabela** : `UsuarioServico`

**Descrição** : Serviços que um usuário oferece, vinculados a categorias.  
**Observações** : Associação entre `Usuario` e `Categoria`.  

| Colunas      | Descrição                         | Tipo de Dado | Tamanho | Null | PK | FK | Unique | Identity | Default | Check |
|--------------|-----------------------------------|--------------|---------|------|----|----|--------|----------|---------|-------|
| id           | Identificador único               | INT          | —       | ☐    | ☑️ | ☐  | ☑️     | ☑️       |         |       |
| titulo       | Título do serviço                 | VARCHAR      | 100     | ☐    | ☐  | ☐  | ☐      | ☐        |         |       |
| descricao    | Descrição do serviço              | TEXT         | —       | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| id_usuario   | Usuário prestador                 | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |
| id_categoria | Categoria vinculada               | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |

---

## **Tabela** : `Categoria`

**Descrição** : Define categorias de serviços e projetos.  
**Observações** : Relaciona-se com `UsuarioServico` e `ProjetoCategoria`.  

| Colunas | Descrição              | Tipo de Dado | Tamanho | Null | PK | FK | Unique | Identity | Default | Check |
|---------|------------------------|--------------|---------|------|----|----|--------|----------|---------|-------|
| id      | Identificador único    | INT          | —       | ☐    | ☑️ | ☐  | ☑️     | ☑️       |         |       |
| nome    | Nome da categoria      | VARCHAR      | 100     | ☐    | ☐  | ☐  | ☑️     | ☐        |         |       |
| cor     | Cor identificadora     | VARCHAR      | 20      | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |

---

## **Tabela** : `UsuarioCategoria`

**Descrição** : Tabela associativa entre usuário e categoria.  
**Observações** : Permite vincular usuários a múltiplas categorias.  

| Colunas     | Descrição                  | Tipo de Dado | Tamanho | Null | PK | FK | Unique | Identity | Default | Check |
|-------------|----------------------------|--------------|---------|------|----|----|--------|----------|---------|-------|
| id_categoria| Categoria vinculada        | INT          | —       | ☐    | ☑️ | ☑️ | ☐      | ☐        |         |       |
| id_usuario  | Usuário vinculado          | INT          | —       | ☐    | ☑️ | ☑️ | ☐      | ☐        |         |       |

---

## **Tabela** : `ProjetoCategoria`

**Descrição** : Tabela associativa entre projeto e categoria.  
**Observações** : Permite classificar projetos em múltiplas categorias.  

| Colunas     | Descrição                  | Tipo de Dado | Tamanho | Null | PK | FK | Unique | Identity | Default | Check |
|-------------|----------------------------|--------------|---------|------|----|----|--------|----------|---------|-------|
| id_projeto  | Projeto vinculado          | INT          | —       | ☐    | ☑️ | ☑️ | ☐      | ☐        |         |       |
| id_categoria| Categoria vinculada        | INT          | —       | ☐    | ☑️ | ☑️ | ☐      | ☐        |         |       |

---

## **Tabela** : `Projeto`

**Descrição** : Armazena informações sobre os projetos criados por usuários contratantes.  
**Observações** : Relaciona-se com propostas, categorias e status.  

| Colunas        | Descrição                       | Tipo de Dado | Tamanho | Null | PK | FK | Unique | Identity | Default | Check |
|----------------|---------------------------------|--------------|---------|------|----|----|--------|----------|---------|-------|
| id             | Identificador único             | INT          | —       | ☐    | ☑️ | ☐  | ☑️     | ☑️       |         |       |
| titulo         | Título do projeto               | VARCHAR      | 100     | ☐    | ☐  | ☐  | ☐      | ☐        |         |       |
| descricao      | Descrição detalhada             | TEXT         | —       | ☐    | ☐  | ☐  | ☐      | ☐        |         |       |
| orcamento      | Valor estimado                  | DECIMAL      | 10,2    | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| prazo          | Prazo estimado (dias)           | INT          | —       | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| data_criacao   | Data de criação                 | TIMESTAMP    | —       | ☐    | ☐  | ☐  | ☐      | ☐        | now()   |       |
| id_usuario     | Criador do projeto              | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |
| id_status      | Status atual do projeto         | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        | 1       |       |

---

## **Tabela** : `ProjetoProposta`

**Descrição** : Registra as propostas de profissionais para participar de projetos.  
**Observações** : Relaciona usuários prestadores a projetos.  

| Colunas        | Descrição                       | Tipo de Dado | Tamanho | Null | PK | FK | Unique | Identity | Default | Check |
|----------------|---------------------------------|--------------|---------|------|----|----|--------|----------|---------|-------|
| id             | Identificador único             | INT          | —       | ☐    | ☑️ | ☐  | ☑️     | ☑️       |         |       |
| valor          | Valor proposto pelo profissional| DECIMAL      | 10,2    | ☐    | ☐  | ☐  | ☐      | ☐        |         |       |
| prazo          | Prazo estimado (dias)           | INT          | —       | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| mensagem       | Mensagem do profissional        | TEXT         | —       | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| data_envio     | Data de envio da proposta       | TIMESTAMP    | —       | ☐    | ☐  | ☐  | ☐      | ☐        | now()   |       |
| id_projeto     | Projeto associado               | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |
| id_usuario     | Usuário prestador associado     | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |

---

## **Tabela** : `ProjetoStatus`

**Descrição** : Define os status possíveis de um projeto.  
**Observações** : Usado em `Projeto`.  

| Colunas | Descrição             | Tipo de Dado | Tamanho | Null | PK | FK | Unique | Identity | Default | Check |
|---------|-----------------------|--------------|---------|------|----|----|--------|----------|---------|-------|
| id      | Identificador único   | INT          | —       | ☐    | ☑️ | ☐  | ☑️     | ☑️       |         |       |
| nome    | Nome do status        | VARCHAR      | 50      | ☐    | ☐  | ☐  | ☑️     | ☐        |         |       |

---

## **Tabela** : `Sala`

**Descrição** : Representa salas de conversa entre usuários.  
**Observações** : Relaciona contratantes e prestadores de serviços.  

| Colunas      | Descrição                      | Tipo de Dado | Tamanho | Null | PK | FK | Unique | Identity | Default | Check |
|--------------|--------------------------------|--------------|---------|------|----|----|--------|----------|---------|-------|
| id           | Identificador único            | INT          | —       | ☐    | ☑️ | ☐  | ☑️     | ☑️       |         |       |
| id_usuario_1 | Participante 1 (usuário)       | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |
| id_usuario_2 | Participante 2 (usuário)       | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |
| data_criacao | Data de criação da sala        | TIMESTAMP    | —       | ☐    | ☐  | ☐  | ☐      | ☐        | now()   |       |

---

## **Tabela** : `Mensagem`

**Descrição** : Registra mensagens trocadas dentro das salas.  
**Observações** : Relaciona-se com `Sala`.  

| Colunas     | Descrição                       | Tipo de Dado | Tamanho | Null | PK | FK | Unique | Identity | Default | Check |
|-------------|---------------------------------|--------------|---------|------|----|----|--------|----------|---------|-------|
| id          | Identificador único             | INT          | —       | ☐    | ☑️ | ☐  | ☑️     | ☑️       |         |       |
| conteudo    | Conteúdo da mensagem            | TEXT         | —       | ☐    | ☐  | ☐  | ☐      | ☐        |         |       |
| data_envio  | Data e hora do envio            | TIMESTAMP    | —       | ☐    | ☐  | ☐  | ☐      | ☐        | now()   |       |
| id_usuario  | Usuário que enviou              | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |
| id_sala     | Sala vinculada                  | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |

---

## **Tabela** : `Feedback`

**Descrição** : Armazena feedbacks e avaliações entre usuários após projetos.  
**Observações** : Relaciona usuário avaliador, avaliado e projeto.  

| Colunas        | Descrição                         | Tipo de Dado | Tamanho | Null | PK | FK | Unique | Identity | Default | Check |
|----------------|-----------------------------------|--------------|---------|------|----|----|--------|----------|---------|-------|
| id             | Identificador único               | INT          | —       | ☐    | ☑️ | ☐  | ☑️     | ☑️       |         |       |
| nota           | Avaliação numérica (0–5)          | INT          | —       | ☐    | ☐  | ☐  | ☐      | ☐        |         | nota>=0 and nota<=5 |
| comentario     | Comentário textual                | TEXT         | —       | ☑️   | ☐  | ☐  | ☐      | ☐        |         |       |
| data_feedback  | Data do feedback                  | TIMESTAMP    | —       | ☐    | ☐  | ☐  | ☐      | ☐        | now()   |       |
| id_avaliador   | Usuário que avaliou               | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |
| id_avaliado    | Usuário avaliado                  | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |
| id_projeto     | Projeto vinculado                 | INT          | —       | ☐    | ☐  | ☑️ | ☐      | ☐        |         |       |


