// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Thêm hastag - Hiển thị chân trang
 * Mong muốn: CMS hiển thị trên danh sách -> Web hiển thị trang chủ => Không hiển thị trang 404
 */

function case1() {
    test('Case 1: Pass - Hastag chân trang', async ({ page }) => {

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
        await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/tags");
        await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
        // Click btn Thêm Tag mới
        await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
        await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
        // Nhập tên Hastag
        await page.getByRole('textbox', { name: 'Hashtag *' }).click();
        await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Hastag chân trang_Khóa học_Case1');
        // Nhập link liên kết
        await page.getByRole('textbox', { name: 'Link liên kết' }).click();
        await page.getByRole('textbox', { name: 'Link liên kết' }).fill(dataSiteTest[1].linkSite + "/khoa-hoc");
        // Chọn trang hiển thị 
        await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
        await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
        // Click bth Lưu
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm thành công!')).toBeVisible();
        // Truy cập Web kiểm tra hiển thị trang Trang chủ -> Click link liên kết
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page.getByRole('link', { name: 'QA_Hastag chân trang_Khóa học_Case1' }).nth(0)).toBeVisible();
        await page.getByRole('link', { name: 'QA_Hastag chân trang_Khóa học_Case1' }).nth(0).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        // Truy cập Web kiểm tra không hiển thị trang 404
        await page.goto(dataSiteTest[1].linkSite + "/1234567");
        await expect(page.getByRole('link', { name: 'QA_Hastag chân trang_Khóa học_Case1' }).nth(1)).not.toBeVisible();
        // Truy cập CMS xóa Hastag vừa thêm 
        await page.goto(dataSiteTest[0].linkSite + "/tags");
        await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Hastag chân trang_Khóa học_Case1' })
            .locator('i')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
        // Truy cập Web kiểm tra sau xóa
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page.getByRole('link', { name: 'QA_Hastag chân trang_Khóa học_Case1' })).not.toBeVisible();

    });
}

/**
 * Case 2: Thành công : Thêm hastag - Hiển thị trang 404
 * Mong muốn: CMS hiển thị trên danh sách -> Web hiển thị trang 404 => Không hiển thị trang Trang chủ 
 */

function case2() {
    test('Case 2: Pass - Hastag trang 404', async ({ page }) => {

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
        await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/tags");
        await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
        // Click btn Thêm Tag mới
        await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
        await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
        // Nhập tên Hastag
        await page.getByRole('textbox', { name: 'Hashtag *' }).click();
        await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Hastag trang 404_Khóa học_Case2');
        // Nhập link liên kết
        await page.getByRole('textbox', { name: 'Link liên kết' }).click();
        await page.getByRole('textbox', { name: 'Link liên kết' }).fill(dataSiteTest[1].linkSite + "/khoa-hoc");
        // Chọn trang hiển thị 
        await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
        await page.getByRole('treeitem', { name: 'Hiện thị trang 404' }).click();
        // Click bth Lưu
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm thành công!')).toBeVisible();
        // Truy cập Web kiểm tra hiển thị trang 404 -> Click link liên kết
        await page.goto(dataSiteTest[1].linkSite + "/1234567");
        await expect(page.getByRole('link', { name: 'QA_Hastag trang 404_Khóa học_Case2' }).nth(0)).toBeVisible();
        await page.getByRole('link', { name: 'QA_Hastag trang 404_Khóa học_Case2' }).nth(0).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        // Truy cập Web kiểm tra không hiển thị trang Trang chủ
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page.getByRole('link', { name: 'QA_Hastag trang 404_Khóa học_Case2' }).nth(1)).not.toBeVisible();
        // Truy cập CMS xóa Hastag vừa thêm 
        await page.goto(dataSiteTest[0].linkSite + "/tags");
        await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Hastag trang 404_Khóa học_Case2' })
            .locator('i')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
        // Truy cập Web kiểm tra sau xóa
        await page.goto(dataSiteTest[1].linkSite + "/1234567");
        await expect(page.getByRole('link', { name: 'QA_Hastag trang 404_Khóa học_Case2' })).not.toBeVisible();

    });
}

/**
 * Case 3: Thành công : Thêm hastag - Hiển thị trang 404 và chân trang 
 * Mong muốn: CMS hiển thị trên danh sách -> Web hiển thị trang 404 và chân trang 
 */

function case3() {
    test('Case 3: Pass - Hastag chân trang & 404', async ({ page }) => {

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
        await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/tags");
        await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
        // Click btn Thêm Tag mới
        await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
        await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
        // Nhập tên Hastag
        await page.getByRole('textbox', { name: 'Hashtag *' }).click();
        await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Pass Hastag_Khóa học_Case3');
        // Nhập link liên kết
        await page.getByRole('textbox', { name: 'Link liên kết' }).click();
        await page.getByRole('textbox', { name: 'Link liên kết' }).fill(dataSiteTest[1].linkSite + "/khoa-hoc");
        // Chọn trang hiển thị 
        await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
        await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
        await page.getByRole('listitem', { name: 'Hiện thị chân trang' }).click();
        await page.getByRole('treeitem', { name: 'Hiện thị trang 404' }).click();
        // Click bth Lưu
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm thành công!')).toBeVisible();
        // Truy cập Web kiểm tra hiển thị chân trang -> Click link liên kết
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page.getByRole('link', { name: 'QA_Pass Hastag_Khóa học_Case3' }).nth(0)).toBeVisible();
        await page.getByRole('link', { name: 'QA_Pass Hastag_Khóa học_Case3' }).nth(0).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        // Truy cập Web kiểm tra hiển thị trang 404 -> Click link liên kết
        await page.goto(dataSiteTest[1].linkSite + "/1234567");
        await expect(page.getByRole('link', { name: 'QA_Pass Hastag_Khóa học_Case3' }).nth(1)).toBeVisible();
        await page.getByRole('link', { name: 'QA_Pass Hastag_Khóa học_Case3' }).nth(1).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        // Truy cập CMS xóa Hastag vừa thêm 
        await page.goto(dataSiteTest[0].linkSite + "/tags");
        await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Hastag_Khóa học_Case3' })
            .locator('i')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
        // Truy cập Web kiểm tra hiển thị chân trang sau xóa
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page.getByRole('link', { name: 'QA_Pass Hastag_Khóa học_Case3' }).nth(0)).not.toBeVisible();
        // Truy cập Web kiểm tra trang 404 sau xóa 
        await page.goto(dataSiteTest[1].linkSite + "/1234567");
        await expect(page.getByRole('link', { name: 'QA_Pass Hastag_Khóa học_Case3' }).nth(1)).not.toBeVisible();

    });
}

/**
 * Case 4: Không thành công : Để trống trường thông tin 
 * Mong muốn: Hiển thị thông báo lỗi 
 */

function case4() {
    test('Case 4: Fail - Để trống trường', async ({ page }) => {
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
        await page.getByRole('link', { name: 'Hashtag' }).click({ delay: 5000 });
        await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/tags");
        await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
        // Click btn Thêm Tag mới
        await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
        await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
        // Nhập tên Hastag
        await page.getByRole('textbox', { name: 'Hashtag *' }).click();
        await page.getByRole('textbox', { name: 'Hashtag *' }).fill('');
        // Nhập link liên kết
        await page.getByRole('textbox', { name: 'Link liên kết' }).click();
        await page.getByRole('textbox', { name: 'Link liên kết' }).fill('');
        // Chọn trang hiển thị 
        await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' });
        await page.getByRole('treeitem', { name: 'Hiện thị chân trang' });
        // Click bth Lưu
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Vui lòng nhập hashtag !')).toBeVisible();
        await expect(page.getByText('Vui lòng chọn trang hiển thị !')).toBeVisible();

    });
}

/**
 * Case 5: Không thành công : Click btn Đóng 
 * Mong muốn: Thêm hastag không thành công 
 */

function case5() {
    test('Case 5: Fail - Click btn Đóng', async ({ page }) => {

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
        await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/tags");
        await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
        // Click btn Thêm Tag mới
        await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
        await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
        // Nhập tên Hastag
        await page.getByRole('textbox', { name: 'Hashtag *' }).click();
        await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Fail Hastag_Khóa học_Case5');
        // Nhập link liên kết
        await page.getByRole('textbox', { name: 'Link liên kết' }).click();
        await page.getByRole('textbox', { name: 'Link liên kết' }).fill(dataSiteTest[1].linkSite + "/khoa-hoc");
        // Chọn trang hiển thị 
        await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
        await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
        // Click bth Lưu
        await page.getByRole('button', { name: 'Đóng' }).click();
        await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).not.toBeVisible();

    });
}

/**
 * Case 6: Không thành công : Trùng hastag
 * Mong muốn: Hiển thị thông báo lỗi  
 */

function case6() {
    test('Case 6: Fail - Trùng Hastag', async ({ page }) => {

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
        await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/tags");
        await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
        // Thêm Hastag 1
        await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
        await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
        await page.getByRole('textbox', { name: 'Hashtag *' }).click();
        await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_ Fail Hastag_Khóa học_Case6');
        await page.getByRole('textbox', { name: 'Link liên kết' }).click();
        await page.getByRole('textbox', { name: 'Link liên kết' }).fill(dataSiteTest[1].linkSite + "/khoa-hoc");
        await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
        await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm thành công!')).toBeVisible();
        // Thêm Hastag 2 trùng hastag 1 
        await page.goto(dataSiteTest[0].linkSite + "/tags");
        await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
        await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
        await page.getByRole('textbox', { name: 'Hashtag *' }).click();
        await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_ Fail Hastag_Khóa học_Case6');
        await page.getByRole('textbox', { name: 'Link liên kết' }).click();
        await page.getByRole('textbox', { name: 'Link liên kết' }).fill(dataSiteTest[1].linkSite + "/khoa-hoc");
        await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
        await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Hashtag đã tồn tại!')).toBeVisible();
        // Truy cập Web kiểm tra hiển thị -> Click link liên kết
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page.getByRole('link', { name: 'QA_ Fail Hastag_Khóa học_Case6' })).toBeVisible();
        await page.getByRole('link', { name: 'QA_ Fail Hastag_Khóa học_Case6' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        // Truy cập CMS xóa Hastag vừa thêm 
        await page.goto(dataSiteTest[0].linkSite + "/tags");
        await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_ Fail Hastag_Khóa học_Case6' })
            .locator('i')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
        // Truy cập Web kiểm tra sau xóa
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page.getByRole('link', { name: 'QA_ Fail Hastag_Khóa học_Case6' })).not.toBeVisible();

    });
}

/**
 * Case 7: Thành công : Thêm hastag - Trạng thái Ẩn
 * Mong muốn: Không hiển thị trên Web
 */

function case7() {
    test('Case 7: Pass - Ẩn', async ({ page }) => {

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
        await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/tags");
        await expect(page.getByRole('heading', { name: 'Danh sách Tags' })).toBeVisible();
        // Click btn Thêm Tag mới
        await page.getByRole('button', { name: 'Thêm Tag mới' }).click();
        await expect(page.getByRole('heading', { name: 'Thêm tag mới' })).toBeVisible();
        // Nhập tên Hastag
        await page.getByRole('textbox', { name: 'Hashtag *' }).click();
        await page.getByRole('textbox', { name: 'Hashtag *' }).fill('QA_Hastag chân trang_Khóa học_Case7');
        // Nhập link liên kết
        await page.getByRole('textbox', { name: 'Link liên kết' }).click();
        await page.getByRole('textbox', { name: 'Link liên kết' }).fill(dataSiteTest[1].linkSite + "/khoa-hoc");
        // Chọn trang hiển thị 
        await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
        await page.getByRole('treeitem', { name: 'Hiện thị chân trang' }).click();
        // Chọn trạng thái Ẩn 
        await page.locator('select#tags_status').click();
        await page.locator('select#tags_status').selectOption('0');
        // Click bth Lưu
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm thành công!')).toBeVisible();
        // Truy cập Web kiểm tra hiển thị trang Trang chủ -> Click link liên kết
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page.getByRole('link', { name: 'QA_Hastag chân trang_Khóa học_Case7' }).nth(0)).not.toBeVisible();
        // Truy cập Web kiểm tra không hiển thị trang 404
        await page.goto(dataSiteTest[1].linkSite + "/1234567");
        await expect(page.getByRole('link', { name: 'QA_Hastag chân trang_Khóa học_Case7' }).nth(1)).not.toBeVisible();
        // Truy cập CMS xóa Hastag vừa thêm 
        await page.goto(dataSiteTest[0].linkSite + "/tags");
        await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Hastag chân trang_Khóa học_Case7' })
            .locator('i')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();

    });
}

function main() {
    case1();
    case2();
    case3();
    case4();
    case5();
    case6();
    case7();

}
main();
