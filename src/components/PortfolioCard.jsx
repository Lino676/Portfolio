import { motion } from "framer-motion";

const PortfolioCard = ({ title, image, index, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="cursor-pointer relative w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1, delay: index * 0 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* overlay */}
      {/* <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black/75 
        opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg"
      >
        <p className="text-white font-poppins text-lg">{title}</p>
      </motion.div> */}
    </motion.div>
  );
};

export default PortfolioCard;
