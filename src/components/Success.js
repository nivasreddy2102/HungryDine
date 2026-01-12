const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-green-500 text-white rounded-lg"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Success;
