const Hero = () => {
    console.log("Hero component rendered");
    return (
      <section className="bg-blue-600 text-white p-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to Your Personal Stylist</h1>
        <p className="mt-4">Transforming your wardrobe with AI-powered recommendations</p>
        <button className="mt-6 bg-white text-blue-600 py-2 px-4 rounded">Get Started</button>
      </section>
    );
  };
  
  export default Hero;
  