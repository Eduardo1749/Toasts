const notifications = document.querySelector(".notifications");
buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer: 5000,
    success:{
        icon: "fa-circle-check",
        text: "Uhuuul vamos tirar total!!"
    },
    error:{
        icon: "fa-circle-xmark",
        text: "Fomos de lojas Americanas"
    },
    warning:{
        icon: "fa-triangle-exclamation",
        text: "Cuidado!! O João não está gostando das mensagens."
    },
    info:{
        icon: "fa-circle-info",
        text: "Thayrelan existe e está nessa aula."
    }
}
const removeToast= (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(() => toast.remove(), 500); 
}

const createToast = (id) => {
    const {icon,text} = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = `
    <div class="column">
        <i class="fa-solid ${icon}"></i>
        <span> ${text}</span>
    </div>
    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
   `;
   notifications.appendChild(toast);
   toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);

}
// Adcionando ao click um evento para criar um toast
buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
})