const form = document.getElementById("number-form");
const numbersInput = document.getElementById("numbers");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numbers = numbersInput.value.split(",").map(Number).sort((a, b) => a - b);
    const missingNumber = findMissingNumber(numbers);
    resultDiv.textContent = missingNumber ? `Missing number: ${missingNumber}` : "No missing number found";
});

function findMissingNumber(numbers) {
    const expectedNumbers = Array.from({ length: numbers.length + 1 }, (_, i) => i + 1);
    const missingNumbers = expectedNumbers.filter((number) => !numbers.includes(number));
    return missingNumbers[0];
}