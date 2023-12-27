// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Thêm chuyên mục - trạng thái Hoạt động
 */

function case1 () {
    test('Case 1: Pass - Chuyên mục ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - tin tức - chuyên mục
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Tin tức' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/blog-category');
    await expect(page.getByRole('heading', { name: 'Danh sách chuyên mục' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_CM_Tin Giải trí_Case1');
    // Nhập vị trí hiển thị
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn hình ảnh
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('1');
    // click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click(); 
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau thêm 
    await page.goto('https://mskill8.mobiedu.vn/tin-tuc');
    await expect(page.getByRole('link', { name: 'QA_CM_Tin Giải trí_Case1 chevron_right' }).first()).toBeVisible();
    // Truy cập CMS xóa chuyên mục 
    await page.goto('https://mskill8admin.mobiedu.vn/blog-category');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CM_Tin Giải trí_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau xóa 
    await page.goto('https://mskill8.mobiedu.vn/tin-tuc');
    await expect(page.getByRole('link', { name: 'QA_CM_Tin Giải trí_Case1 chevron_right' }).first()).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Thêm chuyên mục - trạng thái ẩn
 */

function case2 () {
    test('Case 2: Pass - Ẩn ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - tin tức - chuyên mục
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Tin tức' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/blog-category');
    await expect(page.getByRole('heading', { name: 'Danh sách chuyên mục' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_CM Ẩn_Tin Giải trí_Case2')
    // Nhập vị trí hiển thị
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn hình ảnh
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('0');
    // click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click(); 
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau thêm 
    await page.goto('https://mskill8.mobiedu.vn/tin-tuc');
    await expect(page.getByRole('link', { name: 'QA_CM Ẩn_Tin Giải trí_Case2 chevron_right' }).first()).not.toBeVisible();
    // Truy cập CMS xóa chuyên mục 
    await page.goto('https://mskill8admin.mobiedu.vn/blog-category');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CM Ẩn_Tin Giải trí_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    

});
}

/**
 * Case 3: Không thành công - để trống trường 
 */

function case3 () {
    test('Case 3: Fail_để trống Trường ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - tin tức - chuyên mục
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Tin tức' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/blog-category');
    await expect(page.getByRole('heading', { name: 'Danh sách chuyên mục' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('')
    // Nhập vị trí hiển thị
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('');
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('1');
    // click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click(); 
    await expect(page.getByText("Vui lòng nhập tiêu đề!")).toBeVisible();
    await expect(page.getByText("Vui lòng nhập vị trí hiển thị!")).toBeVisible();

});
}

/**
 * Case 4: Không thành công - click btn Đóng
 */

function case4 () {
    test('Case 4: Fail_click btn Đóng ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - tin tức - chuyên mục
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Tin tức' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/blog-category');
    await expect(page.getByRole('heading', { name: 'Danh sách chuyên mục' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_CM Fail_Tin Giải trí_Case4')
    // Nhập vị trí hiển thị
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn hình ảnh
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('1');
    // click btn Lưu 
    await page.getByRole('button', { name: 'Đóng' }).click(); 
    await expect(page.getByText("Thêm thành công!")).not.toBeVisible();

});
}

function main(){
      case1();
      case2();
      case3();
      case4();

}
main();