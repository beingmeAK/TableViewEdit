export function GetTabletdata(tableName,dbName) {
    const url =
        "http://localhost:57170/api/createmonitor/GetTableData?tableName=" +
        this.tableName+"&"+"dbName="+this.dbName;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
