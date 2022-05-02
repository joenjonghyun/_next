import '@/styles/globals.css'
import {Footer, Header, Layout, Nav} from "@/components";
import { wrapper } from '@/modules/store'
const App = ({ Component, pageProps }) => {
  return <div>
   <Header/>
  <Nav/>
  <Component {...pageProps} />
  <Layout/>
  <Footer/>
  </div>
}

export default wrapper.withRedux(App)