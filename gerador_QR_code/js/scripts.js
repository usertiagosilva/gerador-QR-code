// Selecionando elementos
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Eventos
// Gerar QR Code
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    // Validação para quando não tiver valor
    if (!qrCodeInputValue) return;

    // Esperar resposta
    qrCodeBtn.innerText = "Gerando código...";

    // API para gerar imagem QR Code
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    // Mostrar imagem quando carregar
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado!";
    });
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

// Validar tecla enter
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode();
    }
});

// Limpar área do QR Code
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        qrCodeBtn.innerText = "Gerar QR Code";
        container.classList.remove("active");
    }
})


