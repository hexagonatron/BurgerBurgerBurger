'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return new Promise((res, rej) => {
      queryInterface.addColumn("Burgers", "deleted", {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }).then(result => {
        res(result);
      }).catch(err => {
        rej(err);
      })
    });
  },

  down: (queryInterface, Sequelize) => {
    return new Promise((res, rej) => {
      queryInterface.removeColumn("Burgers", "deleted")
        .then(result => {
          res(result);
        }).catch(err => {
          rej(err);
        })
    })
  }
};
