import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React from 'react'

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export default function AnimateOnScroll({ children, delay = 0, direction = 'up', className = "" }: AnimateOnScrollProps) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Reduce animation distance on mobile
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const distance = isMobile ? 20 : 40;

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0
    },
    visible: { opacity: 1, y: 0, x: 0 }
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
