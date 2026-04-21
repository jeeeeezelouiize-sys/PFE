const card = document.querySelector(".flip_card");

if (card) {
    card.onclick = () => {
        card.classList.toggle("active");
    };
}
document.getElementById("contact_form").addEventListener("submit", function(event){
    event.preventDefault();

    const contactEmail= document.getElementById("email").value;
    const contactNum= document.getElementById("num").value;
    const contactMessage= document.getElementById("message").value;
    
    if (contactEmail ===""|| contactNum === "" || contactMessage ==="") {
        alert("Please fill in all fields.");
    }  else {

            const numInput = document.getElementById("num").value;
            const numPattern = /^0\d{9}$/;

            if (!numPattern.test(numInput)){
            alert("❌ Enter a valid phone number.");
            return; //stop saving

            }   else{
                    alert("Message sent!");

                    localStorage.setItem("email", contactEmail);
                    localStorage.setItem("number", contactNum);
                    localStorage.setItem("message", contactMessage);

                    console.log("Email Address:", localStorage.getItem("email"));
                    console.log("Phone Number:", localStorage.getItem("number"));
                    console.log("Message:", localStorage.getItem("message"));

                    document.getElementById("contact_form").reset();

            }

        }
    } 
);
