const SECRET_CODE = "1608";

let enteredCode = "";

const ticketButton = document.getElementById("ticketButton");
const passwordOverlay = document.getElementById("passwordOverlay");
const closeButton = document.getElementById("closeButton");

const numberButtons = document.querySelectorAll("[data-number]");
const clearButton = document.getElementById("clearButton");
const deleteButton = document.getElementById("deleteButton");

const errorMessage = document.getElementById("errorMessage");

const welcomePage = document.getElementById("welcomePage");
const startButton = document.getElementById("startButton");
const museumPage = document.getElementById("museumPage");


// =========================
// OPEN PASSWORD
// =========================

ticketButton.addEventListener("click", function () {

    passwordOverlay.classList.add("show");

    enteredCode = "";

    updateDots();

    errorMessage.textContent = "";
});


// =========================
// NUMBER BUTTONS
// =========================

numberButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (enteredCode.length >= 4) {
            return;
        }

        enteredCode += button.dataset.number;

        updateDots();

        checkCode();
    });

});


// =========================
// CHECK PASSWORD
// =========================

function checkCode() {

    if (enteredCode.length !== 4) {
        return;
    }

    if (enteredCode === SECRET_CODE) {

        errorMessage.textContent = "";

        passwordOverlay.classList.remove("show");

        welcomePage.classList.add("show");

    } else {

        errorMessage.textContent = "รหัสไม่ถูกต้อง ลองอีกครั้ง";

        setTimeout(function () {

            enteredCode = "";

            updateDots();

        }, 700);
    }
}


// =========================
// UPDATE DOTS
// =========================

function updateDots() {

    for (let i = 1; i <= 4; i++) {

        const dot = document.getElementById("dot" + i);

        if (i <= enteredCode.length) {

            dot.classList.add("filled");

        } else {

            dot.classList.remove("filled");

        }
    }
}


// =========================
// CLEAR
// =========================

clearButton.addEventListener("click", function () {

    enteredCode = "";

    updateDots();

    errorMessage.textContent = "";
});


// =========================
// DELETE
// =========================

deleteButton.addEventListener("click", function () {

    enteredCode = enteredCode.slice(0, -1);

    updateDots();

    errorMessage.textContent = "";
});


// =========================
// CLOSE
// =========================

closeButton.addEventListener("click", function () {

    passwordOverlay.classList.remove("show");

    enteredCode = "";

    updateDots();

    errorMessage.textContent = "";
});


// =========================
// KEYBOARD
// =========================

document.addEventListener("keydown", function (event) {

    if (event.key >= "0" && event.key <= "9") {

        if (enteredCode.length < 4) {

            enteredCode += event.key;

            updateDots();

            checkCode();
        }
    }

    if (event.key === "Backspace") {

        enteredCode = enteredCode.slice(0, -1);

        updateDots();
    }

    if (event.key === "Escape") {

        passwordOverlay.classList.remove("show");

        enteredCode = "";

        updateDots();
    }

});


// =========================
// ENTER MUSEUM
// =========================

startButton.addEventListener("click", function () {

    welcomePage.classList.remove("show");

    setTimeout(function () {

        museumPage.classList.add("show");

    }, 500);

});
// =========================
// IMAGE VIEWER
// =========================

const imageViewer =
    document.getElementById("imageViewer");

const viewerImage =
    document.getElementById("viewerImage");

const viewerClose =
    document.getElementById("viewerClose");

const viewerPrev =
    document.getElementById("viewerPrev");

const viewerNext =
    document.getElementById("viewerNext");

const galleryImages =
    document.querySelectorAll(".gallery-grid img");

let currentImage = 0;


// เปิดรูป

galleryImages.forEach(function (image, index) {

    image.addEventListener("click", function () {

        currentImage = index;

        showImage();

        imageViewer.classList.add("show");

    });

});


// แสดงรูป

function showImage() {

    const currentItem =
        galleryImages[currentImage].parentElement;

    viewerImage.src =
        galleryImages[currentImage].src;

    viewerImage.alt =
        galleryImages[currentImage].alt;


    const memory =
        currentItem.querySelector("p");

    const title =
        currentItem.querySelector("span");

    const date =
        currentItem.querySelector("small");


    document.getElementById("viewerMemory").textContent =
        memory.textContent;

    document.getElementById("viewerTitle").textContent =
        title.textContent;

    document.getElementById("viewerDate").textContent =
        date.textContent;

}


// รูปก่อนหน้า

viewerPrev.addEventListener("click", function (event) {

    event.stopPropagation();

    currentImage--;

    if (currentImage < 0) {

        currentImage =
            galleryImages.length - 1;

    }

    showImage();

});


// รูปถัดไป

viewerNext.addEventListener("click", function (event) {

    event.stopPropagation();

    currentImage++;

    if (
        currentImage >=
        galleryImages.length
    ) {

        currentImage = 0;

    }

    showImage();

});


// ปิด

viewerClose.addEventListener("click", function () {

    imageViewer.classList.remove("show");

});


// คลิกพื้นหลังเพื่อปิด

imageViewer.addEventListener("click", function (event) {

    if (event.target === imageViewer) {

        imageViewer.classList.remove("show");

    }

});


// กด ESC เพื่อปิด

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        imageViewer.classList.remove("show");

    }

});
// =========================
// LETTER SCROLL ANIMATION
// =========================

const letterCard =
    document.querySelector(".letter-card");

if (letterCard) {

    const letterObserver =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    letterCard.classList.add("show-letter");

                }

            });

        }, {
            threshold: 0.25
        });

    letterObserver.observe(letterCard);
}
// =========================
// TIMELINE SCROLL ANIMATION
// =========================

const timelineItems =
    document.querySelectorAll(".timeline-item");

if (timelineItems.length > 0) {

    const timelineObserver =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-timeline"
                    );

                }

            });

        }, {
            threshold: 0.2
        });


    timelineItems.forEach(function (item) {

        timelineObserver.observe(item);

    });

}
;
// =========================
// ENDING SCROLL ANIMATION
// =========================

const endingSection = document.querySelector(".ending-section");

if (endingSection) {

    const endingObserver = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                endingSection.classList.add("show-ending");
            }

        });

    }, {
        threshold: 0.25
    });

    endingObserver.observe(endingSection);
}
// =========================
// GALLERY SCROLL ANIMATION
// =========================

const galleryItems = document.querySelectorAll(".gallery-item");

if (galleryItems.length > 0) {

    const galleryObserver = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show-gallery");
            }

        });

    }, {
        threshold: 0.15
    });

    galleryItems.forEach(function(item) {
        galleryObserver.observe(item);
    });
}
// =========================
// LUCKY CARD
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const luckyViewer = document.getElementById("luckyViewer");
    const luckyClose = document.getElementById("luckyClose");

    const luckyCards = document.querySelectorAll(".lucky-card");

    const luckyResult = document.getElementById("luckyResult");
    const luckyAgain = document.getElementById("luckyAgain");

    const resultTitle = document.getElementById("resultTitle");
    const resultText = document.getElementById("resultText");


    // =========================
    // ของรางวัลทั้งหมด 5 อย่าง
    // =========================

    const gifts = [

        {
            title: "CLOTHES",
            text: "A little something chosen just for you.",
            symbol: "♧"
        },

        {
            title: "SNACKS",
            text: "A little sweetness for my favorite person.",
            symbol: "✦"
        },

        {
            title: "NECKLACE",
            text: "A little piece for you to keep.",
            symbol: "◇"
        },

        {
            title: "COSMETICS",
            text: "A little something to make you smile.",
            symbol: "✿"
        },

        {
            title: "NOODLES",
            text: "For the days when we just want to eat together.",
            symbol: "♡"
        }

    ];


    // =========================
    // ฟังก์ชันสุ่มของรางวัล
    // =========================

    function showRandomGift() {

        const randomNumber =
            Math.floor(Math.random() * gifts.length);

        const gift = gifts[randomNumber];


        resultTitle.textContent = gift.title;

resultText.textContent = gift.text;

const resultSymbol =
    document.querySelector(".result-symbol");

if (resultSymbol) {

    resultSymbol.textContent = gift.symbol;

}


        // ซ่อนก่อน
        luckyResult.classList.remove("show");


        // แล้วค่อยแสดง
        setTimeout(function () {

            luckyResult.classList.add("show");

        }, 100);

    }


    // =========================
    // เลือกการ์ด
    // =========================

    luckyCards.forEach(function (card) {

    card.addEventListener("click", function () {

        // ล้างเอฟเฟกต์จากการ์ดใบอื่น
        luckyCards.forEach(function (otherCard) {

            otherCard.classList.remove("card-picked");

        });


        // ใส่เอฟเฟกต์ให้การ์ดที่เลือก
        card.classList.add("card-picked");


        // รอให้การ์ดเล่น animation ก่อน
        setTimeout(function () {

            showRandomGift();

        }, 450);

    });

});


    // =========================
    // PICK AGAIN
    // =========================

    if (luckyAgain) {

        luckyAgain.addEventListener("click", function () {

            showRandomGift();

        });

    }


    // =========================
    // ปิดหน้าการ์ด
    // =========================

    if (luckyClose) {

        luckyClose.addEventListener("click", function () {

            luckyViewer.classList.remove("show");

        });

    }


    // =========================
    // กดพื้นหลังเพื่อปิด
    // =========================

    if (luckyViewer) {

        luckyViewer.addEventListener("click", function (event) {

            if (event.target === luckyViewer) {

                luckyViewer.classList.remove("show");

            }

        });

    }


    // =========================
    // กด ESC เพื่อปิด
    // =========================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && luckyViewer) {

            luckyViewer.classList.remove("show");

        }

    });

});
// =========================
// FINAL EXHIBITION
// =========================

const endingExit =
    document.getElementById("endingExit");

if (endingExit) {

    endingExit.addEventListener("click", function () {

        const museumPage =
            document.getElementById("museumPage");


        // เพิ่มเอฟเฟกต์ปิด
        document.body.classList.add("museum-closing");


        setTimeout(function () {

            if (museumPage) {

                museumPage.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            } else {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }


            // เอาเอฟเฟกต์ออก
            setTimeout(function () {

                document.body.classList.remove(
                    "museum-closing"
                );

            }, 700);


        }, 500);

    });

}
// =========================
// DRAWING CANVAS
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById("drawingCanvas");
    const clearButton = document.getElementById("clearDrawing");
    const saveButton = document.getElementById("saveDrawing");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let drawing = false;

    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();

        const oldCanvas = document.createElement("canvas");
        oldCanvas.width = canvas.width;
        oldCanvas.height = canvas.height;

        if (canvas.width && canvas.height) {
            oldCanvas.getContext("2d").drawImage(canvas, 0, 0);
        }

        canvas.width = rect.width;
        canvas.height = rect.height;

        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#40352b";

        if (oldCanvas.width && oldCanvas.height) {
            ctx.drawImage(
                oldCanvas,
                0,
                0,
                oldCanvas.width,
                oldCanvas.height,
                0,
                0,
                canvas.width,
                canvas.height
            );
        }
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    function getPosition(event) {
        const rect = canvas.getBoundingClientRect();

        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    canvas.addEventListener("pointerdown", function (event) {
        drawing = true;

        canvas.setPointerCapture(event.pointerId);

        const position = getPosition(event);

        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
    });

    canvas.addEventListener("pointermove", function (event) {
        if (!drawing) return;

        const position = getPosition(event);

        ctx.lineTo(position.x, position.y);
        ctx.stroke();
    });

    canvas.addEventListener("pointerup", function () {
        drawing = false;
        ctx.closePath();
    });

    canvas.addEventListener("pointercancel", function () {
        drawing = false;
        ctx.closePath();
    });

    // CLEAR
    if (clearButton) {
        clearButton.addEventListener("click", function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    }

    // SAVE
    if (saveButton) {
        saveButton.addEventListener("click", function () {

            const link = document.createElement("a");

            link.download = "my-museum-drawing.png";
            link.href = canvas.toDataURL("image/png");

            link.click();
        });
    }

});