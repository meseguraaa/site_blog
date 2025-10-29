# Copilot Instructions for AI Agents

## Visão Geral

Este projeto é um site/blog construído com Next.js, TypeScript, TailwindCSS e ESLint. O código segue a estrutura padrão do Next.js, com páginas em `src/pages`, estilos globais em `src/styles/globals.css` e configuração de Tailwind em `tailwind.config.ts`.

## Estrutura e Fluxo

- **Páginas:**
  - Arquivos em `src/pages` são rotas do site. O arquivo `index.tsx` é a página principal.
  - Rotas de API ficam em `src/pages/api` e são tratadas como endpoints serverless (exemplo: `hello.ts`).
- **Estilos:**
  - TailwindCSS é usado via diretivas no `globals.css`.
  - Configuração do Tailwind está em `tailwind.config.ts`.
- **Fontes:**
  - O projeto utiliza a fonte Geist via `next/font`.
- **Configuração:**
  - O TypeScript está configurado para usar paths com alias `@/*` para `src/*`.
  - O ESLint está configurado para rodar com `npm run lint`.

## Comandos Essenciais

- `npm run dev` — inicia o servidor de desenvolvimento Next.js.
- `npm run build` — gera a build de produção.
- `npm run start` — inicia o servidor em modo produção.
- `npm run lint` — executa o ESLint.

## Convenções Específicas

- **Importação de estilos globais:** sempre feita em `_app.tsx`.
- **Classe CSS padrão:** o body recebe a classe `antialiased` em `_document.tsx`.
- **Fontes customizadas:** configuradas no topo das páginas usando o hook do `next/font`.
- **API routes:** devem exportar uma função chamada `handler` que recebe `NextApiRequest` e `NextApiResponse`.
- **Aliases:** use `@/` para importar arquivos de `src`.

## Integrações e Dependências

- **TailwindCSS:** configurado via `postcss.config.mjs` e `tailwind.config.ts`.
- **ESLint:** configuração em `eslint.config.mjs`.
- **PostCSS:** usado para processar CSS.
- **React 19:** utilizado como base do frontend.

## Exemplos de Padrões

- Página principal:
  ```tsx
  export default function Home() {
    return <div>...</div>;
  }
  ```
- API route:
  ```ts
  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ name: "John Doe" });
  }
  ```

## Observações

- O projeto foi inicializado com `create-next-app`.
- Para deploy, recomenda-se o Vercel.
- Não há testes automatizados configurados.

---

Se alguma seção estiver incompleta ou pouco clara, peça feedback ao usuário para ajustes.
