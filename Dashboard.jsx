function Dashboard({ products }) {
  const data = {
    labels: products.map(product => product.name),
    datasets: [{
      label: "Stock Levels",
      data: products.map(product => product.stock_quantity),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Line data={data} />
    </div>
  );
}

export default Dashboard;