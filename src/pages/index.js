import Link from 'next/link'

import { motion } from 'framer-motion'

function index() {
  return (
    <div>
      <Link href="/hola">
        <a>Hola</a>
      </Link>
    </div> 
  )
}

export default index
