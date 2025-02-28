import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({children}) => {
    const ref =useRef(null)
    const isInview = useInView(ref, {once: true})
    const mainControls = useAnimation()
    useEffect (() => {
        mainControls.start("visible")
        
     },[isInview])
  return (
    <div ref={ref} style={{position: 'relative', overflow:'hidden'}}>
        <motion.div
        variants={{
            hidden: {opacity: 0, y:75 },
            visible: { opacity: 1, y:0 },
        }}
         initial="hidden"
         animate={mainControls}
         transition={{ duration:0.5, delay: 0.25}}
        >{children}</motion.div>
    </div>
  )
}

export default Reveal