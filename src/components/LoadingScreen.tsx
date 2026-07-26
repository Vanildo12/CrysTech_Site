import { motion } from "motion/react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-20 h-20 border-4 border-brand-500 border-t-transparent rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-cyan-400 rounded-sm rotate-45 animate-pulse" />
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white tracking-wider">
          CrysTech <span className="text-brand-400">Solutions</span>
        </h2>
        <div className="mt-2 flex gap-1 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 bg-brand-400 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
