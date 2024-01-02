// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Xóa chủ đề thành công 
 */

function case1 () {
    test('Case 1: Pass-Click btn Xóa', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Chủ đề
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Chủ đề' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-topic");
    await expect(page.getByRole('heading', { name: 'Danh sách chủ đề' })).toBeVisible();
    // Thêm mới chủ đề 
    await page.getByRole('button', { name: 'Thêm chủ đề mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm chủ đề mới' })).toBeVisible();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).click();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_CD_Pass Xóa_Kỹ năng sống_Case1');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // [Trước đăng nhập] - Trang khóa học => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_CD_Pass Xóa_Kỹ năng sống_Case1')).toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD_Pass Xóa_Kỹ năng sống_Case1')).not.toBeVisible();
    // [Sau đăng nhập] - Trang khóa học của tôi => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Đăng nhập' }).click();
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
    await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
    await expect(page.locator('div.account > div > div > a')).toBeVisible();
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Khóa học của tôi', exact: true }).click();
    await expect(page.getByText('QA_CD_Pass Xóa_Kỹ năng sống_Case1').nth(2)).not.toBeVisible();
    await page.waitForTimeout(1000);
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    // Truy cập CMS xóa chủ đề thành công 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD_Pass Xóa_Kỹ năng sống_Case1' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // [Trước đăng nhập] - Trang khóa học => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_CD_Pass Xóa_Kỹ năng sống_Case1')).not.toBeVisible();
    
});
}

/**
 * Case 2: Thành công : Xóa chủ đề không thành công do click btn Đóng
 */

function case2 () {
    test('Case 2: Pass-Click btn Đóng', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Chủ đề
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Chủ đề' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-topic");
    await expect(page.getByRole('heading', { name: 'Danh sách chủ đề' })).toBeVisible();
    // Thêm mới chủ đề 
    await page.getByRole('button', { name: 'Thêm chủ đề mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm chủ đề mới' })).toBeVisible();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).click();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_CD_Fail Xóa_Kỹ năng sống_Case2');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // [Trước đăng nhập] - Trang khóa học => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_CD_Fail Xóa_Kỹ năng sống_Case2')).toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD_Fail Xóa_Kỹ năng sống_Case2')).not.toBeVisible();
    // [Sau đăng nhập] - Trang khóa học của tôi => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Đăng nhập' }).click();
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
    await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
    await expect(page.locator('div.account > div > div > a')).toBeVisible();
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Khóa học của tôi', exact: true }).click();
    await expect(page.getByText('QA_CD_Fail Xóa_Kỹ năng sống_Case2').nth(2)).not.toBeVisible();
    await page.waitForTimeout(1000);
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    // Truy cập CMS xóa chủ đề không thành công do click btn Đóng 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD_Fail Xóa_Kỹ năng sống_Case2' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Đóng' }).click();
        await expect(page.getByText('Xóa thành công!')).not.toBeVisible();
    // Xóa chủ đề thành công 
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD_Fail Xóa_Kỹ năng sống_Case2' })
            .locator('a')
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
