## Sistema de Login/Cadastro com NextJS

Sistema de cadastro e login simplificado, desenvolvido em NextJS, integrado ao Auth-Next e Supabase.

Toda a aplicação está envolta pela autenticação, sem a necessidade de validações individuais de páginas ou componentes para acesso a recursos protegidos.



**Demonstração:** https://nextauth2.vercel.app/



- Aplicação em NextJS e TypeScript;
- Utilização de styled-components;
- Back-end com Supabase;
- Banco de dados com Postgress;
- Babel customizado;
- Framework de estilização Chakra-ui;
- Autenticação com Next-Auth;
- Utilização de ContextAPI;
- Formulário utilizando React-hook-form;
- Validação de campos do formulário com YUP;
- Requisições a API do Supabase com o Axios;
- Utilização de ícone do React-icons



```bash
npx create-next-app@latest my-app
npm i styled-components
npm i babel-plugin-styled-components
npm i @types/styled-components
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install next-auth
npm install react-hook-form
npm install @hookform/resolvers yup
npm i axios
npm i @chakra-ui/icons
npm i react-icons
```



Arquivo personalizado do **.Babelrc**



```bash
{
    "presets": [
        "next/babel"
    ],
    "plugins": [
        [
            "styled-components",
            {
                "ssr": true
            }
        ]
    ]
}
```



Para que a autenticação funcione em modo de produção, é necessário que crie uma variável de ambiente com o nome de NEXTAUTH_SECRET e a inclua no seu arquivo [...nextauth].js



```bash
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/google"
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true
}
export default NextAuth(authOptions)

openssl rand -base64 32
```



Gere um token através do comando abaixo e o atribua à variável criada (NEXTAUTH_SECRET). Esse comando pode ser executado em um terminal linux:

```bash
openssl rand -base64 32
```





**Precisa de ajuda? Me chame:**

**Discord:** kuat#4229

Linkedin: https://www.linkedin.com/in/eric-ricielle-2aa1ba237/





