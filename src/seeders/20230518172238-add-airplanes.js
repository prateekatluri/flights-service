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
    const airplanesData = [
      {
        modelNumber: "A747",
        capacity: 660,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "A380-800",
        capacity: 853,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "A787-9",
        capacity: 296,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "A320neo",
        capacity: 195,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "A737-800",
        capacity: 189,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "A350-900",
        capacity: 440,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "A777-300ER",
        capacity: 386,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "E190",
        capacity: 114,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "A330-300",
        capacity: 440,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "A717-200",
        capacity: 106,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface
      .bulkInsert("airplanes", airplanesData)
      .then(() => console.log("successfully inserted airplane data"))
      .catch((error) => console.log("some error occured at airplane seeder",error));
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
