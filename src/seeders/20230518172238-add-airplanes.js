"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "airplanes",
      [
        {
          modelNumber:"airbus 320",
          capacity: 500,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          modelNumber:"airbus 300",
          capacity: 300,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          modelNumber:"airbus a200",
          capacity: 100,
          createdAt:new Date(),
          updatedAt:new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
