import { CDN_URL } from "../utils/constants";

const Restocard = (props) => {
  const { resdata } = props;
  const { 
    cloudinaryImageId, 
    costForTwo, 
    name, 
    cuisines, 
    avgRating, 
    deliveryTime 
  } = resdata?.data;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Delivery Time Badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
          <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-bold text-gray-800">{deliveryTime} min</span>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-bold text-white">{avgRating}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        
        {/* Restaurant Name */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors">
          {name}
        </h3>

        {/* Cuisines */}
        <div className="flex items-start gap-2 mb-3">
          <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {cuisines.join(", ")}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-3"></div>

        {/* Footer Info */}
        <div className="flex items-center justify-between">
          
          {/* Cost */}
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
           <div>
              <p className="text-lg font-bold text-gray-800">₹{costForTwo / 100}</p>
              <p className="text-xs text-gray-500">for two</p>
            </div>
          </div>

          {/* Quick Action Button */}
          <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-600 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1">
            <span className="text-sm">Order</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

//Higher order component (HOC) - a function that takes a component as an argument and returns a new component
//input - RestaurantCard
//output - RestaurantCard with some additional functionality

export const withPromotedLabel = (Restocard) => {
  return (props) => {
    return (    
      <div className="relative">
        <Restocard {...props} />
        <div className="absolute top-3 left-3 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">   
          PROMOTED
        </div>
      </div>
    );
  };
}

export default Restocard;