const mqtt = require('./MQTT')

// mqtt.device.publish('topic_1', JSON.stringify({ test_data: 1}));

function handleAction(type, id, action) {
    if(validate(type, id, action)) {
        message = {
            id,
            action
        }
        mqtt.device.publish(type, message)
        return type + " " + id + "\n" + action.foo
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