document.addEventListener("DOMContentLoaded", () => {

    // 1. إنشاء إشعار ترحيبي أنيق يختفي تلقائيًا
    const showToast = () => {
        const toast = document.createElement("div");
        toast.className = "welcome-toast";
        toast.innerText = "👋 Welcome to my portfolio!";
        document.body.appendChild(toast);

        // إخفاء الإشعار بعد 3.5 ثانية
        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 500);
        }, 3500);
    };

    showToast();

    // 2. حركة العداد التلقائي لقسم الإحصائيات
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace(/\D/g, ''); // أخذ الرقم فقط
            const increment = Math.ceil(target / 50); // حساب سرعة الحركة

            if (count < target) {
                counter.innerText = "+" + Math.min(count + increment, target);
                setTimeout(updateCount, 25);
            } else {
                counter.innerText = "+" + target;
            }
        };

        updateCount();
    });
});

// كود التاريخ الخاص بك بدون تغيير
let year = new Date().getFullYear();
const dateElement = document.getElementById("date");
if (dateElement) {
    dateElement.innerHTML = year;
}

