const saleChartElem = document.querySelector('.sale-chart')

const saleChart = new Chart(saleChartElem, {
    // type: 'doughnut',
    // type: 'polarArea',
    // type: 'bar',
    type: 'line',
    data: {
        labels: ['Far', 'Ord', 'Khor', 'Tir', 'Mor', 'Shahr'],

        datasets: [{
            label: 'Month Users',
            data: [232, 431, 341, 43, 19, 119],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            yAxisID: 'usersY',
            fill: true
        },
        {
            label: 'Month Sale',
            data: [112, 90, 35, 98, 134, 32],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            yAxisID: 'saleY',
            fill: false
        },
        ]
    },
    options: {
        scales: {
            usersY: {
                position: 'left'
            },
            saleY: {
                position: 'right',
                min: 30,
                max: 350,
                grid: {
                    display: false
                }
            }
        }
    }
})