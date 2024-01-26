$(".avatar[data-name], .avatar-profile[data-name]").each(function () {
    var name = $(this).attr("data-name");
    var matches = name.match(/\b(\w)/g).slice(0, 2);
    var acronym = matches.join("");
    if ($(this).find(".avatar__status-icon").length == 0) {
        if ($(this).children().length == 0) {
            $(this).append("<p>" + acronym + "</p>");
        }
    } else {
        if ($(this).children().length == 1) {
            $(this).append("<p>" + acronym + "</p>");
        }
    }
});
