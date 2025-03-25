import { motion } from "framer-motion"

// variables
const stairsAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: "0%" }
};

// calculate the reverse index fot staggred delay
const reverseIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index - 1;
}

const Stairs = () => {
    return <>
        {/* render 6 motion divs, each representing a step of the stairs. 
        Each div will have the same animation defined by the stairsAnimation object.
        The delay for each div is calculated sinamically based on it's reversed index,
        creating a staggered effect with decreasing delay for each subsequent step. 
        */}
        {[...Array(6)].map((_, index) => {
            const stepWidth = `${100 - index * 10}%`;
            return (
                <motion.div
                    key={index}
                    variants={stairsAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full absolute bg-white"
                    style={{
                        width: stepWidth,
                        left: `${index * 5}%`,
                    }}
                />
            );
        })}
    </>
}

export default Stairs