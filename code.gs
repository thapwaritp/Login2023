//https://www.facebook.com/groups/exambloggas
//Database: https://docs.google.com/spreadsheets/d/1SjcYR7CKMT7cZSkrNxiRH1ZTWJdfusQQ49kTb96qa6I/copy

function doGet() {
  return HtmlService.createTemplateFromFile('index')
  .evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

function loginData(obj){                                 
  var ss = SpreadsheetApp.getActive().getSheetByName('Admin')
  var data = ss.getDataRange().getDisplayValues()
  var id = obj.username+obj.password
  var ar = [];
  
  data.forEach(function(f) {
    if (~[f[0]+f[1]].indexOf(id)) {
      ar.push(f);
    }
  });
  return ar;
}
