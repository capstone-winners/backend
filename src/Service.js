const mqtt = require('./MQTT')

// mqtt.device.publish('topic_1', JSON.stringify({ test_data: 1}));

function handleAction(type, deviceId, action) {
    if(validate(type, deviceId, action)) {
        message = {
            deviceId,
            ...action
        }
        mqtt.device.publish(type, JSON.stringify(message))
        return type + " " + deviceId + "\n" + JSON.stringify(action)
    } else {
        return "Error!"
    }
}

function validate(type, id, action) {
    // Read from database to see if action is valid
    // Check if device is alive (read from DB)
    return true
}

module.exports = {handleAction}