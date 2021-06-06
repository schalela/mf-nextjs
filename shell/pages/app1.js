const RemoteApp1 = (await import("app1/mario")).default

const App1 = () => (<RemoteApp1></RemoteApp1>)

export default App1
