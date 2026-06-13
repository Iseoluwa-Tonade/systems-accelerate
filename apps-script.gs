// Google Apps Script — deploy as a web app from your spreadsheet.
// 1. Open your Google Sheet → Extensions → Apps Script
// 2. Paste this entire file
// 3. Deploy → New deployment → Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 4. Copy the deployment URL → paste it as GOOGLE_APPS_SCRIPT_URL in your .env

function ensureSheet(sheet, name, headers) {
  var s = sheet.getSheetByName(name);
  if (!s) {
    s = sheet.insertSheet(name);
  }
  var firstCell = s.getRange(1, 1).getValue();
  if (firstCell !== headers[0]) {
    s.insertRowBefore(1);
    s.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
  return s;
}

function doPost(e) {
  var sheet = SpreadsheetApp.openById("1Kalbsnq4Glh4aMm_SFVfx7lsa3JdMO2bsaqEMiakd1g");
  var data = JSON.parse(e.postData.contents);
  var formType = data.formType;
  var values = data.values;

  if (formType === "contact") {
    var contactSheet = ensureSheet(sheet, "Sheet1", [
      "Timestamp", "Name", "Company", "Role", "Email", "CRM", "Message",
    ]);
    contactSheet.appendRow([
      new Date(),
      values.name,
      values.company,
      values.role,
      values.email,
      values.crm,
      values.message,
    ]);
  }

  if (formType === "book") {
    var bookSheet = ensureSheet(sheet, "Sheet2", [
      "Timestamp", "Full Name", "Work Email", "Company", "Company Size",
      "CRM", "Challenge", "Notes", "Selected Date", "Selected Slot",
    ]);
    bookSheet.appendRow([
      new Date(),
      values.fullName,
      values.workEmail,
      values.company,
      values.companySize,
      values.crm,
      values.challenge,
      values.notes,
      values.selectedDate,
      values.selectedSlot,
    ]);
  }

  return ContentService.createTextOutput(
    JSON.stringify({ success: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
