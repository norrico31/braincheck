import { ReactNode, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './Pages/Home'
import Steps from './Pages/Steps'

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.9,
}

const homeVariants = {
  initial: {
    scale: 0.3,
    opacity: 0,
  },
  in: {
    scale: 1,
    opacity: 1,
  },
  out: {
    scale: 2,
    opacity: 0,
  }
}

const AnimatedTab = ({ keyProp, variants, children, transition = pageTransition }: { keyProp: string; transition?: typeof pageTransition; variants: Record<string, Record<string, string | number>>; children: ReactNode }) => {
  return (
    <motion.div
      key={keyProp}
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const [start, setStart] = useState(false)
  return <>
    <AnimatePresence mode='wait'>
      {!start ? (
        <AnimatedTab
          keyProp='startSurvey'
          variants={homeVariants}
          transition={pageTransition}
        >
          <Home
            // start={start}
            onClick={() => setStart(true)}
          />
        </AnimatedTab>
      ) : (
        <AnimatedTab
          keyProp='steps'
          variants={homeVariants}
          transition={pageTransition}
        >
          <Steps />
        </AnimatedTab>
      )}
    </AnimatePresence>
  </>
}
