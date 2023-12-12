// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Thêm khoảng giá
 * Mong muốn: CMS hiển thị trên danh sách -> Web hiển thị khoảng giá trang khóa học
 */

function case1 () {
    test('Case 1: Pass - Thêm Khoảng giá ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Khoảng giá
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Khoảng giá' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/price-range');
    await expect(page.getByRole('heading', { name: 'Danh sách khoảng giá' })).toBeVisible();
    // Click btn Thêm khoảng giá mới
    await page.getByRole('button', { name: 'Thêm khoảng giá mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm khoảng giá mới' })).toBeVisible();
    // Nhập nội dung hiển thị bộ lọc
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).fill('QA_KG_Trên 3.000.000đ_Case1');
    // Nhập giá min
    await page.getByRole('spinbutton', { name: 'Giá min *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá min *' }).fill('3000000');
    // Nhập giá max
    await page.getByRole('spinbutton', { name: 'Giá max *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá max *' }).fill('5000000');
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByText('QA_KG_Trên 3.000.000đ_Case1')).toBeVisible();
    // Truy cập CMS xóa khoảng giá vừa thêm 
    await page.goto('https://mskill8admin.mobiedu.vn/price-range');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_KG_Trên 3.000.000đ_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByText('QA_KG_Trên 3.000.000đ_Case1')).not.toBeVisible();
    
});
}

/**
 * Case 2: Không thành công : Để trống trường
 * Mong muốn: Hiển thị thông báo lỗi 
 */

function case2 () {
    test('Case 2: Fail - Để trống trương ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Khoảng giá
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Khoảng giá' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/price-range');
    await expect(page.getByRole('heading', { name: 'Danh sách khoảng giá' })).toBeVisible();
    // Click btn Thêm khoảng giá mới
    await page.getByRole('button', { name: 'Thêm khoảng giá mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm khoảng giá mới' })).toBeVisible();
    // Nhập nội dung hiển thị bộ lọc
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).fill('');
    // Nhập giá min
    await page.getByRole('spinbutton', { name: 'Giá min *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá min *' }).fill('');
    // Nhập giá max
    await page.getByRole('spinbutton', { name: 'Giá max *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá max *' }).fill('');
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).clear();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng nhập tiêu đề!')).toBeVisible();
    await expect(page.getByText('Vui lòng giá nhỏ nhất!')).toBeVisible();
    await expect(page.getByText('Vui lòng giá lớn nhất!')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập số thứ tự!')).toBeVisible();

});
}

/**
 * Case 3: Không thành công : Nhập trùng tên khoảng giá
 * Mong muốn: Hiển thị thông báo lỗi 
 */

function case3 () {
    test('Case 3: Fail - Trùng tên khoảng giá ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Khoảng giá
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Khoảng giá' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/price-range');
    await expect(page.getByRole('heading', { name: 'Danh sách khoảng giá' })).toBeVisible();
    // Thêm khoảng giá 1
    await page.getByRole('button', { name: 'Thêm khoảng giá mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm khoảng giá mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).fill('QA_KG_Trên 3.000.000đ_Case3');
    await page.getByRole('spinbutton', { name: 'Giá min *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá min *' }).fill('3000000');
    await page.getByRole('spinbutton', { name: 'Giá max *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá max *' }).fill('5000000');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Thêm khoảng giá 2 trùng khoảng giá 1 => Hiển thị thông báo lỗi
    await page.getByRole('button', { name: 'Thêm khoảng giá mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm khoảng giá mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).fill('QA_KG_Trên 3.000.000đ_Case3');
    await page.getByRole('spinbutton', { name: 'Giá min *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá min *' }).fill('3000000');
    await page.getByRole('spinbutton', { name: 'Giá max *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá max *' }).fill('5000000');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Tên lĩnh vực đã tồn tại!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByText('QA_KG_Trên 3.000.000đ_Case3')).toBeVisible();
    // Truy cập CMS xóa khoảng giá vừa thêm 
    await page.goto('https://mskill8admin.mobiedu.vn/price-range');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_KG_Trên 3.000.000đ_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByText('QA_KG_Trên 3.000.000đ_Case3')).not.toBeVisible();

});
}

/**
 * Case 4: Không thành công : Giá min > giá max
 * Mong muốn: Hiển thị thông báo lỗi 
 */

function case4 () {
    test('Case 4: Fail - Giá min > giá max ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Khoảng giá
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Khoảng giá' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/price-range');
    await expect(page.getByRole('heading', { name: 'Danh sách khoảng giá' })).toBeVisible();
    // Thêm khoảng giá : Giá min > giá max
    await page.getByRole('button', { name: 'Thêm khoảng giá mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm khoảng giá mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).fill('QA_KG_Trên 3.000.000đ_Case4');
    await page.getByRole('spinbutton', { name: 'Giá min *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá min *' }).fill('5000000');
    await page.getByRole('spinbutton', { name: 'Giá max *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá max *' }).fill('3000000');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Giá thấp nhất phải nhỏ hơn giá lớn nhất!')).toBeVisible();

});
}

function main(){
    case1();
    case2();
    case3();
    case4();

}
main();

