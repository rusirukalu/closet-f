import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const itemVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 },
    };

    return (
        <nav className="bg-white p-4 shadow-md fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo - now a Link */}
                <motion.div
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}    
                    className='ml-10'                
                >                    
                    <Link to="/" className="text-2xl font-bold">
                        closetIQ
                    </Link>
                </motion.div>                

                {/* Navigation Links */}
                <ul className="flex space-x-6 mr-10">
                    <AnimatePresence>
                        <motion.li
                            variants={itemVariants}
                            whileHover="hover"
                            whileTap="tap"
                            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                            className=''
                        >
                            <Link to="/" className="text-gray-800 hover:text-blue-500">
                                Home
                            </Link>
                        </motion.li>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.li
                            variants={itemVariants}
                            whileHover="hover"
                            whileTap="tap"
                            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                        >
                            <Link to="/about" className="text-gray-800 hover:text-blue-500">
                                About
                            </Link>
                        </motion.li>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.li
                            variants={itemVariants}
                            whileHover="hover"
                            whileTap="tap"
                            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                        >
                            <Link to="/contact" className="text-gray-800 hover:text-blue-500">
                                Contact
                            </Link>
                        </motion.li>
                    </AnimatePresence>

                    {/* Login/Register Buttons */}
                    <motion.li
                        variants={itemVariants}
                        whileHover="hover"
                        whileTap="tap"
                        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    >   
                        <Link 
                            to="/login" 
                            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                        >
                            Login
                        </Link> 
                    </motion.li>                   
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;