// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Thêm mới chủ đề -> Hiển thị Khóa học
 * Mong muốn: Hiển thị Khóa học -> Không hiển thị Khóa học của tôi - Giới thiệu 
 */

function case1 () {
    test('Case 1: Pass - Hiển thị Khóa học ', async ({ page }) => {
    
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
    // Click btn Thêm mới chủ đề 
    await page.getByRole('button', { name: 'Thêm chủ đề mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm chủ đề mới' })).toBeVisible();
    // Nhập tên chủ đề 
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).click();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_CD-KH_Pass_Kỹ năng sống_Case1');
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trang hiển thị - Khóa học
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    // Chọn Trạng thái - Hoạt động
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    // Chọn Ưu tiên - Ưu tiên 
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị
    // [Trước đăng nhập] - Trang khóa học => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_CD-KH_Pass_Kỹ năng sống_Case1')).toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD-KH_Pass_Kỹ năng sống_Case1')).not.toBeVisible();
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
    await expect(page.getByText('QA_CD-KH_Pass_Kỹ năng sống_Case1').nth(2)).not.toBeVisible();
    // Truy cập CMS xóa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD-KH_Pass_Kỹ năng sống_Case1' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_CD-KH_Pass_Kỹ năng sống_Case1')).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Thêm mới chủ đề -> Hiển thị Giới thiệu
 * Mong muốn: Hiển thị Giới thiệu  -> Không hiển thị Khóa học của tôi - Khóa học
 */

function case2 () {
    test('Case 2: Pass - Hiển thị Giới thiệu ', async ({ page }) => {
    
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
    // Click btn Thêm mới chủ đề 
    await page.getByRole('button', { name: 'Thêm chủ đề mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm chủ đề mới' })).toBeVisible();
    // Nhập tên chủ đề 
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).click();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_CD-GT_Pass_Kỹ năng sống_Case2');
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trang hiển thị 
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang giới thiệu' }).click();
    // Chọn Trạng thái - Hoạt động
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    // Chọn Ưu tiên - Ưu tiên 
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị
    // [Trước đăng nhập] - Trang khóa học => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_CD-GT_Pass_Kỹ năng sống_Case2')).not.toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD-GT_Pass_Kỹ năng sống_Case2')).toBeVisible();
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
    await expect(page.getByText('QA_CD-GT_Pass_Kỹ năng sống_Case2').nth(2)).not.toBeVisible();
    // Truy cập CMS xóa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD-GT_Pass_Kỹ năng sống_Case2' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/gioi-thieu");
    await expect(page.getByText('QA_CD-GT_Pass_Kỹ năng sống_Case2')).not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Thêm mới chủ đề -> Hiển thị Khóa học của tôi
 * Mong muốn: Hiển thị Khóa học của tôi  -> Không hiển thị Giới thiệu - Khóa học
 */

function case3 () {
    test('Case 3: Pass - Hiển thị Khóa học của tôi ', async ({ page }) => {
    
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
    // Click btn Thêm mới chủ đề 
    await page.getByRole('button', { name: 'Thêm chủ đề mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm chủ đề mới' })).toBeVisible();
    // Nhập tên chủ đề 
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).click();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_CD-KHCT_Pass_Kỹ năng sống_Case3');
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trang hiển thị 
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học của tôi' }).click();
    // Chọn Trạng thái - Hoạt động
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    // Chọn Ưu tiên - Ưu tiên 
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị
    // [Trước đăng nhập] - Trang khóa học => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_CD-KHCT_Pass_Kỹ năng sống_Case3')).not.toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD-KHCT_Pass_Kỹ năng sống_Case3')).not.toBeVisible();
    // [Sau đăng nhập] - Trang khóa học của tôi => Hiển thị 
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
    await expect(page.getByText('QA_CD-KHCT_Pass_Kỹ năng sống_Case3').nth(2)).toBeVisible();
    // Truy cập CMS xóa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD-KHCT_Pass_Kỹ năng sống_Case3' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await page.waitForTimeout(1000);
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Khóa học của tôi', exact: true }).click();
    await expect(page.getByText('QA_CD-KHCT_Pass_Kỹ năng sống_Case3').nth(2)).not.toBeVisible();

});
}

/**
 * Case 4: Thành công : Thêm mới chủ đề -> Hiển thị Giới thiệu - Khóa học - Khóa học của tôi
 * Mong muốn: Hiển thị Giới thiệu - Khóa học - Khóa học của tôi  
 */

function case4 () {
    test('Case 4: Pass - Hiển thị Khóa học của tôi ', async ({ page }) => {
    
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
    // Click btn Thêm mới chủ đề 
    await page.getByRole('button', { name: 'Thêm chủ đề mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm chủ đề mới' })).toBeVisible();
    // Nhập tên chủ đề 
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).click();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_CD-All_Pass_Kỹ năng sống_Case4');
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trang hiển thị 
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang giới thiệu' }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học của tôi' }).click();
    // Chọn Trạng thái - Hoạt động
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    // Chọn Ưu tiên - Ưu tiên 
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị
    // [Trước đăng nhập] - Trang khóa học => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_CD-All_Pass_Kỹ năng sống_Case4')).toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD-All_Pass_Kỹ năng sống_Case4')).toBeVisible();
    // [Sau đăng nhập] - Trang khóa học của tôi => Hiển thị 
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
    await expect(page.getByText('QA_CD-All_Pass_Kỹ năng sống_Case4').nth(2)).toBeVisible();
    // Truy cập CMS xóa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD-All_Pass_Kỹ năng sống_Case4' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra không hiển thị 
    // [Trước đăng nhập] - Trang khóa học => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByText('QA_CD-All_Pass_Kỹ năng sống_Case4')).not.toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD-All_Pass_Kỹ năng sống_Case4')).not.toBeVisible();
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
    await expect(page.getByText('QA_CD-All_Pass_Kỹ năng sống_Case4').nth(2)).not.toBeVisible();

});
}

/**
 * Case 5: Thành công : Thêm mới chủ đề -> Hiển thị trạng thái Ẩn Giới thiệu - Khóa học - Khóa học của tôi
 * Mong muốn: Không hiển thị Giới thiệu - Khóa học - Khóa học của tôi  
 */

function case5 () {
    test('Case 5: Pass - Trạng thái Ẩn ', async ({ page }) => {
    
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
    // Click btn Thêm mới chủ đề 
    await page.getByRole('button', { name: 'Thêm chủ đề mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm chủ đề mới' })).toBeVisible();
    // Nhập tên chủ đề 
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).click();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_CD-Ẩn_Pass_Kỹ năng sống_Case5');
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trang hiển thị 
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang giới thiệu' }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học của tôi' }).click();
    // Chọn Trạng thái - Hoạt động
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').selectOption('0');
    // Chọn Ưu tiên - Ưu tiên 
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị
    // [Trước đăng nhập] - Trang khóa học => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_CD-Ẩn_Pass_Kỹ năng sống_Case5')).not.toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị  
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD-Ẩn_Pass_Kỹ năng sống_Case5')).not.toBeVisible();
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
    await expect(page.getByText('QA_CD-Ẩn_Pass_Kỹ năng sống_Case5').nth(2)).not.toBeVisible();
    // Truy cập CMS xóa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page.getByPlaceholder('Nhập từ khóa tìm kiếm...').fill('QA_CD-Ẩn_Pass_Kỹ năng sống_Case5');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Tìm kiếm' }).click();
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD-Ẩn_Pass_Kỹ năng sống_Case5' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 6: Không thành công : để trống trường thông tin bắt buộc 
 */

function case6 () {
    test('Case 6: Fail-Để trống trường ', async ({ page }) => {
    
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
    // Click btn Thêm mới chủ đề 
    await page.getByRole('button', { name: 'Thêm chủ đề mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm chủ đề mới' })).toBeVisible();
    // Nhập tên chủ đề 
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).click();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('');
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('');
    // Chọn trang hiển thị 
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).fill('');
    // Chọn Trạng thái - Hoạt động
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*');
    // Chọn Ưu tiên - Ưu tiên 
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng nhập tiêu đề!')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập số thứ tự!')).toBeVisible();
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD-All_Pass_Kỹ năng sống_Case4' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    
});
}


/**
 * Case 7: Không thành công : nhập vị trí hiển thị là số âm
 */

function case7 () {
    test('Case 7: Fail-Vị trí là số âm ', async ({ page }) => {
    
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
    // Click btn Thêm mới chủ đề 
    await page.getByRole('button', { name: 'Thêm chủ đề mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm chủ đề mới' })).toBeVisible();
    // Nhập tên chủ đề 
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).click();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_Fail_Vị trí âm_Case7');
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('-1');
    // Chọn trang hiển thị 
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).fill('');
    // Chọn Trạng thái - Hoạt động
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*');
    // Chọn Ưu tiên - Ưu tiên 
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng nhập vị trí hiển thị lớn hơn hoặc bằng 0!')).toBeVisible();

});
}

/**
 * Case 8: Thành công : Thêm mới chủ đề -> Hiển thị Khóa học
 * Mong muốn: Hiển thị Khóa học -> Không hiển thị Khóa học của tôi - Giới thiệu 
 */

function case8 () {
    test('Case 8: Fail-Trùng tiêu đề ', async ({ page }) => {
    
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
    // Click btn Thêm mới chủ đề 1
    await page.getByRole('button', { name: 'Thêm chủ đề mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm chủ đề mới' })).toBeVisible();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).click();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_Fail_Pass_Kỹ năng sống_Case8');
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
    // Click btn Thêm mới chủ đề 2
    await page.getByRole('button', { name: 'Thêm chủ đề mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm chủ đề mới' })).toBeVisible();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).click();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_Fail_Pass_Kỹ năng sống_Case8');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Tiêu đề đã tồn tại!')).toBeVisible();
    await page.getByRole('button', { name: 'Đóng' }).click();
    // Xóa chủ đề 
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail_Pass_Kỹ năng sống_Case8' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra không hiển thị 
    // [Trước đăng nhập] - Trang khóa học => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_Fail_Pass_Kỹ năng sống_Case8')).not.toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_Fail_Pass_Kỹ năng sống_Case8')).not.toBeVisible();
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
    await expect(page.getByText('QA_Fail_Pass_Kỹ năng sống_Case8').nth(2)).not.toBeVisible();
    
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



