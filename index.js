function goToAboutMe()
{
    document.getElementById("aboutMe").scrollIntoView({behavior:"smooth"})
}

function goToTechSkills()
{
    document.getElementById("technicalSkills").scrollIntoView({behavior:"smooth"})
}

function goToProjects()
{
    location.replace("/Projects.html");
}

function GoToHome()
{
    location.replace("/index.html");
}

function GoToSection(section)
{
    document.getElementById(section).scrollIntoView({behavior:"smooth"});
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
        document.getElementById(dropdownMenu).scrollIntoView({behavior:"smooth"});
    }
    else
    {
        document.getElementById(dropdownMenu).style.display = 'none';
    }
}

function GoToTop()
{
    globalThis. scrollTo({ top: 0, left: 0, behavior: "smooth" });
}