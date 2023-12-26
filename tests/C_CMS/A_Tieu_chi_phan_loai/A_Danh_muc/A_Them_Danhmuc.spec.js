// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Thêm mới danh mục -> Hiển thị Trang chủ 
 * Mong muốn: Hiển thị Trang chủ -> Không hiển thị trang Khóa học - Cổng thi
 */

function case1 () {
    test('Case 1: Pass - Hiển thị Trang chủ ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Click btn Thêm danh mục mới 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    // Nhập tên danh mục
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_TC_Học sinh tiểu học_Case1');
    // Chọn vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trang hiển thị Trang chủ
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang chủ' }).click();
    // Chọn trạng thái : Hoạt động
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    // Chọn Ưu tiên :Ưu tiên
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case1' })).toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case1' })).not.toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case1' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục mới thêm
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_TC_Học sinh tiểu học_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra sau Xóa 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case1' })).not.toBeVisible();
    

});
}

/**
 * Case 2: Thành công : Thêm mới danh mục -> Hiển thị Khóa học
 * Mong muốn: Hiển thị trang Khóa học -> Không hiển thị Trang chủ - Cổng thi 
 */

function case2 () {
    test('Case 2: Pass - Hiển thị Khóa học ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Click btn Thêm danh mục mới 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    // Nhập tên danh mục
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_KH_Học sinh tiểu học_Case2');
    // Chọn vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trang hiển thị Khóa học
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học' }).click();
    // Chọn trạng thái : Hoạt động
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    // Chọn Ưu tiên :Ưu tiên
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_KH_Học sinh tiểu học_Case2' })).toBeVisible();
    await page.locator('a').first().click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_KH_Học sinh tiểu học_Case2' })).not.toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_KH_Học sinh tiểu học_Case2' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục mới thêm
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_KH_Học sinh tiểu học_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra sau Xóa
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_KH_Học sinh tiểu học_Case2' })).not.toBeVisible();
});
}

/**
 * Case 3: Thành công : Thêm mới danh mục -> - Hiển thị Cổng thi
 * Mong muốn: Hiển thị trang Cổng thi -> Không hiển thị Trang chủ - Khóa học
 */

function case3 () {
    test('Case 3: Pass - Hiển thị Cổng thi ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Click btn Thêm danh mục mới 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    // Nhập tên danh mục
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_CT_Học sinh tiểu học_Case3');
    // Chọn vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trang hiển thị Cổng thi
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang cổng thi' }).click();
    // Chọn trạng thái : Hoạt động
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    // Chọn Ưu tiên :Ưu tiên
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_CT_Học sinh tiểu học_Case3' })).toBeVisible();
    await page.locator('a').first().click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_CT_Học sinh tiểu học_Case3' })).not.toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_CT_Học sinh tiểu học_Case3' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục mới thêm
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_CT_Học sinh tiểu học_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra sau Xóa
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_CT_Học sinh tiểu học_Case3' })).not.toBeVisible();

});
}

/**
 * Case 4: Thành công : Thêm mới danh mục -> Hiển thị Trang chủ - Khóa học Cổng thi
 * Mong muốn:  Hiển thị Trang chủ - Khóa học Cổng thi
 */

function case4 () {
    test('Case 4: Pass - Hiển thị TC-KH-CT ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Click btn Thêm danh mục mới 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    // Nhập tên danh mục
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_TC-KH-CT_Học sinh tiểu học_Case4');
    // Chọn vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trang hiển thị Trang chủ - Khóa học - Cổng thi
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học' }).click();
    await page.getByRole('listitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang cổng thi' }).click();
    // Chọn trạng thái : Hoạt động
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    // Chọn Ưu tiên :Ưu tiên
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case4' })).toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case4' })).toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case4' })).toBeVisible();
    // Truy cập CMS xóa danh mục mới thêm
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra sau Xóa
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case4' })).not.toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case4' })).not.toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM_TC-KH-CT_Học sinh tiểu học_Case4' })).not.toBeVisible();

});
}


/**
 * Case 5: Không thành công : Thêm mới danh mục - không nhập tiêu đề - vị trí hiển thị
 * Mong muốn: Hiển thị thông báo lỗi
 */

function case5 () {
    test('Case 5: Fail - Để trống tiêu đề ', async ({ page }) => {
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Click btn Thêm danh mục mới 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    // Nhập tên danh mục - Để trống
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('');
    // Vị trí hiển thị - Để trống 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).clear();
    // Click btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng nhập tiêu đề !')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập số thứ tự !')).toBeVisible();

});
}

/**
 * Case 6: Không thành công : Thêm mới danh mục - không chọn trang hiển thị 
 * Mong muốn: Web không hiển thị danh mục đó 
 */

function case6 () {
    test('Case 6: Fail - Không chọn trang hiển thị ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Click btn Thêm danh mục mới 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    // Nhập tên danh mục
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM Fail_Học sinh tiểu học_Case5');
    // Chọn vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Không click trang hiển thị
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' });
    // Chọn trạng thái : Hoạt động
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    // Chọn Ưu tiên :Ưu tiên
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị - Trang chủ
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM Fail_Học sinh tiểu học_Case5' })).not.toBeVisible();
    // Truy cập Web kiểm tra hiển thị - Khóa học
    await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM Fail_Học sinh tiểu học_Case5' })).not.toBeVisible();
    // Truy cập Web kiểm tra hiển thị - Cổng thi
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.getByRole('main').getByRole('link', { name: 'QA_DMM Fail_Học sinh tiểu học_Case5' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục mới thêm
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM Fail_Học sinh tiểu học_Case5' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 7: Không thành công : Thêm mới danh mục - click btn Đóng
 * Mong muốn: Không hiển thị danh mục trong danh sách
 */

function case7 () {
    test('Case 7: Fail - Click btn Đóng ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Click btn Thêm danh mục mới 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    // Nhập tên danh mục
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM Fail_Học sinh tiểu học_Case6');
    // Chọn vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trang hiển thị Trang chủ
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang cổng thi' }).click();
    // Chọn trạng thái : Hoạt động
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    // Chọn Ưu tiên :Ưu tiên
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click Btn Đóng
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('cell', { name: 'QA_DMM Fail_Học sinh tiểu học_Case6' })).not.toBeVisible();

});
}

/**
 * Case 8: Không thành công : Thêm mới danh mục - trùng danh mục đã tồn tại trên hệ thống 
 * Mong muốn: Hiển thị thông báo lỗi 
 */

function case8 () {
    test('Case 8: Fail - Trùng danh mục ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Thêm mới danh mục 1 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_Fail_Học sinh tiểu học_Case8');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Thêm mới danh mục 2 trùng danh mục 1 
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_Fail_Học sinh tiểu học_Case8');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang chủ' }).click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Tiêu đề đã tồn tại!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_Fail_Học sinh tiểu học_Case8' })).toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_Fail_Học sinh tiểu học_Case8' })).not.toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_Fail_Học sinh tiểu học_Case8' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục mới thêm
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_Fail_Học sinh tiểu học_Case8' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra sau Xóa 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_Fail_Học sinh tiểu học_Case8' })).not.toBeVisible();

});
}

/**
 * Case 9: Thành công : Thêm mới danh mục -> Hiển thị Trang chủ - trạng thái Ẩn 
 * Mong muốn: không hiển thị danh mục trên Web
 */

function case9 () {
    test('Case 9: Pass - Trạng thái Ẩn ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Danh mục 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Danh mục' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục' })).toBeVisible();
    // Click btn Thêm danh mục mới 
    await page.getByRole('button', { name: 'Thêm danh mục mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm danh mục mới' })).toBeVisible();
    // Nhập tên danh mục
    await page.getByLabel('Tên danh mục\n*', { exact: true }).click();
    await page.getByLabel('Tên danh mục\n*', { exact: true }).fill('QA_DMM_TC_Học sinh tiểu học_Case9');
    // Chọn vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trang hiển thị Trang chủ
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang chủ' }).click();
    // Chọn trạng thái : Ẩn
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Trạng thái\n*').selectOption('0');
    // Chọn Ưu tiên :Ưu tiên
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm danh mục mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click Btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case9' })).not.toBeVisible();
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case9' })).not.toBeVisible();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case9' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục mới thêm
    await page.goto(dataSiteTest[0].linkSite + "/course-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_DMM_TC_Học sinh tiểu học_Case9' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra sau Xóa 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_DMM_TC_Học sinh tiểu học_Case9' })).not.toBeVisible();

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
    case9();

}
main()