document.addEventListener("DOMContentLoaded", () => {
    // [START] data-clear input
    const clearSearchs = document.querySelectorAll("[data-clear='input']");
    clearSearchs.forEach((clearSearch) => {
        clearSearch.addEventListener("click", (event) => {
            let target = event.target;
            let parent = target.parentNode;

            if (parent) {
                parent.querySelector("input").value = "";
            }
        });
    });
    // [END] data-clear input

    let breakpoints = [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "xxl",
    ]

    // [START] Mini n expand
    breakpoints.forEach((breakpoint) => {
        const miniSearchs = document.querySelectorAll(`.form-control_expand-${breakpoint}`);
        miniSearchs.forEach((miniSearch) => {
            const input = miniSearch.querySelector("input");
            input.addEventListener("focus", (event) => {
                const inputSearch = event.target.closest(`.form-control`);
                inputSearch.classList.add("form-control_expanded");
            });
            input.addEventListener("focusout", (event) => {
                const inputSearch = event.target.closest(`.form-control`);
                inputSearch.classList.remove("form-control_expanded");
            });
        });
    });
    // [END] Mini n expand

    // [START] Visibility
    const inputTypes = document.querySelectorAll("[data-visibility='input']");
    inputTypes.forEach((inputType) => {
        let itx = inputType;
        let parentITX = itx.parentNode;

        if (parentITX) {
            if (itx.dataset.type != "text") {
                parentITX.querySelector("input").type = "password";
            } else {
                parentITX.querySelector("input").type = "text";
            }
        }
        inputType.addEventListener("click", (event) => {
            let target = event.target;
            let parent = target.parentNode;

            if (parent) {
                if (target.dataset.type == "text") {
                    parent.querySelector("input").type = "password";
                    target.dataset.type = "password";
                } else {
                    parent.querySelector("input").type = "text";
                    target.dataset.type = "text";
                }
            }
        });
    });
    const inputTypePasswords = document.querySelectorAll("[data-input-type='password']");
    // [END] Visibility
});

// [START] File draggable
$(".upload-draggable__file-input").on("dragenter focus click", function () {
    $(this).parent().parent().addClass("is-active");
});
$(".upload-draggable__file-input").on("dragleave blur drop", function () {
    $(this).parent().parent().removeClass("is-active");
});
$(".upload-draggable__file-input").on("change", function () {
    let box = $(this).parent();
    let parent = box.parent();
    let success = parent.find(".upload-draggable__success");

    box.css({ opacity: "0" });
    success.css({ display: "flex" });

    let filesCount = $(this)[0].files.length;

    if (filesCount === 1) {
        let fileName = $(this).val().split("\\").pop();
        success.html("<span>" + fileName + "</span>");
    } else if (filesCount > 1) {
        success.html("<span>" + filesCount + " berkas</span> dipilih");
    } else {
        box.css({ opacity: "1" });
        success.css({ display: "none" });
    }
});
// [END] File draggable