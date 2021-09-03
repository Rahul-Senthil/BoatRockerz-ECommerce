$(document).ready(function(){
    $("#PD_1").click(function(){
      let source = $("#SI_1").attr("src");
      let name = $("#PN_1").text();
      let price = $("#PP_1").text();
      displayImage(source,name,price);
    });
});

$(document).ready(function(){
  $("#PD_2").click(function(){
    let source = $("#SI_2").attr("src");
    let name = $("#PN_2").text();
    let price = $("#PP_2").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_3").click(function(){
    let source = $("#SI_3").attr("src");
    let name = $("#PN_3").text();
    let price = $("#PP_3").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_4").click(function(){
    let source = $("#SI_4").attr("src");
    let name = $("#PN_4").text();
    let price = $("#PP_4").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_5").click(function(){
    let source = $("#SI_5").attr("src");
    let name = $("#PN_5").text();
    let price = $("#PP_5").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_6").click(function(){
    let source = $("#SI_6").attr("src");
    let name = $("#PN_6").text();
    let price = $("#PP_6").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_7").click(function(){
    let source = $("#SI_7").attr("src");
    let name = $("#PN_7").text();
    let price = $("#PP_7").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_8").click(function(){
    let source = $("#SI_8").attr("src");
    let name = $("#PN_8").text();
    let price = $("#PP_8").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_9").click(function(){
    let source = $("#SI_9").attr("src");
    let name = $("#PN_9").text();
    let price = $("#PP_9").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_10").click(function(){
    let source = $("#SI_10").attr("src");
    let name = $("#PN_10").text();
    let price = $("#PP_10").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_11").click(function(){
    let source = $("#SI_11").attr("src");
    let name = $("#PN_11").text();
    let price = $("#PP_11").text();
    displayImage(source,name,price);
  });
});


$(document).ready(function(){
  $("#PD_12").click(function(){
    let source = $("#SI_12").attr("src");
    let name = $("#PN_12").text();
    let price = $("#PP_12").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_13").click(function(){
    let source = $("#SI_13").attr("src");
    let name = $("#PN_13").text();
    let price = $("#PP_13").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_14").click(function(){
    let source = $("#SI_14").attr("src");
    let name = $("#PN_14").text();
    let price = $("#PP_14").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_15").click(function(){
    let source = $("#SI_15").attr("src");
    let name = $("#PN_15").text();
    let price = $("#PP_15").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_16").click(function(){
    let source = $("#SI_16").attr("src");
    let name = $("#PN_16").text();
    let price = $("#PP_16").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_17").click(function(){
    let source = $("#SI_17").attr("src");
    let name = $("#PN_17").text();
    let price = $("#PP_17").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_18").click(function(){
    let source = $("#SI_18").attr("src");
    let name = $("#PN_18").text();
    let price = $("#PP_18").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_19").click(function(){
    let source = $("#SI_19").attr("src");
    let name = $("#PN_19").text();
    let price = $("#PP_19").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_20").click(function(){
    let source = $("#SI_20").attr("src");
    let name = $("#PN_20").text();
    let price = $("#PP_20").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_21").click(function(){
    let source = $("#SI_21").attr("src");
    let name = $("#PN_21").text();
    let price = $("#PP_21").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_22").click(function(){
    let source = $("#SI_22").attr("src");
    let name = $("#PN_22").text();
    let price = $("#PP_22").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_23").click(function(){
    let source = $("#SI_23").attr("src");
    let name = $("#PN_23").text();
    let price = $("#PP_23").text();
    displayImage(source,name,price);
  });
});

$(document).ready(function(){
  $("#PD_24").click(function(){
    let source = $("#SI_24").attr("src");
    let name = $("#PN_24").text();
    let price = $("#PP_24").text();
    displayImage(source,name,price);
  });
});






function  displayImage(source,name,price){    
    $(document).ready(function(){
    $("#display_productimage").attr("src", source);
    $("#display_productname").text(name);
    $("#display_productprice").text(price);
    });
}

//Toggle
var menuList = document.getElementById("nav-list");
menuList.style.maxHeight = "0px";
function togglesidebar(){
  if(menuList.style.maxHeight == "0px")
  {
   menuList.style.maxHeight = "500px";
  }
  else if(menuList.style.maxHeight == "500px")
  {
   menuList.style.maxHeight = "0px";
  }
}



