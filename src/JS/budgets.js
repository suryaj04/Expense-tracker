const ctx = document.getElementById("spendingChart");
new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Food", "Transport", "Shopping", "Bills", "Entertainment"],
    datasets: [
      {
        data: [850, 520, 680, 740, 470],
        backgroundColor: [
          "#4F46E5",
          "#16A34A",
          "#F59E0B",
          "#DC2626",
          "#7C3AED",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 8,
          boxHeight: 8,
        },
      },
    },
  },
});
const btc = document.getElementById("budgetTrend");
new Chart(btc, {
  type: "line",

  data: {
    labels: ["May 1", "May 8", "May 15", "May 22", "May 29"],

    datasets: [
      {
        label: "Budget",
        data: [10000, 15000, 20000, 25000, 30000],
        borderColor: "#A5B4FC",
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
        tension: 0.4,
        fill: false,
      },

      {
        label: "Spent",
        data: [5000, 12000, 11000, 18000, 22500],
        borderColor: "#4F46E5",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "line",
          boxWidth: 20,
        },
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,

        grid: {
          color: "#F3F4F6",
        },

        ticks: {
          callback: function (value) {
            return "₹" + value / 1000 + "K";
          },
        },
      },
    },
  },
});

let menuButtons = document.querySelector("#menuButtons");
let menuOpen = document.querySelector("#menuOpen");
let menuClose = document.querySelector("#menuClose");
let navigationList = document.querySelector("#navigationList");
let profileCard = document.querySelector("#profileCard");
let aside = document.querySelector("aside");
let addBudget = document.getElementById('add-budget')
let budgetInput = document.getElementById('budgets-input')
let budgetsPage = document.getElementById('budgets-page')
let cancelBudget = document.getElementById('cancel-budget')

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


addBudget.addEventListener('click',()=>{
    budgetInput.classList.remove('hidden')
    budgetsPage.classList.add('hidden')
})

cancelBudget.addEventListener('click',(e)=>{
    e.preventDefault()
    budgetInput.classList.add('hidden')
    budgetsPage.classList.remove('hidden')
})