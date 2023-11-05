const pieChartData = {
    labels: ["Men", "Women", "Unknown"],
    datasets: [
      {
        data: [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ],
        backgroundColor: ["#FF5733", "#33FF57", "#5733FF"],
      },
    ],
  };
  

  const barChartData = {
    labels: ["Views", "Customers", ],
    datasets: [
      {
        label: "Statistics",
        data: [
          Math.random() * 10,
          Math.random() * 10,
          Math.random() * 10,
        ],
        backgroundColor: ["#FF5733", "#33FF57"],
      },
    ],
  };
  
 
  const pieChartCtx = document.getElementById("pieChart").getContext("2d");
  const pieChart = new Chart(pieChartCtx, {
    type: "pie",
    data: pieChartData,
  });
  
  
  const barChartCtx = document.getElementById("barChart").getContext("2d");
  const barChart = new Chart(barChartCtx, {
    type: "bar",
    data: barChartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  