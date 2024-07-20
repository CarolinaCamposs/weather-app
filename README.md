# Weather App

![image](https://github.com/user-attachments/assets/320c237a-99b3-4b2d-b529-9ce20cf2183d)

Este é um aplicativo de previsão do tempo desenvolvido com Angular. Ele utiliza uma API externa para buscar dados meteorológicos.

## Demonstração

Você pode acessar a aplicação através do seguinte link:

[Weather App](https://carolinacamposs.github.io/weather-app/)

## Funcionalidades

- Autocompletar para buscar cidades.
- Exibição de informações meteorológicas detalhadas.
- Interface amigável e responsiva.

## Tecnologias Utilizadas

- Angular
- Angular Material
- API de Previsão do Tempo

## Pré-requisitos

- Node.js (v12 ou superior)
- Angular CLI

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/weather-app.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd weather-app
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

## Configuração

1. Obtenha uma chave de API do [OpenWeatherMap](https://openweathermap.org/api).

2. Atualize o arquivo `weather.service.ts` com sua chave de API

## Uso

1. Inicie o servidor de desenvolvimento:

    ```bash
    ng serve
    ```

2. Abra o navegador e acesse `http://localhost:4200`.

3. Digite o nome da cidade no campo de entrada e clique no botão "Buscar" para ver a previsão do tempo.

