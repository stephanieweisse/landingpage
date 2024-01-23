     function bookingTrip() {
        let name = prompt("What is your name?");
        let email = prompt("What is your email-adress?");

        if (name.length > 0) {
          alert(
            "Thank you, " + name + "! We will send you a confirmation email!"
          );
        }
      }

      let bookbutton = document.querySelector(".booking");

      bookbutton.addEventListener("click", bookingTrip);