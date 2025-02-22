const Button = document.getElementById("msgSubmiter");
Button.addEventListener("click", async (event) => {
    const Name = document.getElementById("yourName").textContent;
    const Address = document.getElementById("mailAddress").textContent;
    const PhoneNumber = document.getElementById("phoneNumber").textContent;
    const UserMsg = document.getElementById("userMessage").textContent;

    const res = await fetch("https://locahost:3000/sendEmail", {
        method: "POST",
        headers : {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({Name : Name, Address : Name, PhoneNumber : PhoneNumber, UserMsg : UserMsg})
    });
    const data = await res.json();
    alert("vaše zpráva byla odeslána");
});