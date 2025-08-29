# Protótipos de Interface com o Usuário

## Mapa do Site

```mermaid
flowchart TD
   subgraph Visitante
        A["/ (Home)"]
        A --> C["/logar"]
        A --> D["/registrar"]
        A --> B["/demandas"]
        B --> G["/[id]"]
        A --> E["/servicos"]
        A --> F["/aluno/[id]"]
    end
```

```mermaid
flowchart TD
   subgraph Contratante
        A["/ (Dashboard)"]
        A --> B["/demandas"]
        B --> G["/[id]"]
        A --> E["/servicos"]
        A --> F["/aluno/[id]"]
        F --> I["/contratar"]
        A --> J["/perfil"]
        A --> K["/conversas"]
        K --> L["/[id]"]

    end
```

```mermaid
flowchart TD
   subgraph Aluno
        A["/ (Dashboard)"]
        A --> B["/demandas"]
        B --> G["/[id]"]
        A --> E["/servicos"]
        A --> F["/aluno/[id]"]
        F --> I["/contratar"]
        A --> J["/perfil"]
        A --> K["/conversas"]
        K --> L["/[id]"]

    end
```




