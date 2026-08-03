function Orders() {
  return (
    <div>
      <h2>My Orders</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>101</td>
            <td>Laptop</td>
            <td>Delivered</td>
          </tr>

          <tr>
            <td>102</td>
            <td>Keyboard</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Orders;