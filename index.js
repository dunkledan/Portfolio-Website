function GoToSection(section)
{
    const element = document.getElementById(section);
    const offset = 250; 
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y,  behavior: "smooth" });
}

const track = document.querySelector('.video-track');
let x = 0;
const SPEED = 80;
let lastTime = null;
function autoScroll(time) 
{
    if (!lastTime) 
    {
        lastTime = time;
    }

    const deltaTime = (time - lastTime) / 1000;
    lastTime = time;
    x -= SPEED * deltaTime;
    track.style.transform = `translateX(${x}px)`;

    if (Math.abs(x) >= track.scrollWidth / 2) 
    {
        x = 0;
    }
    requestAnimationFrame(autoScroll);
}
requestAnimationFrame(autoScroll);


function ToggleDropDown(dropdownMenu)
{
    if(document.getElementById(dropdownMenu).style.display != 'inline-block')
    {
        document.getElementById(dropdownMenu).style.display = 'inline-block';
        GoToSection(dropdownMenu);
    }
    else
    {
        document.getElementById(dropdownMenu).style.display = 'none';
        GoToSection(dropdownMenu);
    }
}

function ToggleSidebar()
{
    document.getElementById("sideBar").classList.toggle("showSidebar");
}



document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".imgHover img").forEach(img => {

        img.addEventListener("click", () => {

            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});

const track2 = document.getElementById("FlashyVideoDemoContainer");
const videos = document.querySelectorAll(".flashy-video");

let current = 0;

function updateCarousel() 
{
    const width = videos[0].offsetWidth;
    track2.style.transform = `translateX(-${current * width}px)`;
    videos.forEach((video, index) => 
    {
        video.classList.toggle("active",index === current);
    });
}

function smoothScroll() 
{
    current++;
    if (current >= videos.length) 
    {
        current = 0;
    }
    updateCarousel();
}
updateCarousel();