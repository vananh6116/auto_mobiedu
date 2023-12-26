// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Thêm mới - Hiển thị Trang chủ -> Sửa - Hiển thị Khóa học
 */

function case1 () {
    test('Case 1: Pass - Sửa TC sang KH ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Thêm mới danh mục 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_TC_Học sinh tiểu học_case1');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_case1' })).toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_case1' })).not.toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_case1' })).not.toBeVisible();
    // Sửa danh mục
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_TC_Học sinh tiểu học_case1' })
            .locator('i')
            .nth(0)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa danh mục' })).toBeVisible();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tên danh mục' }).click();
    await page.getByRole('textbox', { name: 'Tên danh mục' }).fill('QA_Sửa KH_Học sinh tiểu học_case1');
    // Sửa trang hiển thị
    await page.getByTitle(' Hiện thị trang chủ ').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học' }).click();
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_case1' })).not.toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KH_Học sinh tiểu học_case1' })).toBeVisible();
    // Truy cập CMS xóa danh mục vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa KH_Học sinh tiểu học' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByRole('link', { name: 'QA_Sửa KH_Học sinh tiểu học_case1' })).not.toBeVisible();
    
});
}

/**
 * Case 2: Thành công : Thêm mới - Hiển thị Khóa học -> Sửa - Hiển thị Cổng thi
 */

function case2 () {
    test('Case 2: Pass - Sửa KH sang CT ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Thêm mới danh mục 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_ThemKH_Học sinh tiểu học_Case2');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học' }).click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_ThemKH_Học sinh tiểu học_Case2' })).not.toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_ThemKH_Học sinh tiểu học_Case2' })).toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_ThemKH_Học sinh tiểu học_Case2' })).not.toBeVisible();
    // Sửa danh mục
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_ThemKH_Học sinh tiểu học' })
            .locator('i')
            .nth(0)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa danh mục' })).toBeVisible();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tên danh mục' }).click();
    await page.getByRole('textbox', { name: 'Tên danh mục' }).fill('QA_Sửa CT_Học sinh tiểu học_Case2');
    // Sửa trang hiển thị
    await page.getByTitle(' Hiện thị trang khóa học ').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang cổng thi' }).click();
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByRole('link', { name: 'QA_Sửa CT_Học sinh tiểu học_Case2' })).not.toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa CT_Học sinh tiểu học_Case2' })).toBeVisible();
    // Truy cập CMS xóa danh mục vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa CT_Học sinh tiểu học_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra sau xóa danh mục sau xóa
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.getByRole('link', { name: 'QA_Sửa CT_Học sinh tiểu học_Case2' })).not.toBeVisible();
    
});
}

/**
 * Case 3: Thành công : Thêm mới - Hiển thị Trang chủ -> Sửa - Hiển thị Khóa học - Cổng thi 
 */

function case3 () {
    test('Case 3: Pass - Sửa TC sang KH-CT ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Thêm mới danh mục - Hiển thị Trang chủ
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_TC_Học sinh tiểu học_Case3');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case3' })).toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case3' })).not.toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case3' })).not.toBeVisible();
    // Sửa danh mục -> Khóa học - Cổng thi 
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_TC_Học sinh tiểu học_Case3' })
            .locator('i')
            .nth(0)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa danh mục' })).toBeVisible();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tên danh mục' }).click();
    await page.getByRole('textbox', { name: 'Tên danh mục' }).fill('QA_Sửa KH-CT_Học sinh tiểu học_Case3');
    // Sửa trang hiển thị Khóa học - Cổng thi 
    await page.getByRole('listitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học' }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang cổng thi' }).click();
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị Khóa học - Cổng thi 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Sửa KH-CT_Học sinh tiểu học_Case3' })).toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KH-CT_Học sinh tiểu học_Case3' })).toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KH-CT_Học sinh tiểu học_Case3' })).toBeVisible();
    // Truy cập CMS xóa danh mục vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa KH-CT_Học sinh tiểu học_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra danh mục sau xóa
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Sửa KH-CT_Học sinh tiểu học_Case3' })).not.toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KH-CT_Học sinh tiểu học_Case3' })).not.toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KH-CT_Học sinh tiểu học_Case3' })).not.toBeVisible();

});
}

/**
 * Case 4: Thành công : Thêm mới Trang chủ -> Sửa trạng thái Ẩn
 * Mong muốn: Sau khi sửa trạng thái Ẩn -> Trang chủ không hiển thị Danh mục 
 */

function case4 () {
    test('Case 4: Pass - TC Sửa trạng thái Ẩn ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Thêm danh mục mới hiển thị Trang chủ 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_TC_Học sinh tiểu học_Case4');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case4' })).toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case4' })).not.toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case4' })).not.toBeVisible();
    //Truy cập CMS sửa: trạng thái Ẩn 
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_TC_Học sinh tiểu học_Case4' })
            .locator('i')
            .nth(0)
            .click();   
    // Sửa trạng thái Ẩn 
    await page.locator('select#edit_category_status').click();
    await page.locator('select#edit_category_status').selectOption('0');
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa trạng thái
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case4' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục mới thêm
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_TC_Học sinh tiểu học_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 5: Thành công : Thêm mới Khóa học -> Sửa trạng thái Ẩn
 * Mong muốn: Sau khi sửa trạng thái Ẩn -> Trang chủ không hiển thị Danh mục 
 */

function case5 () {
    test('Case 5: Pass - KH Sửa trạng thái Ẩn ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Click Thêm mới danh mục hiển thị Khóa học
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_KH_Học sinh tiểu học_Case5');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học' }).click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_KH_Học sinh tiểu học_Case5' })).toBeVisible();
    await page.locator('a').first().click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_KH_Học sinh tiểu học_Case5' })).not.toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_KH_Học sinh tiểu học_Case5' })).not.toBeVisible();
    //Truy cập CMS sửa: trạng thái Ẩn 
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_KH_Học sinh tiểu học_Case5' })
            .locator('i')
            .nth(0)
            .click();   
    // Sửa trạng thái Ẩn 
    await page.locator('select#edit_category_status').click();
    await page.locator('select#edit_category_status').selectOption('0');
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_KH_Học sinh tiểu học_Case5' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục mới thêm
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_KH_Học sinh tiểu học_Case5' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
});
}

/**
 * Case 6: Thành công : Thêm mới Cổng thi -> Sửa trạng thái Ẩn
 * Mong muốn: Sau khi sửa trạng thái Ẩn -> Trang chủ không hiển thị Danh mục 
 */

function case6 () {
    test('Case 6: Pass - CT Sửa trạng thái Ẩn ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Thêm mới danh mục hiển thị Cổng thi 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_CT_Học sinh tiểu học_Case6');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang cổng thi' }).click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_CT_Học sinh tiểu học_Case6' })).toBeVisible();
    await page.locator('a').first().click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_CT_Học sinh tiểu học_Case6' })).not.toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_CT_Học sinh tiểu học_Case6' })).not.toBeVisible();
    //Truy cập CMS sửa: trạng thái Ẩn 
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_CT_Học sinh tiểu học_Case6' })
            .locator('i')
            .nth(0)
            .click();   
    // Sửa trạng thái Ẩn 
    await page.locator('select#edit_category_status').click();
    await page.locator('select#edit_category_status').selectOption('0');
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_CT_Học sinh tiểu học_Case6' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục mới thêm
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_CT_Học sinh tiểu học_Case6' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    
});
}

/**
 * Case 7: Thành công : Thêm mới TC-KH-CT -> Sửa trạng thái Ẩn
 * Mong muốn: Sau khi sửa trạng thái Ẩn -> Trang chủ không hiển thị Danh mục 
 */

function case7 () {
    test('Case 7: Pass - TC-KH-CT Sửa trạng thái Ẩn ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Thêm mới danh mục - Hiển thị Trang chủ
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_TC-KH-CT_Học sinh tiểu học_Case7');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học' }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang cổng thi' }).click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case7' })).toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case7' })).toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case7' })).toBeVisible();
    //Truy cập CMS sửa: trạng thái Ẩn 
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case7' })
            .locator('i')
            .nth(0)
            .click();   
    // Sửa trạng thái Ẩn 
    await page.locator('select#edit_category_status').click();
    await page.locator('select#edit_category_status').selectOption('0');
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa trạng thái Ẩn
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case7' })).not.toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case7' })).not.toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case7' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục mới thêm
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case7' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 8: Không thành công : Thêm mới - Hiển thị Trang chủ -> Sửa - Hiển thị Khóa học -> Click btn Đóng
 * Mong muốn: Không thay đổi tên tiêu đề ở danh sách
 */

function case8 () {
    test('Case 8: Fail - click btn Đóng', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Thêm mới danh mục 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_Fail_Học sinh tiểu học_case8');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_Fail_Học sinh tiểu học_case8' })).toBeVisible();
    // Sửa danh mục
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_Fail_Học sinh tiểu học_case8' })
            .locator('i')
            .nth(0)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa danh mục' })).toBeVisible();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tên danh mục' }).click();
    await page.getByRole('textbox', { name: 'Tên danh mục' }).fill('QA_Sửa Fail KH_Học sinh tiểu học_case8');
    // Sửa trang hiển thị
    await page.getByTitle(' Hiện thị trang chủ ').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học' }).click();
    // Click Btn Đóng
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('cell', { name: 'QA_DMM_Fail_Học sinh tiểu học_case8' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_Fail_Học sinh tiểu học_case8' })).toBeVisible();
    // Truy cập CMS xóa danh mục vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_Fail_Học sinh tiểu học_case8' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra sau xóa danh mục
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_Fail_Học sinh tiểu học_case8' })).not.toBeVisible();

});
}


function main(){
    case1();
    case2();
    case3();
    case4();
    case5();
    case6();
    case7();
    case8();

}
main();