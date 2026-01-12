import Restocard from "./RestaurantCard";
import { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinecheck from "../utils/useOffline";
import Context from "../utils/UserContextTemp";

const Body = () => {
  const [RestList, setRestList] = useState(resList);
  const [search, setsearch] = useState("");
  const [doubleData, setdoubledata] = useState(resList);
  const onlineStatus = useOnlinecheck();
  const RestocardWithPromotedLabel = withPromotedLabel(Restocard);
  const { loggedInUser, setData } = useContext(Context);
  console.log(loggedInUser);

  if (onlineStatus === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
        <div className="text-center p-8 bg-white rounded-2xl shadow-2xl max-w-md">
          <div className="text-6xl mb-4">🌐</div>
          <h1 className="text-2xl font-bold text-red-600 mb-2">No Internet Connection</h1>
          <p className="text-gray-600">Please check your connection and try again</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Enhanced Header Section */}
        <div className="mb-12 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side - Main Heading */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                Discover
                <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Restaurants
                </span>
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                Find your next favorite meal, delivered fast 🚀
              </p>
            </div>

            {/* Right Side - Hungry Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative px-8 py-6 rounded-3xl bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 shadow-2xl border-2 border-white transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-black mb-2">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      HUNGRY?
                    </span>
                  </h2>
                  <div className="space-y-1">
                    <p className="text-gray-800 font-bold text-lg">Just wait,</p>
                    <p className="text-gray-800 font-bold text-lg">food at your door! 🍕</p>
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Search Input with Icon */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for restaurants..."
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 active:scale-95 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                onClick={() => {
                  const filterr = RestList.filter((res) =>
                    res.data.name.toLowerCase().includes(search.toLowerCase())
                  );
                  setdoubledata(filterr);
                }}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>

              <button
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 active:scale-95 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                onClick={() => {
                  const filterr = RestList.filter((res) => res.data.avgRating > 4);
                  setdoubledata(filterr);
                }}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Top Rated
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Profile Name</label>
              <input
                type="text"
                placeholder={loggedInUser}
                onChange={(e) => setData(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-800">{doubleData.length}</span> restaurants
            </p>
          </div>
        </div>

        {/* Restaurant Cards Grid */}
        {doubleData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doubleData.map((restaurant) => (
              <Link
                key={restaurant?.data?.id}
                to={`/restaurant/${restaurant?.data?.id}`}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                {restaurant.data.promoted ? (
                  <RestocardWithPromotedLabel resdata={restaurant} />
                ) : (
                  <Restocard resdata={restaurant} />
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">No restaurants found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;