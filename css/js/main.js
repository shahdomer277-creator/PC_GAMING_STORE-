// كود تشغيل أزرار إضافة للسلة
document.addEventListener('DOMContentLoaded', () => {
    // تحديد جميع أزرار الشراء في الصفحة
    const buyButtons = document.querySelectorAll('.btn-buy');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // جلب اسم المنتج من الكارت الخاص به
            const productName = button.parentElement.querySelector('h3').innerText;
            
            // إظهار رسالة تنبيه للمستخدم
            alert(`🛒 تم إضافة (${productName}) إلى السلة بنجاح!`);
        });
    });
});
