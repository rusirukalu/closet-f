import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: "98%", label: "User Satisfaction" },
    { value: "50K+", label: "Active Users" },
    { value: "1M+", label: "Outfits Generated" },
    { value: "24/7", label: "AI Assistance" }
  ];

  return (
    <section className="py-20 bg-black text-white" id="stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
