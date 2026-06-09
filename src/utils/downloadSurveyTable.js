function sanitizeFilename(name) {
  return name.replace(/[\\/:*?"<>|]/g, "_").replace(/\s+/g, "_");
}

/** 将表格 DOM 导出为 Excel 可打开的 .xls 文件（保留合并单元格） */
export function downloadSurveyTable(tableEl, title) {
  if (!tableEl) {
    return;
  }

  const filename = `${sanitizeFilename(title)}.xls`;
  const html = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:x="urn:schemas-microsoft-com:office:excel"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
  <meta charset="UTF-8" />
  <!--[if gte mso 9]>
  <xml>
    <x:ExcelWorkbook>
      <x:ExcelWorksheets>
        <x:ExcelWorksheet>
          <x:Name>Sheet1</x:Name>
          <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
        </x:ExcelWorksheet>
      </x:ExcelWorksheets>
    </x:ExcelWorkbook>
  </xml>
  <![endif]-->
  <style>
    table { border-collapse: collapse; table-layout: fixed; width: 100%; }
    th, td {
      border: 1px solid #000;
      text-align: center;
      vertical-align: middle;
      padding: 4px 3px;
      font-size: 11pt;
      font-family: "SimSun", "Microsoft YaHei", sans-serif;
    }
    th { font-weight: bold; background: #f0f0f0; }
  </style>
</head>
<body>
  <table>${tableEl.innerHTML}</table>
</body>
</html>`;

  const blob = new Blob(["\ufeff", html], {
    type: "application/vnd.ms-excel;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
