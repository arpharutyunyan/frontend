'use strict';
function printHtml(obj){
  if(document.getElementById('info_cnt')){
      var content = document.getElementById('info_cnt');
      if(typeof obj === "object"){
        var str = '';
        for(var i in obj){
          str += '<tr>' + '<td>' + i + '</td>' + '<td>' + obj[i] + '</td>' + '</tr>';
        }
        content.innerHTML = str;
      }
  }
}
