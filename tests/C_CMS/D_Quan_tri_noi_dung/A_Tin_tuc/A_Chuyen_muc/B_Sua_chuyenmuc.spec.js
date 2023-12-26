// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : sửa tiêu đề  
 */

function case1 () {
    test('Case 1: Pass - Sửa Chuyên mục ', async ({ page }) => {
    
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
    // Thêm chuyên mục
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Thêm CM_Tin Giải trí_Case1')
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('select#status').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click(); 
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau thêm 
    await page.goto('https://mskill8.mobiedu.vn/tin-tuc');
    await expect(page.getByRole('link', { name: 'QA_Thêm CM_Tin Giải trí_Case1 chevron_right' }).first()).toBeVisible();
    // Truy cập CMS sửa chuyên mục 
    await page.goto('https://mskill8admin.mobiedu.vn/blog-category');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm CM_Tin Giải trí_Case1' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Sửa CM_Tin Giải trí_Case1');
    // click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click(); 
    await expect(page.getByText("Cập nhật thành công!")).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau sửa
    await page.goto('https://mskill8.mobiedu.vn/tin-tuc');
    await expect(page.getByRole('link', { name: 'QA_Sửa CM_Tin Giải trí_Case1 chevron_right' }).first()).toBeVisible();
    // Truy cập CMS xóa chuyên mục 
    await page.goto('https://mskill8admin.mobiedu.vn/blog-category');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa CM_Tin Giải trí_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau xóa
    await page.goto('https://mskill8.mobiedu.vn/tin-tuc');
    await expect(page.getByRole('link', { name: 'QA_Sửa CM_Tin Giải trí_Case1 chevron_right' }).first()).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : sửa trạng thái Hoạt động sang Ẩn
 */

function case2 () {
    test('Case 2: Pass - Hoạt động sang Ẩn ', async ({ page }) => {
    
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
    // Thêm chuyên mục
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Thêm CM_Tin Giải trí_Case2')
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('select#status').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click(); 
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau thêm 
    await page.goto('https://mskill8.mobiedu.vn/tin-tuc');
    await expect(page.getByRole('link', { name: 'QA_Thêm CM_Tin Giải trí_Case2 chevron_right' }).first()).toBeVisible();
    // Truy cập CMS sửa chuyên mục 
    await page.goto('https://mskill8admin.mobiedu.vn/blog-category');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm CM_Tin Giải trí_Case2' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Sửa Hoạt động sang Ẩn_Tin Giải trí_Case2');
    // Sửa trạng thái Hoạt động sang Ẩn
    await page.locator('select#edit_status').selectOption('0');
    // click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click(); 
    await expect(page.getByText("Cập nhật thành công!")).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau sửa
    await page.goto('https://mskill8.mobiedu.vn/tin-tuc');
    await expect(page.getByRole('link', { name: 'QA_Sửa Hoạt động sang Ẩn_Tin Giải trí_Case2 chevron_right' }).first()).not.toBeVisible();
    // Truy cập CMS xóa chuyên mục 
    await page.goto('https://mskill8admin.mobiedu.vn/blog-category');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa Hoạt động sang Ẩn_Tin Giải trí_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 3: Thành công : sửa trạng thái Ẩn sang Hoạt động
 */

function case3 () {
    test('Case 3: Pass - Ẩn sang Hoạt động ', async ({ page }) => {
    
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
    // Thêm chuyên mục
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Thêm CM_Tin Giải trí_Case3')
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('select#status').selectOption('0');
    await page.getByRole('button', { name: 'Lưu' }).click(); 
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau thêm 
    await page.goto('https://mskill8.mobiedu.vn/tin-tuc');
    await expect(page.getByRole('link', { name: 'QA_Thêm CM_Tin Giải trí_Case3 chevron_right' }).first()).not.toBeVisible();
    // Truy cập CMS sửa chuyên mục 
    await page.goto('https://mskill8admin.mobiedu.vn/blog-category');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm CM_Tin Giải trí_Case3' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Sửa Ẩn sang Hoạt động_Tin Giải trí_Case3');
    // Sửa trạng thái Hoạt động sang Ẩn
    await page.locator('select#edit_status').selectOption('1');
    // click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click(); 
    await expect(page.getByText("Cập nhật thành công!")).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau sửa
    await page.goto('https://mskill8.mobiedu.vn/tin-tuc');
    await expect(page.getByRole('link', { name: 'QA_Sửa Ẩn sang Hoạt động_Tin Giải trí_Case3 chevron_right' }).first()).toBeVisible();
    // Truy cập CMS xóa chuyên mục 
    await page.goto('https://mskill8admin.mobiedu.vn/blog-category');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa Ẩn sang Hoạt động_Tin Giải trí_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau xóa
    await page.goto('https://mskill8.mobiedu.vn/tin-tuc');
    await expect(page.getByRole('link', { name: 'QA_Sửa Ẩn sang Hoạt động_Tin Giải trí_Case3 chevron_right' }).first()).not.toBeVisible();

});
}

/**
 * Case 4: Không thành công: do click btn Đóng
 */

function case4 () {
    test('Case 4: Fail_click btn Đóng', async ({ page }) => {
    
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
    // Thêm chuyên mục
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Fail CM_Tin Giải trí_Case4')
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('select#status').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click(); 
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail CM_Tin Giải trí_Case4' })).toBeVisible();
    // Truy cập CMS sửa chuyên mục 
    await page.waitForTimeout(2000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail CM_Tin Giải trí_Case4' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_click btn Đóng_Tin Giải trí_Case4');
    // click btn Lưu 
    await page.getByRole('button', { name: 'Đóng' }).click(); 
    await expect(page.getByText("Cập nhật thành công!")).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail CM_Tin Giải trí_Case4' })).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị
    await page.goto('https://mskill8.mobiedu.vn/tin-tuc');
    await expect(page.getByRole('link', { name: 'QA_Fail CM_Tin Giải trí_Case4 chevron_right' }).first()).toBeVisible();
    // Truy cập CMS xóa chuyên mục 
    await page.goto('https://mskill8admin.mobiedu.vn/blog-category');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail CM_Tin Giải trí_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau xóa
    await page.goto('https://mskill8.mobiedu.vn/tin-tuc');
    await expect(page.getByRole('link', { name: 'QA_Fail CM_Tin Giải trí_Case4 chevron_right' }).first()).not.toBeVisible();

});
}

function main(){
    case1();
    case2();
    case3();
    case4();

}
main();