
const ctx = document.getElementById('spendingChart');
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

new Chart(ctx, {
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
            data: [850, 520, 680, 740, 470],
            backgroundColor: [
                '#4F46E5',
                '#16A34A',
                '#F59E0B',
                '#DC2626',
                '#7C3AED'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels:{
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 8,
                    boxHeight: 8
                }
            }
        }
    },
     plugins:[centerTextPlugin]
});


// menu open/close

let menuButtons = document.querySelector('#menuButtons')
let menuOpen = document.querySelector('#menuOpen')
let menuClose = document.querySelector('#menuClose')
let navigationList = document.querySelector('#navigationList')
let profileCard = document.querySelector('#profileCard')
let aside = document.querySelector('aside')

menuButtons.addEventListener('click',(e)=>{
    let clickedButton = e.target.dataset.action
    if(clickedButton=='menu-open'){
        aside.classList.remove('lg:h-screen')
        aside.classList.add('h-screen')
        navigationList.classList.remove('hidden')
        profileCard.classList.remove('hidden')
        menuOpen.classList.add('hidden')
        menuClose.classList.remove('hidden')
    }
    if(clickedButton == 'menu-close'){
        aside.classList.remove('h-screen')
        aside.classList.add('lg:h-screen')
        navigationList.classList.add('hidden')
        profileCard.classList.add('hidden')
        menuClose.classList.add('hidden')
        menuOpen.classList.remove('hidden')
    }
})