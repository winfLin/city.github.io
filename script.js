/*
使用 JavaScript 獲取了下拉式選單和所有欄位，然後在下拉式選單的 
onchange 事件中實現了顯示或隱藏欄位的功能。當選擇的值是 "all" 時，就顯示所有欄位；否則，就隱藏所有欄位，然後顯示選擇的欄位。我們使用 
querySelectorAll 方法獲取所有欄位，使用 querySelector 方法獲取選擇的欄位。我們使用 style.display 屬性來設置欄位的顯示方式，如果設置為 "block"，則顯示欄位；如果設置為 "none"，則隱藏欄位。

最後，我們需要在 CSS 檔案中新增一些樣式，來隱藏或顯示欄位。
*/


// 當網頁載入完成時執行
window.onload = function () {
    // 獲取下拉式選單和所有欄位
    var select = document.getElementById("column-select");
    var columns = document.querySelectorAll(".column");

    // 當下拉式選單的值發生變化時執行
    select.onchange = function () {
        // 獲取選擇的值
        var value = select.value;

        // 如果選擇的是 "all"，則顯示所有欄位
        if (value === "all") {
            for (var i = 0; i < columns.length; i++) {
                columns[i].style.display = "block";
            }
        }
        // 否則，隱藏所有欄位，然後顯示選擇的欄位
        else {
            for (var i = 0; i < columns.length; i++) {
                columns[i].style.display = "none";
            }
            document.querySelector("." + value).style.display = "block";
        }
    };
};