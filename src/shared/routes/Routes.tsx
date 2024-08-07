import { ReactNode } from "react"
import { AnimatePresence, motion } from 'framer-motion'

import Home from '../../Pages/Home'
import Steps from "../../Pages/Steps"
import ViewResults from "../../Pages/ViewResults"
import Subscribe from './../../Pages/Subscribe';

const pageTransition = {
	type: "tween",
	ease: "anticipate",
	duration: 0.9,
}

export const AnimatedPage = ({ variants, children }: { variants: Record<string, Record<string, string | number>>; children: ReactNode }) => {
	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="in"
			exit="out"
			transition={pageTransition}
		>
			{children}
		</motion.div>
	)
}

export const AnimateSteps = ({ children }: { children: ReactNode }) => <AnimatePresence mode='wait'><AnimatedPage variants={selectRoleVariants}>{children}</AnimatedPage></AnimatePresence>

export const homeVariants = {
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

export const selectRoleVariants = {
	initial: {
		opacity: 0,
	},
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	}
}

export default function Paths() {
	const location = useLocation()
	return <AnimatePresence mode='wait'>
		{/* <Routes location={location} key={location.pathname}>
			<Route path="/" element={<AnimatedPage variants={homeVariants}><Home /></AnimatedPage>} />
			<Route path="/steps" element={<AnimatedPage variants={selectRoleVariants}><Steps /></AnimatedPage>} />
			<Route path="/view-results" element={<AnimatedPage variants={selectRoleVariants}><ViewResults /></AnimatedPage>} />
			<Route path="/subscribe" element={<AnimatedPage variants={selectRoleVariants}><Subscribe /></AnimatedPage>} />
		</Routes> */}
	</AnimatePresence>
}