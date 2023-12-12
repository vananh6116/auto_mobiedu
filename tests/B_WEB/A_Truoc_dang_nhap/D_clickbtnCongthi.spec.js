// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Click danh mục tất cả - trẻ em - học sinh phổ thông - sinh viên và người đi làm trang cổng thi
 * Mong muốn: Hiển thị đúng trang cổng thi của các danh mục 
 */

function case1 () {
    test('Case 1: click logo trường mầm non, tiểu học - mobiEdu SLL', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto('https://mskill8.mobiedu.vn/');
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Cổng thi 
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/cong-thi');
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Cổng thi' })).toBeVisible();
        // Click danh mục trẻ em 
        await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/cong-thi?category=tre-em')
        await page.waitForTimeout(2000);
        await page.screenshot({path:'CT_Ảnh_Trẻ_em_case1.png',fullPage:true});
        // Click danh mục học sinh phổ thông 
        await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/cong-thi?category=hoc-sinh-pho-thong');
        await page.waitForTimeout(2000);
        await page.screenshot({path:'CT_Ảnh_học_sinh_case1.png',fullPage:true});
        // Click danh mục sinh viên và người đi làm 
        await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/cong-thi?category=sinh-vien-nguoi-di-lam');
        await page.waitForTimeout(2000);
        await page.screenshot({path:'CT_Ảnh_sinh_viên_case1.png',fullPage:true});
        // Click danh mục tất cả
        await page.getByRole('main').getByRole('link', { name: 'Tất cả' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/cong-thi');
        await page.waitForTimeout(2000);
        await page.screenshot({path:'CT_Ảnh_tất_cả_case1.png',fullPage:true});

});
}

/**
 * Case 2: Click ô checkbox lĩnh vực 
 * Mong muốn: Hiển thị checkbox điều hướng đúng link 
 */

function case2 () {
    test('Case 2: click checkbox lĩnh vực', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto('https://mskill8.mobiedu.vn/');
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Cổng thi 
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/cong-thi');
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Cổng thi' })).toBeVisible();
        // Click ô checkbox
        await page.locator('#desktop-field').getByText('Văn hóa').click();
        await page.locator('#desktop-field').getByText('Tiếng Anh').click();
        await page.locator('#desktop-field').getByText('Khoa học').click();
        await page.locator('#desktop-field').getByText('Kĩ năng').click();
        await page.locator('#desktop-field').getByText('Tổng hợp').click();
        // Expect 
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/cong-thi?subjects=1,2,3,4,5');
        await expect(page.locator('#desktop-field').getByText('Văn hóa')).toBeChecked();
        await expect(page.locator('#desktop-field').getByText('Tiếng Anh')).toBeChecked();
        await expect(page.locator('#desktop-field').getByText('Khoa học')).toBeChecked();
        await expect(page.locator('#desktop-field').getByText('Kĩ năng')).toBeChecked();
        await expect(page.locator('#desktop-field').getByText('Tổng hợp')).toBeChecked();
        
});
}

/**
 * Case 3: Click link banner chạy đầu trang
 * Mong muốn: Hiển thị đúng đến link 
 */

function case3 () {
    test('Case 3: click link banner đầu trang', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto('https://mskill8.mobiedu.vn/');
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Cổng thi 
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/cong-thi');
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Cổng thi' })).toBeVisible();
        // Click link banner cổng wiki
        await page.waitForTimeout(2000);
        await page.locator('div.swiper-slide.swiper-slide-active > div > div > div > a > img').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/dang-nhap');
        // Click link banner chọn trường ôn luyện thi thử
        await page.goto('https://mskill8.mobiedu.vn/cong-thi');
        await page.waitForTimeout(7000);
        await page.locator('div.swiper-slide.swiper-slide-active > div > div > div > a > img').click();
        await page.goto('https://docs.google.com/forms/d/1m1PIpa2OCpO11tmKP7aS90muWg1CMwigGzsd3nR_YD4/closedform');
        await expect(page).toHaveURL('https://docs.google.com/forms/d/1m1PIpa2OCpO11tmKP7aS90muWg1CMwigGzsd3nR_YD4/closedform');
        await expect(page.getByRole('heading', { name: 'PHIẾU ĐĂNG KÝ THAM DỰ CHƯƠNG TRÌNH: "ĐẠI HỌC ƠI - THẲNG TIẾN"' })).toBeVisible();
        // Click link banner CHAT GPT
        await page.goto('https://mskill8.mobiedu.vn/cong-thi');
        await page.waitForTimeout(13000);
        await page.locator('div.swiper-slide.swiper-slide-active > div > div > div > a > img').click();
        await expect(page).toHaveURL('https://mobiedu.vn/tin-tuc/tich-hop-chatgpt-nang-tam-hoc-tap-tren-mobiedu-p2063.html');

});
}

function main(){
    case1();
    case2();
    case3();

}
main();