'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          firstname: 'Mark Warren',
          middlename: 'Ganzon',
          lastname: 'Lalata',
          email: 'mw.lalata@jumpdigital.asia',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: 'Ed',
          middlename: 'Gutierrez',
          lastname: 'Martin',
          email: 'ed@gmail.com',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {})
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
}