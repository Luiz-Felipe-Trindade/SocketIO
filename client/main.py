import socketio

# Cria um cliente Socket.IO
sio = socketio.Client()

# Define eventos para conexão, mensagens e desconexão
@sio.event
def connect():
    print("Conectado ao servidor.")

@sio.event
def message(data):
    print(f"Mensagem recebida: {data}")

@sio.event
def disconnect():
    print("Desconectado do servidor.")

# Tenta conectar ao servidor
try:
    # Substitua pelo endereço do seu servidor Socket.IO
    sio.connect('http://localhost:3000')
    print("Conexão bem-sucedida!")

    # Envia uma mensagem para o servidor (se necessário)
    sio.emit('custom_event', {'message': 'Olá do cliente Python!'})

    # Mantém a conexão aberta
    sio.wait()

except Exception as e:
    print(f"Erro ao conectar: {e}")