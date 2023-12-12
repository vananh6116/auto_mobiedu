// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Thêm mới lĩnh vực 
 * Mong muốn: CMS - Hiển thị trong danh sách -> Web - Hiển thị trang Cổng thi
 */

function case1 () {
    test('Case 1: Pass - Thêm Lĩnh vực ', async ({ page }) => {
    
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
    // Click btn Thêm lĩnh vực mới 
    await page.getByRole('button', { name: 'Thêm lĩnh vực mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm lĩnh vực mới' })).toBeVisible();
    // Nhập tên lĩnh vực
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV_Tôn giáo_Case1');
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái : Hoạt động
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    // Click Btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_LV_Tôn giáo_Case1' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi 
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV_Tôn giáo_Case1')).toBeVisible();
    // Truy cập CMS xóa Lĩnh vực mới thêm 
    await page.goto('https://mskill8admin.mobiedu.vn/course-field');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV_Tôn giáo_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa 
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV_Tôn giáo_Case1')).not.toBeVisible();

});
}

/**
 * Case 2: Không thành công : Để trống tất cả trường dữ liệu bắt buộc
 * Mong muốn: Thêm mới không thành công 
 */

function case2 () {
    test('Case 2: Fail - Để trống trường ', async ({ page }) => {
    
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
    // Click btn Thêm lĩnh vực mới 
    await page.getByRole('button', { name: 'Thêm lĩnh vực mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm lĩnh vực mới' })).toBeVisible();
    // Để trống trường Tiêu đề
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('');
    // Clear -> Để trống trường vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).clear();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng nhập tiêu đề!')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập số thứ tự!')).toBeVisible();

});
}

/**
 * Case 3: Không thành công : Click btn Đóng
 * Mong muốn: Thêm mới không thành công -> Không hiển thị lĩnh vực trên danh sách
 */

function case3 () {
    test('Case 3: Fail - click btn Đóng ', async ({ page }) => {
    
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
    // Click btn Thêm lĩnh vực mới 
    await page.getByRole('button', { name: 'Thêm lĩnh vực mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm lĩnh vực mới' })).toBeVisible();
    // Nhập tên lĩnh vực
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Fail_Tôn giáo_Case3');
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái : Hoạt động
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    // Click Btn Lưu 
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('cell', { name: 'QA_LV Fail_Tôn giáo_Case3' })).not.toBeVisible();

});
}

/**
 * Case 4: Không thành công : Nhập trùng tiêu đề
 * Mong muốn: Thêm mới không thành công -> Hiển thị thông báo lỗi
 */

function case4 () {
    test('Case 4: Fail - Trùng tiêu đề ', async ({ page }) => {
    
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
    // Thêm lĩnh vực 1
    await page.getByRole('button', { name: 'Thêm lĩnh vực mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm lĩnh vực mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV_Tôn giáo_Case4');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_LV_Tôn giáo_Case4' })).toBeVisible();
    // Thêm lĩnh vực 2 trùng thông tin lĩnh vực 1
    await page.getByRole('button', { name: 'Thêm lĩnh vực mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm lĩnh vực mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV_Tôn giáo_Case4');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Tên lĩnh vực đã tồn tại!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi 
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV_Tôn giáo_Case4')).toBeVisible();
    // Truy cập CMS xóa Lĩnh vực mới thêm 
    await page.goto('https://mskill8admin.mobiedu.vn/course-field');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV_Tôn giáo_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa 
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.locator('#desktop-field').getByText('QA_LV_Tôn giáo_Case4')).not.toBeVisible();

});
}

function main(){
    case1();
    case2();
    case3();
    case4();

}
main();