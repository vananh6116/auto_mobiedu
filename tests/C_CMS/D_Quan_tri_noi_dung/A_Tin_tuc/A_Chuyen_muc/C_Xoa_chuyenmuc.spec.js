// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../../dataSite.json';

/**
 * Case 1: Thành công : xóa chuyên mục
 */

function case1 () {
    test('Case 1: Pass - click btn Xóa ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - tin tức - chuyên mục
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Tin tức' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/blog-category");
    await expect(page.getByRole('heading', { name: 'Danh sách chuyên mục' })).toBeVisible();
    // Thêm chuyên mục
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Pass Xóa CM_Tin Giải trí_Case1')
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('select#status').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click(); 
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Pass Xóa CM_Tin Giải trí_Case1' })).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau thêm 
    await page.goto(dataSiteTest[1].linkSite + "/tin-tuc");
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa CM_Tin Giải trí_Case1 chevron_right' }).first()).toBeVisible();
    // Truy cập CMS xóa thành công chuyên mục 
    await page.goto(dataSiteTest[0].linkSite + "/blog-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Xóa CM_Tin Giải trí_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Pass Xóa CM_Tin Giải trí_Case1' })).not.toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau xóa
    await page.goto(dataSiteTest[1].linkSite + "/tin-tuc");
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa CM_Tin Giải trí_Case1 chevron_right' }).first()).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : xóa chuyên mục
 */

function case2 () {
    test('Case 2: Fail_click btn Đóng ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - tin tức - chuyên mục
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Tin tức' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/blog-category");
    await expect(page.getByRole('heading', { name: 'Danh sách chuyên mục' })).toBeVisible();
    // Thêm chuyên mục
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Fail Xóa CM_Tin Giải trí_Case2')
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('select#status').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click(); 
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Xóa CM_Tin Giải trí_Case2' })).toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau thêm 
    await page.goto(dataSiteTest[1].linkSite + "/tin-tuc");
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa CM_Tin Giải trí_Case2 chevron_right' }).first()).toBeVisible();
    // Truy cập CMS xóa không thành công chuyên mục do click btn Đóng
    await page.goto(dataSiteTest[0].linkSite + "/blog-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Xóa CM_Tin Giải trí_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Xóa thành công!')).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Xóa CM_Tin Giải trí_Case2' })).toBeVisible();
    // Xóa chuyên mục
    await page.waitForTimeout(2000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Xóa CM_Tin Giải trí_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Xóa CM_Tin Giải trí_Case2' })).not.toBeVisible();
    //***Truy cập Web kiểm tra hiển thị sau xóa
    await page.goto(dataSiteTest[1].linkSite + "/tin-tuc");
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa CM_Tin Giải trí_Case2 chevron_right' }).first()).not.toBeVisible();

});
}

function main(){
    case1();
    case2();

}
main();