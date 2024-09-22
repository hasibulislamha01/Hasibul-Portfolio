import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from 'prop-types'

const SectionAnimation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start off hidden and slightly below
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate only when in view
      transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
    >
      {children}
    </motion.div>
  );
};


SectionAnimation.propTypes = {
    children: PropTypes.node
}
export default SectionAnimation;
