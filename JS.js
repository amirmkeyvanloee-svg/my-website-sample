document.addEventListener('DOMContentLoaded', function() {

    var products = [
        { id: 1, name: 'پیراهن کتان', price: '۱,۲۰۰,۰۰۰', img: 'images/second.jpg' },
        { id: 2, name: 'شلوار پارچه‌ای', price: '۹۸۰,۰۰۰', img: 'images/third.jpg' },
        { id: 3, name: 'کت مینیمال', price: '۲,۴۵۰,۰۰۰', img: 'images/fourth.jpg' },
        { id: 4, name: 'تیشرت نخی', price: '۶۲۰,۰۰۰', img: 'images/fifth.jpg' },
        { id: 5, name: 'دامن پلیسه', price: '۱,۳۵۰,۰۰۰', img: 'images/sixth.jpg' },
        { id: 6, name: 'ست اکسسوری', price: '۴۸۰,۰۰۰', img: 'images/seventh.jpg' }
    ];

    var grid = document.getElementById('productGrid');
    if (grid) {
        for (var i = 0; i < products.length; i++) {
            var p = products[i];
            var card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = '<div class="product-card__image" style="background-image: url(\'' + p.img + '\'); background-size: cover; background-position: center; position: relative;"></div><div class="product-card__name">' + p.name + '</div><div class="product-card__price">' + p.price + ' تومان</div>';
            card.addEventListener('click', function(p) {
                return function() {
                    alert('محصول "' + p.name + '" با قیمت ' + p.price + ' تومان به سبد افزوده شد.');
                };
            }(p));
            grid.appendChild(card);
        }
    }

    var form = document.getElementById('newsletterForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var input = this.querySelector('input[type="email"]');
            if (input && input.value.trim() !== '') {
                alert('ایمیل "' + input.value.trim() + '" با موفقیت ثبت شد.');
                input.value = '';
            } else {
                alert('لطفاً یک ایمیل معتبر وارد کنید.');
            }
        });
    }

    // ===== دکمه تغییر حالت شب و روز =====
    var toggleBtn = document.getElementById('themeToggle');
    var body = document.body;
    var icon = toggleBtn.querySelector('.theme-toggle__icon');

    // بررسی حالت ذخیره شده در مرورگر
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.textContent = '☀️';
    }

    toggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        var isDark = body.classList.contains('dark-mode');
        icon.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

});
