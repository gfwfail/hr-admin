module.exports = [
  {
    name: 'Dashboard',
    link: '/',
    icon: 'fa-home'
  },
  {
    name: 'Surveys',
    icon: 'fa-tasks',
    child: [
      {
        name: 'List',
        link: '/app/survey-list',
        icon: 'fa-tasks'
      },
      {
        name: 'Create',
        link: '/app/create-survey',
        icon: 'fa-plus'
      }
    ]
  },
  {
    name: 'Results',
    link: '/app/charts',
    icon: 'fa-bar-chart'
  }
]
