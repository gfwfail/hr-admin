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
        name: 'Create new survey',
        link: '/app/create-survey',
        icon: 'fa-plus'
      }
    ]
  },
  {
    name: 'Configurations',
    link: '/configurations',
    icon: 'fa-cogs'
  }
]
