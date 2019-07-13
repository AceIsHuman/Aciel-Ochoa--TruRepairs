const devices = {
    // IPHONE MODELS
    ip5:    {type: 'iPhone', model: '5', id: 'ip5', screenRepair: 42, batteryRepair: 28},
    ip5c:   {type: 'iPhone', model: '5c', id: 'ip5c', screenRepair: 45, batteryRepair: 30},
    ip5s:   {type: 'iPhone', model: '5s', id: 'ip5s', screenRepair: 45, batteryRepair: 30},
    ipse:   {type: 'iPhone', model: 'SE', id: 'ipse', screenRepair: 46, batteryRepair: 32},
    ip6:    {type: 'iPhone', model: '6', id: 'ip6', screenRepair: 46, batteryRepair: 36, chargingPortRepair: 35, earspeakerRepair: 35, frontCameraRepair: 30, backCameraRepair: 30},
    ip6p:   {type: 'iPhone', model: '6 Plus', id: 'ip6p', screenRepair: 50, batteryRepair: 38, chargingPortRepair: 35, earspeakerRepair: 37, frontCameraRepair: 32, backCameraRepair: 35},
    ip6s:   {type: 'iPhone', model: '6s', id: 'ip6s', screenRepair: 52, batteryRepair: 38, chargingPortRepair: 38, earspeakerRepair: 38, frontCameraRepair: 32, backCameraRepair: 35},
    ip6sp:  {type: 'iPhone', model: '6s Plus', id: 'ip6sp', screenRepair: 56, batteryRepair: 40, chargingPortRepair: 38, earspeakerRepair: 38, frontCameraRepair: 35, backCameraRepair: 45, loudspeakerRepair: 35},
    ip7:    {type: 'iPhone', model: '7', id: 'ip7', screenRepair: 62, batteryRepair: 40, chargingPortRepair: 45, earspeakerRepair: 38, frontCameraRepair: 35, backCameraRepair: 55},
    ip7p:   {type: 'iPhone', model: '7 Plus', id: 'ip7p', screenRepair: 66, batteryRepair: 42, chargingPortRepair: 45, earspeakerRepair: 42, frontCameraRepair: 38, backCameraRepair: 112},
    ip8:    {type: 'iPhone', model: '8', id: 'ip8', screenRepair: 72, batteryRepair: 42, chargingPortRepair: 45, earspeakerRepair: 45, frontCameraRepair: 40, backCameraRepair: 60},
    ip8p:   {type: 'iPhone', model: '8 Plus', id: 'ip8p', screenRepair: 76, batteryRepair: 44, chargingPortRepair: 45, earspeakerRepair: 45, frontCameraRepair: 40, backCameraRepair: 80, backGlassRepair: 85},
    ipx:    {type: 'iPhone', model: 'X', id: 'ipx', backGlassRepair: 115},
    ipxsm:  {type: 'iPhone', model: 'XS Max', id: 'ipxsm', screenRepair: 305},

    // IPAD MODELS
    ipm:    {type: 'iPad', model: 'mini', id: 'ipm', digitizerRepair: 50, lcdRepair: 80},
    ipm2:   {type: 'iPad', model: 'mini 2', id: 'ipm2', digitizerRepair: 50, lcdRepair: 87},
    ipp105: {type: 'iPad', model: 'Pro 10.5"', id: 'ipp105', screenRepair: 185},

    // SAMSUNG PHONES
    sgs9:   {type: 'Samsung', model: 'Galaxy S9', id: 'sgs9', screenRepair: 227, batteryRepair: 32, backGlassRepair: 32, },
    sgs6a:  {type:'Samsung', model: 'Galaxy S6 Active', id: 'sgs6a', screenRepair: 130},
    sgn5:   {type: 'Samsung', model: 'Galaxy Note 5', id: 'sgn5', screenRepair: 160},
}

class PricingSection {
    constructor(pricingSection) {
        this.pricingSection = pricingSection;
        this.table = this.pricingSection.querySelector('#pricing-table');
        this.placeholder = this.pricingSection.querySelector('.placeholder');
        this.dropdowns = this.pricingSection.querySelector('.dropdowns');
        this.selectDeviceDrop = this.dropdowns.querySelector('.select-device');
        this.modelDrops = this.dropdowns.querySelectorAll('.model-dropdown');

        this.selectDeviceDrop.addEventListener('change', this.selectDeviceType.bind(this));
    }

    selectDeviceType(event) {
        console.log(event.target.value);
    }
}

const pricingSection = document.querySelector('.pricing');
new PricingSection(pricingSection);