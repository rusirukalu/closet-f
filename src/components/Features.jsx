const Features = () => {
    console.log("Features component rendered");
  
    return (
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <h3 className="text-xl font-bold">Personalized Recommendations</h3>
            <p>Get tailored outfit suggestions based on your style and preferences.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Real-Time Weather Integration</h3>
            <p>Adjust your wardrobe to match the current weather conditions.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Interactive Chatbot</h3>
            <p>Ask our AI-powered chatbot for style advice anytime, anywhere.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  