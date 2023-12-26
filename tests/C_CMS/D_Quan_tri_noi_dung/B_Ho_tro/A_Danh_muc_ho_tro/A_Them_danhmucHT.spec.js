// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Thêm danh mục - Hiển thị Sản phẩm
 */

function case1 () {
    test('Case 1: Pass - Sản phẩm', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - hỗ trợ - danh mục câu hỏi 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support-category');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Sản phẩm_Đại học_Case 1");
    // Chọn loại 
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Sản phẩm" }).click();
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('1');
    // Chọn trạng thái hiển thị 
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.getByRole('link', { name: 'QA_Sản phẩm_Đại học_Case 1' })).toBeVisible();
    // Truy cập Web - Hướng dẫn => Không hiển thị 
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sản phẩm_Đại học_Case 1' })).not.toBeVisible();
    // Truy cập Web - Chính sách => Không hiển thị 
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Sản phẩm_Đại học_Case 1' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục hỗ trợ
    await page.goto('https://mskill8admin.mobiedu.vn/support-category');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sản phẩm_Đại học_Case 1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Sản phẩm => Không hiển thị  
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.getByRole('link', { name: 'QA_Sản phẩm_Đại học_Case 1' })).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Thêm danh mục - Hiển thị Hướng dẫn
 */

function case2 () {
    test('Case 2: Pass - Hướng dẫn', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - hỗ trợ - danh mục câu hỏi 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support-category');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Hướng dẫn_Đại học_Case 2");
    // Chọn loại 
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Hướng dẫn" }).click();
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('1');
    // Chọn trạng thái hiển thị 
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.getByRole('link', { name: 'QA_Hướng dẫn_Đại học_Case 2' })).not.toBeVisible();
    // Truy cập Web - Hướng dẫn => Không hiển thị 
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Hướng dẫn_Đại học_Case 2' })).toBeVisible();
    // Truy cập Web - Chính sách => Không hiển thị 
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Hướng dẫn_Đại học_Case 2' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục hỗ trợ
    await page.goto('https://mskill8admin.mobiedu.vn/support-category');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Hướng dẫn_Đại học_Case 2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Hướng dẫn => Không hiển thị  
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Hướng dẫn_Đại học_Case 2' })).not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Thêm danh mục - Hiển thị Chính sách
 */

function case3 () {
    test('Case 3: Pass - Chính sách', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - hỗ trợ - danh mục câu hỏi 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support-category');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Chính sách_Đại học_Case 3");
    // Chọn loại 
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Chính sách" }).click();
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('1');
    // Chọn trạng thái hiển thị 
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.getByRole('link', { name: 'QA_Chính sách_Đại học_Case 3' })).not.toBeVisible();
    // Truy cập Web - Hướng dẫn => Không hiển thị 
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Chính sách_Đại học_Case 3' })).not.toBeVisible();
    // Truy cập Web - Chính sách => Không hiển thị 
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Chính sách_Đại học_Case 3' })).toBeVisible();
    // Truy cập CMS xóa danh mục hỗ trợ
    await page.goto('https://mskill8admin.mobiedu.vn/support-category');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Chính sách_Đại học_Case 3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Chính sách => Không hiển thị  
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Chính sách_Đại học_Case 3' })).not.toBeVisible();

});
}

/**
 * Case 4: Không thành công - để trống trường
 */

function case4 () {
    test('Case 4: Fail - để trống trường', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - hỗ trợ - danh mục câu hỏi 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support-category');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("");
    // Chọn loại 
    await page.locator("#select2-support_type-container");
    await page.getByRole("treeitem", { name: "Sản phẩm" });
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('1');
    // Chọn trạng thái hiển thị 
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('');
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Vui lòng nhập tiêu đề !")).toBeVisible();
    await expect(page.getByText("Vui lòng chọn loại câu !")).toBeVisible();
    await expect(page.getByText("Vui lòng nhập vị trí hiển thị !")).toBeVisible();

});
}

/**
 * Case 5: Không thành công - trùng tiêu đề
 */

function case5 () {
    test('Case 5: Fail - Trùng tiêu đề', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - hỗ trợ - danh mục câu hỏi 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support-category');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Thêm danh mục hỗ trợ 1 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Fail trùng tiêu đề_Đại học_Case 5");
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Sản phẩm" }).click();
    await page.locator('select#status').selectOption('1');
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    // Thêm danh mục hỗ trợ 2 trùng 1  
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Fail trùng tiêu đề_Đại học_Case 5");
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Sản phẩm" }).click();
    await page.locator('select#status').selectOption('1');
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Tiêu đề đã tồn tại!")).toBeVisible();
    // Xóa tiêu đề 
    await page.getByRole('button', { name: 'Đóng' }).click();
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail trùng tiêu đề_Đại học_Case 5' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 6: Không thành công - click btn Đóng
 */

function case6 () {
    test('Case 6: Fail - click btn Đóng', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - hỗ trợ - danh mục câu hỏi 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support-category');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Fail click btn đóng_Đại học_Case 6");
    // Chọn loại 
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Sản phẩm" }).click();
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('1');
    // Chọn trạng thái hiển thị 
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    // Click btn Lưu 
    await page.getByRole("button", { name: "Đóng" }).click();
    await expect(page.getByText("Thêm mới thành công!")).not.toBeVisible();

});
}

/**
 * Case 7: Thành công : Thêm danh mục - Trạng thái Ẩn
 */

function case7 () {
    test('Case 7: Pass - Ẩn', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - hỗ trợ - danh mục câu hỏi 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support-category');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Ẩn_Đại học_Case 7");
    // Chọn loại 
    await page.locator("#select2-support_type-container").click();
    await page.getByRole("treeitem", { name: "Sản phẩm" }).click();
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('0');
    // Chọn trạng thái hiển thị 
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('textbox', { name: 'Vị trí hiển thị *' }).fill('1');
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.getByRole('link', { name: 'QA_Ẩn_Đại học_Case 7' })).not.toBeVisible();
    // Truy cập Web - Hướng dẫn => Không hiển thị 
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.getByRole('link', { name: 'QA_Ẩn_Đại học_Case 7' })).not.toBeVisible();
    // Truy cập Web - Chính sách => Không hiển thị 
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Ẩn_Đại học_Case 7' })).not.toBeVisible();
    // Truy cập CMS xóa danh mục hỗ trợ
    await page.goto('https://mskill8admin.mobiedu.vn/support-category');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Ẩn_Đại học_Case 7' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

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

}
main();