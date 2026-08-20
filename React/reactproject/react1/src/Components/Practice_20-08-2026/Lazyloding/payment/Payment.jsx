function Payment() {
  return (
    <div>
      <h2>Payment</h2>
      <input
        type="number"
        placeholder="Card Number"
      />

      <br /><br />
      <input
        type="text"
        placeholder="Card Holder Name"
      />

      <br /><br />
      <button onClick={onsubmit}>Pay Now</button>
    </div>
  );
}

export default Payment;