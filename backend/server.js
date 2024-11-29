require('dotenv').config();


const express = require('express');
const app = express();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

console.log(`Conectando ao banco com usuário: ${dbUser}`);