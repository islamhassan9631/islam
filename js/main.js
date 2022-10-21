AOS.init();
// Fixed Nav and class Active with background color
let fixedNav = document.getElementById("nav");
window.addEventListener("scroll",()=>{
    window.scrollY > 50 ? fixedNav.classList.add('NavActive') : fixedNav.classList.remove('NavActive');
    console.log("scrolling ")
})


let skillsSection = document.querySelector('.education');
let All_progress = document.querySelectorAll('.progress-bar');

window.onscroll = function(){
    if (window.scrollY >= skillsSection.offsetTop + 100) {
        console.log("Done ");
        All_progress.forEach((progress)=>{
            progress.style.width = progress.dataset.width;
        } )
    }
}


let linkTop = document.getElementById("topBtn")
window.addEventListener('scroll' , function(){
    (document.documentElement.scrollTop > 100) 
    ? linkTop.style.display = "inline-block"
    : linkTop.style.display = "none"

})


// Email Js ................... From AG Coding
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.send("service_izlxolh","template_72ff1jf",{
            to_name: `Eng: Mohammed `,
            from_name: `${document.getElementById('your_Name').value}`,
            from_email: document.querySelector('input[type="email"]').value,
            message: document.querySelector('textarea').value,
            email_to: "mohammedebrahiim97@gmail.com",
            })
            .then(function(res){
                alert("Thanks For Message Me! "+ res.status);
            }),function(error){
                alert("Failed To Send" + error)
            }
            document.getElementById('your_Name').value = '';
            document.querySelector('input[type="email"]').value = '';
            document.querySelector('textarea').value = '';
    });
}


