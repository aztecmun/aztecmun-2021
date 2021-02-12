//React imports
import React, { useState } from 'react'

//Libraries imports
import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

//Local components import
import { images } from '../images'

//Styles
import { GalWrapper } from './galleryElements'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

export default function index() {
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, images.length, page)

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <GalWrapper>
      <h1 className="title">Galería</h1>
      <AnimatePresence exitBeforeEnter>

        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          initial={{ x: 1200 }}
          animate={{ x: 0 }}
          exit={{ x: -1200 }}

          transition={{
            x: { type: 'sping', stiffness: 300, damping: 300 },
          }}
        />

      </AnimatePresence>
      <BiLeftArrow className="controls left" onClick={() => paginate(-1)} />
      <BiRightArrow className="controls right" onClick={() => paginate(+1)} />
    </GalWrapper>
  )
}
