import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.example.com', // URL base da API
    timeout: 5000, // Tempo limite para as requisições (em milissegundos)
    headers: {
        'Content-Type': 'application/json', // Tipo de conteúdo das requisições
        // Outros headers personalizados, se necessário
    },
});

export default instance;