function goToAboutMe()
{
    document.getElementById("AboutMe").scrollIntoView({behavior:"smooth"})
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

function DisplayContacts()
{
    document.getElementById("myDropdown").classList.toggle("show");
}