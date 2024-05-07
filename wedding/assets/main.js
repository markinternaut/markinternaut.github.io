document.addEventListener("DOMContentLoaded", (event) => {

        var endDateTime = '2024-05-18 16:59:59'

        var csSection = document.querySelectorAll(".timer")[0]

        // Set the date we're counting down to
        var countDownDate = new Date(`${endDateTime}`).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        if (days < 1) {            
            document.getElementById("timer").innerHTML = `<p class="time">${hours}<span> Hours</span></p><p class="time">${minutes}<span>Minutes</span></p><p class="time">${seconds}<span> Seconds</span></p>`;
            csSection.style.display = "block";
        } else {            
            document.getElementById("timer").innerHTML = `<p class="time">${days}<span> Days</span></p> <p class="time">${hours}<span> Hours</span></p><p class="time">${minutes}<span> Minutes</span></p><p class="time">${seconds}<span> Seconds</span></p>`
            csSection.style.display = "block";
        }        

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            csSection.style.display = "none";
        } else if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
            clearInterval(x);
            csSection.style.display = "none";
        }

        }, 1000);


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
            e.preventDefault();            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            })
            }
         })
        })

})