# Weather App

Weather App é uma aplicação simples desenvolvida em Angular para consultar a previsão do tempo de qualquer cidade utilizando a API do OpenWeatherMap.

![image](https://github.com/user-attachments/assets/aa7e0a3c-6c69-430e-9e66-cdee95a53ca8)


## Funcionalidades

- Consulta de previsão do tempo atual por nome da cidade
- Exibição da temperatura e descrição do tempo em português

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

