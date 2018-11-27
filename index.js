(function () {
    var val=1;
    var json = {
        val:10,
        dbl:function () {
            val *=2;
        }
    }
    json.dbl();
    console.log(json.val)
    console.log(val);
})();