// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../dataSite.json';

/**
 * Case 1: Thành công 
 * Mong muốn: Đăng nhập thành công 
 */

function case1 () {
    test('Case 1: Pass_Đăng nhập thành công ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        // Nhập số điện thoại - mật khẩu 
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
        await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
        // Click btn Đăng nhập thành công vào hệ thống
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.locator('div.account > div > div > a')).toBeVisible();

});
}

/**
 * Case 2: Không thành công _ để trống trường 
 * Mong muốn: Đăng nhập không thành công 
 */

function case2 () {
    test('Case 2: Fail_Để trống trường ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        // Nhập số điện thoại - mật khẩu 
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nhập số điện thoại').fill('');
        await page.getByPlaceholder('Nhập mật khẩu').fill('');
        // Click btn Đăng nhập thành công vào hệ thống
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.getByText('Bạn chưa nhập tài khoản hoặc số điện thoại!')).toBeVisible();
        await expect(page.getByText('Bạn chưa nhập password!')).toBeVisible();
        
});
}

/**
 * Case 3: Không thành công _ tên đăng nhập không đúng
 * Mong muốn: Đăng nhập không thành công 
 */

function case3 () {
    test('Case 3: Fail_Tên đăng nhập ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        // Nhập số điện thoại - mật khẩu 
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519998');
        await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
        // Click btn Đăng nhập thành công vào hệ thống
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.getByText('Tài khoản hoặc số điện thoại không tồn tại.').nth(0)).toBeVisible();
        await expect(page.getByText('Tài khoản hoặc số điện thoại không tồn tại.').nth(1)).toBeVisible();
        
});
}

/**
 * Case 4: Không thành công _ mật khẩu không đúng 
 * Mong muốn: Đăng nhập không thành công 
 */

function case4 () {
    test('Case 4: Fail_Mật khẩu ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        // Nhập số điện thoại - mật khẩu 
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
        await page.getByPlaceholder('Nhập mật khẩu').fill('12312323');
        // Click btn Đăng nhập thành công vào hệ thống
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.getByText('Vui lòng kiểm tra lại mật khẩu.')).toBeVisible();
        
});
}


function main (){
    case1();
    case2();
    case3();
    case4();

}
main();
