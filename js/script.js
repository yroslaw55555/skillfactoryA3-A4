
let button = document.querySelector('.nav_button');

button.addEventListener('click', ShowNavBar);

function ShowNavBar() {
	document.querySelector('.HeadOmm').classList.toggle('visible');
    console.log('ShowNavBar работает');
};
