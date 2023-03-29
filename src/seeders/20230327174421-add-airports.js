'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // await queryInterface.bulkInsert('Airports',[
    //   {
    //   //   name:'Mumbai Airport',
    //   //   cityid:11,
    //   //   createdAt:new Date(),
    //   //   updatedAT:new Date()
    //   // },
    //   // {
    //   //   name:'Jaipur International Airport',
    //   //   cityid:21,
    //   //   createdAt:new Date(),
    //   //   updatedAT:new Date()
    //   // },
    //   // {
    //   //   name:'Indira Gandhi International Airport',
    //   //   cityid:16,
    //   //   createdAt:new Date(),
    //   //   updatedAT:new Date()
    //   // },
    //   // {
    //   //   name:'Netaji Subhas Chandra Bose International Airport',
    //   //   cityid:17,
    //   //   createdAt:new Date(),
    //   //   updatedAT:new Date()
    //   // },
    //   // {
    //   //   name:'Sardar Vallabhbhai Patel International Airport',
    //   //   cityid:19,
    //   //   createdAt:new Date(),
    //   //   updatedAT:new Date()
    //   }

    // ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
