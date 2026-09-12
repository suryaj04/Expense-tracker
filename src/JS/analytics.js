const topCategoriesCtx = document.getElementById('topCategoriesChart');
let spc = document.getElementById('spendingChart')
const incomeExpenseCtx = document.getElementById('incomeExpenseChart');
let category = document.getElementById('category')
new Chart(spc, {
    type: 'line',

    data: {
        labels: [
            'Aug 1',
            'Aug 5',
            'Aug 10',
            'Aug 15',
            'Aug 20',
            'Aug 25',
            'Aug 31'
        ],

        datasets: [{
            label: 'Spending',

            data: [
                2400,
                5200,
                8100,
                12600,
                17400,
                22100,
                28450
            ],

            borderColor: '#4F46E5',
            borderWidth: 2,

            pointRadius: 0,
            pointHoverRadius: 4,

            tension: 0.4,

            fill: false
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {
            x: {
                grid: {
                    display: false
                },

                ticks: {
                    color: '#9CA3AF',
                    font: {
                        size: 11
                    }
                }
            },

            y: {
                beginAtZero: true,

                grid: {
                    color: '#F3F4F6'
                },

                ticks: {
                    color: '#9CA3AF',

                    font: {
                        size: 11
                    },

                    callback: function(value) {
                        return '₹' + value / 1000 + 'K';
                    }
                }
            }
        }
    }
});
const centerTextPlugin = {
    id: 'centerText',

    beforeDraw(chart) {
        const { ctx } = chart;

        const meta = chart.getDatasetMeta(0);

        if (!meta.data.length) return;

        // Get the actual center of the doughnut
        const centerX = meta.data[0].x;
        const centerY = meta.data[0].y;

        ctx.save();

        // Amount
        ctx.font = '600 14px Poppins';
        ctx.fillStyle = '#111827';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.fillText('$3,260.00', centerX, centerY + 6);

        ctx.restore();
    }
};
new Chart(category, {
    type: 'doughnut',

    data: {
        labels: [
            'Food',
            'Transport',
            'Shopping',
            'Bills',
            'Entertainment'
        ],

        datasets: [{
            data: [
                8500,
                5200,
                6800,
                4700,
                3250
            ],

            backgroundColor: [
                '#4F46E5',
                '#16A34A',
                '#7C3AED',
                '#F59E0B',
                '#DC2626'
            ],

            borderWidth: 0,
            hoverOffset: 4
        }]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        cutout: '70%',

        plugins: {
            legend: {
                position: 'right',

                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 8,
                    boxHeight: 8,
                    padding: 16
                }
            },

            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ₹${context.raw.toLocaleString('en-IN')}`;
                    }
                }
            }
        }
    },

    plugins: [centerTextPlugin]
});


new Chart(incomeExpenseCtx, {
    type: 'bar',

    data: {
        labels: [
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug'
        ],

        datasets: [
            {
                label: 'Income',
                data: [
                    45000,
                    48000,
                    46500,
                    50000,
                    52300
                ],
                backgroundColor: '#4F46E5',
                borderRadius: 4,
                borderSkipped: false
            },

            {
                label: 'Expenses',
                data: [
                    27000,
                    30000,
                    32500,
                    29500,
                    28450
                ],
                backgroundColor: '#C7D2FE',
                borderRadius: 4,
                borderSkipped: false
            }
        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                position: 'bottom',

                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 8,
                    boxHeight: 8,
                    padding: 16
                }
            }
        },

        scales: {
            x: {
                grid: {
                    display: false
                },

                ticks: {
                    color: '#9CA3AF',
                    font: {
                        size: 11
                    }
                }
            },

            y: {
                beginAtZero: true,

                grid: {
                    color: '#F3F4F6'
                },

                ticks: {
                    color: '#9CA3AF',

                    font: {
                        size: 11
                    },

                    callback: function(value) {
                        return '₹' + value / 1000 + 'K';
                    }
                }
            }
        }
    }
});


new Chart(topCategoriesCtx, {
    type: 'bar',

    data: {
        labels: [
            'Food',
            'Shopping',
            'Transport',
            'Bills',
            'Entertainment'
        ],

        datasets: [{
            label: 'Spending',

            data: [
                8500,
                6800,
                5200,
                4700,
                3250
            ],

            backgroundColor: '#4F46E5',
            borderRadius: 4,
            borderSkipped: false
        }]
    },

    options: {
        indexAxis: 'y',

        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            },

            tooltip: {
                callbacks: {
                    label: function(context) {
                        return '₹' + context.raw.toLocaleString('en-IN');
                    }
                }
            }
        },

        scales: {
            x: {
                beginAtZero: true,

                grid: {
                    color: '#F3F4F6'
                },

                ticks: {
                    color: '#9CA3AF',

                    font: {
                        size: 11
                    },

                    callback: function(value) {
                        return '₹' + value / 1000 + 'K';
                    }
                }
            },

            y: {
                grid: {
                    display: false
                },

                ticks: {
                    color: '#6B7280',

                    font: {
                        size: 11
                    }
                }
            }
        }
    }
});


let menuButtons = document.querySelector('#menuButtons')
let menuOpen = document.querySelector('#menuOpen')
let menuClose = document.querySelector('#menuClose')
let navigationList = document.querySelector('#navigationList')
let profileCard = document.querySelector('#profileCard')
let aside = document.querySelector('aside')

menuButtons.addEventListener('click',(e)=>{
    let clickedButton = e.target.dataset.action
    if(clickedButton=='menu-open'){
        document.querySelector('main').classList.add('hidden')
        aside.classList.add('h-[calc(100dvh-55px)]')
        navigationList.classList.remove('hidden')
        profileCard.classList.remove('hidden')
        menuOpen.classList.add('hidden')
        menuClose.classList.remove('hidden')
    }
    if(clickedButton == 'menu-close'){
        document.querySelector('main').classList.remove('hidden')
        aside.classList.remove('h-[calc(100dvh-55px)]')
        navigationList.classList.add('hidden')
        profileCard.classList.add('hidden')
        menuClose.classList.add('hidden')
        menuOpen.classList.remove('hidden')
    }
})