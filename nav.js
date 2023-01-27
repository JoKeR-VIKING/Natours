let links = document.getElementsByClassName('navigation__item');
for (let link of links)
{
    link.addEventListener("click", (event) => {
        document.getElementById('navigation__toggle').checked = false;
    });
}