window.addEventListener("beforeunload", function() {

    this.document.body.classList.add("animate-out")
});