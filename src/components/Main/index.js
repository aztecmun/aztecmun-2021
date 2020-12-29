import Header from './Header'
import Footer from './Footer'
import { Layout, Container } from './styles'
import { AnimatePresence } from 'framer-motion'


function index({ children }) {
    return (
        <Layout>
            <Header />
            <AnimatePresence exitBeforeEnter
                initial={{ opacity: 0 }}
                animte={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Container> {children} </Container>
            </AnimatePresence>
            <Footer />
        </Layout>
    )
}

export default index
