// =====================================
// PASSWORD AUTHENTICATION
// =====================================

const correctPassword = "Danishifa";

const unlockBtn = document.getElementById("unlockBtn");
const loginPage = document.getElementById("loginPage");
const mainContent = document.getElementById("mainContent");
const passwordInput = document.getElementById("password");
const errorText = document.getElementById("error");

if (unlockBtn) {
    unlockBtn.addEventListener("click", () => {

        const enteredPassword = passwordInput.value.trim();

        if (enteredPassword === correctPassword) {
 
            loginPage.style.transition = "1s";
            loginPage.style.opacity = "0";

          setTimeout(() => {

    loginPage.style.display = "none";

    // Show Website
    mainContent.classList.remove("hidden");

    // Start Typing Effect
    startTyping();

    // Start Music
    if(music){

        music.volume = 0.35;

        music.play().catch(err => {
            console.log("Music autoplay blocked", err);
        });

    }

    // Welcome Confetti

    confetti({
        particleCount: 150,
        spread: 120,
        startVelocity: 35,
        origin: { y: 0.6 }
    });

    setTimeout(() => {

        confetti({
            particleCount: 80,
            spread: 90,
            origin: { x: 0.2, y: 0.6 }
        });

        confetti({
            particleCount: 80,
            spread: 90,
            origin: { x: 0.8, y: 0.6 }
        });

    }, 500);

    // Magical Welcome Popup

    const popup = document.createElement("div");

    popup.innerHTML = `

    <div
    style="
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,.55);
    z-index:999999;
    padding:20px;
    box-sizing:border-box;
    ">

        <div
        style="
        width:min(90vw,550px);
        padding:30px;
        border-radius:25px;
        text-align:center;
        color:white;
        background:
        linear-gradient(rgba(35,18,48,.62),rgba(35,18,48,.72)),
        url('images/fairy-bg.jpg') center/cover;
        backdrop-filter:blur(15px);
        border:1px solid rgba(255,255,255,.2);
        line-height:2;
        font-size:1.1rem;
        box-shadow:0 0 40px rgba(255,77,109,.4);
        ">

        ❤️ Welcome Meri Jaan ❤️

        <br><br>

        Aaj ka din sirf tumhara hai...

        <br><br>

        Aur ye poori surprise website bhi. ✨

        <br><br>

        Ready?

        <br><br>

        Chlo tumhe dikhati hoon

        <br>

        ki tm mere liye kitne khaas ho. 😊❤️

        </div>

    </div>

    `;

    document.body.appendChild(popup);

    setTimeout(() => {

        popup.style.opacity = "0";

        setTimeout(() => {
            popup.remove();
        }, 1000);

    }, 5000);

}, 1000);
        } else {

            errorText.innerHTML = "❌ Wrong Password";

            const card = document.querySelector(".login-card");

            card.classList.add("shake");

            setTimeout(() => {
                card.classList.remove("shake");
            }, 500);
        }

    });
}

// =====================================
// ENTER KEY SUPPORT
// =====================================

if (passwordInput) {
    passwordInput.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {
            unlockBtn.click();
        }

    });
}

// =====================================
// TYPING EFFECT
// =====================================

const messages = [
    "I love you Khdoos 🥹❤️",
    "Tum meri zindagi ka sabse khoobsurat hissa ho. 🫂❤️",
    "Tum meri muskaan ki wajah ho. 🥹❤️",
];

let messageIndex = 0;
let charIndex = 0;

function startTyping() {

    const typingText = document.getElementById("typing-text");

    if (!typingText) return;

    function type() {

        if (charIndex < messages[messageIndex].length) {

            typingText.textContent +=
                messages[messageIndex].charAt(charIndex);

            charIndex++;

            setTimeout(type, 80);

        } else {

            setTimeout(() => {

                typingText.textContent = "";

                messageIndex =
                    (messageIndex + 1) % messages.length;

                charIndex = 0;

                type();

            }, 2000);

        }

    }

    type();
}

// =====================================
// MUSIC PLAYER
// =====================================

const music = document.getElementById("birthdayMusic");
const musicToggleBtn = document.getElementById("musicToggleBtn");

if(music){
    music.volume = 0.35;

    if (musicToggleBtn) {
        const updateMusicButton = () => {
            const isPlaying = !music.paused;
            musicToggleBtn.textContent = isPlaying ? "⏸️ Pause Music" : "▶️ Play Music";
            musicToggleBtn.setAttribute("aria-pressed", String(isPlaying));
        };

        music.addEventListener("play", updateMusicButton);
        music.addEventListener("pause", updateMusicButton);
        updateMusicButton();

        musicToggleBtn.addEventListener("click", () => {
            if (music.paused) {
                music.play().catch(err => {
                    console.log("Music playback failed", err);
                });
            } else {
                music.pause();
            }
        });
    }
}
// =====================================
// SECRET BIRTHDAY GIFT
// =====================================

const giftLoader =
document.getElementById("giftLoader");

const giftRevealMessage =
document.getElementById("giftRevealMessage");

const giftNextBtn =
document.getElementById("giftNextBtn");

let giftStage = 0;

if(giftNextBtn){

giftNextBtn.addEventListener("click", () => {

    if (giftStage === 0) {

        giftNextBtn.disabled = true;

        giftLoader.classList.add("loading");

        let progress = 0;

        const interval = setInterval(() => {

            progress += 10;

            giftRevealMessage.innerHTML = `
                Preparing Gift...
                <br><br>
                ${progress}%
            `;

            if (progress >= 100) {

                clearInterval(interval);

                giftLoader.classList.remove("loading");

                giftRevealMessage.innerHTML = `
                    ✅ Gift Ready
                    <br><br>
                    Kholna hai? 👀
                `;

                giftNextBtn.innerHTML = "👀 Reveal Gift";

                giftStage = 1;
                giftNextBtn.disabled = false;

            }

        }, 250);
    }

    else if (giftStage === 1) {

        giftRevealMessage.innerHTML = `
            ⚠️ ERROR ⚠️

            <br><br>

            Gift Loading Failed.

            <br><br>

            Reason:

            <br><br>

            Birthday Boy Is Very Khdoos. 😒❤️
        `;

        giftNextBtn.innerHTML = "😒 Try Again?";

        giftStage = 2;
    }

    else if (giftStage === 2) {

        giftNextBtn.disabled = true;

        giftLoader.classList.add("loading");

        let progress = 0;

        const interval = setInterval(() => {

            progress += 20;

            giftRevealMessage.innerHTML = `
                Rechecking Identity...
                <br><br>
                ${progress}%
            `;

            if (progress >= 100) {

                clearInterval(interval);

                giftLoader.classList.remove("loading");

                giftRevealMessage.innerHTML = `
                    ✅ Identity Verified

                    <br><br>

                    Pagal Detected 😂❤️
                `;

                giftNextBtn.innerHTML = "🎁 Claim Gift";

                giftStage = 3;
                giftNextBtn.disabled = false;

            }

        }, 250);
    }

    else if (giftStage === 3) {

        giftLoader.style.display = "none";

giftRevealMessage.innerHTML = `
<br>

💖 Subscription Activated Successfully 💖

<br><br>

Hello Khdoos... 🤭❤️
<br><br>
Aur tumhe gift mein mila hai...
<br><br>

<br>
<div class="gift-reveal-box">

<br><br>
    <div class="gift-lid">
        🎀
    </div>

    <div class="gift-base">
        <img
        src="images/shifa.png"
        class="gift-photo pop-photo"
        >
    </div>

</div>


<b>MAIN 🫣😁</b>

<br><br>

✨ Lifetime Shifa Subscription ✨

<br><br>

Included Benefits:

<br><br>

✅ Kisi bhi waqt pyaar

<br>

✅ Zarurat se zyada care

<br>

✅ Random nakhre

<br>

✅ Thoda sa gussa 😒

<br>

✅ Bohot saara pyaar ❤️

<br>

✅ Ek insaan jo hamesha tumhara rahega 🫂

<br><br>

Subscription Start Date:

<br>

9 Years Ago ❤️

<br><br>

Renewal Date:

<br>

Automatic

<br><br>

Expiry Date:

<br>

Not Found 💖

<br><br>

Refund Policy:

<br>

Dil wapas nahi liya jaata. 🤭❤️

<br><br>

Cancellation Policy:

<br>

Ab bohot der ho chuki hai. 😌❤️

<br><br>

Aur waise bhi...

<br><br>

Mujhe tumhari aadat si ho gayi hai. 🥹❤️

<br><br>

<h3>Toh subscription pasand aayi? ❤️</h3>

<br>

<button id="yesGift">
✅ Haan
</button>

<button id="noGift">
❌ Nahi
</button>

`;

giftNextBtn.style.display = "none";

        giftStage = 4;
    }

});

document.addEventListener("mouseover", (e) => {

    if (e.target.id === "noGift") {

        const btn = e.target;

        btn.style.position = "relative";

        btn.style.left =
        (Math.random() * 300 - 150) + "px";

        btn.style.top =
        (Math.random() * 120 - 60) + "px";

    }

});

document.addEventListener("click", (e) => {

    if (e.target.id === "yesGift") {

        e.preventDefault();

        const giftSection = document.getElementById("secretGiftSection");
        const giftSectionTop = giftSection
            ? giftSection.getBoundingClientRect().top + window.scrollY
            : window.scrollY;
        const root = document.documentElement;
        const previousScrollBehavior = root.style.scrollBehavior;
        const previousOverflowAnchor = root.style.overflowAnchor;
        root.style.scrollBehavior = "auto";
        root.style.overflowAnchor = "none";

        giftRevealMessage.innerHTML = `
            🥹❤️

            <br><br>

            Mujhe pata tha Khdoos...

            <br><br>

            Aur sach kahun?

            <br><br>

            Yeh subscription tumhari birthday par start nahi hui thi...

            <br><br>

            Yeh toh us din start ho gayi thi...

            <br><br>

            Jis din tum meri zindagi mein aaye the. 🌹🫂❤️
        `;

        requestAnimationFrame(() => {
            window.scrollTo(0, giftSectionTop);

            requestAnimationFrame(() => {
                root.style.scrollBehavior = previousScrollBehavior;
                root.style.overflowAnchor = previousOverflowAnchor;
            });
        });

    }

});
// ===============================
// 3 STEP BIRTHDAY GIFT SURPRISE
// ===============================

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

let giftStep = 0;

giftBox.addEventListener("click", () => {

    giftMessage.classList.remove("hidden");

    // STEP 1

    if (giftStep === 0) {

        giftBox.innerHTML = "💌";

        giftMessage.innerHTML = `

        <h2>💌 ایک چھوٹی سی بات</h2>

        <p>

        میری جان... ❤️

        آج تمہاری سالگرہ ہے اور میں بس ایک بات کہنا چاہتی ہوں...

        پتا ہے؟

        جب بھی میرا دن برا جا رہا ہو،
        یا میں کسی بات سے پریشان ہوں...

        تمہارا خیال آتے ہی دل کو سکون سا مل جاتا ہے۔ 🥹❤️

        تمہیں شاید اندازہ بھی نہ ہو کہ
        تم میری روز کی خوشیوں کا کتنا بڑا حصہ ہو۔ 🫂❤️

        بس دل سے کہہ رہی ہوں...

        تم میرے لیے بہت خاص ہو۔ ❤️

        آگے پڑھنے کے لیے دوبارہ کلک کرو 👇

        </p>

        `;

        giftStep++;
    }

    // STEP 2

    else if (giftStep === 1) {

        giftBox.innerHTML = "❤️";

        giftMessage.innerHTML = `

        <h2>❤️ دل کی بات</h2>

        <p>

        میں تم سے ایک بات سچی سچی کہنا چاہتی ہوں... 🥹❤️

        مجھے تمہاری عادت ہو گئی ہے۔

        اپنی ہر اچھی بات تمہیں بتانے کی...

        اپنے ہر برے دن میں تمہیں یاد کرنے کی...

        اور ہر خوشی میں سب سے پہلے تمہارا خیال آنے کی۔ ❤️

        کبھی کبھی میں سوچتی ہوں کہ

        تم اتنا سکون کیسے دیتے ہو؟ 🫂❤️

        تم سے بات کر کے لگتا ہے
        سب ٹھیک ہو جائے گا۔

        اور شاید اسی لیے...

        تم میرے دل کے اتنے قریب ہو۔ ❤️🥹

        آخری سرپرائز کے لیے ایک بار اور کلک کرو 🌹

        </p>

        `;

        giftStep++;
    }

    // STEP 3

    else if (giftStep === 2) {

        giftBox.innerHTML = "🫂❤️";

        giftMessage.innerHTML = `

        <h2>🎂 میرا اصل تحفہ</h2>

        <p>

        میری جان... ❤️

        لوگ سالگرہ پر بہت سے تحفے دیتے ہیں...

        لیکن میں آج تمہیں اپنے دل کی بات دینا چاہتی ہوں۔ 🥹❤️

        شکریہ...

        میری زندگی میں آنے کے لیے۔ ❤️

        شکریہ...

        ہمیشہ میرا ساتھ دینے کے لیے۔ 🫂

        شکریہ...

        مجھے سمجھنے کے لیے۔ ❤️

        اور شکریہ...

        میری زندگی کو پہلے سے زیادہ خوبصورت بنانے کے لیے۔ 🌹❤️

        تم میری مسکراہٹ کی وجہ ہو...

        میرا سکون ہو...

        میری پسندیدہ عادت ہو...

        اور میرے دل کے بہت قریب ہو۔ 🥹❤️

        میری دعا ہے کہ تم ہمیشہ خوش رہو...

        ہمیشہ ہنستے رہو...

        اور زندگی تمہیں وہ سب کچھ دے جس کے تم حقدار ہو۔ 🤲❤️

        سالگرہ مبارک ہو میری جان 🎂🌹

        میں تم سے بہت محبت کرتی ہوں۔ ❤️🫂

        </p>

        <br>

        <button id="restartGift">
        🌹 ایک آخری بات
        </button>

        `;

        createFinalCelebration();

        giftStep++;
    }

});


// ===============================
// LAST MESSAGE + RESTART
// ===============================

document.addEventListener("click", function (e) {

    // LAST MESSAGE

    if (e.target.id === "restartGift") {

        giftMessage.innerHTML = `

        <h2>🌹 جانے سے پہلے...</h2>

        <p>

        ایک آخری بات کہنا چاہتی ہوں... ❤️

        اگر کبھی تمہیں لگے کہ تم تھک گئے ہو...

        یا زندگی مشکل ہو گئی ہے...

        تو یہ یاد رکھنا کہ

        دنیا کے کسی کونے میں ایک شخص ایسا بھی ہے

        جو تمہاری خوشی کے لیے دل سے دعا کرتا ہے۔ 🤲❤️

        ایک شخص جو تمہارا نام سن کر مسکرا دیتا ہے...

        تمہاری آواز سن کر خوش ہو جاتا ہے...

        اور تمہیں اپنی زندگی کی بہت خوبصورت وجہ سمجھتا ہے۔ 🥹❤️

        اور وہ شخص میں ہوں۔ 🫂❤️

        بس ہمیشہ خوش رہنا...

        کیونکہ تمہاری مسکراہٹ مجھے بہت پسند ہے۔ 🥹🌹❤️

        </p>

        <br>

        <button id="confirmRestart">
        🎁 دوبارہ دیکھو
        </button>

        `;
    }

    // RESTART

    if (e.target.id === "confirmRestart") {

        giftStep = 0;

        giftBox.innerHTML = "🎁";

        giftMessage.classList.add("hidden");

        giftMessage.innerHTML = "";
    }

});


// ===============================
// CELEBRATION EFFECT
// ===============================

function createFinalCelebration() {

    const emojis = [
        "❤️",
        "🌹",
        "🫂",
        "✨",
        "🎉",
        "💖",
        "🥹"
    ];

    for (let i = 0; i < 120; i++) {

        const item = document.createElement("div");

        item.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";
        item.style.left =
            Math.random() * 100 + "vw";

        item.style.top = "-20px";

        item.style.fontSize = "28px";

        item.style.zIndex = "9999";

        item.style.pointerEvents = "none";

        document.body.appendChild(item);

        let position = -20;

        const fall = setInterval(() => {

            position += 5;

            item.style.top =
                position + "px";

            if (position > window.innerHeight) {

                clearInterval(fall);

                item.remove();

            }

        }, 20);

    }

}

// =====================================
// BIRTHDAY CAKE
// =====================================

const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");

let cakeStep = 0;

wishBtn.addEventListener("click", () => {

    wishMessage.classList.remove("hidden");

    if(cakeStep === 0){

        wishMessage.innerHTML = `

        😂 Arey arey...<br><br>

        Itni jaldi candle mat bujhao!<br><br>

        Pehle mujhe Birthday Boy ki inspection kar lene do. 😌❤️<br><br>

        Kahin duplicate piece toh nahi bhej diya gaya na? 🤨😂<br><br>

        Chalo...<br><br>

        Next dabao 👆

        `;

        wishBtn.innerHTML = "👉 Next";
        cakeStep++;

    }

    else if(cakeStep === 1){

        wishMessage.innerHTML = `

        🤔 Accha ek baat batao...<br><br>

        Har saal age badh rahi hai...<br><br>

        Lekin akal kab badhegi? 😂❤️<br><br>

        Waise ek baat maan ni padegi...<br><br>

        Jitne bade ho rahe ho...<br><br>

        Utne hi zyada cute lagne lage ho. 🥺❤️<br><br>

        Hyeee Nzr Na Lge Bba Tmhe 🫂🫂🥺<br><br>

        Chalo agla result bhi dekh lo. 😏

        `;

        wishBtn.innerHTML = "😂 Next";
        cakeStep++;

    }

    else if(cakeStep === 2){

        wishMessage.innerHTML = `

        📋 Birthday Report 📋<br><br>

        Umar: Badh gayi 📈😂<br><br>

        Cuteness: Roz badh rahi hai ❤️<br><br>

        Baal: Thode danger zone mein hain 🤭😂<br><br>

        Shararatein: Bilkul control mein nahi ❌<br><br>

        Mujhe tang karna: Full speed se jaari hai 😒😂<br><br>

        Aur sabse shocking baat...<br><br>

        Itne bade ho gaye ho...<br><br>

        Phir bhi mera kuch nahi bigaad skte. 😌❤️😂<br><br>

        Hye re mere bechare se jaan. 🤭❤️

        `;

        wishBtn.innerHTML = "🎂 Final Result";
        cakeStep++;

    }

    else if(cakeStep === 3){

        wishMessage.innerHTML = `

        🎂 Final Birthday Result 🎂<br><br>

        Official Check Complete ✅<br><br>

        Cute: Haan ❤️<br><br>

        Handsome: Haan ❤️<br><br>

        Pagal: Bohot zyada 😂<br><br>

        Drama: Unlimited 🤦‍♀️❤️<br><br>

        Meri life mein importance:<br><br>

        ♾️♾️♾️♾️♾️❤️<br><br>

        Final Conclusion:<br><br>

        Abhi bhi mere favourite insaan ho. 🫂❤️<br><br>

        Happy Birthday Jaan 🎂🌹❤️<br><br>

        Ab officially candle bujha sakte ho... 😌❤️<br><br>

        Lekin wish mein mera naam hona chahiye... 😏❤️<br><br>

        Warna application reject ho jayegi. 😂

        `;

        createFinalCelebration();

        wishBtn.innerHTML = "🎉 Again";
        cakeStep = 0;
    }

});

// =====================================
// ROSES ANIMATION
// =====================================

const roseContainer =
    document.getElementById("rose-container");

function createRose() {

    if (!roseContainer) return;

    const rose = document.createElement("div");

    rose.className = "rose";

    rose.innerHTML = "🌹";

    rose.style.left =
        Math.random() * 100 + "vw";

    rose.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    roseContainer.appendChild(rose);

    setTimeout(() => {
        rose.remove();
    }, 10000);

}

setInterval(createRose, 300);

// =====================================
// HEARTS ANIMATION
// =====================================

const heartContainer =
    document.getElementById("heart-container");

function createHeart() {

    if (!heartContainer) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 1000);

// =====================================
// SPARKLES
// =====================================

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "999";
    sparkle.style.opacity = "1";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.style.transition = "1s";
        sparkle.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        sparkle.remove();
    }, 1200);

}

setInterval(createSparkle, 800);

// ==============================
// AGE COUNTER
// ==============================

const ageBtn = document.getElementById("ageBtn");
const ageCounter = document.getElementById("ageCounter");
const ageText = document.getElementById("ageText");

if(ageBtn){

    ageBtn.addEventListener("click", () => {

        ageBtn.style.display = "none";

        ageText.innerHTML =
        "Installing birthday update... 😂❤️";

        let age = 23;

        const interval = setInterval(() => {

            age++;

            ageCounter.innerHTML = age;

            if(age >= 24){

                clearInterval(interval);

                createFinalCelebration();

               ageText.innerHTML = `

📰 Breaking News 📰

<br><br>

Ek Khdoos aaj officially

24 saal ka ho gaya hai. 🎂❤️

<br><br>

Reports ke mutabik...

<br><br>

Akal mein koi khaas farq nahi aaya. 😂

<br><br>

Lekin cuteness ab bhi khatarnak level par hai. 🤭❤️

<br><br>

Aur haan...

<br><br>

Woh aaj bhi mera favourite insaan hai. 🫂❤️

`;

            }

        },1500);

    });

}
// =====================================
// FINAL CELEBRATION
// =====================================

const celebrateBtn = document.getElementById("celebrateBtn");

if (celebrateBtn) {

    celebrateBtn.addEventListener("click", () => {

        const duration = 5000;
const end = Date.now() + duration;

(function frame() {

    confetti({
        particleCount: 5,
        angle: 60,
        spread: 70,
        origin: { x: 0 }
    });

    confetti({
        particleCount: 5,
        angle: 120,
        spread: 70,
        origin: { x: 1 }
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }

})();
      const popup = document.createElement("div");

popup.innerHTML = `

<div
style="
position:fixed;
top:0;
left:0;
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:rgba(0,0,0,.55);
z-index:999999;
padding:20px;
box-sizing:border-box;
">

<div
style="
width:min(90vw,550px);
padding:30px;
border-radius:25px;
text-align:center;
color:white;
background:
linear-gradient(rgba(35,18,48,.58),rgba(35,18,48,.72)),
url('images/gift-bg.jpg') center/cover;
backdrop-filter:blur(15px);
border:1px solid rgba(255,255,255,.2);
line-height:2;
font-size:1.1rem;
box-shadow:0 0 40px rgba(255,77,109,.4);
">

❤️🌹❤️

<br><br>

Aaj tumhara birthday hai...

<br><br>

Lekin meri zindagi ka sabse khoobsurat gift

<br><br>

Mujhe us din mila tha...

<br><br>

Jis din tum meri zindagi mein aaye the. 🫂❤️

<br><br>

Happy Birthday Mera Baccha 🫂😘🎂❤️

</div>

</div>

`;

document.body.appendChild(popup);
        setTimeout(() => {

            popup.style.opacity = "0";

            setTimeout(() => {
                popup.remove();
            }, 1000);

        }, 7000);

    });

}
// =====================================
// AUTO WELCOME CONSOLE MESSAGE
// =====================================

window.addEventListener("load", () => {

    console.log(
        "❤️ Birthday Surprise Website Loaded Successfully ❤️"
    );

});
}