
Chart.defaults.global.responsive = true;

new Chart(document.getElementById("myChart"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950],
    datasets: [{
        data: [86,1144,1062,500,900,2123,4000, 2312],
        borderColor: "#3e95cd",
        fill: false
      },
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
    }
  }
});

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [
        {
          label: "How many visitors",
          backgroundColor: ["#002642", "#002642","#002642","#002642","#002642", "#002642", "#002642"],
          data: [50,100,300,450,500,200, 600]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false },
      title: {
        display: true
      }
    }
});

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Phones", "Tablets", "Desktop",],
      datasets: [{
        label: "How many users",
        backgroundColor: ["#002642", "#8e5ea2","#173953"],
        data: [5267,2345,734]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true
      }
    }
});
