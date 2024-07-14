function incrementCounterCa() {
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

  if (rowIndex >= 1) {
    // 今日の日付が見つかった場合、その行の指定した列のセルを取得し、値をインクリメント
    var cell = sheet.getRange(rowIndex, 12); // 例えば、B列（2列目）を使う場合
    var value = cell.getValue();
    cell.setValue(value + 1); // セルの値を1増加させる
  } else {
    Logger.log("今日の日付が見つかりません: " + todayStr); // 今日の日付がA4:A44に見つからない場合のエラーログ
  }
}

function incrementCounterSei() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (!sheet) {
    Logger.log("シートが見つかりません: " + sheetName); // シートが見つからない場合のエラーログ
    return; // シートが存在しない場合は処理を中断
  }

  // 現在の日付を取得し、文字列形式に変換
  var today = new Date();
  var todayStr = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd");

  // A4からA44までの範囲を取得
  var range = sheet.getRange("F2:F32");
  // A4からA44の値を2次元配列として取得し、最初の列を取得
  var values = range.getValues().flat(); // getValues()は2次元配列を返すので、flat()で1次元配列に変換
  // 日付が一致する行のインデックスを取得（1から始まる行番号を返す）
  var rowIndex = values.indexOf(todayStr) + 2; // 4を足すのはA4から始まるため

  if (rowIndex >= 1) {
    // 今日の日付が見つかった場合、その行の指定した列のセルを取得し、値をインクリメント
    var cell = sheet.getRange(rowIndex, 13); // 例えば、B列（2列目）を使う場合
    var value = cell.getValue();
    cell.setValue(value + 1); // セルの値を1増加させる
  } else {
    Logger.log("今日の日付が見つかりません: " + todayStr); // 今日の日付がA4:A44に見つからない場合のエラーログ
  }
}

function incrementCounterUke() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (!sheet) {
    Logger.log("シートが見つかりません: " + sheetName); // シートが見つからない場合のエラーログ
    return; // シートが存在しない場合は処理を中断
  }

  // 現在の日付を取得し、文字列形式に変換
  var today = new Date();
  var todayStr = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd");

  // A4からA44までの範囲を取得
  var range = sheet.getRange("F2:F32");
  // A4からA44の値を2次元配列として取得し、最初の列を取得
  var values = range.getValues().flat(); // getValues()は2次元配列を返すので、flat()で1次元配列に変換
  // 日付が一致する行のインデックスを取得（1から始まる行番号を返す）
  var rowIndex = values.indexOf(todayStr) + 2; // 4を足すのはA4から始まるため

  if (rowIndex >= 1) {
    // 今日の日付が見つかった場合、その行の指定した列のセルを取得し、値をインクリメント
    var cell = sheet.getRange(rowIndex, 14); // 例えば、B列（2列目）を使う場合
    var value = cell.getValue();
    cell.setValue(value + 1); // セルの値を1増加させる
  } else {
    Logger.log("今日の日付が見つかりません: " + todayStr); // 今日の日付がA4:A44に見つからない場合のエラーログ
  }
}

function incrementCounterHon() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (!sheet) {
    Logger.log("シートが見つかりません: " + sheetName); // シートが見つからない場合のエラーログ
    return; // シートが存在しない場合は処理を中断
  }

  // 現在の日付を取得し、文字列形式に変換
  var today = new Date();
  var todayStr = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd");

  // A4からA44までの範囲を取得
  var range = sheet.getRange("F2:F32");
  // A4からA44の値を2次元配列として取得し、最初の列を取得
  var values = range.getValues().flat(); // getValues()は2次元配列を返すので、flat()で1次元配列に変換
  // 日付が一致する行のインデックスを取得（1から始まる行番号を返す）
  var rowIndex = values.indexOf(todayStr) + 2; // 4を足すのはA4から始まるため

  if (rowIndex >= 1) {
    // 今日の日付が見つかった場合、その行の指定した列のセルを取得し、値をインクリメント
    var cell = sheet.getRange(rowIndex, 15); // 例えば、B列（2列目）を使う場合
    var value = cell.getValue();
    cell.setValue(value + 1); // セルの値を1増加させる
  } else {
    Logger.log("今日の日付が見つかりません: " + todayStr); // 今日の日付がA4:A44に見つからない場合のエラーログ
  }
}

function incrementCounterC() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (!sheet) {
    Logger.log("シートが見つかりません: " + sheetName); // シートが見つからない場合のエラーログ
    return; // シートが存在しない場合は処理を中断
  }

  // 現在の日付を取得し、文字列形式に変換
  var today = new Date();
  var todayStr = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd");

  // A4からA44までの範囲を取得
  var range = sheet.getRange("F2:F32");
  // A4からA44の値を2次元配列として取得し、最初の列を取得
  var values = range.getValues().flat(); // getValues()は2次元配列を返すので、flat()で1次元配列に変換
  // 日付が一致する行のインデックスを取得（1から始まる行番号を返す）
  var rowIndex = values.indexOf(todayStr) + 2; // 4を足すのはA4から始まるため

  if (rowIndex >= 1) {
    // 今日の日付が見つかった場合、その行の指定した列のセルを取得し、値をインクリメント
    var cell = sheet.getRange(rowIndex, 16); // 例えば、B列（2列目）を使う場合
    var value = cell.getValue();
    cell.setValue(value + 1); // セルの値を1増加させる
  } else {
    Logger.log("今日の日付が見つかりません: " + todayStr); // 今日の日付がA4:A44に見つからない場合のエラーログ
  }
}
