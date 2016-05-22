
/**
*
* UDUK Plot 1.0
* 
*
*/

var UdukPlot = {

  id: "plot 1.0",

  toCartesian: function(interval)
  {
    var x = 0;
    var y = 0;
    var pointer = 2;
    var ret = [];

    for (var i = 0; i < interval.length; i++) {

      var xy = [];

      if (pointer % 2 == 0) {
        x = x + interval[i];
      }
      else if (pointer % 2 == 1) {
        y = y + interval[i];
      }
   
      xy.push(x); 
      xy.push(y);
      ret.push(xy);

      pointer++;
    }

    return ret;
  },

  toFractal: function(interval, xCanvas, yCanvas, size)
  {
    var x = xCanvas;
    var y = yCanvas;
    var pointer = 2;
    var ret = [];

    for (var i = 0; i < interval.length; i++) {

      var xy = [];

      if (interval[i] > 0) {
        if (pointer % 2 == 0) {
          x = x + (size * interval[i]);
        }
        else if (pointer % 2 == 1) {
          y = y - (size * interval[i]);
        }
      }

      else if (interval[i] < 0) {
        if (pointer % 2 == 0) {
          x = x + (size * interval[i]);
        }
        else if (pointer % 2 == 1) {
          y = y + (-1 * (size * interval[i]));
        }
      }

      xy.push(x);
      xy.push(y);
      ret.push(xy);

      pointer++;
    }

    return ret;
  }

};
