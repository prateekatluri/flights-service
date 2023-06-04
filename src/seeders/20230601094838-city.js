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
    const citiesInIndia = [
      { name: "Mumbai", createdAt: new Date(), updatedAt: new Date() },
      { name: "Delhi", createdAt: new Date(), updatedAt: new Date() },
      { name: "Bangalore", createdAt: new Date(), updatedAt: new Date() },
      { name: "Hyderabad", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ahmedabad", createdAt: new Date(), updatedAt: new Date() },
      { name: "Chennai", createdAt: new Date(), updatedAt: new Date() },
      { name: "Kolkata", createdAt: new Date(), updatedAt: new Date() },
      { name: "Surat", createdAt: new Date(), updatedAt: new Date() },
      { name: "Pune", createdAt: new Date(), updatedAt: new Date() },
      { name: "Jaipur", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lucknow", createdAt: new Date(), updatedAt: new Date() },
      { name: "Kanpur", createdAt: new Date(), updatedAt: new Date() },
      { name: "Nagpur", createdAt: new Date(), updatedAt: new Date() },
      { name: "Visakhapatnam", createdAt: new Date(), updatedAt: new Date() },
      { name: "Indore", createdAt: new Date(), updatedAt: new Date() },
      { name: "Thane", createdAt: new Date(), updatedAt: new Date() },
      { name: "Bhopal", createdAt: new Date(), updatedAt: new Date() },
      { name: "Patna", createdAt: new Date(), updatedAt: new Date() },
      { name: "Vadodara", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ghaziabad", createdAt: new Date(), updatedAt: new Date() },
      // Add more city names as needed
    ];
    await queryInterface
      .bulkInsert("cities", citiesInIndia)
      .then(() => console.log("successfully inserted city data"))
      .catch((error) =>
        console.log("some error occured at city seeder", error)
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
