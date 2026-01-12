import { useParams } from "react-router-dom";
import useRestmenu from "../utils/useRestmenu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartStore";

const RestaurantMenu = () => {
  const { id } = useParams();
  const menu = useRestmenu(id);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => dispatch(addItem(item));
  const handleRemoveItem = (item) => dispatch(removeItem(item));

  const [openCategory, setOpenCategory] = useState(null);

  if (!menu) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">Menu not found!</h2>
        </div>
      </div>
    );
  }

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  // Get quantity of a specific item in cart
  const getItemCount = (itemId) => {
    return cartItems.filter((i) => i.id === itemId).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Restaurant Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
            {menu.restaurant}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-4">
          {Object.entries(menu.categories).map(([category, items]) => {
            if (items.length === 0) return null;

            const isOpen = openCategory === category;

            return (
              <div
                key={category}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                {/* Accordion Header */}
                <div
                  className="cursor-pointer p-5 flex items-center justify-between bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-colors duration-200"
                  onClick={() => toggleCategory(category)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <span className="bg-orange-100 text-orange-700 text-sm font-medium px-3 py-1 rounded-full">
                      {items.length} items
                    </span>
                  </div>
                  <span
                    className="text-orange-500 text-xl font-bold transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    ▼
                  </span>
                </div>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="p-6 bg-white">
                    <ul className="space-y-3">
                      {items.map((item) => (
                        <li
                          key={item.id}
                          className="relative flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors duration-200 border border-gray-100"
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <div>
                              <span className="text-gray-700 font-medium block">
                                {item.name}
                              </span>
                              <span className="text-orange-600 font-bold text-lg mt-1 block">
                                ₹{item.price}
                              </span>
                            </div>
                          </div>

                          {/* Floating Counter */}
                          <div className="absolute bottom-3 right-3">
                            <div className="flex items-center bg-white rounded-lg shadow-lg border border-gray-200">
                              <button
                                className="w-8 h-8 flex items-center justify-center text-green-600 hover:bg-gray-50 font-bold text-lg"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRemoveItem(item);
                                }}
                                aria-label="Remove item"
                              >
                                −
                              </button>

                              <div className="w-8 h-8 flex items-center justify-center text-green-600 font-bold text-base border-l border-r border-gray-200">
                                {getItemCount(item.id)}
                              </div>

                              <button
                                className="w-8 h-8 flex items-center justify-center text-green-600 hover:bg-gray-50 font-bold text-lg"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAddItem(item);
                                }}
                                aria-label="Add item"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
