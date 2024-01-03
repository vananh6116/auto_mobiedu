// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../dataSite.json';

/**
 * Case 1: Thành công: Đăng ký thành công 
 */

function case1 () {
    test('Case 1: Pass_Đăng ký', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng ký 
        await page.getByRole('link', { name: 'Đăng kí' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-ky");
        // Nhập số điện thoại 
        await page.getByPlaceholder('Nhập số điện thoại').click();
        await page.getByPlaceholder('Nhập số điện thoại').fill('090345614');
        // Nhập mật khẩu
        await page.getByPlaceholder('Nhập mật khẩu').click();
        await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
        // Nhập lại mật khẩu 
        await page.getByPlaceholder('Nhập lại mật khẩu').click();
        await page.getByPlaceholder('Nhập lại mật khẩu').fill('123123');
        // Click btn Đăng ký 
        await page.getByRole('button', { name: 'ĐĂNG KÝ' }).click();
        await expect(page.getByText('Nhập mã OTP được gửi vào điện thoại để xác minh')).toBeVisible();

    });
}

/**
 * Case 2: Không thành công - Để trống trường thông tin 
 * Mong muốn: hệ thống thông báo lỗi 
 */

function case2 () {
    test('Case 2: Fail_Để trống trường', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng ký 
        await page.getByRole('link', { name: 'Đăng kí' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-ky");
        // Nhập số điện thoại 
        await page.waitForTimeout(1000);
        await page.getByPlaceholder('Nhập số điện thoại').click();
        await page.getByPlaceholder('Nhập số điện thoại').fill('');
        // Nhập mật khẩu
        await page.waitForTimeout(1000);
        await page.getByPlaceholder('Nhập mật khẩu').click();
        await page.getByPlaceholder('Nhập mật khẩu').fill('');
        // Nhập lại mật khẩu 
        await page.waitForTimeout(1000);
        await page.getByPlaceholder('Nhập lại mật khẩu').click();
        await page.getByPlaceholder('Nhập lại mật khẩu').fill('');
        // Click btn Đăng ký 
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'ĐĂNG KÝ' }).click();
        await expect(page.getByText('Vui lòng điền số điện thoại!')).toBeVisible();
        await expect(page.getByText('Trường thông tin này là bắt buộc!').nth(0)).toBeVisible();
        await expect(page.getByText('Trường thông tin này là bắt buộc!').nth(1)).toBeVisible();

    });
}

/**
 * Case 3: Không thành công - nhập sai số điện thoại
 * Mong muốn: hệ thống thông báo lỗi 
 */

function case3 () {
    test('Case 3: Fail_Sdt ko hợp lệ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng ký 
        await page.getByRole('link', { name: 'Đăng kí' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-ky");
        // Nhập số điện thoại 
        await page.waitForTimeout(1000);
        await page.getByPlaceholder('Nhập số điện thoại').click();
        await page.getByPlaceholder('Nhập số điện thoại').fill('090654781452');
        // Nhập mật khẩu
        await page.waitForTimeout(1000);
        await page.getByPlaceholder('Nhập mật khẩu').click();
        await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
        // Nhập lại mật khẩu 
        await page.waitForTimeout(1000);
        await page.getByPlaceholder('Nhập lại mật khẩu').click();
        await page.getByPlaceholder('Nhập lại mật khẩu').fill('123123');
        // Click btn Đăng ký 
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'ĐĂNG KÝ' }).click();
        await expect(page.getByText('Vui lòng kiểm tra lại số điện thoại.')).toBeVisible();

    });
}


/**
 * Case 4: Không thành công - sdt trùng trên hệ thống
 * Mong muốn: hệ thống thông báo lỗi 
 */

function case4 () {
    test('Case 4: Fail_Sdt đã tồn tại', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng ký 
        await page.getByRole('link', { name: 'Đăng kí' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-ky");
        // Nhập số điện thoại 
        await page.waitForTimeout(1000);
        await page.getByPlaceholder('Nhập số điện thoại').click();
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
        // Nhập mật khẩu
        await page.waitForTimeout(1000);
        await page.getByPlaceholder('Nhập mật khẩu').click();
        await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
        // Nhập lại mật khẩu 
        await page.waitForTimeout(1000);
        await page.getByPlaceholder('Nhập lại mật khẩu').click();
        await page.getByPlaceholder('Nhập lại mật khẩu').fill('123123');
        // Click btn Đăng ký 
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'ĐĂNG KÝ' }).click();
        await expect(page.getByText('Số điện thoại đã được sử dụng. Vui lòng đăng chuyển sang đang nhập!')).toBeVisible();

    });
}

/**
 * Case 5: Không thành công - mật khẩu không trùng khớp
 * Mong muốn: hệ thống thông báo lỗi 
 */

function case5 () {
    test('Case 5: Fail_MK ko trùng', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng ký 
        await page.getByRole('link', { name: 'Đăng kí' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-ky");
        // Nhập số điện thoại 
        await page.waitForTimeout(1000);
        await page.getByPlaceholder('Nhập số điện thoại').click();
        await page.getByPlaceholder('Nhập số điện thoại').fill('0945874157');
        // Nhập mật khẩu
        await page.waitForTimeout(1000);
        await page.getByPlaceholder('Nhập mật khẩu').click();
        await page.getByPlaceholder('Nhập mật khẩu').fill('123456');
        // Nhập lại mật khẩu 
        await page.waitForTimeout(1000);
        await page.getByPlaceholder('Nhập lại mật khẩu').click();
        await page.getByPlaceholder('Nhập lại mật khẩu').fill('123123');
        // Click btn Đăng ký 
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'ĐĂNG KÝ' }).click();
        await expect(page.getByText('Mật khẩu không trùng khớp.')).toBeVisible();

    });
}


function main(){
    // case1();
    case2();
    case3();
    case4();
    case5();

}
main();
