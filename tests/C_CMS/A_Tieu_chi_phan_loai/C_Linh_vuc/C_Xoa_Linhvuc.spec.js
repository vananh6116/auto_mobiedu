// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Xóa lĩnh vực
 * Mong muốn: Sau khi xóa lĩnh vực không hiển thị trong danh sách
 */

function case1 () {
    test('Case 1: Pass - Click btn Xóa ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Lĩnh vực
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Lĩnh vực' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-field');
    await expect(page.getByRole('heading', { name: 'Danh sách lĩnh vực' })).toBeVisible();
    // Thêm mới lĩnh vực
    await page.getByRole('button', { name: 'Thêm lĩnh vực mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm lĩnh vực mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Xóa Pass_Tôn giáo_Case1');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_LV Xóa Pass_Tôn giáo_Case1' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau thêm 
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV Xóa Pass_Tôn giáo_Case1')).toBeVisible();
    // Truy cập Web xóa lĩnh vực thành công
    await page.goto('https://mskill8admin.mobiedu.vn/course-field');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Xóa Pass_Tôn giáo_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_LV Xóa Pass_Tôn giáo_Case1' })).not.toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau thêm 
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV Xóa Pass_Tôn giáo_Case1')).not.toBeVisible();

});
}

/**
 * Case 2: Không thành công do click btn Đóng 
 * Mong muốn: Sau khi click btn Đóng lĩnh vực hiển thị trong danh sách
 */

function case2 () {
    test('Case 2: Pass - Click btn Đóng ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Lĩnh vực
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Lĩnh vực' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-field');
    await expect(page.getByRole('heading', { name: 'Danh sách lĩnh vực' })).toBeVisible();
    // Thêm mới lĩnh vực
    await page.getByRole('button', { name: 'Thêm lĩnh vực mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm lĩnh vực mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Xóa Fail_Tôn giáo_Case2');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_LV Xóa Fail_Tôn giáo_Case2' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau thêm 
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV Xóa Fail_Tôn giáo_Case2')).toBeVisible();
    // Truy cập Web xóa lĩnh vực click btn Đóng
    await page.goto('https://mskill8admin.mobiedu.vn/course-field');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Xóa Fail_Tôn giáo_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('cell', { name: 'QA_LV Xóa Fail_Tôn giáo_Case2' })).toBeVisible();
    // Truy cập CMS xóa lĩnh vực mới thêm 
    await page.goto('https://mskill8admin.mobiedu.vn/course-field');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Xóa Fail_Tôn giáo_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau xóa 
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV Xóa Fail_Tôn giáo_Case2')).not.toBeVisible();

});
}

function main(){
    case1();
    case2();

}
main();

