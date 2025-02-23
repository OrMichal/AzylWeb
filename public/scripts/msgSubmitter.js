const Button = document.getElementById("msgSubmiter");
Button.addEventListener("click", async (event) => {
    const Name = document.getElementById("yourName").value;
    const Address = document.getElementById("mailAddress").value;
    const PhoneNumber = document.getElementById("phoneNumber").value;
    const UserMsg = document.getElementById("userMessage").value;
    
    try {
        const resp = await fetch("http://localhost:3000/sendEmail", {
            method: "POST",
            headers : {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({Name, 
                Address, 
                PhoneNumber, 
                UserMsg}),
        });
        const data = resp.json();
        alert(data.Message);
    } catch (err) {
        console.log("an error occurred with receiving your message:", err)
    }
});