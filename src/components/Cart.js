import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartStore";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  // Handle Add, Remove, Clear
  const handleAddItem = (item) => dispatch(addItem(item));
  const handleRemoveItem = (item) => dispatch(removeItem(item));
  const handleClearCart = () => dispatch(clearCart());


  //payment handler
  const navigate=useNavigate();
  const handlePayment = () => {
    alert("Proceeding to payment gateway...");
    dispatch(clearCart());

    navigate("/success");
  }

  // Group same items and calculate quantity dynamically
  const getCartSummary = (items) => {
    const summary = {};
    items.forEach((item) => {
      if (summary[item.id]) {
        summary[item.id].quantity += 1;
      } else {
        summary[item.id] = { ...item, quantity: 1 };
      }
    });
    return Object.values(summary);
  };

  const cartSummary = getCartSummary(cartItems);

  // Total items and price
  const totalItems = cartSummary.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartSummary.reduce((total, item) => total + item.price * item.quantity, 0);

  // Empty Cart UI
  if (cartSummary.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-600">Add some delicious items to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Cart Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
            <p className="text-gray-600 mt-1">{totalItems} items in cart</p>
          </div>
          <button
            onClick={handleClearCart}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold transition-colors"
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {cartSummary.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-200 flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-orange-600 font-bold text-lg mt-1">₹{item.price}</p>
              </div>

              <div className="flex items-center gap-6">
                {/* Quantity Counter */}
                <div className="flex items-center bg-white border-2 border-green-500 rounded-lg shadow-sm">
                  <button
                    className="w-10 h-10 flex items-center justify-center text-green-600 hover:bg-green-50 font-bold text-xl"
                    onClick={() => handleRemoveItem(item)}
                  >
                    −
                  </button>

                  <div className="min-w-12 h-10 flex items-center justify-center text-green-600 font-bold text-base px-3 border-l border-r border-green-200">
                    {item.quantity}
                  </div>

                  <button
                    className="w-10 h-10 flex items-center justify-center text-green-600 hover:bg-green-50 font-bold text-xl"
                    onClick={() => handleAddItem(item)}
                  >
                    +
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-right min-w-24">
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="text-xl font-bold text-gray-800">₹{item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sticky bottom-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-gray-700">
              <span className="text-lg">Subtotal ({totalItems} items)</span>
              <span className="text-lg font-semibold">₹{totalPrice}</span>
            </div>
            <div className="flex items-center justify-between text-gray-700">
              <span className="text-lg">Delivery Fee</span>
              <span className="text-lg font-semibold text-green-600">FREE</span>
            </div>
            <div className="h-px bg-gray-200 my-3"></div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-800">Total</span>
              <span className="text-2xl font-bold text-orange-600">₹{totalPrice}</span>
            </div>
          </div>

          <button onClick={handlePayment}className="w-full mt-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
