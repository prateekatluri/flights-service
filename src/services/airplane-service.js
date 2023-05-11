const {AirplaneRepository} = require("../repositories")

const airplane = new AirplaneRepository()

async function createAirplane(data){
    try {
        const res = await airplane.create(data);
        return res;
    } catch (error) {
        console.log("error at service")
        throw error
    }
}

module.exports = {
    createAirplane
}