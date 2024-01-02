// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../../dataSite.json';

/**
 * Case 1: Thành công : Sửa hiển thị Sản phẩm sang Hướng dẫn 
 */

function case1 () {
    test('Case 1: Pass - SP sang HD', async ({ page }) => {
    
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
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/support-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Thêm danh mục hỗ trợ 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Thêm Sản phẩm_Đại học_Case 1");
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Sản phẩm" }).click();
    await page.locator('select#status').selectOption('1');
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Thêm Sản phẩm_Đại học_Case 1' })).toBeVisible();
    // Truy cập Web - Hướng dẫn => Không hiển thị 
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Thêm Sản phẩm_Đại học_Case 1' })).not.toBeVisible();
    // Truy cập Web - Chính sách => Không hiển thị 
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Thêm Sản phẩm_Đại học_Case 1' })).not.toBeVisible();
    // Truy cập CMS sửa danh mục hỗ trợ
    await page.goto(dataSiteTest[0].linkSite + "/support-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm Sản phẩm_Đại học_Case 1' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Sửa Hướng dẫn_Đại học_Case 1");
    // Sửa chọn loại 
    await page.getByRole('textbox', { name: 'Sản phẩm' }).click();
    await page.getByRole("treeitem", { name: "Hướng dẫn" }).click();
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Cập nhật thành công!")).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau sửa
    // Truy cập Web - Sản phẩm => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Sửa Hướng dẫn_Đại học_Case 1' })).not.toBeVisible();
    // Truy cập Web - Hướng dẫn => Hiển thị 
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa Hướng dẫn_Đại học_Case 1' })).toBeVisible();
    // Truy cập CMS xóa danh mục hỗ trợ
    await page.goto(dataSiteTest[0].linkSite + "/support-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa Hướng dẫn_Đại học_Case 1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa
    /// Truy cập Web - Hướng dẫn => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");    
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa Hướng dẫn_Đại học_Case 1' })).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Sửa hiển thị Hướng dẫn sang Chính sách
 */

function case2 () {
    test('Case 2: Pass - HD sang CS', async ({ page }) => {
    
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
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/support-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Thêm danh mục hỗ trợ 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Thêm Hướng dẫn_Đại học_Case 2");
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Hướng dẫn" }).click();
    await page.locator('select#status').selectOption('1');
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm => Không hiển thị
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Thêm Hướng dẫn_Đại học_Case 2' })).not.toBeVisible();
    // Truy cập Web - Hướng dẫn =>  Hiển thị 
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Thêm Hướng dẫn_Đại học_Case 2' })).toBeVisible();
    // Truy cập Web - Chính sách => Không hiển thị 
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Thêm Hướng dẫn_Đại học_Case 2' })).not.toBeVisible();
    // Truy cập CMS sửa danh mục hỗ trợ
    await page.goto(dataSiteTest[0].linkSite + "/support-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm Hướng dẫn_Đại học_Case 2' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Sửa chính sách_Đại học_Case 2");
    // Sửa chọn loại 
    await page.getByRole('textbox', { name: 'Hướng dẫn' }).click();
    await page.getByRole("treeitem", { name: "Chính sách" }).click();
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Cập nhật thành công!")).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau sửa
    // Truy cập Web - Hướng dẫn => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa chính sách_Đại học_Case 2' })).not.toBeVisible();
    // Truy cập Web - Chính sách => Hiển thị 
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa chính sách_Đại học_Case 2' })).toBeVisible();
    // Truy cập CMS xóa danh mục hỗ trợ
    await page.goto(dataSiteTest[0].linkSite + "/support-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa chính sách_Đại học_Case 2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa
    /// Truy cập Web - Chính sách => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");    
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa chính sách_Đại học_Case 2' })).not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Sửa trạng thái Hoạt động sang Ẩn
 */

function case3 () {
    test('Case 3: Pass - Hoạt động sang Ẩn', async ({ page }) => {
    
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
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/support-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Thêm danh mục hỗ trợ 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Hoạt động sang Ẩn_Đại học_Case 3");
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Sản phẩm" }).click();
    await page.locator('select#status').selectOption('1');
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Hoạt động sang Ẩn_Đại học_Case 3' })).toBeVisible();
    // Truy cập Web - Hướng dẫn => Không hiển thị 
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Hoạt động sang Ẩn_Đại học_Case 3' })).not.toBeVisible();
    // Truy cập Web - Chính sách => Không hiển thị 
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Hoạt động sang Ẩn_Đại học_Case 3' })).not.toBeVisible();
    // Truy cập CMS sửa danh mục hỗ trợ
    await page.goto(dataSiteTest[0].linkSite + "/support-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Hoạt động sang Ẩn_Đại học_Case 3' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Sửa Hoạt động sang Ẩn_Đại học_Case 3");
    // Sửa trạng thái Hoạt động sang ẩn
    await page.locator('select#edit_status').selectOption('0');
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Cập nhật thành công!")).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau sửa
    // Truy cập Web - Sản phẩm => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Sửa Hoạt động sang Ẩn_Đại học_Case 3' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục hỗ trợ
    await page.goto(dataSiteTest[0].linkSite + "/support-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa Hoạt động sang Ẩn_Đại học_Case 3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 4: Thành công : Sửa trạng thái Ẩn sang Hoạt động
 */

function case4 () {
    test('Case 4: Pass - Ẩn sang Hoạt động', async ({ page }) => {
    
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
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/support-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Thêm danh mục hỗ trợ 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Ẩn sang Hoạt động_Đại học_Case 4");
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Sản phẩm" }).click();
    await page.locator('select#status').selectOption('0');
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Ẩn sang Hoạt động_Đại học_Case 4' })).not.toBeVisible();
    // Truy cập Web - Hướng dẫn => Không hiển thị 
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Ẩn sang Hoạt động_Đại học_Case 4' })).not.toBeVisible();
    // Truy cập Web - Chính sách => Không hiển thị 
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Ẩn sang Hoạt động_Đại học_Case 4' })).not.toBeVisible();
    // Truy cập CMS sửa danh mục hỗ trợ
    await page.goto(dataSiteTest[0].linkSite + "/support-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Ẩn sang Hoạt động_Đại học_Case 4' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Sửa Ẩn sang Hoạt động_Đại học_Case 4");
    // Sửa trạng thái Hoạt động sang ẩn
    await page.locator('select#edit_status').selectOption('1');
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Cập nhật thành công!")).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau sửa
    // Truy cập Web - Sản phẩm => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Sửa Ẩn sang Hoạt động_Đại học_Case 4' })).toBeVisible();
    // Truy cập CMS xóa danh mục hỗ trợ
    await page.goto(dataSiteTest[0].linkSite + "/support-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa Ẩn sang Hoạt động_Đại học_Case 4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Sản phẩm => Không hiển thị
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Sửa Ẩn sang Hoạt động_Đại học_Case 4' })).not.toBeVisible();
 
});
}

/**
 * Case 5: Không thành công do click btn Đóng
 */

function case5 () {
    test('Case 5: Fail - click btn Đóng', async ({ page }) => {
    
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
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/support-category");
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Thêm danh mục hỗ trợ 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Fail_Đại học_Case 5");
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Sản phẩm" }).click();
    await page.locator('select#status').selectOption('1');
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail_Đại học_Case 5' })).toBeVisible();
    // Truy cập CMS sửa danh mục hỗ trợ
    await page.waitForTimeout(2000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail_Đại học_Case 5' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Fail click btn Đóng_Đại học_Case 5");
    // Sửa chọn loại 
    await page.getByRole('textbox', { name: 'Sản phẩm' }).click();
    await page.getByRole("treeitem", { name: "Hướng dẫn" }).click();
    // Sửa không thành công do Click btn Đóng 
    await page.getByRole("button", { name: "Đóng" }).click();
    await expect(page.getByText("Cập nhật thành công!")).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail_Đại học_Case 5' })).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Fail_Đại học_Case 5' })).toBeVisible();
    // Truy cập Web - Hướng dẫn => Không hiển thị 
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail_Đại học_Case 5' })).not.toBeVisible();
    // Truy cập Web - Chính sách => Không hiển thị 
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail_Đại học_Case 5' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục hỗ trợ
    await page.goto(dataSiteTest[0].linkSite + "/support-category");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail_Đại học_Case 5' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Sản phẩm => Không hiển thị
    await page.goto(dataSiteTest[1].linkSite + "/ho-tro-khach-hang");
    await expect(page.getByRole('link', { name: 'QA_Fail_Đại học_Case 5' })).not.toBeVisible();
 
});
}

function main(){
    case1();
    case2();
    case3();
    case4();
    case5();

}
main();