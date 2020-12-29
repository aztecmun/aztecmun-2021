import Header from './Header'
import Footer from './Footer'
import { Layout, Container } from './styles'


function index( { children } ) {
    return (
    <Layout>
        <Header></Header>
        <Container> { children } </Container>
        <Footer></Footer>
    </Layout>
    )
}

export default index
