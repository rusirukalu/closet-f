const HowItWorks = () => {
    console.log("HowItWorks component rendered");
  
    return (
      <section className="bg-gray-100 p-10">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <h3 className="text-xl font-bold">1. Upload Your Wardrobe</h3>
            <p>Take pictures of your clothing items and upload them to the app.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">2. Get Recommendations</h3>
            <p>Receive personalized outfit suggestions based on your preferences and the weather.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">3. Enjoy Your Style</h3>
            <p>Feel confident and stylish with AI-powered recommendations.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  