// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../../dataSite.json';

/**
 * Case 1: Thành công : Thêm câu hỏi Sản phẩm - Khóa học
 */

function case1 () {
    test('Case 1: Pass - Sản phẩm-Khóa học', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Câu hỏi hỗ trợ' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/support");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập nội dung câu hỏi 
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).fill('QA_Case1_Hệ sinh thái giáo dục mobiEdu có những khóa học nào?');
    // Chọn loại 
    await page.locator('#select2-type-container').click();
    await page.getByRole('treeitem', { name: 'Sản phẩm' }).click();
    // Chọn danh mục hỗ trợ 
    await page.locator('#select2-category-container').click();
    await page.getByRole('treeitem', { name: 'Khóa học' }).click();
    // Nhập câu trả lời 
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole("paragraph").click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByLabel("Rich Text Area. Press ALT-0")
            .fill('Case 1 _ Trả lời câu hỏi Hệ sinh thái giáo dục mobiEdu có những khóa học');
    // Chọn Trạng thái 
    await page.locator('select#status').selectOption('1');
    // Nhập vị trí hiển thị 
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).fill("1");
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();

});
}

function main(){
    case1();

}
main();