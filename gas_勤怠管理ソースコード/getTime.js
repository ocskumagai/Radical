function getStartingTime() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // 現在の日付を取得し、文字列形式に変換
  var today = new Date();
  var todayStr = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd");

  // A4からA44までの範囲を取得
  var range = sheet.getRange("F2:F32");
  // A4からA44の値を2次元配列として取得し、最初の列を取得
  var values = range.getValues().flat(); // getValues()は2次元配列を返すので、flat()で1次元配列に変換
  // 日付が一致する行のインデックスを取得（1から始まる行番号を返す）
  var rowIndex = values.indexOf(todayStr) + 2; // 4を足すのはA4から始まるため
  0;
  if (rowIndex > 3) {
    var miutes = today.getMinutes();
    var hours = today.getHours();
    console.log(hours + ":" + miutes);
    // 今日の日付が見つかった場合、その行の指定した列のセルを取得し、値をインクリメント
    var cell = sheet.getRange(rowIndex, 7); // 例えば、B列（2列目）を使う場合
    var value = cell.getValue();
    if (miutes <= 9) {
      miutes = "0" + miutes;
    }
    cell.setValue(value + hours + ":" + miutes); // セルの値を1増加させる
  } else {
    Logger.log("今日の日付が見つかりません: " + todayStr); // 今日の日付がA4:A44に見つからない場合のエラーログ
  }
}

function getQuittingTime() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // 現在の日付を取得し、文字列形式に変換
  var today = new Date();
  var todayStr = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd");

  // A4からA44までの範囲を取得
  var range = sheet.getRange("F2:F32");
  // A4からA44の値を2次元配列として取得し、最初の列を取得
  var values = range.getValues().flat(); // getValues()は2次元配列を返すので、flat()で1次元配列に変換
  // 日付が一致する行のインデックスを取得（1から始まる行番号を返す）
  var rowIndex = values.indexOf(todayStr) + 2; // 4を足すのはA4から始まるため

  if (rowIndex > 3) {
    var miutes = today.getMinutes();
    var hours = today.getHours();
    // 今日の日付が見つかった場合、その行の指定した列のセルを取得し、値をインクリメント
    var cell = sheet.getRange(rowIndex, 10); // 例えば、B列（2列目）を使う場合
    var value = cell.getValue();
    if (miutes <= 9) {
      miutes = "0" + miutes;
    }
    cell.setValue(value + hours + ":" + miutes); // セルの値を1増加させる
  } else {
    Logger.log("今日の日付が見つかりません: " + todayStr); // 今日の日付がA4:A44に見つからない場合のエラーログ
  }
}

function getBreakTime() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // 現在の日付を取得し、文字列形式に変換
  var today = new Date();
  var todayStr = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd");

  // A4からA44までの範囲を取得
  var range = sheet.getRange("F2:F32");
  // A4からA44の値を2次元配列として取得し、最初の列を取得
  var values = range.getValues().flat(); // getValues()は2次元配列を返すので、flat()で1次元配列に変換
  // 日付が一致する行のインデックスを取得（1から始まる行番号を返す）
  var rowIndex = values.indexOf(todayStr) + 2; // 4を足すのはA4から始まるため

  if (rowIndex > 3) {
    var miutes = today.getMinutes();
    var hours = today.getHours();
    console.log(hours + ":" + miutes);
    // 今日の日付が見つかった場合、その行の指定した列のセルを取得し、値をインクリメント
    var cell = sheet.getRange(rowIndex, 8); // 例えば、B列（2列目）を使う場合
    var value = cell.getValue();
    if (miutes <= 9) {
      miutes = "0" + miutes;
    }
    cell.setValue(value + hours + ":" + miutes); // セルの値を1増加させる
  } else {
    Logger.log("今日の日付が見つかりません: " + todayStr); // 今日の日付がA4:A44に見つからない場合のエラーログ
  }
}

function getRestartTime() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // 現在の日付を取得し、文字列形式に変換
  var today = new Date();
  var todayStr = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd");

  // A4からA44までの範囲を取得
  var range = sheet.getRange("F2:F32");
  // A4からA44の値を2次元配列として取得し、最初の列を取得
  var values = range.getValues().flat(); // getValues()は2次元配列を返すので、flat()で1次元配列に変換
  // 日付が一致する行のインデックスを取得（1から始まる行番号を返す）
  var rowIndex = values.indexOf(todayStr) + 2; // 4を足すのはA4から始まるため

  if (rowIndex > 3) {
    var miutes = today.getMinutes();
    var hours = today.getHours();
    console.log(hours + ":" + miutes);
    // 今日の日付が見つかった場合、その行の指定した列のセルを取得し、値をインクリメント
    var cell = sheet.getRange(rowIndex, 9); // 例えば、B列（2列目）を使う場合
    var value = cell.getValue();
    if (miutes <= 9) {
      miutes = "0" + miutes;
    }
    cell.setValue(value + hours + ":" + miutes); // セルの値を1増加させる
  } else {
    Logger.log("今日の日付が見つかりません: " + todayStr); // 今日の日付がA4:A44に見つからない場合のエラーログ
  }
}
