document.getElementById("addMemberBtn").addEventListener("click", function () {
    const firstName = document.getElementById("firstname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const groupSize = parseInt(document.getElementById("GroupSize").value);

    if (firstName && lastName && groupSize > 0) {
        const fullName = `${firstName} ${lastName}`;
        const membersSelect = document.getElementById("members");

        // Simulate adding multiple members
        for (let i = 1; i <= groupSize; i++) {
            const option = document.createElement("option");
            option.text = `${fullName} #${i}`;
            membersSelect.add(option);
        }

        // Reset form fields
        document.getElementById("teamForm").reset();
    } else {
        alert("Please complete all fields.");
    }
});
