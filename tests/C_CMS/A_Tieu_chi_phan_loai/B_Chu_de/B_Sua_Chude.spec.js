// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Sửa chủ đề hiển thị Khóa học sang Giới thiệu
 */
function case1 () {
    test('Case 1: Pass-Sửa KH sang GT ', async ({ page }) => {
    
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
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_CD-ThêmKH_Pass_Kỹ năng sống_Case1');
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
    await expect(page.getByText('QA_CD-ThêmKH_Pass_Kỹ năng sống_Case1')).toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD-ThêmKH_Pass_Kỹ năng sống_Case1')).not.toBeVisible();
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
    await expect(page.getByText('QA_CD-ThêmKH_Pass_Kỹ năng sống_Case1').nth(2)).not.toBeVisible();
    await page.waitForTimeout(1000);
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    // Truy cập CMS sửa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD-ThêmKH_Pass_Kỹ năng sống_Case1' })
            .locator('a')
            .nth(0)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa chủ đề' })).toBeVisible();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tên chủ đề', exact: true }).click();
    await page.getByRole('textbox', { name: 'Tên chủ đề', exact: true }).fill('QA_CD-SửaGT_Pass_Kỹ năng sống_Case1');
    // Sửa trang hiển thị 
    await page.getByTitle(' Hiện thị trang khóa học ').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang giới thiệu' }).click();
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa
    // [Trước đăng nhập] - Trang khóa học => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_CD-SửaGT_Pass_Kỹ năng sống_Case1')).not.toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD-SửaGT_Pass_Kỹ năng sống_Case1')).toBeVisible();
    // Truy cập CMS xóa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD-SửaGT_Pass_Kỹ năng sống_Case1' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị
    await page.goto(dataSiteTest[1].linkSite + "/gioi-thieu");
    await expect(page.getByText('QA_CD-SửaGT_Pass_Kỹ năng sống_Case1')).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Sửa chủ đề hiển thị Giới thiệu sang Khóa học của tôi
 */
function case2 () {
    test('Case 2: Pass-Sửa GT sang KHCT ', async ({ page }) => {
    
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
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_CD-ThêmGT_Pass_Kỹ năng sống_Case2');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang giới thiệu' }).click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // [Trước đăng nhập] - Trang khóa học => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_CD-ThêmGT_Pass_Kỹ năng sống_Case2')).not.toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD-ThêmGT_Pass_Kỹ năng sống_Case2')).toBeVisible();
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
    await expect(page.getByText('QA_CD-ThêmGT_Pass_Kỹ năng sống_Case2').nth(2)).not.toBeVisible();
    await page.waitForTimeout(1000);
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    // Truy cập CMS sửa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD-ThêmGT_Pass_Kỹ năng sống_Case2' })
            .locator('a')
            .nth(0)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa chủ đề' })).toBeVisible();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tên chủ đề', exact: true }).click();
    await page.getByRole('textbox', { name: 'Tên chủ đề', exact: true }).fill('QA_CD-SửaKHCT_Pass_Kỹ năng sống_Case2');
    // Sửa trang hiển thị 
    await page.getByTitle(' Hiện thị trang giới thiệu ').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học của tôi' }).click();
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa
    // [Trước đăng nhập] - Trang giới thiệu =>Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/gioi-thieu");
    await expect(page.getByText('QA_CD-SửaKHCT_Pass_Kỹ năng sống_Case2')).not.toBeVisible();
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
    await expect(page.getByText('QA_CD-SửaKHCT_Pass_Kỹ năng sống_Case2').nth(2)).toBeVisible();
    // Truy cập CMS xóa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD-SửaKHCT_Pass_Kỹ năng sống_Case2' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // [Sau đăng nhập] - Trang khóa học của tôi => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Khóa học của tôi', exact: true }).click();
    await expect(page.getByText('QA_CD-SửaKHCT_Pass_Kỹ năng sống_Case2').nth(2)).not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Sửa chủ đề hiển thị hiển thị thêm trang Giới thiệu - Khóa học của tôi
 */
function case3 () {
    test('Case 3: Pass-Sửa hiển thị thêm GT-KHCT ', async ({ page }) => {
    
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
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_CD-ThêmKH_Pass_Kỹ năng sống_Case3');
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
    await expect(page.getByText('QA_CD-ThêmKH_Pass_Kỹ năng sống_Case3')).toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị  
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD-ThêmKH_Pass_Kỹ năng sống_Case3')).not.toBeVisible();
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
    await expect(page.getByText('QA_CD-ThêmKH_Pass_Kỹ năng sống_Case3').nth(2)).not.toBeVisible();
    await page.waitForTimeout(1000);
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    // Truy cập CMS sửa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD-ThêmKH_Pass_Kỹ năng sống_Case3' })
            .locator('a')
            .nth(0)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa chủ đề' })).toBeVisible();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tên chủ đề', exact: true }).click();
    await page.getByRole('textbox', { name: 'Tên chủ đề', exact: true }).fill('QA_CD-Sửa All_Pass_Kỹ năng sống_Case3');
    // Sửa trang hiển thị 
    await page.getByRole('listitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang giới thiệu' }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học của tôi' }).click();
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa
    // [Trước đăng nhập] - Trang khóa học => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_CD-Sửa All_Pass_Kỹ năng sống_Case3')).toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD-Sửa All_Pass_Kỹ năng sống_Case3')).toBeVisible();
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
    await expect(page.getByText('QA_CD-Sửa All_Pass_Kỹ năng sống_Case3').nth(2)).toBeVisible();
    await page.waitForTimeout(1000);
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    // Truy cập CMS xóa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CD-Sửa All_Pass_Kỹ năng sống_Case3' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // [Trước đăng nhập] - Trang khóa học => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_CD-Sửa All_Pass_Kỹ năng sống_Case3')).not.toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị  
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_CD-Sửa All_Pass_Kỹ năng sống_Case3')).not.toBeVisible();
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
    await expect(page.getByText('QA_CD-Sửa All_Pass_Kỹ năng sống_Case3').nth(2)).not.toBeVisible();
    await page.waitForTimeout(1000);
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();

});
}

/**
 * Case 4: Thành công : Sửa chủ đề trạng thái Hoạt động sang Ẩn
 */

function case4 () {
    test('Case 4: Pass-Hoạt động sang Ẩn ', async ({ page }) => {
    
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
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_Thêm CD_Kỹ năng sống_Case4');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang giới thiệu' }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học của tôi' }).click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm 
    // [Trước đăng nhập] - Trang khóa học => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_Thêm CD_Kỹ năng sống_Case4')).toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_Thêm CD_Kỹ năng sống_Case4')).toBeVisible();
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
    await expect(page.getByText('QA_Thêm CD_Kỹ năng sống_Case4').nth(2)).toBeVisible();
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    // Truy cập CMS sửa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm CD_Kỹ năng sống_Case4' })
            .locator('a')
            .nth(0)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa chủ đề' })).toBeVisible();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tên chủ đề', exact: true }).click();
    await page.getByRole('textbox', { name: 'Tên chủ đề', exact: true }).fill('QA_Hoạt động sang Ẩn_Pass_Kỹ năng sống_Case4');
    // Sửa trạng thái
    await page.locator('select#edit_topic_status').click();
    await page.locator('select#edit_topic_status').selectOption('0');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa
    // [Trước đăng nhập] - Trang khóa học => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_Hoạt động sang Ẩn_Pass_Kỹ năng sống_Case4')).not.toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_Hoạt động sang Ẩn_Pass_Kỹ năng sống_Case4')).not.toBeVisible();
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
    await expect(page.getByText('QA_Hoạt động sang Ẩn_Pass_Kỹ năng sống_Case4').nth(2)).not.toBeVisible();
    // Truy cập CMS xóa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page.getByPlaceholder('Nhập từ khóa tìm kiếm...').fill('QA_Hoạt động sang Ẩn_Pass_Kỹ năng sống_Case4');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Tìm kiếm' }).click();
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Hoạt động sang Ẩn_Pass_Kỹ năng sống_Case4' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 5: Thành công : Sửa chủ đề trạng thái Ẩn sang Hoạt động
 */

function case5 () {
    test('Case 5: Pass-Ẩn sang Hoạt động ', async ({ page }) => {
    
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
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_Thêm CD_Kỹ năng sống_Case5');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang giới thiệu' }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học của tôi' }).click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').selectOption('0');
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm 
    // [Trước đăng nhập] - Trang khóa học => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_Thêm CD_Kỹ năng sống_Case5')).not.toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị  
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_Thêm CD_Kỹ năng sống_Case5')).not.toBeVisible();
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
    await expect(page.getByText('QA_Thêm CD_Kỹ năng sống_Case5').nth(2)).not.toBeVisible();
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    // Truy cập CMS sửa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page.getByPlaceholder('Nhập từ khóa tìm kiếm...').fill('QA_Thêm CD_Kỹ năng sống_Case5');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Tìm kiếm' }).click();
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm CD_Kỹ năng sống_Case5' })
            .locator('a')
            .nth(0)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa chủ đề' })).toBeVisible();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tên chủ đề', exact: true }).click();
    await page.getByRole('textbox', { name: 'Tên chủ đề', exact: true }).fill('QA_Ẩn sang Hoạt động_Pass_Kỹ năng sống_Case5');
    // Sửa trạng thái
    await page.locator('select#edit_topic_status').click();
    await page.locator('select#edit_topic_status').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa 
    // [Trước đăng nhập] - Trang khóa học => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_Ẩn sang Hoạt động_Pass_Kỹ năng sống_Case5')).toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Hiển thị  
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_Ẩn sang Hoạt động_Pass_Kỹ năng sống_Case5')).toBeVisible();
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
    await expect(page.getByText('QA_Ẩn sang Hoạt động_Pass_Kỹ năng sống_Case5').nth(2)).toBeVisible();
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    // Truy cập CMS xóa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Ẩn sang Hoạt động_Pass_Kỹ năng sống_Case5' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa 
    // [Trước đăng nhập] - Trang khóa học => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_Ẩn sang Hoạt động_Pass_Kỹ năng sống_Case5')).not.toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Hiển thị  
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_Ẩn sang Hoạt động_Pass_Kỹ năng sống_Case5')).not.toBeVisible();
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
    await expect(page.getByText('QA_Ẩn sang Hoạt động_Pass_Kỹ năng sống_Case5').nth(2)).not.toBeVisible();
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();

});
}

/**
 * Case 6: Không thành công: do click btn Đóng
 */

function case6 () {
    test('Case 6: Fail-Click btn Đóng', async ({ page }) => {
    
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
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_Fail CD_Kỹ năng sống_Case6');
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
    await expect(page.getByText('QA_Fail CD_Kỹ năng sống_Case6')).toBeVisible();
    // [Trước đăng nhập] - Trang giới thiệu => Không hiển thị  
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Giới thiệu' }).click();
    await expect(page.getByText('QA_Fail CD_Kỹ năng sống_Case6')).not.toBeVisible();
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
    await expect(page.getByText('QA_Fail CD_Kỹ năng sống_Case6').nth(2)).not.toBeVisible();
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    // Truy cập CMS sửa chủ đề 
    await page.goto(dataSiteTest[0].linkSite + "/course-topic");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail CD_Kỹ năng sống_Case6' })
            .locator('a')
            .nth(0)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa chủ đề' })).toBeVisible();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tên chủ đề', exact: true }).click();
    await page.getByRole('textbox', { name: 'Tên chủ đề', exact: true }).fill('QA_Sửa Fail CD_Kỹ năng sống_Case6');
    // Sửa trang hiển thị 
    await page.getByRole('listitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang giới thiệu' }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học của tôi' }).click();
    // Click btn Đóng 
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Cập nhật thành công!')).not.toBeVisible();
    // Truy cập CMS xóa chủ đề 
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail CD_Kỹ năng sống_Case6' })
            .locator('a')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa 
    // [Trước đăng nhập] - Trang khóa học => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByText('QA_Fail CD_Kỹ năng sống_Case6')).not.toBeVisible();
    
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
