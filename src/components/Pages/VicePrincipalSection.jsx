
const VicePrincipalSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6">
      {/* Text Section */}
      <div className="md:w-1/2 p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">J.D GLOBAL SCHOOL</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Meet Our Vice Principal</h2>
        <p className="text-gray-600 mb-3">
          JD GLOBAL SCHOOL, Ghaziabad is a CBSE affiliated, progressive school. Within a short span, this accredited school has earned a reputation as one of NCR's high potential senior secondary schools. We forge ahead with our vision of preparing students to encounter a rapidly changing world by equipping them with critical thinking skills, a global perspective, and respect for core values.
        </p>
        <p className="text-gray-600 font-semibold">Vice Principal</p>
        <p className="text-gray-600">Rachna Tyagi</p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 p-4 flex justify-center">
        <img
          src="https://jdglobalschool.in/images/teachers/rachna.png" // Replace with your image URL
          alt="Vice Principal"
          className="rounded-lg shadow-lg w-64 h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default VicePrincipalSection;