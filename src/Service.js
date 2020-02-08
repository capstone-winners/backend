const mqtt = require('./MQTT')

// mqtt.device.publish('topic_1', JSON.stringify({ test_data: 1}));

function handleAction(type, id, action) {
    if(validate(type, id, action)) {
        return type + id + "\n" + action.foo
    } else {
        return "Error!"
    }
}

function validate(type, id, action) {
    return true
}

module.exports = {handleAction}