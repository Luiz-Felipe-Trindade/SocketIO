const { Server } = require("socket.io");

// Cria o servidor Socket.IO na porta 3000
const io = new Server(3000, {
  cors: {
    origin: "*", // Permite todas as origens (desative em produção)
    methods: ["GET", "POST"],
  },
});

console.log("Servidor Socket.IO rodando na porta 3000");

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  // Envia uma mensagem ao cliente quando conectado
  socket.emit("server_message", "Bem-vindo ao servidor Socket.IO!");

  // Recebe mensagens do cliente
  socket.on("client_message", (data) => {
    console.log("Mensagem do cliente:", data);
  });

  // Evento de desconexão
  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});
