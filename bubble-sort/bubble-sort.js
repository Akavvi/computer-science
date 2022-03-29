var swapItems = function (items, firstIndex, secondIndex) {
    var item = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = item;
};
var bubbleSort = function (items) {
    for (var i = 0; i < items.length; i++) {
        for (var j = 0, stopSort = items.length - i - 1; j < stopSort; j++) {
            if (items[j] > items[j + 1]) {
                swapItems(items, j, j + 1);
            }
        }
    }
    return items;
};
var items = [1, 5, 3, 2, 6, 7, 2, 53, 1035, 2034, 2077];
var result = bubbleSort(items);
console.log(result);
