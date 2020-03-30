const mqtt = require('./MQTT')

function handleAction(token, type, deviceId, action) {
    if(!checkToken(token)) {
        throw "Error, invalid token"
    }
    if(!validate(type, deviceId, action)) {
        throw "Error, invalid action for device type"
    }
    message = {
        deviceId,
        setColor: action.setColor.color
    }
    mqtt.device.publish(type, JSON.stringify(message))
    return type + "\n" + JSON.stringify(message)
}

function validate(type, id, action) {
    // Read from database to see if action is valid
    // Check if device is alive (read from DB)
    return true
}

function checkToken(token) {
    if (token === "token") {
        return true
    }
    return false
}

module.exports = {handleAction}
