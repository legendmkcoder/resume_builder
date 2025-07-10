import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRegFileAlt, FaRegEye, FaFilePdf } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const AnimatedBlob = () => (
  <motion.svg
    width="700"
    height="700"
    viewBox="0 0 700 700"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[-200px] top-[-200px] z-0 opacity-30 pointer-events-none select-none"
    aria-hidden="true"
    initial={{ scale: 1, rotate: 0 }}
    animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
  >
    <defs>
      <radialGradient
        id="blobGradient"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%"
      >
        <stop offset="0%" stopColor="#008B8B" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#2ECC71" stopOpacity="0.12" />
      </radialGradient>
    </defs>
    <path
      d="M350 700c-97.2 0-194.4-38.8-267.6-112C9.2 514.8-29.6 417.6 0.8 320.4 31.2 223.2 128.4 184.4 225.6 154c97.2-30.4 194.4-69.2 291.6-38.8 97.2 30.4 136 127.6 165.6 224.8 29.6 97.2-8.8 194.4-82 267.6C544.4 661.2 447.2 700 350 700z"
      fill="url(#blobGradient)"
    />
  </motion.svg>
);

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated SVG blob background */}
      <AnimatedBlob />
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0 bg-gradient-to-tr from-primary/10 via-emerald/10 to-coral/10 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center"
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Create Your Professional</span>
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
              className="block text-primary"
              style={{ color: '#008B8B' }}
            >
              Resume in{' '}
              <span className="inline-block">
                <Typewriter
                  words={['Minutes', 'Seconds', 'No Time!']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={60}
                  delaySpeed={1200}
                />
              </span>
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Choose from multiple templates, customize your design, and export to
            PDF. Build a resume that stands out and gets you hired.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-md shadow"
            >
              <Link
                to="/builder"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-emerald focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald transition-all md:py-4 md:text-lg md:px-10"
              >
                <FaRegFileAlt className="mr-2 text-xl" />
                Start Building
                <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-20"
        >
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Features that make resume building easier
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="pt-6"
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  boxShadow: '0 8px 32px 0 rgba(0,139,139,0.10)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md border border-background">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const features = [
  {
    name: 'Multiple Templates',
    description:
      'Choose from a variety of professional templates to make your resume stand out.',
    icon: <FaRegFileAlt className="h-6 w-6 text-white" />,
  },
  {
    name: 'Real-time Preview',
    description: 'See changes instantly as you build your resume.',
    icon: <FaRegEye className="h-6 w-6 text-white" />,
  },
  {
    name: 'PDF Export',
    description:
      'Download your resume in PDF format, ready to send to employers.',
    icon: <FaFilePdf className="h-6 w-6 text-white" />,
  },
];

export default Home;
