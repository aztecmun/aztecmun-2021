import { motion } from 'framer-motion'

function comites() {
    return (
        <motion.div
        layoutId="Comites"
        initial={{ opacity: 0, x: -50 }}
        animate= {{ opacity: 1, x: 0 }}
        >
            Comites
        </motion.div>
    )
}

export default comites
