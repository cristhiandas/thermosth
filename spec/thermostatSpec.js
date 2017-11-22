describe("thermostat", function(){
var thermostat;

beforeEach(function(){
  thermostat = new Thermostat();
})

  it('have a default value of 20',function(){
    expect(thermostat.temperature()).toEqual(20);
  })

  describe('When changing temperature', function(){
    it('increase temperature when asked', function(){
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    })

    it('decrease temperature', function(){
      thermostat.down();
      expect(thermostat.temperature()).toEqual(19);
    })

    it('have a minimum of 10 degrees',function(){
      thermostat._temperature = 10;
      thermostat.down();
      expect(thermostat.temperature()).toEqual(10);
    })
  })
})
