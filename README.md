# Projeto QualCheck

## Instruções Gerais

Para executar favor utilizar o gerenciador de pacotes pnpm (pode ser instalado pelo próprio npm - npm i pnpm). Na primeira vez instalando o projeto é necessário instalar as dependências, o que pode ser feito com o comando `pnpm i`, fique atento para os builds extras do next, talvez seja necessário executar o comando `pnpm approve-builds`, leita atentamente as instruções para aceitar os builds extras gerados pela primeira instalação. Para iniciar o ambiente de desenvolvimento para testes utilize o comando `pnpm dev`.

Navegue até a página [http://localhost:3000](http://localhost:3000) caso a execução no terminal não tenha gerado nenhum erro. O desenvolvimento pode ser feito normalmente nas páginas e componentes da aplicação.

> [!WARNING]
 ATENÇÃO! Favor subir todas as alterações para a branch dev para que possam ser mesclados e enviados para o remote do gitlab, caso contrário não será possível atualizar o código em produção para avaliação do projeto!

## Vercel

O projeto está hosteado atualmente no Vercel e pode ser acessado no seguinte [link](https://projeto-ti-drab.vercel.app/). O repositório que está conectado ao Vercel é o gitlab, favor siga corretamente as instruções de envio de alterações de código.