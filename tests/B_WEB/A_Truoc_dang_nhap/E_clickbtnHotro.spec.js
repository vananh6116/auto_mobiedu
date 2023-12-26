// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../dataSite.json';



/**
 * Case 1: Click link trang Hỗ trợ
 * Mong muốn: Hiển thị đúng đến trang hỗ trợ 
 */

function case1 () {
    test('Case 1: click link trang hỗ trợ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Hỗ trợ 
        await page.getByRole('link', { name: 'Hỗ trợ' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Hỗ trợ' })).toBeVisible();
        // Lọc nội dung câu hỏi 
        await page.getByPlaceholder('Nhập câu hỏi của bạn vào đây').fill('Thanh toán');
        await page.locator('#support_search').click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/ho-tro-khach-hang/tim-kiem/Thanh%20to%C3%A1n");
        // Click câu hỏi 1 các câu hỏi thường gặp
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Click câu hỏi 2 các câu hỏi thường gặp
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(2) > div > div.question-content > p > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Click câu hỏi 3 các câu hỏi thường gặp
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(3) > div > div.question-content > p > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Click câu hỏi 4 các câu hỏi thường gặp
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(4) > div > div.question-content > p > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Click câu hỏi 5 các câu hỏi thường gặp
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(5) > div > div.question-content > p > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Click câu hỏi 6 các câu hỏi thường gặp
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(6) > div > div.question-content > p > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Sản phẩm -> Khóa học 
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li.active > a').click();
        await page.locator('div#tab-1 li.active > a').click();
        await page.locator('div#tab-child-7 a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Sản phẩm -> Giải pháp 
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li.active > a').click();
        await page.locator('div#tab-1 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-15 a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Sản phẩm -> Cổng thi
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li.active > a').click();
        await page.locator('div#tab-1 li:nth-child(3) > a').click();
        await page.locator('div#tab-child-17 a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Hướng dẫn -> Click Đăng kí - Đăng nhập -> Text 1 
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li.active > a').click();
        await page.locator('div#tab-child-1 div:nth-child(1) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Hướng dẫn -> Click Đăng kí - Đăng nhập -> Text 2
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li.active > a').click();
        await page.locator('div#tab-child-1 div:nth-child(2) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Hướng dẫn -> Click Đăng kí - Đăng nhập -> Text 3
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li.active > a').click();
        await page.locator('div#tab-child-1 div:nth-child(3) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Hướng dẫn -> Mua & sử dụng -> Text 1 
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-3 div:nth-child(1) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Hướng dẫn -> Mua & sử dụng -> Text 2
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-3 div:nth-child(2) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Hướng dẫn -> Mua & sử dụng -> Text 3
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-3 div:nth-child(3) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Hướng dẫn -> Mua & sử dụng -> Text 4
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-3 div:nth-child(4) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Hướng dẫn -> Mua & sử dụng -> Text 5
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-3 div:nth-child(5) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Hướng dẫn -> Quản lý tài khoản -> Text 1
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(3) > a').click();
        await page.locator('div#tab-child-5 div:nth-child(1) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Hướng dẫn -> Quản lý tài khoản -> Text 2
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(3) > a').click();
        await page.locator('div#tab-child-5 div:nth-child(2) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Hướng dẫn -> Quản lý tài khoản -> Text 3
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(2) > a').click();
        await page.locator('div#tab-2 li:nth-child(3) > a').click();
        await page.locator('div#tab-child-5 div:nth-child(3) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Chính sách -> Thanh toán - Đổi trả -> Text 1
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(3) > a').click();
        await page.locator('div#tab-3 li.active > a').click();
        await page.locator('div#tab-child-19 div:nth-child(1) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Chính sách -> Thanh toán - Đổi trả -> Text 2
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(3) > a').click();
        await page.locator('div#tab-3 li.active > a').click();
        await page.locator('div#tab-child-19 div:nth-child(2) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Chính sách -> Thanh toán - Đổi trả -> Text 3
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(3) > a').click();
        await page.locator('div#tab-3 li.active > a').click();
        await page.locator('div#tab-child-19 div:nth-child(3) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Chính sách -> Thanh toán - Đổi trả -> Text 4
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(3) > a').click();
        await page.locator('div#tab-3 li.active > a').click();
        await page.locator('div#tab-child-19 div:nth-child(4) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Chính sách -> Thanh toán - Đổi trả -> Text 5
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(3) > a').click();
        await page.locator('div#tab-3 li.active > a').click();
        await page.locator('div#tab-child-19 div:nth-child(5) > div.question-content > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Tất cả câu hỏi -> Click Chính sách -> Dành cho đại lý -> Text 1
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.desktop-show > div.all-questions > div > ul > li:nth-child(3) > a').click();
        await page.locator('div#tab-3 li:nth-child(2) > a').click();
        await page.locator('div#tab-child-25 a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Bạn có thêm câu hỏi khác -> Click icon Điện thoại 
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support li:nth-child(1) > a > em').click();
        await expect(page.getByText('Hotline 9090 Từ 7h00 - 22h00 các ngày trong tuần')).toBeVisible();
        // Bạn có thêm câu hỏi khác -> Click icon Tin nhắn
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.cta-question-social > ul > li:nth-child(2) > a > em').click();
        await expect(page.locator('#popup-email div').filter({ hasText: 'Họ tên * Số điện thoại Email * Vấn đề đang gặp phải Chọn danh mục Đăng kí - Đăng' })
            .first()).toBeVisible();
        // Bạn có thêm câu hỏi khác -> Click icon Zalo 
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await page.locator('main#support div.cta-question-social > ul > li:nth-child(3) > a').click();
        await page.goto('https://zalo.me/0777202020');
        await expect(page).toHaveURL('https://zalo.me/0777202020');
        await expect(page.getByText('mobiEdu mSchoolLiên hệNhắn tin')).toBeVisible();
        // Bạn có thêm câu hỏi khác -> Click icon Facebook
        await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
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
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Hỗ trợ 
        await page.getByRole('link', { name: 'Hỗ trợ' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Hỗ trợ' })).toBeVisible();
        // Click link đến trang hỗ trợ chi tiết 
        await page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Hỗ trợ chi tiết' })).toBeVisible();
        // Click Sản phẩm -> Khóa học -> Text 1 
        await page.locator('div.col-xl-3.col-xxl-3-custom > div > div > div > nav > ul > li:nth-child(1) > a').click();
        await page.locator('div#category-1 div:nth-child(1) > div > h3 > span').click();
        await page.locator('div#category-1 div:nth-child(1) > div > div > div > div > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Sản phẩm -> Click Giải pháp -> Click Text 1 
        await page.locator('div#category-1 div:nth-child(2) > div > h3 > span').click();
        await page.locator('div#category-1 div:nth-child(2) > div > div > div > div > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Sản phẩm -> Click Cổng thi -> Text 1 
        await page.locator('div#category-1 div:nth-child(3) > div > h3 > span').click();
        await page.locator('div#category-1 div:nth-child(3) > div > div > div > div > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Click Hướng dẫn -> Đăng kí - Đăng nhập -> Text 1 
        await page.locator('div.col-xl-3.col-xxl-3-custom > div > div > div > nav > ul > li:nth-child(2) > a').click();
        await page.locator('div#category-2 div:nth-child(1) > div > h3 > span').click();
        await page.locator('div#category-2 div:nth-child(1) > div > div > div > div:nth-child(1) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Hướng dẫn -> Đăng kí - Đăng nhập -> Click Text 2
        await page.locator('div#category-2 div:nth-child(1) > div > div > div > div:nth-child(2) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Hướng dẫn -> Đăng kí - Đăng nhập -> Click Text 3
        await page.locator('div#category-2 div:nth-child(1) > div > div > div > div:nth-child(3) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Hướng dẫn -> Click Mua & Sử dụng -> Click Text 1 
        await page.locator('div#category-2 div:nth-child(2) > div > h3 > span').click();
        await page.locator('div#category-2 div:nth-child(2) > div > div > div > div:nth-child(1) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Hướng dẫn -> Mua & Sử dụng -> Click Text 2
        await page.locator('div#category-2 div:nth-child(2) > div > div > div > div:nth-child(2) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Hướng dẫn -> Mua & Sử dụng -> Click Text 3
        await page.locator('div#category-2 div:nth-child(2) > div > div > div > div:nth-child(3) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Hướng dẫn -> Mua & Sử dụng -> Click Text 4
        await page.locator('div#category-2 div:nth-child(2) > div > div > div > div:nth-child(4) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Hướng dẫn -> Mua & Sử dụng -> Click Text 5
        await page.locator('div#category-2 div:nth-child(5) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Hướng dẫn -> Mua & Sử dụng -> Click Text 6
        await page.locator('div#category-2 div:nth-child(6) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Hướng dẫn -> Mua & Sử dụng -> Click Text 7
        await page.locator('div#category-2 div:nth-child(7) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Hướng dẫn -> Click Quản lý tài khoản -> Click Text 1
        await page.locator('div#category-2 div:nth-child(3) > div > h3 > span').click();
        await page.locator('div#category-2 div:nth-child(3) > div > div > div > div:nth-child(1) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Hướng dẫn -> Quản lý tài khoản -> Click Text 2
        await page.locator('div#category-2 div:nth-child(3) > div > div > div > div:nth-child(2) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Hướng dẫn -> Quản lý tài khoản -> Click Text 3
        await page.locator('div#category-2 div:nth-child(3) > div > div > div > div:nth-child(3) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Click Chính sách -> Click Thanh toán - Đổi trả -> Click Text 1 
        await page.locator('div > div > div > nav > ul > li:nth-child(3) > a').click();
        await page.locator('div#category-3 div:nth-child(1) > div > h3 > span').click();
        await page.locator('div#category-3 div:nth-child(1) > div > div > div > div:nth-child(1) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Chính sách -> Thanh toán - Đổi trả -> Click Text 2
        await page.locator('div#category-3 div:nth-child(2) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Chính sách -> Thanh toán - Đổi trả -> Click Text 3
        await page.locator('div#category-3 div:nth-child(3) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Chính sách -> Thanh toán - Đổi trả -> Click Text 4
        await page.locator('div#category-3 div:nth-child(4) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Chính sách -> Thanh toán - Đổi trả -> Click Text 5
        await page.locator('div#category-3 div:nth-child(5) > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();
        // Chính sách -> Click Dành cho đại lý -> Click Text 1
        await page.locator('div#category-3 div:nth-child(2) > div > h3 > span').click();
        await page.locator('div#category-3 div:nth-child(2) > div > div > div > div > div > a').click();
        await expect(page.getByText('Bạn có thấy bài viết này hữu ích không?')).toBeVisible();

});
}
function main() {
    case1();
    case2();

}
main();