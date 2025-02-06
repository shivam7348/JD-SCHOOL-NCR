import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    text: "It's one of my favorite seasons of the year: Back to School. As a kid, I loved fresh school supplies, new outfits, the change of seasons, and the chance to crack open a new book.",
    author: "Sachin Sharma",
  },
{
    id: 2,
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    id: 3,
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Testimonial</h2>
        <p className="text-xl text-center text-gray-600 mb-8">What they say</p>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="text-center">
                <p className="text-lg text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <p className="text-xl font-semibold text-gray-800">{testimonial.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;