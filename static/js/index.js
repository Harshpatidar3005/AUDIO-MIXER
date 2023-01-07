var AUX1_PRESS=null;
var AUX2_PRESS=null;
var MONITOR_PRESS=null;
var to_mix_PRESS=null;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(function(){
  $("#press1").on("click",function(){
    
    if(AUX1_PRESS==null){
      document.getElementById("press1").style.backgroundColor="white";
      document.getElementById("press1").style.border= "solid #ff0303";
      document.getElementById("press1").style.borderRadius = "4px";
      AUX1_PRESS="PRESSED";
      console.log(AUX1_PRESS)
    }
    else if(AUX1_PRESS=="PRESSED"){
      document.getElementById("press1").style.backgroundColor="white";
      document.getElementById("press1").style.border= "solid white";
      document.getElementById("press1").style.borderRadius = "4px";
      AUX1_PRESS=null;
      console.log(AUX1_PRESS)
    }
  })  
});

$(function(){
  $("#press2").on("click",function(){
    
    if(AUX2_PRESS==null){
      document.getElementById("press2").style.backgroundColor="white";
      document.getElementById("press2").style.border= "solid #ff0303";
      document.getElementById("press2").style.borderRadius = "4px";
      AUX2_PRESS="PRESSED";
      console.log(AUX2_PRESS)
    }
    else if(AUX2_PRESS=="PRESSED"){
      document.getElementById("press2").style.backgroundColor="white";
      document.getElementById("press2").style.border= "solid white";
      document.getElementById("press2").style.borderRadius = "4px";
      AUX2_PRESS=null;
      console.log(AUX2_PRESS)
    }
  })  
});

$(function(){
  $("#monitor").on("click",function(){
    
    if(MONITOR_PRESS==null){
      document.getElementById("monitor").style.backgroundColor="white";
      document.getElementById("monitor").style.border= "solid #ff0303";
      document.getElementById("monitor").style.borderRadius = "4px";
      MONITOR_PRESS="PRESSED";
      console.log(MONITOR_PRESS)
    }
    else if(MONITOR_PRESS=="PRESSED"){
      document.getElementById("monitor").style.backgroundColor="white";
      document.getElementById("monitor").style.border= "solid white";
      document.getElementById("monitor").style.borderRadius = "4px";
      MONITOR_PRESS=null;
      console.log(MONITOR_PRESS)
    }
  })  
});

$(function(){
  $("#to_mix").on("click",function(){
    
    if(to_mix_PRESS==null){
      document.getElementById("to_mix").style.backgroundColor="white";
      document.getElementById("to_mix").style.border= "solid #ff0303";
      document.getElementById("to_mix").style.borderRadius = "4px";
      to_mix_PRESS="PRESSED";
      console.log(to_mix_PRESS)
    }
    else if(to_mix_PRESS=="PRESSED"){
      document.getElementById("to_mix").style.backgroundColor="white";
      document.getElementById("to_mix").style.border= "solid white";
      document.getElementById("to_mix").style.borderRadius = "4px";
      to_mix_PRESS=null;
      console.log(to_mix_PRESS)
    }
  })  
});



$(function(){
    $("#slider1of1").roundSlider({
    radius: 40,
    circleShape: "pie",
    sliderType: "min-range",
    showTooltip: true,
    value: 0,
    startAngle: 315,
    width: 16,
    min:5,
    max:60,
    valueChange: function (value) 
    {
      val = {
        "fider1of1_val":value["value"]
      }
      $.ajax({
        type:"POST",
        url:"/fider1of1",
        data:JSON.stringify(val), 
        success: function(data) {},
        contentType:"application/json",
        dataType:"json"
      });    
    }
  });
  // $("#PFL1").on("click",function(){
  //   document.getElementById("LED1").style.backgroundColor="lightgreen"
  // })
  var sliderObj = $("#slider1of1").data("roundSlider");
  sliderObj.setValue(0);    
});

$(function(){
  $("#slider2of1").roundSlider({
  radius: 40,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:5,
    max:60,
  valueChange: function (value) 
  {
    val = {
      "fider2of1_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider2of1",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider2of1").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
    $("#slider2of2").roundSlider({
    radius: 40,
    circleShape: "pie",
    sliderType: "min-range",
    showTooltip: true,
    value: 0,
    startAngle: 315,
    width: 16,
    valueChange: function (value) 
    {
      val = {
        "fider2of2_val":value["value"]
      }
      $.ajax({
        type:"POST",
        url:"/fider2of2",
        data:JSON.stringify(val), 
        success: function(data) {},
        contentType:"application/json",
        dataType:"json"
      });    
    }
  });
  var sliderObj = $("#slider2of2").data("roundSlider");
  sliderObj.setValue(0);    
});
$(function(){
    $("#slider3of1").roundSlider({
    radius: 40,
    circleShape: "pie",
    sliderType: "min-range",
    showTooltip: true,
    value: 0,
    startAngle: 315,
    width: 16,
    min:5,
    max:60,
    valueChange: function (value) 
    {
      val = {
        "fider3of1_val":value["value"]
      }
      $.ajax({
        type:"POST",
        url:"/fider3of1",
        data:JSON.stringify(val), 
        success: function(data) {},
        contentType:"application/json",
        dataType:"json"
      });    
    }
  });
  var sliderObj = $("#slider3of1").data("roundSlider");
  sliderObj.setValue(0);    
});
$(function(){
    $("#slider4of1").roundSlider({
    radius: 40,
    circleShape: "pie",
    sliderType: "min-range",
    showTooltip: true,
    value: 0,
    startAngle: 315,
    width: 16,
    min:5,
    max:60,
    valueChange: function (value) 
    {
      val = {
        "fider4of1_val":value["value"]
      }
      $.ajax({
        type:"POST",
        url:"/fider4of1",
        data:JSON.stringify(val), 
        success: function(data) {},
        contentType:"application/json",
        dataType:"json"
      });    
    }
  });
  var sliderObj = $("#slider4of1").data("roundSlider");
  sliderObj.setValue(0);    
});
$(function(){
    $("#slider5of1").roundSlider({
    radius: 40,
    circleShape: "pie",
    sliderType: "min-range",
    showTooltip: true,
    value: 0,
    startAngle: 315,
    width: 16,
    min:5,
    max:60,
    valueChange: function (value) 
    {
      val = {
        "fider5of1_val":value["value"]
      }
      $.ajax({
        type:"POST",
        url:"/fider5of1",
        data:JSON.stringify(val), 
        success: function(data) {},
        contentType:"application/json",
        dataType:"json"
      });    
    }
  });
  var sliderObj = $("#slider5of1").data("roundSlider");
  sliderObj.setValue(0);    
});

$(function(){
    $("#slider6of1").roundSlider({
    radius: 40,
    circleShape: "pie",
    sliderType: "min-range",
    showTooltip: true,
    value: 0,
    startAngle: 315,
    width: 16,
    min:5,
    max:60,
    valueChange: function (value) 
    {
      val = {
        "fider6of1_val":value["value"]
      }
      $.ajax({
        type:"POST",
        url:"/fider6of1",
        data:JSON.stringify(val), 
        success: function(data) {},
        contentType:"application/json",
        dataType:"json"
      });    
    }
  });
  var sliderObj = $("#slider6of1").data("roundSlider");
  sliderObj.setValue(0);    
});
$(function(){
    $("#slider7of1").roundSlider({
    radius: 40,
    circleShape: "pie",
    sliderType: "min-range",
    showTooltip: true,
    value: 0,
    startAngle: 315,
    width: 16,
    min:5,
    max:60,
    valueChange: function (value) 
    {
      val = {
        "fider7of1_val":value["value"]
      }
      $.ajax({
        type:"POST",
        url:"/fider7of1",
        data:JSON.stringify(val), 
        success: function(data) {},
        contentType:"application/json",
        dataType:"json"
      });    
    }
  });
  var sliderObj = $("#slider7of1").data("roundSlider");
  sliderObj.setValue(0);    
});

$(function(){
    $("#slider8of1").roundSlider({
    radius: 40,
    circleShape: "pie",
    sliderType: "min-range",
    showTooltip: true,
    value: 0,
    startAngle: 315,
    width: 16,
    min:5,
    max:60,
    valueChange: function (value) 
    {
      val = {
        "fider8of1_val":value["value"]
      }
      $.ajax({
        type:"POST",
        url:"/fider8of1",
        data:JSON.stringify(val), 
        success: function(data) {},
        contentType:"application/json",
        dataType:"json"
      });    
    }
  });
  var sliderObj = $("#slider8of1").data("roundSlider");
  sliderObj.setValue(0);    
});

$(function(){
  $("#slider1of2").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  min: -15,
  max: 15,
  startAngle: 315,
  width: 16,
  valueChange: function (value) 
  {
    val = {
      "fider1of2_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider1of2",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider1of2").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider2of2").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider2of2_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider2of2",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider2of2").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider3of2").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider3of2_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider3of2",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider3of2").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider4of2").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider4of2_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider4of2",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider4of2").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider5of2").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider5of2_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider5of2",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider5of2").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider6of2").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider6of2_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider6of2",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider6of2").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider7of2").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider7of2_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider7of2",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider7of2").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider8of2").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider8of2_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider8of2",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider8of2").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider1of3").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 150,
  max: 3500,
  step:5,
  valueChange: function (value) 
  {
    val = {
      "fider1of3_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider1of3",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider1of3").data("roundSlider");
sliderObj.setValue(750);    
});

$(function(){
  $("#slider2of3").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 150,
  max: 3500,
  step:5,
  valueChange: function (value) 
  {
    val = {
      "fider2of3_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider2of3",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider2of3").data("roundSlider");
sliderObj.setValue(750);    
});

$(function(){
  $("#slider3of3").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 150,
  max: 3500,
  step:5,
  valueChange: function (value) 
  {
    val = {
      "fider3of3_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider3of3",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider3of3").data("roundSlider");
sliderObj.setValue(750);    
});

$(function(){
  $("#slider4of3").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 150,
  max: 3500,
  step:5,
  valueChange: function (value) 
  {
    val = {
      "fider4of3_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider4of3",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider4of3").data("roundSlider");
sliderObj.setValue(750);    
});

$(function(){
  $("#slider5of3").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 150,
  max: 3500,
  step:5,
  valueChange: function (value) 
  {
    val = {
      "fider5of3_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider5of3",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider5of3").data("roundSlider");
sliderObj.setValue(750);    
});

$(function(){
  $("#slider6of3").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 150,
  max: 3500,
  step:5,
  valueChange: function (value) 
  {
    val = {
      "fider6of3_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider6of3",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider6of3").data("roundSlider");
sliderObj.setValue(750);    
});

$(function(){
  $("#slider7of3").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 150,
  max: 3500,
  step:5,
  valueChange: function (value) 
  {
    val = {
      "fider7of3_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider7of3",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider7of3").data("roundSlider");
sliderObj.setValue(750);    
});

$(function(){
  $("#slider8of3").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 150,
  max: 3500,
  step:5,
  valueChange: function (value) 
  {
    val = {
      "fider8of3_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider8of3",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider8of3").data("roundSlider");
sliderObj.setValue(750);    
});

$(function(){
  $("#slider1of4").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider1of4_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider1of4",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider1of4").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider2of4").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider2of4_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider2of4",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider2of4").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider3of4").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider3of4_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider3of4",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider3of4").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider4of4").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider4of4_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider4of4",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider4of4").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider5of4").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider5of4_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider5of4",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider5of4").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider6of4").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider6of4_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider6of4",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider6of4").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider7of4").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider7of4_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider7of4",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider7of4").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider8of4").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider8of4_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider8of4",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider8of4").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider1of5").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider1of5_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider1of5",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider1of5").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider2of5").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider2of5_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider2of5",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider2of5").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider3of5").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider3of5_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider3of5",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider3of5").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider4of5").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider4of5_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider4of5",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider4of5").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider5of5").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider5of5_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider5of5",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider5of5").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider6of5").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider6of5_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider6of5",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider6of5").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider7of5").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider7of5_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider7of5",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider7of5").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider8of5").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider8of5_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider8of5",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider8of5").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider1of6").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  min:0,
  max:10,
  startAngle: 315,
  width: 16,
  valueChange: function (value) 
  {
    val = {
      "fider1of6_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider1of6",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider1of6").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider2of6").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider2of6_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider2of6",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider2of6").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider3of6").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider3of6_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider3of6",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider3of6").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider4of6").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider4of6_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider4of6",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider4of6").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider5of6").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider5of6_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider5of6",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider5of6").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider6of6").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider6of6_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider6of6",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider6of6").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider7of6").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider7of6_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider7of6",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider7of6").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider8of6").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider8of6_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider8of6",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider8of6").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider1of7").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider1of7_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider1of7",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider1of7").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider2of7").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider2of7_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider2of7",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider2of7").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider3of7").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider3of7_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider3of7",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider3of7").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider4of7").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider4of7_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider4of7",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider4of7").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider5of7").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider5of7_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider5of7",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider5of7").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider6of7").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider6of7_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider6of7",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider6of7").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider7of7").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider7of7_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider7of7",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider7of7").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider8of7").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min:0,
  max:10,
  valueChange: function (value) 
  {
    val = {
      "fider8of7_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider8of7",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider8of7").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider1of8").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -50,
  max: 50,
  valueChange: function (value) 
  {
    val = {
      "fider1of8_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider1of8",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider1of8").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider2of8").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -50,
  max: 50,
  valueChange: function (value) 
  {
    val = {
      "fider2of8_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider2of8",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider2of8").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider3of8").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -50,
  max: 50,
  valueChange: function (value) 
  {
    val = {
      "fider3of8_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider3of8",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider3of8").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider4of8").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -50,
  max: 50,
  valueChange: function (value) 
  {
    val = {
      "fider4of8_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider4of8",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider4of8").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider5of8").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -50,
  max: 50,
  valueChange: function (value) 
  {
    val = {
      "fider5of8_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider5of8",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider5of8").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider6of8").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -50,
  max: 50,
  valueChange: function (value) 
  {
    val = {
      "fider6of8_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider6of8",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider6of8").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider7of8").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -50,
  max: 50,
  valueChange: function (value) 
  {
    val = {
      "fider7of8_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider7of8",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider7of8").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider8of8").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -50,
  max: 50,
  valueChange: function (value) 
  {
    val = {
      "fider8of8_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider8of8",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider8of8").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider9of1").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -10,
  max: 20,
  valueChange: function (value) 
  {
    val = {
      "fider9of1_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider9of1",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider9of1").data("roundSlider");
sliderObj.setValue(-10);    
});

$(function(){
  $("#slider9of2").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider9of2_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider9of2",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider9of2").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider9of3").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider9of3_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider9of3",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider9of3").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider9of4").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 0,
  max: 10,
  valueChange: function (value) 
  {
    val = {
      "fider9of4_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider9of4",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider9of4").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider9of5").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 0,
  max: 10,
  valueChange: function (value) 
  {
    val = {
      "fider9of5_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider9of5",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider9of5").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider9of6").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -50,
  max: 50,
  valueChange: function (value) 
  {
    val = {
      "fider9of6_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider9of6",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider9of6").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider10of1").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -10,
  max: 20,
  valueChange: function (value) 
  {
    val = {
      "fider10of1_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider10of1",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider10of1").data("roundSlider");
sliderObj.setValue(-10);    
});

$(function(){
  $("#slider10of2").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider10of2_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider10of2",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider10of2").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider10of3").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -15,
  max: 15,
  valueChange: function (value) 
  {
    val = {
      "fider10of3_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider10of3",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider10of3").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider10of4").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 0,
  max: 10,
  valueChange: function (value) 
  {
    val = {
      "fider10of4_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider10of4",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider10of4").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider10of5").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 0,
  max: 10,
  valueChange: function (value) 
  {
    val = {
      "fider10of5_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider10of5",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider10of5").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  
  $("#slider10of6").roundSlider({
    
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: -50,
  max: 50,
  valueChange: function (value) 
  {
    if(value["value"]>="10" && value["value"]<"20"){
      document.getElementById("mix5").style.backgroundColor="yellow";
      document.getElementById("solo5").style.backgroundColor="yellow";
      document.getElementById("mix4").style.backgroundColor="rgba(188, 209, 2, 0.692)";
      document.getElementById("solo4").style.backgroundColor="rgba(188, 209, 2, 0.692)";
    }
    if(value["value"]>="20" && value["value"]<"30"){
      document.getElementById("mix4").style.backgroundColor="yellow";
      document.getElementById("solo4").style.backgroundColor="yellow";
      document.getElementById("mix3").style.backgroundColor="rgba(188, 209, 2, 0.692)";
      document.getElementById("solo3").style.backgroundColor="rgba(188, 209, 2, 0.692)";
    }
    if(value["value"]>="30" && value["value"]<"40"){
      document.getElementById("mix3").style.backgroundColor="yellow";
      document.getElementById("solo3").style.backgroundColor="yellow";
      document.getElementById("mix2").style.backgroundColor="rgba(129, 19, 19, 0.705)";
      document.getElementById("solo2").style.backgroundColor="rgba(129, 19, 19, 0.705)";
    }
    if(value["value"]>="40" && value["value"]<"45" ){
      document.getElementById("mix2").style.backgroundColor="red";
      document.getElementById("solo2").style.backgroundColor="red";
      document.getElementById("mix1").style.backgroundColor="rgba(129, 19, 19, 0.705)";
      document.getElementById("solo1").style.backgroundColor="rgba(129, 19, 19, 0.705)";
    }
    if(value["value"]>="45" &&  value["value"]<"50"){
      document.getElementById("mix1").style.backgroundColor="red";
      document.getElementById("solo1").style.backgroundColor="red";
    }

    val = {
      "fider10of6_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider10of6",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json",
    });  
  },      
});
var sliderObj = $("#slider10of6").data("roundSlider");
sliderObj.setValue(0);   
// if(sliderObj.value==2){
//   document.getElementById("mix5").style.backgroundColor="yellow";
//   console.log("OK")
// } 
});

$(function(){
  $("#slider11of1").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 0,
  max: 10,
  valueChange: function (value) 
  {
    val = {
      "fider11of1_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider11of1",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider11of1").data("roundSlider");
sliderObj.setValue(0);    
});

$(function(){
  $("#slider12of1").roundSlider({
  radius: 37,
  circleShape: "pie",
  sliderType: "min-range",
  showTooltip: true,
  value: 0,
  startAngle: 315,
  width: 16,
  min: 0,
  max: 10,
  valueChange: function (value) 
  {
    val = {
      "fider12of1_val":value["value"]
    }
    $.ajax({
      type:"POST",
      url:"/fider12of1",
      data:JSON.stringify(val), 
      success: function(data) {},
      contentType:"application/json",
      dataType:"json"
    });    
  }
});
var sliderObj = $("#slider12of1").data("roundSlider");
sliderObj.setValue(0);    
});



$(document).ready(function(value){
  var slider = document.getElementById("range1");
  var output = document.getElementById("range1output");
  output.innerHTML = slider.value;

  slider.oninput = function() {
      val = {
        "range1_val": slider.value
      },
      $.ajax({
        type:"POST",
        url:"/range1_val",
        data:JSON.stringify(val), 
        success: function(data) {},
        contentType:"application/json",
        dataType:"json"
      }); 
    
      output.innerHTML = this.value;
      console.log(output.innerHTML);
  
};
});

$(document).ready(function(){
  var slider = document.getElementById("range2");
var output = document.getElementById("range2output");
output.innerHTML = slider.value;

slider.oninput = function() {
  val = {
    "range2_val": slider.value
  },
  $.ajax({
    type:"POST",
    url:"/range2_val",
    data:JSON.stringify(val), 
    success: function(data) {},
    contentType:"application/json",
    dataType:"json"
  }); 

  output.innerHTML = this.value;
  console.log(output.innerHTML);
}
});

$(document).ready(function(){
  var slider = document.getElementById("range3");
var output = document.getElementById("range3output");
output.innerHTML = slider.value;

slider.oninput = function() {
  val = {
    "range3_val": slider.value
  },
  $.ajax({
    type:"POST",
    url:"/range3_val",
    data:JSON.stringify(val), 
    success: function(data) {},
    contentType:"application/json",
    dataType:"json"
  }); 

  output.innerHTML = this.value;
  console.log(output.innerHTML);
}
});

$(document).ready(function(){
  var slider = document.getElementById("range4");
var output = document.getElementById("range4output");
output.innerHTML = slider.value;

slider.oninput = function() {
  val = {
    "range4_val": slider.value
  },
  $.ajax({
    type:"POST",
    url:"/range4_val",
    data:JSON.stringify(val), 
    success: function(data) {},
    contentType:"application/json",
    dataType:"json"
  }); 

  output.innerHTML = this.value;
  console.log(output.innerHTML);
}
});

// $(document).ready(function(){
//   var slider = document.getElementById("range4");
// var output = document.getElementById("range4output");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   val = {
//     "range1_val": slider.value
//   },
//   $.ajax({
//     type:"POST",
//     url:"/range1_val",
//     data:JSON.stringify(val), 
//     success: function(data) {},
//     contentType:"application/json",
//     dataType:"json"
//   }); 

//   output.innerHTML = this.value;
//   console.log(output.innerHTML);
// }
// });

$(document).ready(function(){
  var slider = document.getElementById("range5");
var output = document.getElementById("range5output");
output.innerHTML = slider.value;

slider.oninput = function() {
  val = {
    "range5_val": slider.value
  },
  $.ajax({
    type:"POST",
    url:"/range5_val",
    data:JSON.stringify(val), 
    success: function(data) {},
    contentType:"application/json",
    dataType:"json"
  }); 

  output.innerHTML = this.value;
  console.log(output.innerHTML);
}
});

$(document).ready(function(){
  var slider = document.getElementById("range6");
var output = document.getElementById("range6output");
output.innerHTML = slider.value;

slider.oninput = function() {
  val = {
    "range6_val": slider.value
  },
  $.ajax({
    type:"POST",
    url:"/range6_val",
    data:JSON.stringify(val), 
    success: function(data) {},
    contentType:"application/json",
    dataType:"json"
  }); 

  output.innerHTML = this.value;
  console.log(output.innerHTML);
}
});

$(document).ready(function(){
  var slider = document.getElementById("range7");
var output = document.getElementById("range7output");
output.innerHTML = slider.value;

slider.oninput = function() {
  val = {
    "range7_val": slider.value
  },
  $.ajax({
    type:"POST",
    url:"/range7_val",
    data:JSON.stringify(val), 
    success: function(data) {},
    contentType:"application/json",
    dataType:"json"
  }); 

  output.innerHTML = this.value;
  console.log(output.innerHTML);
}
});

$(document).ready(function(){
  var slider = document.getElementById("range8");
var output = document.getElementById("range8output");
output.innerHTML = slider.value;

slider.oninput = function() {
  val = {
    "range8_val": slider.value
  },
  $.ajax({
    type:"POST",
    url:"/range8_val",
    data:JSON.stringify(val), 
    success: function(data) {},
    contentType:"application/json",
    dataType:"json"
  }); 

  output.innerHTML = this.value;
  console.log(output.innerHTML);
}
});

$(document).ready(function(){
  var slider = document.getElementById("range9");
var output = document.getElementById("range9output");
output.innerHTML = slider.value;

slider.oninput = function() {
  val = {
    "range9_val": slider.value
  },
  $.ajax({
    type:"POST",
    url:"/range9_val",
    data:JSON.stringify(val), 
    success: function(data) {},
    contentType:"application/json",
    dataType:"json"
  }); 

  output.innerHTML = this.value;
  console.log(output.innerHTML);
}
});

$(document).ready(function(){
  var slider = document.getElementById("range10");
var output = document.getElementById("range10output");
output.innerHTML = slider.value;

slider.oninput = function() {
  val = {
    "range10_val": slider.value
  },
  $.ajax({
    type:"POST",
    url:"/range10_val",
    data:JSON.stringify(val), 
    success: function(data) {},
    contentType:"application/json",
    dataType:"json"
  }); 

  output.innerHTML = this.value;
  console.log(output.innerHTML);
}
});

$(document).ready(function(){
  var slider = document.getElementById("range11");
var output = document.getElementById("range11output");
output.innerHTML = slider.value;

slider.oninput = function() {
  val = {
    "range11_val": slider.value
  },
  $.ajax({
    type:"POST",
    url:"/range11_val",
    data:JSON.stringify(val), 
    success: function(data) {},
    contentType:"application/json",
    dataType:"json"
  }); 

  output.innerHTML = this.value;
  console.log(output.innerHTML);
}
});

$(document).ready(function(){
  var slider = document.getElementById("range12");
var output = document.getElementById("range12output");
output.innerHTML = slider.value;

slider.oninput = function() {
  val = {
    "range12_val": slider.value
  },
  $.ajax({
    type:"POST",
    url:"/range12_val",
    data:JSON.stringify(val), 
    success: function(data) {},
    contentType:"application/json",
    dataType:"json"
  }); 

  output.innerHTML = this.value;
  console.log(output.innerHTML);
}
});