## Sistema Simples para apresentação de técnica

O sistema demonstra, simulando abertura de uma conta bancária e seu fechmando, de forma simples, a utilização de:

- Utilização do Nextjs;
- Utilização de Styled-componentes;
- Styled componentes com tipagem no typeScript;
- Utilização de ContextAPI;
- Customização do Babel com instalação do plugin babel para styled-components;
- Tipagem com TypeScript;
- Modularização dos componentes com separação de funções, utilizando boas práticas do mercado



```bash
npx create-next-app@latest my-app
npm i styled-components
npm i babel-plugin-styled-components
npm i @types/styled-components     
```



Arquivo personalizado do .Babelrc



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

