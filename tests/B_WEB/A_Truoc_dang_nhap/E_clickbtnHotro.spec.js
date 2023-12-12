// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');


/**
 * Case 1: Click link trang Hỗ trợ
 * Mong muốn: Hiển thị đúng đến trang hỗ trợ 
 */

function case1 () {
    test('Case 1: click link trang hỗ trợ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto('https://mskill8.mobiedu.vn/');
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Hỗ trợ 
        await page.getByRole('link', { name: 'Hỗ trợ' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Hỗ trợ' })).toBeVisible();
        // Lọc nội dung câu hỏi 
        await page.getByPlaceholder('Nhập câu hỏi của bạn vào đây').fill('Thanh toán');
        await page.locator('#support_search').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/tim-kiem/Thanh%20to%C3%A1n');
        // Click câu hỏi 1 các câu hỏi thường gặp
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/thanh-toan-online-nhu-the-nao');
        // Click câu hỏi 2 các câu hỏi thường gặp
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(2) > div > div.question-content > p > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/he-sinh-thai-giao-duc-mobiedu-co-nhung-khoa-hoc-nhu-the-nao');
        // Click câu hỏi 3 các câu hỏi thường gặp
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(3) > div').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/ng-ky-tai-khon-tren-mobieduvn-nh-th-nao');
        // Click câu hỏi 4 các câu hỏi thường gặp
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(4) > div').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/toi-co-the-thanh-toan-qua-cac-hinh-thuc-nao-tren-mobiedu');
        // Click câu hỏi 5 các câu hỏi thường gặp
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(5) > div').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/tai-khoan-tren-mobiedu-co-the-thay-doi-duoc-khong');
        // Click câu hỏi 6 các câu hỏi thường gặp
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(6) > div').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/dang-nhap-tren-mobiedu-vn-nhu-the-nao');
        // Tất cả câu hỏi -> Click Sản phẩm -> Khóa học 
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li.active > a').click();
        await page.locator('div#tab-1 li.active > a').click();
        await page.locator('div#tab-child-7 a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/he-sinh-thai-giao-duc-mobiedu-co-nhung-khoa-hoc-nhu-the-nao');
        // Tất cả câu hỏi -> Click Sản phẩm -> Giải pháp 
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li.active > a').click();
        await page.locator('div#tab-1 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-15 a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/cac-giai-phap-mobiedu-la-gi');
        // Tất cả câu hỏi -> Click Sản phẩm -> Cổng thi
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li.active > a').click();
        await page.locator('div#tab-1 li:nth-child(3) > a').click();
        await page.locator('div#tab-child-17 a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/cong-thi-mobiedu-la-gi');
        // Tất cả câu hỏi -> Click Hướng dẫn -> Click Đăng kí - Đăng nhập -> Text 1 
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li.active > a').click();
        await page.locator('div#tab-child-1 div:nth-child(1) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/ng-ky-tai-khon-tren-mobieduvn-nh-th-nao');
        // Tất cả câu hỏi -> Click Hướng dẫn -> Click Đăng kí - Đăng nhập -> Text 2
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li.active > a').click();
        await page.locator('div#tab-child-1 div:nth-child(2) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/dang-nhap-tren-mobiedu-vn-nhu-the-nao');
        // Tất cả câu hỏi -> Click Hướng dẫn -> Click Đăng kí - Đăng nhập -> Text 3
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li.active > a').click();
        await page.locator('div#tab-child-1 div:nth-child(3) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/hng-dn-cach-ly-li-mt-khu-tren-mobieduvn');
        // Tất cả câu hỏi -> Click Hướng dẫn -> Mua & sử dụng -> Text 1 
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-3 div:nth-child(1) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/cac-khoa-hoc-co-thoi-gian-su-dung-trong-bao-lau');
        // Tất cả câu hỏi -> Click Hướng dẫn -> Mua & sử dụng -> Text 2
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-3 div:nth-child(2) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/lam-the-nao-de-mua-tang-khoa-hoc-cho-nguoi-khac');
        // Tất cả câu hỏi -> Click Hướng dẫn -> Mua & sử dụng -> Text 3
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-3 div:nth-child(3) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/huong-dan-kich-hoat-khoa-hoc');
        // Tất cả câu hỏi -> Click Hướng dẫn -> Mua & sử dụng -> Text 4
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-3 div:nth-child(4) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/khong-dang-ki-tai-khoan-co-mua-duoc-khoa-hoc-tren-mobiedu-vn-khong');
        // Tất cả câu hỏi -> Click Hướng dẫn -> Mua & sử dụng -> Text 5
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-3 div:nth-child(5) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/khong-co-internet-co-the-xem-duoc-video-khoa-hoc-hay-khong');
        // Tất cả câu hỏi -> Click Hướng dẫn -> Quản lý tài khoản -> Text 1
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(3) > a').click();
        await page.locator('div#tab-child-5 div:nth-child(1) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/tai-khoan-tren-mobiedu-co-the-thay-doi-duoc-khong');
        // Tất cả câu hỏi -> Click Hướng dẫn -> Quản lý tài khoản -> Text 2
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(3) > a').click();
        await page.locator('div#tab-child-5 div:nth-child(2) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/lam-the-nao-de-quan-ly-cac-khoa-hoc-sau-khi-da-mua');
        // Tất cả câu hỏi -> Click Hướng dẫn -> Quản lý tài khoản -> Text 3
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(3) > a').click();
        await page.locator('div#tab-child-5 div:nth-child(3) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/toi-co-the-nhin-thay-khoa-hoc-da-mua-tang-nguoi-khac-khong');
        // Tất cả câu hỏi -> Click Chính sách -> Thanh toán - Đổi trả -> Text 1
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(3) > a').click();
        await page.locator('div#tab-3 li.active > a').click();
        await page.locator('div#tab-child-19 div:nth-child(1) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/thanh-toan-online-nhu-the-nao');
        // Tất cả câu hỏi -> Click Chính sách -> Thanh toán - Đổi trả -> Text 2
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(3) > a').click();
        await page.locator('div#tab-3 li.active > a').click();
        await page.locator('div#tab-child-19 div:nth-child(2) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/toi-co-the-thanh-toan-qua-cac-hinh-thuc-nao-tren-mobiedu');
        // Tất cả câu hỏi -> Click Chính sách -> Thanh toán - Đổi trả -> Text 3
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(3) > a').click();
        await page.locator('div#tab-3 li.active > a').click();
        await page.locator('div#tab-child-19 div:nth-child(3) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/lam-the-nao-de-thanh-toan-qua-tai-khoan-di-dong-sms-khi-mua-cac-khoa-hoc-tren-mobiedu');
        // Tất cả câu hỏi -> Click Chính sách -> Thanh toán - Đổi trả -> Text 4
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(3) > a').click();
        await page.locator('div#tab-3 li.active > a').click();
        await page.locator('div#tab-child-19 div:nth-child(4) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/lam-the-nao-de-thanh-toan-online-khi-mua-cac-khoa-hoc-tren-mobiedu');
        // Tất cả câu hỏi -> Click Chính sách -> Thanh toán - Đổi trả -> Text 5
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(3) > a').click();
        await page.locator('div#tab-3 li.active > a').click();
        await page.locator('div#tab-child-19 div:nth-child(5) > div.question-content > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/co-the-thay-doi-khoa-hoc-sau-khi-da-mua-hay-khong');
        // Tất cả câu hỏi -> Click Chính sách -> Dành cho đại lý -> Text 1
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(3) > a').click();
        await page.locator('div#tab-3 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-25 a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/cac-mo-hinh-hop-tac-dai-li-nhu-the-nao');
        // Bạn có thêm câu hỏi khác -> Click icon Điện thoại 
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support li:nth-child(1) > a > em').click();
        await expect(page.getByText('Hotline 9090 Từ 7h00 - 22h00 các ngày trong tuần')).toBeVisible();
        // Bạn có thêm câu hỏi khác -> Click icon Tin nhắn
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.cta-question-social > ul > li:nth-child(2) > a > em').click();
        await expect(page.locator('#popup-email div').filter({ hasText: 'Họ tên * Số điện thoại Email * Vấn đề đang gặp phải Chọn danh mục Đăng kí - Đăng' })
            .first()).toBeVisible();
        // Bạn có thêm câu hỏi khác -> Click icon Zalo 
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support div.cta-question-social > ul > li:nth-child(3) > a').click();
        await page.goto('https://zalo.me/0777202020');
        await expect(page).toHaveURL('https://zalo.me/0777202020');
        await expect(page.getByText('mobiEdu mSchoolLiên hệNhắn tin')).toBeVisible();
        // Bạn có thêm câu hỏi khác -> Click icon Facebook
        await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await page.locator('main#support li:nth-child(4) > a').click();
        await page.goto('https://www.facebook.com/mobiedu.vn');
        await expect(page).toHaveURL('https://www.facebook.com/mobiedu.vn');
        await expect(page.getByRole('dialog').locator('div').filter({ hasText: 'Connect with mobiEdu.vn on FacebookConnect with mobiEdu.vn on FacebookEmail addr' })
            .first()).toBeVisible();

});
}

/**
 * Case 2: Click link trang Hỗ trợ chi tiết
 * Mong muốn: Hiển thị đúng đến trang hỗ trợ 
 */

function case2 () {
    test('Case 2: click link trang hỗ trợ chi tiết', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto('https://mskill8.mobiedu.vn/');
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Hỗ trợ 
        await page.getByRole('link', { name: 'Hỗ trợ' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Hỗ trợ' })).toBeVisible();
        // Click link đến trang hỗ trợ chi tiết 
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/thanh-toan-online-nhu-the-nao');
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Hỗ trợ chi tiết' })).toBeVisible();
        // Click Sản phẩm -> Khóa học -> Text 1 
        await page.locator('div.col-xl-3.col-xxl-3-custom > div > div > div > nav > ul > li:nth-child(1) > a').click();
        await page.locator('div#category-1 div:nth-child(1) > div > h3 > span').click();
        await page.locator('div#category-1 div:nth-child(1) > div > div > div > div > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/he-sinh-thai-giao-duc-mobiedu-co-nhung-khoa-hoc-nhu-the-nao');
        // Sản phẩm -> Click Giải pháp -> Click Text 1 
        await page.locator('div#category-1 div:nth-child(2) > div > h3 > span').click();
        await page.locator('div#category-1 div:nth-child(2) > div > div > div > div > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/cac-giai-phap-mobiedu-la-gi');
        // Sản phẩm -> Click Cổng thi -> Text 1 
        await page.locator('div#category-1 div:nth-child(3) > div > h3 > span').click();
        await page.locator('div#category-1 div:nth-child(3) > div > div > div > div > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/cong-thi-mobiedu-la-gi');
        // Click Hướng dẫn -> Đăng kí - Đăng nhập -> Text 1 
        await page.locator('div.col-xl-3.col-xxl-3-custom > div > div > div > nav > ul > li:nth-child(2) > a').click();
        await page.locator('div#category-2 div:nth-child(1) > div > h3 > span').click();
        await page.locator('div#category-2 div:nth-child(1) > div > div > div > div:nth-child(1) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/ng-ky-tai-khon-tren-mobieduvn-nh-th-nao');
        // Hướng dẫn -> Đăng kí - Đăng nhập -> Click Text 2
        await page.locator('div#category-2 div:nth-child(1) > div > div > div > div:nth-child(2) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/dang-nhap-tren-mobiedu-vn-nhu-the-nao');
        // Hướng dẫn -> Đăng kí - Đăng nhập -> Click Text 3
        await page.locator('div#category-2 div:nth-child(1) > div > div > div > div:nth-child(3) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/hng-dn-cach-ly-li-mt-khu-tren-mobieduvn');
        // Hướng dẫn -> Click Mua & Sử dụng -> Click Text 1 
        await page.locator('div#category-2 div:nth-child(2) > div > h3 > span').click();
        await page.locator('div#category-2 div:nth-child(2) > div > div > div > div:nth-child(1) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/cac-khoa-hoc-co-thoi-gian-su-dung-trong-bao-lau');
        // Hướng dẫn -> Mua & Sử dụng -> Click Text 2
        await page.locator('div#category-2 div:nth-child(2) > div > div > div > div:nth-child(2) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/lam-the-nao-de-mua-tang-khoa-hoc-cho-nguoi-khac');
        // Hướng dẫn -> Mua & Sử dụng -> Click Text 3
        await page.locator('div#category-2 div:nth-child(2) > div > div > div > div:nth-child(3) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/huong-dan-kich-hoat-khoa-hoc');
        // Hướng dẫn -> Mua & Sử dụng -> Click Text 4
        await page.locator('div#category-2 div:nth-child(4) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/khong-dang-ki-tai-khoan-co-mua-duoc-khoa-hoc-tren-mobiedu-vn-khong');
        // Hướng dẫn -> Mua & Sử dụng -> Click Text 5
        await page.locator('div#category-2 div:nth-child(5) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/khong-co-internet-co-the-xem-duoc-video-khoa-hoc-hay-khong');
        // Hướng dẫn -> Mua & Sử dụng -> Click Text 6
        await page.locator('div#category-2 div:nth-child(6) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/lam-the-nao-de-tuong-tac-voi-giang-vien');
        // Hướng dẫn -> Mua & Sử dụng -> Click Text 7
        await page.locator('div#category-2 div:nth-child(7) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/lam-the-nao-de-gia-han-khoa-hoc-da-het-han');
        // Hướng dẫn -> Click Quản lý tài khoản -> Click Text 1
        await page.locator('div#category-2 div:nth-child(3) > div > h3 > span').click();
        await page.locator('div#category-2 div:nth-child(3) > div > div > div > div:nth-child(1) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/tai-khoan-tren-mobiedu-co-the-thay-doi-duoc-khong');
        // Hướng dẫn -> Quản lý tài khoản -> Click Text 2
        await page.locator('div#category-2 div:nth-child(3) > div > div > div > div:nth-child(2) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/lam-the-nao-de-quan-ly-cac-khoa-hoc-sau-khi-da-mua');
        // Hướng dẫn -> Quản lý tài khoản -> Click Text 3
        await page.locator('div#category-2 div:nth-child(3) > div > div > div > div:nth-child(3) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/toi-co-the-nhin-thay-khoa-hoc-da-mua-tang-nguoi-khac-khong');
        // Click Chính sách -> Click Thanh toán - Đổi trả -> Click Text 1 
        await page.locator('div > div > div > nav > ul > li:nth-child(3) > a').click();
        await page.locator('div#category-3 div:nth-child(1) > div > h3 > span').click();
        await page.locator('div#category-3 div:nth-child(1) > div > div > div > div:nth-child(1) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/thanh-toan-online-nhu-the-nao');
        // Chính sách -> Thanh toán - Đổi trả -> Click Text 2
        await page.locator('div#category-3 div:nth-child(2) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/toi-co-the-thanh-toan-qua-cac-hinh-thuc-nao-tren-mobiedu');
        // Chính sách -> Thanh toán - Đổi trả -> Click Text 3
        await page.locator('div#category-3 div:nth-child(3) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/lam-the-nao-de-thanh-toan-qua-tai-khoan-di-dong-sms-khi-mua-cac-khoa-hoc-tren-mobiedu');
        // Chính sách -> Thanh toán - Đổi trả -> Click Text 4
        await page.locator('div#category-3 div:nth-child(4) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/lam-the-nao-de-thanh-toan-online-khi-mua-cac-khoa-hoc-tren-mobiedu');
        // Chính sách -> Thanh toán - Đổi trả -> Click Text 5
        await page.locator('div#category-3 div:nth-child(5) > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/co-the-thay-doi-khoa-hoc-sau-khi-da-mua-hay-khong');
        // Chính sách -> Click Dành cho đại lý -> Click Text 1
        await page.locator('div#category-3 div:nth-child(2) > div > h3 > span').click();
        await page.locator('div#category-3 div:nth-child(2) > div > div > div > div > div > a').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/ho-tro-khach-hang/cac-mo-hinh-hop-tac-dai-li-nhu-the-nao');

});
}
function main() {
    case1();
    case2();

}
main();