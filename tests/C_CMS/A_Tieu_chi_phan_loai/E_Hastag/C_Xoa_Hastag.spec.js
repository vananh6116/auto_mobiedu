// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Xóa Hastag
 * Mong muốn: Không hiển thị danh sách CMS -> Không hiển thị Trang chủ 
 */

function case1 () {
    test('Case 1: Pass - Click btn Xóa', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Hastag
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Hashtag' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/tags');
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    // Thêm mới Hastag - Hiển thị chân trang 
    await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Hashtag *' }).click();
    await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Pass Xóa_Hastag _Khóa học_Case1');
    await page.getByRole('textbox', { name: 'Link liên kết' }).click();
    await page.getByRole('textbox', { name: 'Link liên kết' }).fill('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị Trang chủ sau thêm -> Click link liên kết
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_Hastag _Khóa học_Case1' }).nth(0)).toBeVisible();
    await page.getByRole('link', { name: 'QA_Pass Xóa_Hastag _Khóa học_Case1' }).nth(0).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc');
    // Truy cập Web kiểm tra không hiển thị trang 404
    await page.goto('https://mskill8.mobiedu.vn/1234567');
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_Hastag _Khóa học_Case1' }).nth(1)).not.toBeVisible();
    // Xóa Hastag thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/tags');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Xóa_Hastag _Khóa học_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra không hiển thị trang Trang chủ
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_Hastag _Khóa học_Case1' }).nth(0)).not.toBeVisible();
    // Truy cập Web kiểm tra không hiển thị trang 404
    await page.goto('https://mskill8.mobiedu.vn/1234567');
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_Hastag _Khóa học_Case1' }).nth(1)).not.toBeVisible();

});
}

/**
 * Case 2: Không thành công : click btn Đóng
 * Mong muốn: Hiển thị danh sách CMS -> Hiển thị trang Trang chủ
 */

function case2 () {
    test('Case 2: Fail - Click btn Đóng', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Hastag
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Hashtag' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/tags');
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    // Thêm mới Hastag - Hiển thị chân trang 
    await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Hashtag *' }).click();
    await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Fail Xóa_Hastag _Khóa học_Case2');
    await page.getByRole('textbox', { name: 'Link liên kết' }).click();
    await page.getByRole('textbox', { name: 'Link liên kết' }).fill('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Xóa_Hastag _Khóa học_Case2' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị Trang chủ sau thêm -> Click link liên kết
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa_Hastag _Khóa học_Case2' }).nth(0)).toBeVisible();
    await page.getByRole('link', { name: 'QA_Fail Xóa_Hastag _Khóa học_Case2' }).nth(0).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc');
    // Truy cập Web kiểm tra không hiển thị trang 404
    await page.goto('https://mskill8.mobiedu.vn/1234567');
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_Hastag _Khóa học_Case1' }).nth(1)).not.toBeVisible();
    // Xóa Hastag không thành công do click btn Đóng
    await page.goto('https://mskill8admin.mobiedu.vn/tags');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Xóa_Hastag _Khóa học_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('cell', { name: 'QA_Fail Xóa_Hastag _Khóa học_Case2' })).toBeVisible();
    // Xóa Hastag vừa thêm 
    await page.goto('https://mskill8admin.mobiedu.vn/tags');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Xóa_Hastag _Khóa học_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị Trang chủ sau xóa
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa_Hastag _Khóa học_Case2' })).not.toBeVisible();

});
}

function main(){
    case1();
    case2();

}
main();

