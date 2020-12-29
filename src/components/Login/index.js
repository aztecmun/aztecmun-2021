import { AnimateSharedLayout } from 'framer-motion'
import { Wrapper } from './styles'

function index() {
    return (
        <Wrapper>
            <AnimateSharedLayout>
                <div className="Section">
                </div>

                <div className="Section">
                    Sección2
                </div>
            </AnimateSharedLayout>
        </Wrapper>
    )
}

export default index
