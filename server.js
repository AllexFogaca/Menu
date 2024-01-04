const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  // Redirecionar para a página do formulário
  res.redirect('http://127.0.0.1:5500/pedido/pedido.html');
});


app.post('/enviar-email', (req, res) => {
  // Extrair dados do formulário
  const { nome, email,contato, mensagem } = req.body;

  // Configurar o transporte do nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail', // Ex: 'gmail'
    auth: {
      user: 'luhcandy2024@gmail.com',
      pass: 'zket dqbe mnbq ywbd',
    },
  });

  // Configurar o email a ser enviado
  const mailOptions = {
    from: 'luhcandy2024@gmail.com',
    to: 'allex.piola@gmail.com',
    subject: 'Assunto do Email',
    text: `Nome: ${nome}\nEmail: ${email}\nContato: ${contato}\nMensagem: ${mensagem}`,
  };

  // Enviar o email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email enviado com sucesso!');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
