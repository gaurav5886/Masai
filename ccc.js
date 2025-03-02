function Device(name, type, status = 'off') {
    this.name = name;
    this.type = type;
    this.status = status;
}


Device.prototype.turnOn = function () {
    this.status = 'on';
    console.log(`${this.name} is now ON.`);
};

Device.prototype.turnOff = function () {
    this.status = 'off';
    console.log(`${this.name} is now OFF.`);
};

Device.prototype.getStatus = function () {
    return `${this.name} is currently ${this.status}.`;
};


function SmartHome(owner) {
    this.owner = owner;
    this.devices = [];
}

SmartHome.prototype.addDevice = function (device) {
    this.devices.push(device);
};

SmartHome.prototype.removeDevice = function (deviceName) {
    this.devices = this.devices.filter(device => device.name !== deviceName);
};

SmartHome.prototype.listDevices = function () {
    return this.devices.map(device => device.getStatus());
};


function SmartDevice(name, type, brand, connectivity) {
    Device.call(this, name, type);
    this.brand = brand;
    this.connectivity = connectivity;
}

SmartDevice.prototype = Object.create(Device.prototype);
SmartDevice.prototype.constructor = SmartDevice;


SmartDevice.prototype.updateFirmware = async function () {
    console.log(`Updating firmware for ${this.name}...`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`${this.name} firmware updated successfully.`);
};

SmartDevice.prototype.checkConnectivity = function () {
    console.log(`${this.name} is connected via ${this.connectivity}.`);
};


function SmartLight(name, brand, connectivity, brightness = 50, color = 'white') {
    SmartDevice.call(this, name, 'light', brand, connectivity);
    this.brightness = brightness;
    this.color = color;
}

SmartLight.prototype = Object.create(SmartDevice.prototype);
SmartLight.prototype.constructor = SmartLight;

SmartLight.prototype.adjustBrightness = function (level) {
    this.brightness = level;
    console.log(`${this.name} brightness set to ${level}.`);
};

SmartLight.prototype.changeColor = function (color) {
    this.color = color;
    console.log(`${this.name} color changed to ${color}.`);
};


function SmartThermostat(name, brand, connectivity, temperature = 22, mode = 'cool') {
    SmartDevice.call(this, name, 'thermostat', brand, connectivity);
    this.temperature = temperature;
    this.mode = mode;
}

SmartThermostat.prototype = Object.create(SmartDevice.prototype);
SmartThermostat.prototype.constructor = SmartThermostat;

SmartThermostat.prototype.setTemperature = function (temp) {
    this.temperature = temp;
    console.log(`${this.name} temperature set to ${temp}°C.`);
};

SmartThermostat.prototype.changeMode = function (mode) {
    this.mode = mode;
    console.log(`${this.name} mode set to ${mode}.`);
};


function User(username, password) {
    this.username = username;
    this.password = password;
    this.smartHome = new SmartHome(username);
}


User.prototype.authenticate = async function () {
    console.log(`Authenticating ${this.username}...`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`${this.username} authenticated successfully.`);
};

User.prototype.addDevice = function (device) {
    this.smartHome.addDevice(device);
};

User.prototype.removeDevice = function (deviceName) {
    this.smartHome.removeDevice(deviceName);
};

User.prototype.listDevices = function () {
    return this.smartHome.listDevices();
};


const user = new User('Alice', 'password123');
const light = new SmartLight('Living Room Light', 'Philips', 'Wi-Fi');
const thermostat = new SmartThermostat('Bedroom Thermostat', 'Nest', 'Zigbee');

user.authenticate().then(() => {
    user.addDevice(light);
    user.addDevice(thermostat);
    console.log(user.listDevices());
    light.turnOn();
    light.adjustBrightness(80);
    thermostat.setTemperature(24);
});