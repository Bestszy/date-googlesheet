function onEdit(edit){
  
  var row = edit.range.getRow();
  var col = edit.range.getColumn();
  var name = edit.source.getActiveSheet().getName();
  const arr = ["KRETON","SATYNA","GABARDYNA","JERSEY180","JERSEY200","JERSEY230","PĘTELKA250","PĘTELKA330","INTERLOCK","PŁÓTNO","PANAMA","WOAL","SOFIA","MERCERYZOWANA"];
  const sheetVal = arr.indexOf(name);
  const value = SpreadsheetApp.getActiveSheet().getRange(row, 6).getValue();
  const value2 = SpreadsheetApp.getActiveSheet().getRange(row, 4).getValue();
  const valEntry = SpreadsheetApp.getActiveSheet().getRange(row, 1).getValue();
  const valOut = SpreadsheetApp.getActiveSheet().getRange(row, 7).getValue();
  const valMg = SpreadsheetApp.getActiveSheet().getRange(row, 2).getValue();
  /*if(value === value2 && value>0){
    SpreadsheetApp.getUi().alert("równe");
  };*/
  
  //SpreadsheetApp.getUi().alert(col);
  
  //Last change
  if(col <= 8 && row>3 && sheetVal>-1){
  edit.source.getActiveSheet().getRange(row,9).setValue(new Date())
  };
  //entry
  if(col === 1 && valEntry !=="" && row>3 && sheetVal>-1){
  edit.source.getActiveSheet().getRange(row,10).setValue(new Date())
  }else if(col === 1 && valEntry ==="" && row>3 && sheetVal>-1){
    edit.source.getActiveSheet().getRange(row,10).setValue("")
  };
  //outgo
  if( col=== 6 && valOut === 0 && row>3 && sheetVal>-1){
    edit.source.getActiveSheet().getRange(row,11).setValue(new Date())
  }else if( valOut !== 0 && row>3 && sheetVal>-1){
    edit.source.getActiveSheet().getRange(row,11).setValue("")
  };
  ////warehouse
  if(col===2 && valMg>0){
    edit.source.getActiveSheet().getRange(row,3).setValue("//magazyn główny");
    edit.source.getActiveSheet().getRange(row,10).setValue("//magazyn główny");
    edit.source.getActiveSheet().getRange(row,11).setValue("//magazyn główny");
  }else if(col===2 && valMg===""){
    edit.source.getActiveSheet().getRange(row,3).setValue("");
  }
}
