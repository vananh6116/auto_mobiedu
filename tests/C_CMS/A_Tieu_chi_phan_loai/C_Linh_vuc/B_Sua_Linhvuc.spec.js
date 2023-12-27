// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Sửa lĩnh vực
 * Mong muốn: Sau khi sửa hệ thống CMS - Web hiển thị đúng với thông tin sau sửa 
 */

function case1 () {
    test('Case 1: Pass - Sửa Tiêu đề ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Lĩnh vực
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Lĩnh vực' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-field");
    await expect(page.getByRole('heading', { name: 'Danh sách lĩnh vực' })).toBeVisible();
    // Thêm mới lĩnh vực
    await page.getByRole('button', { name: 'Thêm lĩnh vực mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm lĩnh vực mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Thêm_Tôn giáo_Case1');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_LV Thêm_Tôn giáo_Case1' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau thêm 
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case1')).toBeVisible();
    // Sửa lĩnh vực 
    await page.goto(dataSiteTest[0].linkSite + "/course-field");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Thêm_Tôn giáo_Case1' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên lĩnh vực 
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Sửa_Tôn giáo_Case1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau sửa 
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.locator('#desktop-field').getByText('QA_LV Sửa_Tôn giáo_Case1')).toBeVisible();
    // Truy cập CMS xóa lĩnh vực mới thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-field");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Sửa_Tôn giáo_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau xóa
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.locator('#desktop-field').getByText('QA_LV Sửa_Tôn giáo_Case1')).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Sửa trạng thái Hoạt động sang Ẩn
 * Mong muốn: Sau khi trạng thái Ẩn -> Web không hiển thị
 */

function case2 () {
    test('Case 2: Pass - Hoạt động sang Ẩn ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Lĩnh vực
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Lĩnh vực' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-field");
    await expect(page.getByRole('heading', { name: 'Danh sách lĩnh vực' })).toBeVisible();
    // Thêm mới lĩnh vực
    await page.getByRole('button', { name: 'Thêm lĩnh vực mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm lĩnh vực mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Thêm_Tôn giáo_Case2');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_LV Thêm_Tôn giáo_Case2' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau thêm 
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case2')).toBeVisible();
    // Sửa lĩnh vực 
    await page.goto(dataSiteTest[0].linkSite + "/course-field");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Thêm_Tôn giáo_Case2' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa trạng thái Ẩn
    await page.locator('select#edit_field_status').click();
    await page.locator('select#edit_field_status').selectOption('0');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau sửa 
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case2')).not.toBeVisible();
    // Truy cập CMS xóa lĩnh vực mới thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-field");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Thêm_Tôn giáo_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 2: Thành công : Sửa Ẩn sang Hoạt động
 * Mong muốn: sau sửa hiển thị trên Web
 */ 

function case3 () {
    test('Case 3: Pass - Ẩn sang Hoạt động ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Lĩnh vực
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Lĩnh vực' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-field");
    await expect(page.getByRole('heading', { name: 'Danh sách lĩnh vực' })).toBeVisible();
    // Thêm mới lĩnh vực
    await page.getByRole('button', { name: 'Thêm lĩnh vực mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm lĩnh vực mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Thêm_Tôn giáo_Case3');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').selectOption('0');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_LV Thêm_Tôn giáo_Case3' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau thêm 
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case3')).not.toBeVisible();
    // Sửa lĩnh vực 
    await page.goto(dataSiteTest[0].linkSite + "/course-field");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Thêm_Tôn giáo_Case3' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa trạng thái Ẩn
    await page.locator('select#edit_field_status').click();
    await page.locator('select#edit_field_status').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau sửa 
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case3')).toBeVisible();
    // Truy cập CMS xóa lĩnh vực mới thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-field");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Thêm_Tôn giáo_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau xóa 
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case3')).not.toBeVisible();

});
}

/**
 * Case 4: Không thành công : Click btn Đóng
 * Mong muốn: Hiển thị thông tin như ban đầu 
 */

function case4 () {
    test('Case 4: Fail - Click Btn Đóng ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Lĩnh vực
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Lĩnh vực' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-field");
    await expect(page.getByRole('heading', { name: 'Danh sách lĩnh vực' })).toBeVisible();
    // Thêm mới lĩnh vực
    await page.getByRole('button', { name: 'Thêm lĩnh vực mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm lĩnh vực mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Thêm_Tôn giáo_Case4');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm lĩnh vực mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_LV Thêm_Tôn giáo_Case3' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau thêm 
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case3')).toBeVisible();
    // Sửa lĩnh vực 
    await page.goto(dataSiteTest[0].linkSite + "/course-field");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Thêm_Tôn giáo_Case4' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên lĩnh vực 
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).click();
    await page.getByRole('textbox', { name: 'Tên lĩnh vực *' }).fill('QA_LV Sửa_Tôn giáo_Case4');
    // Click btn Đóng 
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('cell', { name: 'QA_LV Thêm_Tôn giáo_Case4' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi  
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case4')).toBeVisible();
    // Truy cập CMS xóa lĩnh vực mới thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-field");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_LV Thêm_Tôn giáo_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang Cổng thi sau xóa
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.locator('#desktop-field').getByText('QA_LV Thêm_Tôn giáo_Case4')).not.toBeVisible();

});
}



function main(){
    case1();
    case2();
    case3();
    case4();

}
main();