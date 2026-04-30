import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0, style = {} }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay }}
            style={style}
        >
            {children}
        </motion.div>
    );
}
