import { serve } from "/deps.ts"

// define handlers
const handleConnected = (event: Event) => console.info("Connection established", event)

const handleDisconnected = (event: Event) => {
    console.info("Connection closed", event)
    Deno.exit(1)
}

const handleError = (event: Event | ErrorEvent) => console.error("Connection error", event instanceof ErrorEvent ? event.message : event.type)

const handleTextMessage = (ws: WebSocket, str: string) => {
    console.info("CLIENT >> " + str)
    const reply = prompt("Server >> ") || "No reply"
    if (reply === "exit") return ws.close()
    ws.send(reply)
}

// establish the WebSocket connection
async function reqHandler(req:Request) {
    if (req.headers.get("upgrade") !== "websocket") {
        return new Response(null, { status: 501 })
    }
    const { socket, response } = Deno.upgradeWebSocket(req)

    socket.onopen = (event: Event) => handleConnected(event)
    socket.onclose = (event: Event) => handleDisconnected(event)
    socket.onerror = (event: Event | ErrorEvent) => handleError(event)
    socket.onmessage = (event: MessageEvent) => {
        if (typeof event.data === 'string') handleTextMessage(socket, event.data)
    }

    return response 
}

console.info("Waiting for client...")
serve(reqHandler, { port: 8000 })
