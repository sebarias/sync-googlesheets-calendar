function createCalendarEvent() {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  console.log(sheet)
 
  var startRow = 2;  // First row of data to process - 2 exempts my header row
  var numRows = sheet.getLastRow();   // Number of rows to process
  var numColumns = sheet.getLastColumn();
 
  //var dataRange = sheet.getRange(startRow, 1, numRows-1, numColumns);
  var range = sheet.getDataRange();
  //var values = range.getValues();
  var data = range.getValues();
  console.log(data.length)
  
  createCalendar(data, range)
  
}

function createCalendar(data, range){
  var cal = CalendarApp.createCalendar('tremendus Calendar');
  //var cal = CalendarApp.getCalendarById('c_qdaaeshe5gc7r9pcdr1mrdei2s@group.calendar.google.com');
  console.log(data)
  for (var i = 1; i < data.length; ++i) {
    console.log(i)
    
    var row = data[i];
    console.log(row)
    var name = row[8]; //Item Name
    //var site = row[1]
    var date = new Date(row[9]);  //renewal date
    var rDate = new Date(row[10]); //remind date
    var status = row[20]; //event marked Done
    //var options = {location: session[4], sendInvites: true};
    var complete = "Done";
    
    if (status.localeCompare(complete) != 0) {
      
      console.log(date, rDate)
      var event = cal.createEvent(name, date, rDate);
      var eventId = event.getId();
      console.log('eventid',eventId)
      
    }

  }
  //range.setValues(data);
}