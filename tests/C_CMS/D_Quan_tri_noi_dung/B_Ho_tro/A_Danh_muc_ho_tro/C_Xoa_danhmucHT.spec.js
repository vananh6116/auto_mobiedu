// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../../dataSite.json';

/**
 * Case 1: Thành công : Xóa danh mục hỗ trợ 
 */

function case1 () {
    test('Case 1: Pass - click btn Xóa', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - hỗ trợ - danh mục câu hỏi 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Hỗ trợ' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/support-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Thêm danh mục hỗ trợ 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Xóa Pass_Đại học_Case 1");
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Sản phẩm" }).click();
    await page.locator('select#status').selectOption('1');
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass_Đại học_Case 1' })).toBeVisible();
    // Truy cập Web - Hướng dẫn => Không hiển thị 
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass_Đại học_Case 1' })).not.toBeVisible();
    // Truy cập Web - Chính sách => Không hiển thị 
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass_Đại học_Case 1' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục hỗ trợ thành công
    await page.goto(dataSiteTest[0].linkSite + "/support-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Xóa Pass_Đại học_Case 1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Sản phẩm => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass_Đại học_Case 1' })).not.toBeVisible();

});
}

/**
 * Case 2: Không thành công do click btn Đóng 
 */

function case2 () {
    test('Case 2: Fail - click btn Đóng', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - hỗ trợ - danh mục câu hỏi 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Hỗ trợ' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/support-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Thêm danh mục hỗ trợ 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Xóa Fail_Đại học_Case 2");
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Sản phẩm" }).click();
    await page.locator('select#status').selectOption('1');
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Xóa Fail_Đại học_Case 2' })).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail_Đại học_Case 2' })).toBeVisible();
    // Truy cập Web - Hướng dẫn => Không hiển thị 
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail_Đại học_Case 2' })).not.toBeVisible();
    // Truy cập Web - Chính sách => Không hiển thị 
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail_Đại học_Case 2' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục hỗ trợ không thành công do click btn Đóng
    await page.goto(dataSiteTest[0].linkSite + "/support-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Xóa Fail_Đại học_Case 2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Xóa thành công!')).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Xóa Fail_Đại học_Case 2' })).toBeVisible();
    // Xóa danh mục hỗ trợ
    await page.waitForTimeout(2000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Xóa Fail_Đại học_Case 2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Sản phẩm => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail_Đại học_Case 2' })).not.toBeVisible();

});
}

function main(){
    case1();
    case2();

}
main();