// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
const { openAsBlob } = require('fs');

/**
 * Case 1: Thành công: Quên mật khẩu thành công 
 */

function case1 () {
    test('Case 1: Pass_Quên mật khẩu', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto('https://mskill8.mobiedu.vn/');
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/dang-nhap?redirect=/');
        // Click link Quên mật khẩu 
        await page.getByRole('link', { name: 'Quên mật khẩu' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/kiem-tra-sdt');
        // Nhập số điện thoại 
        await page.getByPlaceholder('Nhập số điện thoại').click();
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
        // Click btn Gửi yêu cầu 
        await page.getByRole('button', { name: 'GỬI YÊU CẦU' }).click();
        await expect(page.getByText('Nhập mã OTP được gửi vào điện thoại để xác minh')).toBeVisible();
        
    });
}

/**
 * Case 2: Không thành công: Nhập sai số điện thoại 
 * Mong muốn hệ thống thông báo lỗi
 */

function case2 () {
    test('Case 2: Fail_Sdt ko đúng', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto('https://mskill8.mobiedu.vn/');
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/dang-nhap?redirect=/');
        // Click link Quên mật khẩu 
        await page.getByRole('link', { name: 'Quên mật khẩu' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/kiem-tra-sdt');
        // Nhập số điện thoại 
        await page.getByPlaceholder('Nhập số điện thoại').click();
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519999');
        // Click btn Gửi yêu cầu 
        await page.getByRole('button', { name: 'GỬI YÊU CẦU' }).click();
        await expect(page.getByText('Số điện thoại chưa được đăng kí với hệ thống.')).toBeVisible();
        
    });
}

/**
 * Case 3: Không thành công: Nhập sai số điện thoại 
 * Mong muốn hệ thống thông báo lỗi
 */

function case3 () {
    test('Case 3: Fail_Sdt ko đúng', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto('https://mskill8.mobiedu.vn/');
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/dang-nhap?redirect=/');
        // Click link Quên mật khẩu 
        await page.getByRole('link', { name: 'Quên mật khẩu' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/kiem-tra-sdt');
        // Nhập số điện thoại 
        await page.getByPlaceholder('Nhập số điện thoại').click();
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519999');
        // Click btn Gửi yêu cầu 
        await page.getByRole('button', { name: 'GỬI YÊU CẦU' }).click();
        await expect(page.getByText('Số điện thoại chưa được đăng kí với hệ thống.')).toBeVisible();
        
    });
}

/**
 * Case 4: Không thành công: Nhập sai mã OTP
 * Mong muốn hệ thống thông báo lỗi
 */

function case4 () {
    test('Case 4: Fail_OTP không đúng', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto('https://mskill8.mobiedu.vn/');
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/dang-nhap?redirect=/');
        // Click link Quên mật khẩu 
        await page.getByRole('link', { name: 'Quên mật khẩu' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/kiem-tra-sdt');
        // Nhập số điện thoại 
        await page.getByPlaceholder('Nhập số điện thoại').click();
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
        // Click btn Gửi yêu cầu 
        await page.getByRole('button', { name: 'GỬI YÊU CẦU' }).click();
        // Nhập mã OTP không đúng
        await page.locator('#digit-1').fill('1');
        await page.locator('#digit-2').fill('2');
        await page.locator('#digit-3').fill('3');
        await page.locator('#digit-4').fill('4');
        await page.locator('#digit-5').fill('5');
        await page.locator('#digit-6').fill('6');
        // Click btn Xác nhận 
        await page.getByRole('button', { name: 'Xác nhận' }).click();
        await expect(page.getByText('Mã OTP không chính xác hoặc hết thời gian sử dụng, vui lòng nhập lại.')).toBeVisible();
        
    });
}

/**
 * Case 4: Không thành công: Nhập sai OTP gửi yêu cầu lại không thành công trong 3 phút
 * Mong muốn hệ thống thông báo lỗi
 */


function case5 () {
    test('Case 5: Fail_ko sử dụng được tính năng', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto('https://mskill8.mobiedu.vn/');
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/dang-nhap?redirect=/');
        // Click link Quên mật khẩu 
        await page.getByRole('link', { name: 'Quên mật khẩu' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/kiem-tra-sdt');
        // Nhập số điện thoại 
        await page.getByPlaceholder('Nhập số điện thoại').click();
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
        // Click btn Gửi yêu cầu 
        await page.getByRole('button', { name: 'GỬI YÊU CẦU' }).click();
        await expect(page.locator('form#frmForgotPassword div.form-group.form-text > div',{hasText: 'Bạn chỉ có thể sử dụng tính năng này sau'})).toBeVisible();
        // Chụp ảnh màn hình 
        await page.waitForTimeout(2000);
        await page.screenshot({path:'Ảnh_quên_mật_khẩu.png',fullPage:true});
        
    });
}

/**
 * Case 6: Không thành công: Trống mã OTP
 * Mong muốn hệ thống thông báo lỗi
 */

function case6 () {
    test('Case 6: Fail_OTP trống', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto('https://mskill8.mobiedu.vn/');
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/dang-nhap?redirect=/');
        // Click link Quên mật khẩu 
        await page.getByRole('link', { name: 'Quên mật khẩu' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/kiem-tra-sdt');
        // Nhập số điện thoại 
        await page.getByPlaceholder('Nhập số điện thoại').click();
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
        // Click btn Gửi yêu cầu 
        await page.getByRole('button', { name: 'GỬI YÊU CẦU' }).click();
        // Nhập mã OTP không đúng
        await page.locator('#digit-1').fill('');
        await page.locator('#digit-2').fill('');
        await page.locator('#digit-3').fill('');
        await page.locator('#digit-4').fill('');
        await page.locator('#digit-5').fill('');
        await page.locator('#digit-6').fill('');
        // Click btn Xác nhận 
        await page.getByRole('button', { name: 'Xác nhận' }).click();
        await expect(page.getByText('Mã OTP không chính xác hoặc hết thời gian sử dụng, vui lòng nhập lại.')).toBeVisible();
        
    });
}

function main(){
    case1();
    // case2();
    case3();
    case4();
    // case5();
    // case6();

}
main();