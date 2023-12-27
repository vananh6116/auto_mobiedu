// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Xóa khoảng giá
 * Mong muốn: Không hiển thị trong danh sách khoảng giá
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
    // Click Tiêu chí phân loại - Khoảng giá
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Khoảng giá' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/price-range");
    await expect(page.getByRole('heading', { name: 'Danh sách khoảng giá' })).toBeVisible();
    // Thêm khoảng giá
    await page.getByRole('button', { name: 'Thêm khoảng giá mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm khoảng giá mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).fill('QA_PassKG Xóa_Trên 3.000.000đ_Case1');
    await page.getByRole('spinbutton', { name: 'Giá min *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá min *' }).fill('3000000');
    await page.getByRole('spinbutton', { name: 'Giá max *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá max *' }).fill('5000000');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_PassKG Xóa_Trên 3.000.000đ_Case1' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_PassKG Xóa_Trên 3.000.000đ_Case1')).toBeVisible();
    // Truy cập CMS xóa thành công 
    await page.goto(dataSiteTest[0].linkSite + "/price-range");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_PassKG Xóa_Trên 3.000.000đ_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_PassKG Xóa_Trên 3.000.000đ_Case1' })).not.toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_PassKG Xóa_Trên 3.000.000đ_Case1')).not.toBeVisible();

});
}

/**
 * Case 2: Không thành công : Click btn Đóng
 * Mong muốn: Không hiển thị trong danh sách khoảng giá
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
    // Click Tiêu chí phân loại - Khoảng giá
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Khoảng giá' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/price-range");
    await expect(page.getByRole('heading', { name: 'Danh sách khoảng giá' })).toBeVisible();
    // Thêm khoảng giá
    await page.getByRole('button', { name: 'Thêm khoảng giá mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm khoảng giá mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung hiển thị bộ lọc *' }).fill('QA_FailKG Xóa_Trên 3.000.000đ_Case2');
    await page.getByRole('spinbutton', { name: 'Giá min *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá min *' }).fill('3000000');
    await page.getByRole('spinbutton', { name: 'Giá max *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá max *' }).fill('5000000');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_FailKG Xóa_Trên 3.000.000đ_Case2' })).toBeVisible();
    // Truy cập CMS xóa không thành công do click btn Đóng
    await page.goto(dataSiteTest[0].linkSite + "/price-range");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_FailKG Xóa_Trên 3.000.000đ_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('cell', { name: 'QA_FailKG Xóa_Trên 3.000.000đ_Case2' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_FailKG Xóa_Trên 3.000.000đ_Case2')).toBeVisible();
    // Xóa thành công khoảng giá vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/price-range");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_FailKG Xóa_Trên 3.000.000đ_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_FailKG Xóa_Trên 3.000.000đ_Case2')).not.toBeVisible();

});
}


function main(){
    case1();
    case2();

}
main();