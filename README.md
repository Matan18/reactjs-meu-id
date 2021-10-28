# react-meu-id

## [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

Essa é uma biblioteca para implementar o login social com [meuId](https://meuid.com.br/) no frontend, reduzindo a implementação a simples tratamento de um evento chamado `onFinish`, que será chamado pelo componente quando ele receber a mensagem do meuId

## Implementação

É preciso gerar um cadastro, esse [link](https://idwall.co/contato/) leva para a página de cadastro onde terá melhores informações sobre a empresa em questão;

Assim que tiver o cadastro, e o appId, poderá implementar esse botão da seguinte forma

```ts
import { MeuIdButton } from 'react-meu-id';

function Component(){

  return (
    <MeuIdButton
      appId='your-app-id-here'
      onFinish={(finishData) => console.log(finishData)}
    />
  )
}
```

Além da função `onFinish`, existem também as funções `onLoad` e `onMessage`;
* A função `onLoad` é chamada quando o popup é carregado, automaticamente o `MeuIdButton` faz o tratamento padrão de enviar a appId, porém te permite fazer alguma outra implementação (na versão 1.0.0 dessa lib, ele não interrompe a implementação normal);
* A função `onMessage` é chamada quando o popup envia uma mensagem para o seu site, que não se encaixa nem em `onLoad`, nem em `onFinish`;

O botão já possui estilo próprio, mas você pode substituílos passando uma dessas propriedades: `styles` ou `className`
