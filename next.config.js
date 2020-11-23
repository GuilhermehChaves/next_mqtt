require('dotenv').config()

module.exports = {
    env: {
      PUBLIC_MQTT_BROKER: process.env.MQTT_BROKER,
    },
  }
