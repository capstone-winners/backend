const mqtt = require('./MQTT')

// mqtt.device.publish('topic_1', JSON.stringify({ test_data: 1}));

function handleAction(type, deviceId, action) {
    if(!validate(type, deviceId, action)) {
        throw "Error, invalid action for device type"
    }
    message = {
        deviceId,
        ...action
    }
    mqtt.device.publish(type, JSON.stringify(message))
    return type + "\n" + JSON.stringify(message)
}

function validate(type, id, action) {
    // Read from database to see if action is valid
    // Check if device is alive (read from DB)
    return true
}

module.exports = {handleAction}