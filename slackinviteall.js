
var After = function () {
    this._totalTime = 0;
};

// It's prototype
var protoAfter = {
    // After (time) seconds, run a handler
    after: function (time, handler) {
        this._totalTime += time;

        setTimeout(function () {
            handler();
        }, this._totalTime * 1000);

        return this;
    }
};

$.extend(After.prototype, protoAfter);

//var memberPresence = $(".c-member").find(".presence");
//function isActive(){

//    if (memberPresence.css('color') == '#6dc193'){
//        console.log("active")
//        return true;
//}}

var first = "a",
    last  = "z";

var after = new After();
after.charIndex = first.charCodeAt(0);

after
    .after(0.3, function () {
        $('#channel_actions_toggle').click();
    })

    .after(0.3, function () {
        $('#channel_invite_item').click();
    })

for (var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {

    after
        .after(0.3, function () {
            $("#channel_invite_filter").focus();
            $("#channel_invite_filter").val(String.fromCharCode(after.charIndex)); // type in character
            $("#channel_invite_filter").trigger("input");
            after.charIndex++;
        })

       .after(0.5, function () {

           $(".channel_invite_member:not(hidden)").each(function(i, obj) {
                this.click();              
         });
        });
}

after.after(0.5, function () {
    $(".invite_go").click();
})

after.after(0.5, function () {
    $("#fs_modal_close_btn").click();
})
