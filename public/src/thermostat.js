function Thermostat(){
  this._temperature = 20;
  this._minTemperature = 10;
  this._isOn = true;
  this._maxTemperature = 25;
}

Thermostat.prototype = {
  temperature: function(){
    return this._temperature;
  },

  up: function(){
    if(this._temperature < this._maxTemperature){
      this._temperature++
    }
  },

  down: function(){
    if(this._temperature > this._minTemperature){
      this._temperature--;
    }
  },
  switch: function(){
    this._isOn = !this._isOn;
    this.savingMode();
  },

  savingMode: function(){
    if (this._isOn === true ){
      this._maxTemperature =  25;
    }
    else{ this._maxTemperature = 32; }
  },

  reset: function(){
    this._temperature = 20;
  },

  usage: function(){
    if(this._temperature < 18){
      return 'low-usage'
    } else if(this._temperature < 25) {
      return 'medium-usage'
    } else {return 'high-usage'}
  }
}
