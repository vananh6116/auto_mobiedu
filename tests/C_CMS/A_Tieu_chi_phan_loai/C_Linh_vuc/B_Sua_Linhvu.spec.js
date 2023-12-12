// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Sửa lĩnh vực
 * Mong muốn: Sau khi sửa hệ thống CMS - Web hiển thị đúng với thông tin sau sửa 
 */

function case1 () {
    test('Case 1: Pass - Sửa Tiêu đề ', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Thêm_Tôn giáo_Case1');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_LV Thêm_Tôn giáo_Case1' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau thêm 
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case1')).toBeVisible();
    // Sửa lĩnh vực 
    await page.goto('https://mskill8admin.mobiedu.vn/course-field');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Thêm_Tôn giáo_Case1' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên lĩnh vực 
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Sửa_Tôn giáo_Case1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau sửa 
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV Sửa_Tôn giáo_Case1')).toBeVisible();
    // Truy cập CMS xóa lĩnh vực mới thêm 
    await page.goto('https://mskill8admin.mobiedu.vn/course-field');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Sửa_Tôn giáo_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau xóa
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV Sửa_Tôn giáo_Case1')).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Sửa trạng thái Ẩn
 * Mong muốn: Sau khi trạng thái Ẩn -> Web không hiển thị
 */

function case2 () {
    test('Case 2: Pass - Sửa Trạng thái ', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Thêm_Tôn giáo_Case2');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_LV Thêm_Tôn giáo_Case2' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau thêm 
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case2')).toBeVisible();
    // Sửa lĩnh vực 
    await page.goto('https://mskill8admin.mobiedu.vn/course-field');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Thêm_Tôn giáo_Case2' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa trạng thái Ẩn
    await page.locator('select#edit_field_status').click();
    await page.locator('select#edit_field_status').selectOption('0');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau sửa 
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case2')).not.toBeVisible();
    // Truy cập CMS xóa lĩnh vực mới thêm 
    await page.goto('https://mskill8admin.mobiedu.vn/course-field');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Thêm_Tôn giáo_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 3: Không thành công : Click btn Đóng
 * Mong muốn: Hiển thị thông tin như ban đầu 
 */

function case3 () {
    test('Case 3: Fail - Click Btn Đóng ', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Thêm_Tôn giáo_Case3');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_LV Thêm_Tôn giáo_Case3' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau thêm 
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case3')).toBeVisible();
    // Sửa lĩnh vực 
    await page.goto('https://mskill8admin.mobiedu.vn/course-field');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Thêm_Tôn giáo_Case3' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên lĩnh vực 
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Sửa_Tôn giáo_Case3');
    // Click btn Đóng 
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('cell', { name: 'QA_LV Thêm_Tôn giáo_Case3' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi  
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case3')).toBeVisible();
    // Truy cập CMS xóa lĩnh vực mới thêm 
    await page.goto('https://mskill8admin.mobiedu.vn/course-field');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Thêm_Tôn giáo_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau xóa
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case3')).not.toBeVisible();

});
}



function main(){
    case1();
    case2();
    case3();

}
main();