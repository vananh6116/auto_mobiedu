// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Thêm mới -> Xóa danh mục -> Click Btn Xóa
 * Mong muốn: Xóa thành công danh mục 
 */

function case1 () {
    test('Case 1: Pass - Click btn Xóa ', async ({ page }) => {
    
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
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_PassXoa_Học sinh tiểu học_case1');
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
    await expect(page.getByRole('link', { name: 'QA_DMM_PassXoa_Học sinh tiểu học_case1' })).toBeVisible();
    // Xóa danh mục thành công 
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_PassXoa_Học sinh tiểu học_case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_DMM_PassXoa_Học sinh tiểu học_case1' })).not.toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_PassXoa_Học sinh tiểu học_case1' })).not.toBeVisible();

});
}

/**
 * Case 2: Không thành công : Thêm mới -> Xóa danh mục -> Click btn Đóng 
 * Mong muốn: Xóa không thành công danh mục 
 */

function case2 () {
    test('Case 2: Fail - Click btn Đóng ', async ({ page }) => {
    
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
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_FailXoa_Học sinh tiểu học_case2');
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
    // Xóa danh mục không thành công 
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_FailXoa_Học sinh tiểu học_case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('cell', { name: 'QA_DMM_FailXoa_Học sinh tiểu học_case2' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_FailXoa_Học sinh tiểu học_case2' })).toBeVisible();
    // Truy cập CMS xóa danh mục thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_FailXoa_Học sinh tiểu học_case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

function main(){
    case1();
    case2();

}
main();