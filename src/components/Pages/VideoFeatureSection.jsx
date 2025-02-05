
const VideoFeatureSection = () => {
  // Dummy data for features
  const features = [
    {
      id: 1,
      icon: "images/all-icon/f-1.png",
      title: "Playground",
      description:
        "When kids interact with the sensory elements in the outdoors, they get the opportunity to problem-solve and think critically.",
    },
    {
      id: 2,
      icon: "images/all-icon/f-2.png",
      title: "Science Lab",
      description:
        "Helping students attain the learning goals of laboratory experiences requires their teachers to have broad and deep understanding of science.",
    },
    {
      id: 3,
      icon: "images/all-icon/f-3.png",
      title: "Books & Library",
      description:
        "A school library facilitates diverse life skills, thereby enhancing personal development in young children.",
    },
  ];

  return (
    <section
      id="video-feature"
      className="bg-cover bg-center pt-[60px] pb-[110px]"
      style={{ backgroundImage: "url(images/bg-1.jpg)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Feature List (Order first on mobile, last on desktop) */}
          <div className="lg:w-5/12 lg:order-last lg:ml-[8.333%]">
            <div className="feature pt-20">
              <div className="feature-title mb-8">
                <h3 className="text-3xl font-bold text-white">Our Facilities</h3>
              </div>
              <ul className="space-y-8">
                {features.map((feature) => (
                  <li key={feature.id}>
                    <div className="singel-feature flex items-start">
                      <div className="icon mr-6">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="cont flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-200">{feature.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Placeholder for Video or Other Content (Order last on mobile, first on desktop) */}
          <div className="lg:w-6/12 lg:order-first mt-10 lg:mt-0">
            {/* Add your video or other content here */}
            <div className="bg-gray-300 h-[400px] rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Video or Content Placeholder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Background (Optional) */}
      <div className="feature-bg"></div>
    </section>
  );
};

export default VideoFeatureSection;