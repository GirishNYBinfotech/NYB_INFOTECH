import { lazy, Suspense, useState } from "react";

const Payment = lazy(() => import("./Payment"));

function Shopping() {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h3>Product: Laptop</h3>
      <p>Price: ₹50,000</p>

      <button onClick={() => setShowPayment(true)}>Make Payment</button>

      {showPayment && (
        <Suspense fallback={<h3>Loading Payment...</h3>}>
          <Payment />
        </Suspense>
      )}
    </div>
  );
}

export default Shopping