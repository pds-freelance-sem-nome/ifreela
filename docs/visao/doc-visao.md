# Documento de Visão

## Histórico de Revisões

| Data | Versão |   Descrição    | Autores |
| :--: | :----: | :------------: | :-----: |
| 21/08/2025 | 1.0 | Versão inicial | - |

## 1. Objetivo do projeto

O IFreelas tem como objetivo conectar alunos do IFRN, que desejam aplicar seus conhecimentos em projetos reais, a contratantes externos que buscam soluções rápidas, acessíveis e de qualidade. A proposta, além de gerar oportunidades para talentos locais, é facilitar a contratação de alunos para demandas pontuais, criando um ambiente direcionado, ágil e vantajoso para ambos os lados

## 2. Descrição do problema

|     |     |
| --- | --- |
| **Problema** | Contratantes externos têm dificuldade em encontrar soluções rápidas, acessíveis e confiáveis para pequenas demandas. Ao mesmo tempo, alunos do IFRN carecem de oportunidades práticas para aplicar seus conhecimentos em projetos reais |
| **Afeta**    | Contratantes externos (pessoas físicas, pequenos negócios, empresas locais) e alunos do IFRN que buscam visibilidade, experiência e renda extra. |  
| **Impacta**  | Para os contratantes, resulta em perda de tempo e dificuldade de acesso a serviços acessíveis; para os alunos, reduz oportunidades de aprendizado, prática profissional e inserção no mercado. |
| **Solução**  | 	O IFreelas, uma plataforma específica para conectar contratantes externos a alunos do IFRN, facilitando a contratação para demandas pontuais de forma ágil, acessível e vantajosa para ambos. |

## 3. Descrição dos usuários

| Nome | Descrição | Responsabilidade |
| - | - | - |
| Aluno | Estudante que desejaaplicar seus conhecimentosem projetos reais | Criar perfil,ofertar serviços,negociar prazos e valores, executar os projetos contratados | 
| Contratante | Pessoa física, pequeno negócioou empresa local que buscasoluções rápidas, acessíveis e dequalidade para demandas pontuais | Cadastrar demandas,selecionar alunos,contratar serviços eavaliar entregas |
| Administrador | Responsável por gerenciar o ambiente,garantir segurança e qualidade dainteração entre alunos e contratantes | Moderar usuários,validar informações,acompanhar métricas eresolver problemas técnicos/operacionais |

## 4. Descrição do ambiente dos usuários

| Nome | Ambiente | 
| - | - |
| Aluno | Acessa a plataforma principalmentepelo computador pessoal | 
| Contratante | Utiliza a plataforma em seu local detrabalho ou em casa, geralmentebuscando agilidade | 
| Administrador | Acessa via computador, em um paineladministrativo restrito |

## 5. Principais necessidades dos usuários

| Nome | Necessidades |
| - | - |
| Aluno | Interface clara para cadastrar perfil, divulgar serviços, receber propostas, gerenciarnegociações e acompanhar o andamento dos projetos |
| Contratante | Facilidade para cadastrar demandas, encontrar alunos com o perfil adequado,contratar e acompanhar o progresso dos serviços | 
| Administrador | Ferramentas para monitorar usuários, validar cadastros, moderar interações,resolver disputas e acompanhar métricas de uso | 


## 6. Alternativas concorrentes

Plataformas como LinkedIn, 99Freelas e Workana conectam profissionais a clientes, mas não são específicas para alunos do IFRN nem para pequenas demandas. O IFreelas se diferencia por focar exclusivamente em conectar alunos a contratantes externos, oferecendo uma solução ágil, segura e direcionada para ambos

## 7. Visão geral do produto

O IFreelas é uma plataforma digital que conecta alunos do IFRN a contratantes externos interessados em pequenas demandas. O sistema permite que os alunos criem perfis, ofereçam seus serviços e negociem diretamente com os contratantes, enquanto estes podem cadastrar projetos, selecionar profissionais e acompanhar a execução. A plataforma também conta com ferramentas de administração para garantir segurança, qualidade e bom funcionamento, oferecendo um ambiente ágil, confiável e vantajoso para todos os usuários

## 8. Requisitos funcionais

| Código | Nome | Descrição | Prioridade |
| :----: | :--: | :-------: | :--------: |
| F01 | Cadastro de Aluno | Permitir que alunos do IFRN criem e editem seu perfil com informações pessoais, habilidades e portfólio | Alta |
| F02 | Cadastro de Contratante | Permitir que contratantes externos criem perfil e cadastrem projetos ou demandas | Alta |
| F03 | Busca e Filtragem | Permitir que contratantes encontrem alunos por habilidade, disponibilidade e avaliação | Alta |
| F04 | Negociação e Mensagens | Permitir que aluno e contratante conversem e negociem prazos e valores dentro da plataforma | Alta |
| F05 | Gestão de Projetos | Permitir acompanhamento do status dos projetos, entregas e feedbacks | Média |
| F06 | Avaliação e Feedback | Permitir que contratante avalie o aluno após conclusão do projeto e vice-versa | Média |


## 9. Requisitos não-funcionais

| Código | Nome | Descrição | Categoria | Classificação |
| :----: | :--: | :-------: | :-------: | :-----------: |
| NF01 | Segurança | Garantir que dados de usuários sejam protegidos contra acessos não autorizados | Segurança | Essencial |
| NF02 | Usabilidade | Interface intuitiva e responsiva, compatível com desktop e dispositivos móveis | Usabilidade | Essencial |
| NF03 | Autenticação com Matricula | Garantir que apenas alunos do IFRN possam se cadastrar como freelancers, usando a matrícula institucional para validação | Segurança | Essencial |
| NF04 | Performance | Sistema deve suportar múltiplos usuários simultâneos sem lentidão significativa | Desempenho | Alta |
| NF05DDDDDDDDDDDDD | Disponibilidade | Plataforma deve estar disponível 24/7, com manutenção programada minimizando impacto | Confiabilidade | Alta |
