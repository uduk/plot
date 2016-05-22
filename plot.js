
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
      var val = interval[i];

      if (val > 0) {
        if (pointer % 2 == 0) {
          x = x + val;
          //console.log("right ", x, y);
        }
        else if (pointer % 2 == 1) {
          y = y + val;
          //console.log("up ", x, y);
        }

      }

      else if (val < 0) {
        if (pointer % 2 == 0) {
          x = x + val;
          //console.log("left ", x, y);
        }
        else if (pointer % 2 == 1) {
          y = y + val;
          //console.log("down ", x, y);
        }
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
      var val = interval[i];

      if (val > 0) {
        if (pointer % 2 == 0) {
          x = x + (size * val);
          //console.log("right", x, y);
        }
        else if (pointer % 2 == 1) {
          y = y - (size * val);
          //console.log("up", x, y);
        }
      }

      else if (val < 0) {
        if (pointer % 2 == 0) {
          x = x + (size * val);
          //console.log("left", x, y);
        }
        else if (pointer % 2 == 1) {
          y = y + (-1 * (size * val));
          //console.log("down", x, y);
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
