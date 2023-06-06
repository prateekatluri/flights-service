const CrudRepository = require("./crudrepository")
const {Flight} = require("../models")
const {Airport,Airplane,City} = require("../models")
const sequelize = require("sequelize")
class FlightRepository extends CrudRepository {
    constructor(){
        super(Flight)
    }

    async getAllFlights(filter,sortFilter){
        const response = await Flight.findAll({
            where:filter,
            order:sortFilter,
            include:[{
                model:Airplane,
                as:"airlaneDetail"
            },{
                model:Airport,
                as: 'departureAirportDetails',
                on: {
                    col1: sequelize.where(sequelize.col("departureAirportDetails.code"), "=", sequelize.col("Flight.departureAirport"))
                },
                include:[{
                    model:City
                }]
            },
            {
                model:Airport,
                as: 'arrivalAirportDetails',
                on: {
                    col1: sequelize.where(sequelize.col("arrivalAirportDetails.code"), "=", sequelize.col("Flight.arrivalAirport"))
                },
                include:[{
                    model:City
                }]
            }
        ]
        })
        return response
    }
}

module.exports = FlightRepository