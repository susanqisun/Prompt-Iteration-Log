function doGet(e) {
  return respond(getEntries());
}

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = getSheet();

  if (data.action === 'add') {
    const entry = data.entry;
    sheet.appendRow([entry.id, entry.project, entry.task, entry.issue, entry.model, entry.user, entry.prompt, entry.wrong, entry.ts]);
  } else if (data.action === 'delete') {
    const rows = sheet.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (String(rows[i][0]) === String(data.id)) {
        sheet.deleteRow(i + 1);
        break;
      }
    }
  }

  return respond(getEntries());
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Entries');
  if (!sheet) {
    sheet = ss.insertSheet('Entries');
    sheet.appendRow(['id', 'project', 'task', 'issue', 'model', 'user', 'prompt', 'wrong', 'ts']);
  }
  return sheet;
}

function getEntries() {
  const sheet = getSheet();
  const rows = sheet.getDataRange().getValues();
  const headers = rows.shift();
  return rows.map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });
}

function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
