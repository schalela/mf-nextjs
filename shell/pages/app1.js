import dynamic from 'next/dynamic'

const RemoteMario = dynamic(
  () => import('app1/mario'),
  { ssr: false }
)

const App1 = () => (<RemoteMario />)

export default App1
