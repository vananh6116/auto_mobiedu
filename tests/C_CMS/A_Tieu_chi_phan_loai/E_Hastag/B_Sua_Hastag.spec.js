// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Sửa tiêu đề hastag - Hiển thị chân trang
 * Mong muốn: CMS hiển thị trên danh sách -> Web hiển thị trang chủ theo thông tin mới sửa 
 */

function case1 () {
    test('Case 1: Pass - Sửa tiêu đề Hastag chân trang', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Hastag
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Hashtag' }).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tags");
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    // Thêm mới Hastag - Hiển thị chân trang 
    await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Hashtag *' }).click();
    await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Thêm_Hastag _Khóa học_Case1');
    await page.getByRole('textbox', { name: 'Link liên kết' }).click();
    await page.getByRole('textbox', { name: 'Link liên kết' }).fill(dataSiteTest[1].linkSite + "/khoa-hoc");
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Thêm_Hastag _Khóa học_Case1' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị Trang chủ sau thêm -> Click link liên kết
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Thêm_Hastag _Khóa học_Case1' }).nth(0)).toBeVisible();
    await page.getByRole('link', { name: 'QA_Thêm_Hastag _Khóa học_Case1' }).nth(0).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
    // Truy cập Web kiểm tra không hiển thị trang 404
    await page.goto(dataSiteTest[1].linkSite + "/1234567");
    await expect(page.getByRole('link', { name: 'QA_Thêm_Hastag _Khóa học_Case1' }).nth(1)).not.toBeVisible();
    // Truy cập CMS sửa hastag
    await page.goto(dataSiteTest[1].linkSite + "/tags");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm_Hastag _Khóa học_Case1' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Hashtag *' }).click();
    await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Sửa tiêu đề_Hastag_Khóa học_Case1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Sửa tiêu đề_Hastag_Khóa học_Case1' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa -> Click link liên kết
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Sửa tiêu đề_Hastag_Khóa học_Case1' })).toBeVisible();
    await page.getByRole('link', { name: 'QA_Sửa tiêu đề_Hastag_Khóa học_Case1' }).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
    // Truy cập CMS xóa Hastag vừa thêm 
    await page.goto(dataSiteTest[1].linkSite + "/tags");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa tiêu đề_Hastag_Khóa học_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Sửa tiêu đề_Hastag_Khóa học_Case1' })).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Sửa thêm trang hiển thị
 * Mong muốn: CMS hiển thị trên danh sách -> Web hiển thị trang chủ theo thông tin mới sửa 
 */

function case2 () {
    test('Case 2: Pass - Sửa thêm trang hiển thị', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Hastag
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Hashtag' }).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tags");
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    // Thêm mới Hastag - Hiển thị chân trang 
    await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Hashtag *' }).click();
    await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Pass Sửa Hastag _Khóa học_Case2');
    await page.getByRole('textbox', { name: 'Link liên kết' }).click();
    await page.getByRole('textbox', { name: 'Link liên kết' }).fill(dataSiteTest[1].linkSite + "/khoa-hoc");
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm -> Click link liên kết
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Hastag _Khóa học_Case2' })).toBeVisible();
    await page.getByRole('link', { name: 'QA_Pass Sửa Hastag _Khóa học_Case2' }).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
    // Truy cập CMS sửa hastag
    await page.goto(dataSiteTest[1].linkSite + "/tags");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa Hastag _Khóa học_Case2' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa thêm trang hiển thị
    await page.getByRole('listitem', { name: 'Hiện thị chân trang' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang 404' }).click();
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị chân trang -> Click link liên kết
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Hastag _Khóa học_Case2' }).nth(0)).toBeVisible();
    await page.getByRole('link', { name: 'QA_Pass Sửa Hastag _Khóa học_Case2' }).nth(0).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "khoa-hoc");
    // Truy cập Web kiểm tra hiển thị trang 404 -> Click link liên kết
    await page.goto(dataSiteTest[1].linkSite + "/1234567");
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Hastag _Khóa học_Case2' }).nth(1)).toBeVisible();
    await page.getByRole('link', { name: 'QA_Pass Sửa Hastag _Khóa học_Case2' }).nth(1).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
    // Truy cập CMS xóa Hastag vừa thêm 
    await page.goto(dataSiteTest[1].linkSite + "/tags");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa Hastag _Khóa học_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị chân trang sau xóa
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Hastag _Khóa học_Case2' }).nth(0)).not.toBeVisible();
    // Truy cập Web kiểm tra trang 404 sau xóa 
    await page.goto(dataSiteTest[1].linkSite +"/1234567");
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Hastag _Khóa học_Case2' }).nth(1)).not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Sửa trạng thái Ẩn
 * Mong muốn: CMS hiển thị trên danh sách -> Web không hiển thị trang chủ sau sửa trạng thái Ẩn
 */

function case3 () {
    test('Case 3: Pass - Sửa trạng thái Ẩn', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Hastag
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Hashtag' }).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tags");
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    // Thêm mới Hastag - Hiển thị chân trang 
    await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Hashtag *' }).click();
    await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Pass_Hastag Ẩn_Khóa học_Case3');
    await page.getByRole('textbox', { name: 'Link liên kết' }).click();
    await page.getByRole('textbox', { name: 'Link liên kết' }).fill(dataSiteTest[1].linkSite + "/khoa-hoc");
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị trang chủ sau thêm -> Click link liên kết
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass_Hastag Ẩn_Khóa học_Case3' }).nth(0)).toBeVisible();
    await page.getByRole('link', { name: 'QA_Pass_Hastag Ẩn_Khóa học_Case3' }).nth(0).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
    // Truy cập Web kiểm tra không hiển thị trang 404
    await page.goto(dataSiteTest[1].linkSite +"/1234567");
    await expect(page.getByRole('link', { name: 'QA_Pass_Hastag Ẩn_Khóa học_Case3' }).nth(1)).not.toBeVisible();
    // Truy cập CMS sửa hastag
    await page.goto(dataSiteTest[1].linkSite +"/tags");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass_Hastag Ẩn_Khóa học_Case3' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa trạng thái Ẩn
    await page.getByRole('dialog', { name: 'Thêm tag mới' }).getByLabel('Trạng thái').click();
    await page.getByRole('dialog', { name: 'Thêm tag mới' }).getByLabel('Trạng thái').selectOption('0');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa trạng thái Ẩn
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass_Hastag Ẩn_Khóa học_Case3' })).not.toBeVisible();
    // Truy cập CMS xóa Hastag vừa thêm 
    await page.goto(dataSiteTest[1].linkSite +"/tags");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass_Hastag Ẩn_Khóa học_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass_Hastag Ẩn_Khóa học_Case3' })).not.toBeVisible();

});
}

/**
 * Case 4: Không thành công : Click btn Đóng
 * Mong muốn: CMS hiển thị trên danh sách -> Trường thông tin hiển thị giống ban đầu 
 */

function case4 () {
    test('Case 4: Fail - Click btn Đóng', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Hastag
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Hashtag' }).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tags");
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    // Thêm mới Hastag - Hiển thị chân trang 
    await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Hashtag *' }).click();
    await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Fail Thêm_Hastag _Khóa học_Case4');
    await page.getByRole('textbox', { name: 'Link liên kết' }).click();
    await page.getByRole('textbox', { name: 'Link liên kết' }).fill(dataSiteTest[1].linkSite + "/khoa-hoc");
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Thêm_Hastag _Khóa học_Case4' })).toBeVisible();
    // Truy cập CMS sửa hastag
    await page.goto(dataSiteTest[1].linkSite + "/tags");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Thêm_Hastag _Khóa học_Case4' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Hashtag *' }).click();
    await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Fail Sửa_Hastag _Khóa học_Case4');
    // Click btn Đóng 
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Thêm_Hastag _Khóa học_Case4' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị Trang chủ -> Click link liên kết
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm_Hastag _Khóa học_Case4' }).nth(0)).toBeVisible();
    await page.getByRole('link', { name: 'QA_Fail Thêm_Hastag _Khóa học_Case4' }).nth(0).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite +"/khoa-hoc");
    // Truy cập Web kiểm tra không hiển thị trang 404
    await page.goto(dataSiteTest[1].linkSite + "/1234567");
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm_Hastag _Khóa học_Case4' }).nth(1)).not.toBeVisible();
    // Truy cập CMS xóa Hastag vừa thêm 
    await page.goto(dataSiteTest[1].linkSite + "/tags");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Thêm_Hastag _Khóa học_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm_Hastag _Khóa học_Case4' })).not.toBeVisible();

});
}

/**
 * Case 5: Thành công : Sửa Hoạt động sang Ẩn
 * Mong muốn: Sau sửa không hiển thị hastag
 */

function case5 () {
    test('Case 5: Pass - Hoạt động sang Ẩn', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Hastag
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Hashtag' }).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tags");
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    // Thêm mới Hastag - Hiển thị chân trang 
    await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Hashtag *' }).click();
    await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Thêm_Hastag _Khóa học_Case5');
    await page.getByRole('textbox', { name: 'Link liên kết' }).click();
    await page.getByRole('textbox', { name: 'Link liên kết' }).fill(dataSiteTest[1].linkSite + "/khoa-hoc");
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Thêm_Hastag _Khóa học_Case5' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị Trang chủ sau thêm -> Click link liên kết
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Thêm_Hastag _Khóa học_Case5' }).nth(0)).toBeVisible();
    await page.getByRole('link', { name: 'QA_Thêm_Hastag _Khóa học_Case5' }).nth(0).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
    // Truy cập Web kiểm tra không hiển thị trang 404
    await page.goto(dataSiteTest[1].linkSite + "/1234567");
    await expect(page.getByRole('link', { name: 'QA_Thêm_Hastag _Khóa học_Case5' }).nth(1)).not.toBeVisible();
    // Truy cập CMS sửa hastag
    await page.goto(dataSiteTest[1].linkSite +"/tags");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm_Hastag _Khóa học_Case5' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Hashtag *' }).click();
    await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Hoạt động sang Ẩn_Hastag _Khóa học_Case5');
    // Sửa trạng Hoạt động sang Ẩn
    await page.locator('select#edit_tags_status').click();
    await page.locator('select#edit_tags_status').selectOption('0');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Hoạt động sang Ẩn_Hastag _Khóa học_Case5' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Thêm_Hastag _Khóa học_Case5' }).nth(0)).not.toBeVisible();
    // Truy cập CMS xóa Hastag vừa thêm 
    await page.goto(dataSiteTest[1].linkSite + "/tags");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Hoạt động sang Ẩn_Hastag _Khóa học_Case5' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 6: Thành công : Sửa Ẩn sang Hoạt động 
 * Mong muốn: Sau sửa hiển thị hastag
 */

function case6 () {
    test('Case 6: Pass - Ẩn sang Hoạt động', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Hastag
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Hashtag' }).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tags");
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
    // Thêm mới Hastag - Hiển thị chân trang 
    await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Hashtag *' }).click();
    await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Thêm_Hastag _Khóa học_Case6');
    await page.getByRole('textbox', { name: 'Link liên kết' }).click();
    await page.getByRole('textbox', { name: 'Link liên kết' }).fill(dataSiteTest[1].linkSite + "/khoa-hoc");
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
    await page.locator('select#tags_status').click();
    await page.locator('select#tags_status').selectOption('0')
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Thêm_Hastag _Khóa học_Case6' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị Trang chủ sau thêm 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Thêm_Hastag _Khóa học_Case6' }).nth(0)).not.toBeVisible();
    // Truy cập Web kiểm tra không hiển thị trang 404
    await page.goto(dataSiteTest[1].linkSite + "/1234567");
    await expect(page.getByRole('link', { name: 'QA_Thêm_Hastag _Khóa học_Case6' }).nth(1)).not.toBeVisible();
    // Truy cập CMS sửa hastag
    await page.goto(dataSiteTest[1].linkSite + "/tags");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm_Hastag _Khóa học_Case6' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Hashtag *' }).click();
    await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Ẩn sang Hoạt động_Hastag _Khóa học_Case6');
    // Sửa trạng Hoạt động sang Ẩn
    await page.locator('select#edit_tags_status').click();
    await page.locator('select#edit_tags_status').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Ẩn sang Hoạt động_Hastag _Khóa học_Case6' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Ẩn sang Hoạt động_Hastag _Khóa học_Case6' }).nth(0)).toBeVisible();
    await page.getByRole('link', { name: 'QA_Ẩn sang Hoạt động_Hastag _Khóa học_Case6' }).nth(0).click();
    await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
    // Truy cập CMS xóa Hastag vừa thêm 
    await page.goto(dataSiteTest[1].linkSite + "/tags");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Ẩn sang Hoạt động_Hastag _Khóa học_Case6' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
        // Truy cập Web kiểm tra hiển thị sau xóa
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Ẩn sang Hoạt động_Hastag _Khóa học_Case6' }).nth(0)).not.toBeVisible();

});
}

function main(){
    case1();
    case2();
    case3();
    case4();
    case5();
    case6();

}
main();
