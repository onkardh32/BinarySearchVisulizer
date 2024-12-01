function binarySearch() {
    const arrayInput = document
        .getElementById("arrayInput")
        .value.split(",")
        .map(Number);
    const target = parseInt(document.getElementById("targetInput").value);
    let statusDisplay = document.getElementById("status");
    let arrayDisplay = document.getElementById("arrayDisplay");

    // Clear previous status and array display
    statusDisplay.innerHTML = "";
    arrayDisplay.innerHTML = "";

    let low = 0;
    let high = arrayInput.length - 1;

    // Display array
    arrayInput.forEach((num, index) => {
        const div = document.createElement("div");
        div.className = "array-element";
        div.id = `element-${index}`;
        div.innerText = num;
        arrayDisplay.appendChild(div);
    });

    // Start binary search visualization
    const searchInterval = setInterval(() => {
        if (low <= high) {
            const mid = Math.floor((low + high) / 2);
            highlightElement(mid);

            if (arrayInput[mid] === target) {
                document
                    .getElementById(`element-${mid}`)
                    .classList.add("found");
                statusDisplay.innerHTML = `Target found at index ${mid}!`;
                clearInterval(searchInterval);
            } else if (arrayInput[mid] < target) {
                low = mid + 1;
                statusDisplay.innerHTML = `Target is greater than ${arrayInput[mid]}. Narrowing to upper half.`;
            } else {
                high = mid - 1;
                statusDisplay.innerHTML = `Target is less than ${arrayInput[mid]}. Narrowing to lower half.`;
            }
        } else {
            statusDisplay.innerHTML = "Target not found!";
            clearInterval(searchInterval);
        }
    }, 1000); // 1 second delay for each step
}

function highlightElement(index) {
    const allElements = document.querySelectorAll(".array-element");
    allElements.forEach((element) => element.classList.remove("highlight"));
    document.getElementById(`element-${index}`).classList.add("highlight");
}
