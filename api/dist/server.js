// const express = require('express')
import express from 'express';
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`App de exemplo esta rodando na porta ${port}`);
});
