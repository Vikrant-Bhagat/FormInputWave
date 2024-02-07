document.addEventListener("DOMContentLoaded", function () {
    const labels = document.querySelectorAll('.label');

    labels.forEach(label => {
        label.addEventListener("input", function () {
            const text = this.innerText;

            // Remove existing spans
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }

            // Split the text into individual letters and create span elements
            const letters = text.split('').map(letter => {
                const span = document.createElement('span');
                span.textContent = letter;
                return span;
            });

            // Append the spans to the container
            letters.forEach(span => {
                this.appendChild(span);
            });

            // Apply animation with a staggered delay
            letters.forEach((span, index) => {
                span.style.animationDelay = `${index * 0.1}s`;
            });
        });
    });
});
