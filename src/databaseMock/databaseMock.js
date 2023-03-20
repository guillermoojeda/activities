const databaseMock = {
  'pruebas@pruebas.com': {
    name: 'Pruebas',
    lastname: 'Pruebas',
    email: 'pruebas@pruebas.com',
    password: '11aaBB',
    age: 30,
    activities: [
      {
        activity: "Have a picnic with some friends",
        type: "social",
        participants: 3,
        price: 0.1,
        link: "",
        key: "6813070",
        accessibility: 0.1
      },
      {
        activity: "Shop at support your local farmers market",
        type: "relaxation",
        participants: 1,
        price: 0.2,
        link: "",
        key: "8979931",
        accessibility: 0.1
      },
    ]
  }
}

module.exports = { databaseMock };


// http://www.boredapi.com/api/activity