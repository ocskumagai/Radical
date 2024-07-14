function importValue() {
  // 現在のアクティブなシートを取得
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // アクティブなシートの名前を取得
  var sheetName = sheet.getName();

  // インポート先の別シートのIDを指定
  var targetSpreadsheet = SpreadsheetApp.openById(
    "1rF3Zy56H7Lfj64C6SafGVBKgenKrrAJLH4_ZSIrMNew"
  );

  // アクティブなシートと同じ名前のシートを取得
  var targetSheet = targetSpreadsheet.getSheetByName(sheetName);

  // 現在の日付を取得し、スクリプトのタイムゾーンで日付部分のみを文字列形式で取得
  var today = new Date();
  var todayStr = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd");

  // F2からF32およびA2からA32までの範囲を取得
  var range = targetSheet.getRange("F2:F32");
  var range2 = targetSheet.getRange("A2:A32");

  // 値を2次元配列として取得し、1次元配列に変換
  var values = range.getValues().flat();
  var values2 = range2.getValues().flat();

  // 日付が一致する行のインデックスを取得（1から始まる行番号を返す）
  var rowIndex = values.indexOf(todayStr) + 2; // 2を足すのはF2から始まるため
  var rowIndex2 = values2.indexOf(todayStr) + 2; // 2を足すのはA2から始まるため

  // デバッグ用にシート名をコンソールに出力
  console.log(sheetName);

  // 本シートに反映
  if (rowIndex >= 1) {
    // 有効なインデックスかどうかをチェック
    // 分数を取得
    var minutes = today.getMinutes();
    // 時間を取得
    var hours = today.getHours();
    // デバッグ用に時間と分をコンソールに出力
    // 現在の日付が見つかった場合、その行の指定した列のセルを取得し、値をインクリメント
    var cell = sheet.getRange(rowIndex, 7); // 例えば、7列目を使う場合
    var value = cell.getValue();
    // 分数が1桁の場合、0を追加して2桁にする
    if (minutes <= 9) {
      minutes = "0" + minutes;
    }

    // デバッグ用に時間と分をコンソールに出力
    console.log(hours + ":" + minutes);
    // セルの値を時間:分形式で更新
    cell.setValue(value + hours + ":" + minutes);
  } else {
    // 今日の日付が見つからなかった場合のエラーログ
    Logger.log("今日の日付が見つかりません: " + todayStr);
  }

  /*
    別シートに反映
    */
  if (rowIndex2 >= 1) {
    // 有効なインデックスかどうかをチェック
    // 分数を取得
    var minutes = today.getMinutes();
    // 時間を取得
    var hours = today.getHours();
    // 現在の日付が見つかった場合、その行の指定した列のセルを取得し、値をインクリメント
    var cell2 = targetSheet.getRange(rowIndex2, 2); // 例えば、2列目を使う場合
    var value = cell2.getValue();

    // 分数が1桁の場合、0を追加して2桁にする
    if (minutes <= 9) {
      minutes = "0" + minutes;
    }

    // デバッグ用に時間と分をコンソールに出力
    console.log(hours + ":" + minutes);
    // セルの値を時間:分形式で更新
    cell2.setValue(value + hours + ":" + minutes);
  } else {
    // 今日の日付が見つからなかった場合のエラーログ
    Logger.log("今日の日付が見つかりません: " + todayStr);
  }
}
