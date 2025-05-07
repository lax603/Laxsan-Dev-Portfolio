"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <motion.div 
        className="flex items-center cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="font-clash-display font-semibold text-lg md:text-xl lg:text-2xl">
          <span className="text-blue">&lt;</span>
          <span className="text-foreground"> Laxsan Dev </span>
          <span className="text-blue">/&gt;</span>
        </span>
      </motion.div>
    </Link>
  );
}