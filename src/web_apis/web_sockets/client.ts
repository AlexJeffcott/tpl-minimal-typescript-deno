// define handlers
const handleConnected = (ws: WebSocket) => {
    console.info("Connected to server ...")
    handleTextMessage(ws, "Welcome!")
}

const handleDisconnected = () => {
    console.info("Connection closed")
    Deno.exit(1)
}

const handleError = (event: Event | ErrorEvent) => console.error("Connection error", event instanceof ErrorEvent ? event.message : event.type)

const handleTextMessage = (ws: WebSocket, str: string) => {
    console.info("SERVER >> " + str)
    const reply = prompt("Client >> ") || "No reply"
    if (reply === "exit") return ws.close()
    ws.send(reply)
}

// open a Web Socket client connection pointing to the server
console.info("Connecting to server...")
try {
    const socket = new WebSocket('ws://localhost:8000');
    socket.onopen = () => handleConnected(socket)
    socket.onclose = () => handleDisconnected()
    socket.onerror = (event: Event | ErrorEvent) => handleError(event)
    socket.onmessage = (event: MessageEvent) => {
        handleTextMessage(socket, event.data)
    }
} catch (err) {
    console.error("Failed to connect to the server ... exiting")
    Deno.exit(1)
}
