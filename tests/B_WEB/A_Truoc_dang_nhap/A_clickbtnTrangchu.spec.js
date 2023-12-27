// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../dataSite.json';

/**
 * Case 1: Click logo mobiEdu 
 * Mong muốn: Hiển thị trang chủ 
 */

function case1 () {
    test('Case 1: click logo MBE', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click logo
        await page.locator('a').first().click();
        // Expect 
        await expect(page.getByText('Khóa học tiêu biểu')).toBeVisible();
        await expect(page.getByText('Giải pháp mobiEdu')).toBeVisible();
        await expect(page.getByText('CỔNG THI MOBIEDU')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Tặng ngay phần quà hấp dẫn khi đăng kí TÀI KHOẢN MIỄN PHÍ trên mobiEdu' })).toBeVisible();
        await expect(page.getByText('mobiEdu - Nền tảng chuyển đổi số giáo dục toàn diện')).toBeVisible();
        await expect(page.getByText('Báo chí nói về mobiEdu')).toBeVisible();
        await expect(page.getByText('Tin tức & Sự kiện')).toBeVisible();
        await expect(page.getByText('VỀ MOBIEDU Giới thiệuKhoá họcGiải phápCổng thi')).toBeVisible();
        await expect(page.getByText('ĐỐI TÁC & KHÁCH HÀNG Dành cho đại lý')).toBeVisible();
        await expect(page.getByText('TẢI ỨNG DỤNG MOBIEDU NGAY App StoreGoogle Play')).toBeVisible();
        await expect(page.getByText('THANH TOÁN Ví MomoZalo Pay')).toBeVisible();
        await expect(page.getByText('THEO DÕI MOBIEDU FacebookYoutubeLiên hệ')).toBeVisible();
        await expect(page.getByText('CHÍNH SÁCH BẢO MẬTĐIỀU KHOẢN DỊCH VỤGIẢI QUYẾT TRANH CHẤPQUY CHẾ HOẠT ĐỘNG')).toBeVisible();
        await expect(page.locator('div').filter({ hasText: 'Cơ quan chủ quản: TỔNG CÔNG TY VIỄN THÔNG MOBIFONE Địa chỉ: Số 1 Phạm Văn Bạch, ' }).nth(2)).toBeVisible();
        await expect(page.locator('li').filter({ hasText: 'keyboard_arrow_up' })).toBeVisible();
        await expect(page.locator('li').filter({ hasText: 'headset' })).toBeVisible();
        // Chụp ảnh màn hình Trang chủ 
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_trang_chủ_case1.png', fullPage: true });
        
    });
}

/**
 * Case 2: Click Khóa học banner đầu trang 
 * Mong muốn: Hiển thị trang Khóa học 
 */

function case2 () {
    test('Case 2: click Khóa học đầu trang', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click Khóa học 
        await page.getByRole('link', { name: 'Khóa học' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' }).locator('div')).toBeVisible();
        // Chụp ảnh màn hình Khóa học 
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_khóa_học_case2.png', fullPage: true });

    });
}

/**
 * Case 3: Click Giải pháp đầu trang 
 * Mong muốn: Hiển thị trang giải pháp
 */

function case3 () {
    test('Case 3: click Giải pháp đầu trang', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click Giải pháp
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Giải pháp' }).click();
        // Expect
        await expect(page.locator('div').filter({ hasText: 'Trang chủ Giải pháp' })).toBeVisible();
        // Chụp ảnh màn hình giải pháp
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_giải_pháp_case 3.png', fullPage: true });

    });
}  

/**
 * Case 4: Click Cổng thi đầu trang 
 * Mong muốn: Hiển thị trang cổng thi
 */

function case4 () {
    test('Case 4: click cổng thi đầu trang', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click Cổng thi
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/cong-thi");
        await expect(page.locator('div').filter({ hasText: 'Trang chủ Cổng thi' })).toBeVisible();
        // Chụp ảnh màn hình cổng thi
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_cổng_thi_case4.png', fullPage: true });

    });
} 

/**
 * Case 5: Lọc tìm kiếm từ khóa
 * Mong muốn: Hiển thị đúng từ khóa muốn tìm kiếm 
 */

function case5 () {
    test('Case 5: nhập từ khóa', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Nhập từ khóa 
        await page.getByPlaceholder('Nhập từ khóa...').fill('Khóa học');
        await page.getByRole('button', { name: 'search' }).click();
        // Expect
        await expect(page.getByRole('heading', { name: 'Không tìm thấy kết quả phù hợp' })).not.toBeVisible();
        // Chụp ảnh màn hình tìm kiếm
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_tìm_kiếm_case5.png', fullPage: true });

    });
} 

/**
 * Case 6: Click Btn Đăng ký 
 * Mong muốn: Hiển thị màn hình đăng ký
 */

function case6 () {
    test('Case 6: click btn đăng ký', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng ký 
        await page.getByRole('link', { name: 'Đăng kí' }).click();
        // Expect
        await page.waitForTimeout(3000);
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-ky");
        await expect(page.getByRole('button', { name: 'ĐĂNG KÝ' })).toBeVisible();
        // Chụp ảnh màn hình đăng ký
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_đăng_ký_case6.png', fullPage: true });

    });
}

/**
 * Case 7: Click Btn Đăng nhập 
 * Mong muốn: Hiển thị màn hình đăng nhập
 */

function case7 () {
    test('Case 7: click btn đăng nhập', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        // Expect
        await page.waitForTimeout(3000);
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        await expect(page.getByRole('button', { name: 'ĐĂNG NHẬP' })).toBeVisible();
        // Chụp ảnh màn hình đăng nhập
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_đăng_nhập_case7.png', fullPage: true });

    });
}

/**
 * Case 8: Click Btn Đăng nhập ngay banner đầu trang
 * Mong muốn: Hiển thị màn hình đăng nhập
 */

function case8 () {
    test('Case 8: click btn đăng nhập ngay', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập ngay
        await page.locator('div:nth-child(2) > .container > .row > .col-lg-5 > .caption > div:nth-child(3) > .button > .btn').click();
        // Expect
        await expect(page.getByRole('button', { name: 'ĐĂNG NHẬP' })).toBeVisible();

    });
}

/**
 * Case 9: Click danh mục khóa học: Tất cả, Trẻ em, Học sinh phổ thông, Sinh viên và người đi làm 
 * Mong muốn: Hiển thị đúng khóa học theo danh mục 
 */

function case9 () {
    test('Case 9: click danh mục khóa học', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click danh mục trẻ em 
        await page.locator('#btn_tab_tre-em').click();
        // Expect
        await expect(page.locator('div#tab_tre-em div.product-list > div')).toBeVisible();
        // Chụp ảnh màn hình danh mục trẻ em
        await page.waitForTimeout(2000);
        await page
            .locator('div#tab_tre-em div.product-list > div')
            .screenshot({ path: 'TC_Ảnh_trẻ_em_case9.png' });
        // Click danh mục học sinh phổ thông
        await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
        // Expect
        await expect(page.locator('div#tab_hoc-sinh-pho-thong div.product-list > div')).toBeVisible();
        // Chụp ảnh màn hình danh mục học sinh phổ thông
        await page.waitForTimeout(2000);
        await page
            .locator('div#tab_hoc-sinh-pho-thong div.product-list > div')
            .screenshot({ path: 'TC_Ảnh_học_sinh_case9.png' });
        // Click danh mục sinh viên và người đi làm
        await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
        // Expect
        await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div.product-list > div')).toBeVisible();
        // Chụp ảnh màn hình danh mục sinh viên và người đi làm
        await page.waitForTimeout(2000);
        await page
            .locator('div#tab_sinh-vien-nguoi-di-lam div.product-list > div')
            .screenshot({ path: 'TC_Ảnh_sinh_viên_case9.png' });
        // Click danh mục tất cả
        await page.locator('#btn_tab_all').click();
        // Expect
        await expect(page.locator('div#tab_all div.product-list > div')).toBeVisible();
        // Chụp ảnh màn hình danh mục tất cả
        await page.waitForTimeout(2000);
        await page
            .locator('div#tab_all div.product-list > div')
            .screenshot({ path: 'TC_Ảnh_tất_cả_case9.png'});


    });
}

/**
 * Case 10: Click khóa học 
 * Mong muốn: Hiển thị đúng khóa học 
 */

function case10 () {
    test('Case 10: click khóa học', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click Khóa học
        await page.getByRole('link', { name: 'EduPro mSkill EDV' }).click();
        // Expect
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học EduPro mSkill EDV' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'EduPro mSkill EDV' }).locator('span')).toBeVisible();
        // Chụp màn hình khóa học 
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_khóa_học_case10.png', fullPage : true });

    });
}

/**
 * Case 11: Click btn Xem thêm tại khóa học tiêu biểu
 * Mong muốn: Hiển thị trang khóa học 
 */

function case11 () {
    test('Case 11: click Btn Xem thêm khóa học', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Xem thêm Khóa học
        await page.locator('#tab_all').getByRole('link', { name: 'Xem thêm' }).click();
        // Expect
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' })).toBeVisible();

    });
}

/**
 * Case 12: Click btn Xem thêm tại giải pháp mobiEdu
 * Mong muốn: Hiển thị trang giải pháp
 */

function case12 () {
    test('Case 12: click Btn Xem thêm giải pháp', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Xem thêm giải pháp
        await page.getByRole('link', { name: 'XEM THÊM', exact: true }).click();
        // Expect
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giải pháp' })).toBeVisible();

    });
}

/**
 * Case 13: Click btn Xem thêm tại cổng thi mobiEdu
 * Mong muốn: Hiển thị trang cổng thi
 */

function case13 () {
    test('Case 13: click Btn Xem thêm cổng thi', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Xem thêm cổng thi
        await page.locator('.desktop-show > .button > .btn').click();
        // Expect
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Cổng thi' })).toBeVisible();

    });
}

/**
 * Case 14: Click btn Đăng ký ngay sau zone cổng thi mobiEdu
 * Mong muốn: Hiển thị trang đăng ký
 */

function case14 () {
    test('Case 14: click Btn Đăng ký ngay sau cổng thi', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng ký ngay sau zone cổng thi
        await page.getByRole('button', { name: 'Đăng kí ngay' }).click();
        // Expect
        await expect(page.getByRole('button', { name: 'ĐĂNG KÝ' })).toBeVisible();

    });
}

/**
 * Case 15: Click btn Xem thêm zone mobiEdu - Nền tảng chuyển đổi số giáo dục toàn diện
 * Mong muốn: Hiển thị trang giới thiệu 
 */

function case15 () {
    test('Case 15: click Btn Xem thêm đến trang Giới thiệu', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Xem thêm zone mobiEdu - Nền tảng chuyển đổi số giáo dục toàn diện
        await page.locator('div:nth-child(5) > .btn').click();
        // Expect
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giới thiệu' })).toBeVisible();
        // Chụp ảnh màn hình giới thiệu
        await page.waitForTimeout(2000);
        await page.screenshot({path: 'TC_Ảnh_giới_thiệu_case15.png', fullPage: true });

    });
}

/**
 * Case 16: Click banner có gắn link
 * Mong muốn: Hiển thị đến trang link được gắn vào banner
 */

function case16 () {
    test('Case 16: click banner gắn link', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn banner gắn link
        await page.locator('.home-13 > .caption').click();
        // Expect
        await page.goto(dataSiteTest[1].linkSite + "/tin-dich-vu/he-sang-ron-rang-don-ngan-goi-cuoc-moi-cung-mobiedu-p2105.html");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Tin tức Tin dịch vụ' })).toBeVisible();

    });
}

/**
 * Case 17: Click bài viết 
 * Mong muốn: Hiển thị đến chi tiết bài viết 
 */

function case17 () {
    test('Case 17: click bài viết', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click bài viết
        await page.getByRole('link', { name: 'NHỮNG ĐIỀU CẦN LƯU Ý KHI THAM GIA CHƯƠNG TRÌNH \\\'ĐUA ĐIỂM TÍCH QUÀ\\\'' }).click();
        // Expect
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Tin tức Tin tức' })).toBeVisible();
        await expect(page.getByText('Tin tức NHỮNG ĐIỀU CẦN LƯU Ý KHI THAM GIA CHƯƠNG TRÌNH \\\\\\\'ĐUA ĐIỂM TÍCH QUÀ\\\\\\\'')).toBeVisible();
    });
}

/**
 * Case 18: Click btn Xem thêm tin tức
 * Mong muốn: Hiển thị đến trang tin tức
 */

function case18 () {
    test('Case 18: click btn Xem thêm tin tức', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Xem thêm
        await page.locator('.home-11 > .container > .button > .btn').click();
        // Expect
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Tin tức' })).toBeVisible();

    });
}

/**
 * Case 19: Click link Giới thiệu cuối trang
 * Mong muốn: Hiển thị đến trang giới thiệu
 */

function case19 () {
    test('Case 19: click link Giới thiệu', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link Giới thiệu
        await page.getByRole('link', { name: 'Giới thiệu' }).click();
        // Expect
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giới thiệu' })).toBeVisible();

    });
}

/**
 * Case 20: Click link Khóa học cuối trang
 * Mong muốn: Hiển thị đến trang khóa học
 */

function case20 () {
    test('Case 20: click link Khóa học', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link Khóa học
        await page.getByRole('link', { name: 'Khoá học' }).click();
        // Expect
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' })).toBeVisible();

    });
}

/**
 * Case 21: Click link Giải pháp cuối trang
 * Mong muốn: Hiển thị đến trang giải pháp 
 */

function case21 () {
    test('Case 21: click link Giải pháp', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link Giải pháp
        await page.getByRole('contentinfo').getByRole('link', { name: 'Giải pháp' }).click();
        // Expect
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giải pháp' })).toBeVisible();

    });
}

/**
 * Case 22: Click link Cổng thi cuối trang
 * Mong muốn: Hiển thị đến trang cổng thi 
 */

function case22 () {
    test('Case 22: click link Cổng thi', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link Cổng thi
        await page.getByRole('contentinfo').getByRole('link', { name: 'Cổng thi' }).click();
        // Expect
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Cổng thi' })).toBeVisible();

    });
}

/**
 * Case 23: Click link Dành cho đại lý cuối trang
 * Mong muốn: Hiển thị đến trang dành cho đại lý
 */

function case23 () {
    test('Case 23: click link Đại lý', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link Dành cho đại lý
        await page.getByRole('link', { name: 'Dành cho đại lý' }).click();
        // Expect
        await expect(page.getByRole('heading', { name: 'DÀNH CHO ĐẠI LÝ' })).toBeVisible();
        // Chụp ảnh màn hình Dành cho đại lý 
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'TC_Ảnh_đại_lý_case23.png', fullPage: true });

    });
}

/**
 * Case 24: Click link App Store cuối trang
 * Mong muốn: Hiển thị đến trang app IOS
 */

function case24 () {
    test('Case 24: click link App Store', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link App Store
        await page.getByRole('link', { name: 'App Store' }).click();
        // Expect
        await page.goto('https://apps.apple.com/vn/app/mobiedu-h%E1%BB%8Dc-vi%C3%AAn/id1506933069');
        await expect(page.locator('section').filter({ hasText: 'mobiEdu - Học viên 12+ MobiFone Designed for iPad Free' })).toBeVisible();
        // Chụp ảnh màn hình App Sote
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'TC_Ảnh_App_Store_case24.png', fullPage: true });

    });
}

/**
 * Case 25: Click link Google Play cuối trang
 * Mong muốn: Hiển thị đến trang app Android
 */

function case25 () {
    test('Case 25: click link Google Play', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link App Store
        await page.getByRole('link', { name: 'Google Play' }).click();
        // Expect
        await page.goto('https://play.google.com/store/apps/details?id=mobifone.edu&hl=vi&gl=US');
        await expect(page.getByText('mobiEdu - Học viênMobiFone (Viet Nam)100 N+Lượt tải xuốngTất cả mọi ngườiinfoCà')).toBeVisible();
        // Chụp ảnh màn hình Google Play 
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'TC_Ảnh_Google_Play_case25.png', fullPage: true });

    });
}

/**
 * Case 26: Click link Facebook cuối trang
 * Mong muốn: Hiển thị đến trang Facebook
 */

function case26 () {
    test('Case 26: click link Facebook', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link App Store
        await page.getByRole('link', { name: 'Facebook' }).click();
        // Expect
        await page.goto('https://www.facebook.com/mobiedu.vn');
        await expect(page).toHaveTitle(/mobiEdu.vn | Hanoi | Facebook/);
        // Chụp ảnh màn hình Facebook
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'TC_Ảnh_Facebook_case26.png', fullPage: true });

    });
}

/**
 * Case 27: Click link Youtube cuối trang
 * Mong muốn: Hiển thị đến trang Youtube
 */

function case27 () {
    test('Case 27: click link Youtube', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link App Store
        await page.getByRole('link', { name: 'Youtube' }).click();
        // Expect
        await page.goto('https://www.youtube.com/c/mobiEdu_vn');
        await expect(page.locator('ytd-channel-name').filter({ hasText: 'mobiEdu mobiEdu' })).toBeVisible();
        // Chụp ảnh màn hình Facebook
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'TC_Ảnh_Youtube_case27.png', fullPage: true });

    });
}

/**
 * Case 28: Click link Liên hệ cuối trang
 * Mong muốn: Hiển thị đến trang Liên hệ
 */

function case28 () {
    test('Case 28: click link Liên hệ', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link App Store
        await page.getByRole('link', { name: 'Liên hệ' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/lien-he");
        await expect(page.getByRole('heading', { name: 'LIÊN HỆ' })).toBeVisible();
        // Chụp ảnh màn hình Facebook
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_Liên_hệ_case28.png', fullPage: true });

    });
}

/**
 * Case 29: Click link Chính sách bảo mật cuối trang
 * Mong muốn: Hiển thị đến trang Chính sách bảo mật
 */

function case29 () {
    test('Case 29: click link Chính sách', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link App Store
        await page.getByRole('link', { name: 'CHÍNH SÁCH BẢO MẬT' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/chinh-sach-bao-mat.html");
        await expect(page.getByRole('heading', { name: 'CHÍNH SÁCH BẢO MẬT THÔNG TIN CÁ NHÂN KHÁCH HÀNG' })).toBeVisible();
        // Chụp ảnh màn hình Facebook
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_Chính_sách_case29.png', fullPage: true });

    });
}

/**
 * Case 30: Click link Điều khoản dịch vụ cuối trang
 * Mong muốn: Hiển thị đến trang Điều khoản dịch vụ
 */

function case30 () {
    test('Case 30: click link Điều khoản', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link App Store
        await page.getByRole('link', { name: 'ĐIỀU KHOẢN DỊCH VỤ' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dieu-khoan-dich-vu.html");
        await expect(page.locator('#landing_page').getByText('ĐIỀU KHOẢN DỊCH VỤ', { exact: true })).toBeVisible();
        // Chụp ảnh màn hình Facebook
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_Điều_khoản_case30.png', fullPage: true });

    });
}

/**
 * Case 31: Click link Giải quyết tranh chấp cuối trang
 * Mong muốn: Hiển thị đến trang Giải quyết tranh chấp
 */

function case31 () {
    test('Case 31: click link Giải quyết', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link App Store
        await page.getByRole('link', { name: 'GIẢI QUYẾT TRANH CHẤP' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/co-che-giai-quyet-tranh-chap.html");
        await expect(page.locator('p').filter({ hasText: 'CƠ CHẾ GIẢI QUYẾT TRANH CHẤP PHÁT SINH TRÊN SÀN GIAO DỊCH TMĐT MOBIEDU.VN' })).toBeVisible();
        // Chụp ảnh màn hình Facebook
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_Giải_quyết_case31.png', fullPage: true });

    });
}

/**
 * Case 32: Click link Quy chế hoạt động cuối trang
 * Mong muốn: Hiển thị đến trang Quy chế hoạt động
 */

function case32 () {
    test('Case 32: click link Quy chế', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link App Store
        await page.getByRole('link', { name: 'QUY CHẾ HOẠT ĐỘNG' }).click();
        await page.waitForTimeout(5000);
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/quy-che-hoat-dong.html");
        // Chụp ảnh màn hình Facebook
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_Quy_chế_case32.png', fullPage: true });

    });
}

/**
 * Case 33: Click link icon Tai phone cuối trang
 * Mong muốn: Hiển thị đến trang Hỗ trợ khách hàng
 */

function case33 () {
    test('Case 33: click link icon Tai phone', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click link App Store
        await page.getByRole('link', { name: 'headset' }).click();
        // Expect
        await expect(page).toHaveURL( dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await expect(page.getByRole('heading', { name: 'mobiEdu có thể giúp gì cho bạn?' })).toBeVisible();
        // Chụp ảnh màn hình Facebook
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'TC_Ảnh_Hỗ_trợ KH_case33.png', fullPage: true });

    });
}

/**
 * Case 34: Click btn Về mobiEdu đầu trang
 * Mong muốn: Hiển thị đến trang Giới thiệu
 */

function case34 () {
    test('Case 34: click btn Về mobiEdu', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Về mobiEdu
        await page.getByRole('link', { name: 'Về mobiEdu' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/gioi-thieu");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giới thiệu' })).toBeVisible();

    });
}

/**
 * Case 35: Click btn Hỗ trợ đầu trang
 * Mong muốn: Hiển thị đến trang Hỗ trợ khách hàng
 */

function case35 () {
    test('Case 35: click btn Hỗ trợ', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Hỗ trợ
        await page.getByRole('link', { name: 'Hỗ trợ' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Hỗ trợ' })).toBeVisible();

    });
}

/**
 * Case 36: Click icon Giỏ hàng đầu trang
 * Mong muốn: Hiển thị đến trang Giỏ hàng
 */

function case36 () {
    test('Case 36: click icon Giỏ hàng', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Về mobiEdu
        await page.getByRole('link', { name: 'shopping_cart 0' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/gio-hang");
        await expect(page.getByText('Giỏ hàng (0 sản phẩm) Hiện tại giỏ hàng của bạn chưa có sản phẩm nào. Vui lòng l')).toBeVisible();
        // Chụp hình màn hình Giỏ hàng 
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'TC_Ảnh_giỏ_hàng_case36.png', fullPage: true });


    });
}

function main(){
    case1();
    case2();
    case3();
    case4();
    case5();
    case6();
    case7();
    case8();
    case9();
    case10();
    case11();
    case12();
    case13();
    case14();
    case15();
    case16();
    case17();
    case18();
    case19();
    case20();
    case21();
    case22();
    case23();
    case24();
    case25();
    case26();
    case27();
    case28();
    case29();
    case30();
    case31();
    case32();
    case33();
    case34();
    case35();
    case36();
}
main();