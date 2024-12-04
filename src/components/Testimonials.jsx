const Testimonials = () => {
    return (
      <section className="bg-gray-100 p-10">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <p>&quot;This app has completely transformed my wardrobe. I feel so much more confident!&quot;</p>
            <p className="mt-2 font-bold">- Sarah</p>
          </div>
          <div className="text-center">
            <p>&quot;I love the personalized recommendations. It saves me so much time every morning.&quot;</p>
            <p className="mt-2 font-bold">- John</p>
          </div>
          <div className="text-center">
            <p>&quot;The interactive chatbot is amazing. I get style advice whenever I need it.&quot;</p>
            <p className="mt-2 font-bold">- Emily</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  