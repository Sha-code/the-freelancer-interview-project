import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import gql from 'graphql-tag'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Profile from './components/Profile'
import './index.css'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AvatarExampleFragmentDocument = gql`
  fragment AvatarExample on Avatar {
    smallUrl
    largeUrl
    xLargeUrl
  }
`
const mountingPoint = document.getElementById('root')

if (mountingPoint == null) {
  throw new Error(
    'The mounting point of the application was not found. Please make sure an element with `id="root"` exist in index.html.'
  )
}
const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <div className="bg-gray-100 px-32 py-10 min-h-screen">
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </div>,
  mountingPoint
)
