import React from 'react';
import { motion } from 'framer-motion';

export default function ChartWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-xl shadow-sm p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
