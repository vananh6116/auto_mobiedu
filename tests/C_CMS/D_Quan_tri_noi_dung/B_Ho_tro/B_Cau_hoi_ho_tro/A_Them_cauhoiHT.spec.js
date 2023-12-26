// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Thêm câu hỏi Sản phẩm - Khóa học
 */

function case1 () {
    test('Case 1: Pass - Sản phẩm-Khóa học', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Câu hỏi hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập nội dung câu hỏi 
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).fill('QA_Case1_Hệ sinh thái giáo dục mobiEdu có những khóa học nào?');
    // Chọn loại 
    await page.locator('#select2-type-container').click();
    await page.getByRole('treeitem', { name: 'Sản phẩm' }).click();
    // Chọn danh mục hỗ trợ 
    await page.locator('#select2-category-container').click();
    await page.getByRole('treeitem', { name: 'Khóa học' }).click();
    // Nhập câu trả lời 
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole("paragraph").click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByLabel("Rich Text Area. Press ALT-0")
            .fill('Case 1 _ Trả lời câu hỏi Hệ sinh thái giáo dục mobiEdu có những khóa học');
    // Chọn Trạng thái 
    await page.locator('select#status').selectOption('1');
    // Nhập vị trí hiển thị 
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).fill("1");
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    //  ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm - Khóa học => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case1_Hệ sinh thái giáo dục mobiEdu có những khóa học nào?')).toBeVisible();
    await expect(page.locator('div#tab-child-7 div:nth-child(1) > div.question-content > a')
                .getByText('QA_Case1_Hệ sinh thái giáo dục mobiEdu có những khóa học nào?')).toBeVisible();
    // Truy cập Web - Sản phẩm - Giải pháp => Không hiển thị
    await page.locator('#support').getByRole('link', { name: 'Giải pháp', exact: true }).click();
    await expect(page.locator('div#tab-child-15 div:nth-child(1) > div.question-content > a').getByText('QA_Case1_Hệ sinh thái giáo dục mobiEdu có những khóa học nào?'))
                .not.toBeVisible();
    // Truy cập Web - Sản phẩm - Cổng thi => Không hiển thị
    await page.locator('#support').getByRole('link', { name: 'Cổng thi', exact: true }).click();
    await expect(page.locator('div#tab-child-17 a').getByText('QA_Case1_Hệ sinh thái giáo dục mobiEdu có những khóa học nào?')).not.toBeVisible();
    // Click câu hỏi 
    await page.locator('#support').getByRole('link', { name: 'Khóa học', exact: true }).click();
    await page.locator('#tab-child-7').getByRole('link', { name: 'QA_Case1_Hệ sinh thái giáo dục mobiEdu có những khóa học nào?' }).click();
    await expect(page.getByRole('heading', { name: 'QA_Case1_Hệ sinh thái giáo dục mobiEdu có những khóa học nào?' })).toBeVisible();
    await expect(page.getByText('Case 1 _ Trả lời câu hỏi Hệ sinh thái giáo dục mobiEdu có những khóa học')).toBeVisible();
    // Truy cập CMS xóa câu hỏi hỗ trợ
    await page.goto('https://mskill8admin.mobiedu.vn/support');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Case1_Hệ sinh thái giáo dục mobiEdu có những khóa học nào?' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //  ***Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Sản phẩm - Khóa học => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case1_Hệ sinh thái giáo dục mobiEdu có những khóa học nào?')).not.toBeVisible();
    await expect(page.locator('div#tab-child-7 div:nth-child(1) > div.question-content > a').getByText('QA_Case1_Hệ sinh thái giáo dục mobiEdu có những khóa học nào?'))
                .not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Thêm câu hỏi Sản phẩm - Giải pháp
 */

function case2 () {
    test('Case 2: Pass - Sản phẩm-Giải pháp', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Câu hỏi hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập nội dung câu hỏi 
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).fill('QA_Case2_Các giải pháp mobiEdu là gì?');
    // Chọn loại 
    await page.locator('#select2-type-container').click();
    await page.getByRole('treeitem', { name: 'Sản phẩm' }).click();
    // Chọn danh mục hỗ trợ 
    await page.locator('#select2-category-container').click();
    await page.getByRole('treeitem', { name: 'Giải pháp' }).click();
    // Nhập câu trả lời 
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole("paragraph").click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByLabel("Rich Text Area. Press ALT-0")
            .fill('Case 2 _ Trả lời câu hỏi Các giải pháp mobiEdu');
    // Chọn Trạng thái 
    await page.locator('select#status').selectOption('1');
    // Nhập vị trí hiển thị 
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).fill("1");
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    //  ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm - Khóa học =>  Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case2_Các giải pháp mobiEdu là gì?')).toBeVisible();
    await expect(page.locator('div#tab-child-7 div:nth-child(1) > div.question-content > a')
                .getByText('QA_Case2_Các giải pháp mobiEdu là gì?')).not.toBeVisible();
    // Truy cập Web - Sản phẩm - Giải pháp => Hiển thị
    await page.locator('#support').getByRole('link', { name: 'Giải pháp', exact: true }).click();
    await expect(page.locator('div#tab-child-15 div:nth-child(1) > div.question-content > a').getByText('QA_Case2_Các giải pháp mobiEdu là gì?')).toBeVisible();
    // Truy cập Web - Sản phẩm - Cổng thi => Không hiển thị
    await page.locator('#support').getByRole('link', { name: 'Cổng thi', exact: true }).click();
    await expect(page.locator('div#tab-child-17 a').getByText('QA_Case2_Các giải pháp mobiEdu là gì?')).not.toBeVisible();
    // Click câu hỏi 
    await page.locator('#support').getByRole('link', { name: 'Giải pháp', exact: true }).click();
    await page.locator('#tab-child-15').getByRole('link', { name: 'QA_Case2_Các giải pháp mobiEdu là gì?' }).click();
    await expect(page.getByRole('heading', { name: 'QA_Case2_Các giải pháp mobiEdu là gì?' })).toBeVisible();
    await expect(page.getByText('Case 2 _ Trả lời câu hỏi Các giải pháp mobiEdu')).toBeVisible();
    // Truy cập CMS xóa câu hỏi hỗ trợ
    await page.goto('https://mskill8admin.mobiedu.vn/support');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Case2_Các giải pháp mobiEdu là gì?' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //  ***Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Sản phẩm - Giải pháp => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case2_Các giải pháp mobiEdu là gì?')).not.toBeVisible();
    await page.locator('#support').getByRole('link', { name: 'Giải pháp' }).click();
    await expect(page.locator('div#tab-child-7 div:nth-child(1) > div.question-content > a').getByText('QA_Case2_Các giải pháp mobiEdu là gì?'))
                .not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Thêm câu hỏi Sản phẩm - Cổng thi
 */

function case3 () {
    test('Case 3: Pass - Sản phẩm-Cổng thi', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Câu hỏi hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập nội dung câu hỏi 
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).fill('QA_Case3_Cổng thi mobiEdu là gì?');
    // Chọn loại 
    await page.locator('#select2-type-container').click();
    await page.getByRole('treeitem', { name: 'Sản phẩm' }).click();
    // Chọn danh mục hỗ trợ 
    await page.locator('#select2-category-container').click();
    await page.getByRole('treeitem', { name: 'Cổng thi' }).click();
    // Nhập câu trả lời 
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole("paragraph").click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByLabel("Rich Text Area. Press ALT-0")
            .fill('Case 3 _ Trả lời câu hỏi Cổng thi mobiEdu là');
    // Chọn Trạng thái 
    await page.locator('select#status').selectOption('1');
    // Nhập vị trí hiển thị 
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).fill("1");
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    //  ***Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Sản phẩm - Khóa học =>  Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case3_Cổng thi mobiEdu là gì?')).toBeVisible();
    await expect(page.locator('div#tab-child-7 div:nth-child(1) > div.question-content > a')
                .getByText('QA_Case3_Cổng thi mobiEdu là gì?')).not.toBeVisible();
    // Truy cập Web - Sản phẩm - Giải pháp => Không hiển thị
    await page.locator('#support').getByRole('link', { name: 'Giải pháp', exact: true }).click();
    await expect(page.locator('div#tab-child-15 div:nth-child(1) > div.question-content > a').getByText('QA_Case3_Cổng thi mobiEdu là gì?')).not.toBeVisible();
    // Truy cập Web - Sản phẩm - Cổng thi => Hiển thị
    await page.locator('#support').getByRole('link', { name: 'Cổng thi', exact: true }).click();
    await expect(page.locator('div#tab-child-17 a').getByText('QA_Case3_Cổng thi mobiEdu là gì?')).toBeVisible();
    // Click câu hỏi 
    await page.locator('#support').getByRole('link', { name: 'Cổng thi', exact: true }).click();
    await page.locator('#tab-child-17').getByRole('link', { name: 'QA_Case3_Cổng thi mobiEdu là gì?' }).click();
    await expect(page.getByRole('heading', { name: 'QA_Case3_Cổng thi mobiEdu là gì?' })).toBeVisible();
    await expect(page.getByText('Case 3 _ Trả lời câu hỏi Cổng thi mobiEdu là')).toBeVisible();
    // Truy cập CMS xóa câu hỏi hỗ trợ
    await page.goto('https://mskill8admin.mobiedu.vn/support');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Case3_Cổng thi mobiEdu là gì?' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //  ***Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Sản phẩm - Giải pháp => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case3_Cổng thi mobiEdu là gì?')).not.toBeVisible();
    await page.locator('#support').getByRole('link', { name: 'Cổng thi' }).click();
    await expect(page.locator('div#tab-child-7 div:nth-child(1) > div.question-content > a').getByText('QA_Case3_Cổng thi mobiEdu là gì?'))
                .not.toBeVisible();

});
}

/**
 * Case 4: Thành công : Thêm câu hỏi Hướng dẫn - Đăng kí - Đăng nhập 
 */

function case4 () {
    test('Case 4: Pass - HD-Đăng kí-Đăng nhập', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Câu hỏi hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập nội dung câu hỏi 
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).fill('QA_Case 4_Đăng kí - Đăng nhập tài khoản trên mobiEdu.vn như thế nào?');
    // Chọn loại 
    await page.locator('#select2-type-container').click();
    await page.getByRole('treeitem', { name: 'Hướng dẫn' }).click();
    // Chọn danh mục hỗ trợ 
    await page.locator('#select2-category-container').click();
    await page.getByRole('treeitem', { name: 'Đăng kí - Đăng nhập' }).click();
    // Nhập câu trả lời 
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole("paragraph").click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByLabel("Rich Text Area. Press ALT-0")
            .fill('Case 4 _ Trả lời câu hỏi Đăng nhập tài khoản trên mobiEdu.vn là');
    // Chọn Trạng thái 
    await page.locator('select#status').selectOption('1');
    // Nhập vị trí hiển thị 
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).fill("1");
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    //  ***Truy cập CMS kiểm tra hiển thị sau thêm 
    // Truy cập Web - Hướng dẫn - Đăng kí - Đăng nhập => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case 4_Đăng kí - Đăng nhập tài khoản trên mobiEdu.vn như thế nào?')).toBeVisible();
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.locator('div#tab-child-1 div:nth-child(1) > div.question-content > a').getByText('QA_Case 4_Đăng kí - Đăng nhập tài khoản trên mobiEdu.vn như thế nào?'))
                .toBeVisible();
    // Truy cập Web - Hướng dẫn - Mua & sử dụng => Không hiển thị 
    await page.getByRole('link', { name: 'Mua & sử dụng', exact: true }).click();
    await expect(page.locator('div#tab-child-3 div:nth-child(1) > div.question-content > a').getByText('QA_Case 4_Đăng kí - Đăng nhập tài khoản trên mobiEdu.vn như thế nào?'))
                .not.toBeVisible();
    // Truy cập Web - Hướng dẫn - Quản lý tài khoản => Không hiển thị 
    await page.getByRole('link', { name: 'Quản lí tài khoản', exact: true }).click();
    await expect(page.locator('div#tab-child-5 div:nth-child(1) > div.question-content > a').getByText('QA_Case 4_Đăng kí - Đăng nhập tài khoản trên mobiEdu.vn như thế nào?'))
                .not.toBeVisible();
    // Click câu hỏi 
    await page.getByRole('link', { name: 'Đăng kí - Đăng nhập', exact: true }).click();
    await page.locator('#tab-child-1').getByRole('link', { name: 'QA_Case 4_Đăng kí - Đăng nhập tài khoản trên mobiEdu.vn như thế nào?' }).click();
    await expect(page.getByRole('heading', { name: 'QA_Case 4_Đăng kí - Đăng nhập tài khoản trên mobiEdu.vn như thế nào?' })).toBeVisible();
    await expect(page.getByText('Case 4 _ Trả lời câu hỏi Đăng nhập tài khoản trên mobiEdu.vn là')).toBeVisible();
    // Truy cập CMS xóa câu hỏi hỗ trợ
    await page.goto('https://mskill8admin.mobiedu.vn/support');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Case 4_Đăng kí - Đăng nhập tài khoản trên mobiEdu.vn như thế nào?' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //  ***Truy cập CMS kiểm tra hiển thị sau xóa
    // Truy cập Web - Hướng dẫn - Đăng kí - Đăng nhập => Không hiển thị  
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case 4_Đăng kí - Đăng nhập tài khoản trên mobiEdu.vn như thế nào?')).not.toBeVisible();
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.locator('div#tab-child-1 div:nth-child(1) > div.question-content > a').getByText('QA_Case 4_Đăng kí - Đăng nhập tài khoản trên mobiEdu.vn như thế nào?'))
                .not.toBeVisible();

});
}

/**
 * Case 5: Thành công : Thêm câu hỏi Hướng dẫn - Mua & sử dụng
 */

function case5 () {
    test('Case 5: Pass - HD-Mua & sử dụng', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Câu hỏi hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập nội dung câu hỏi 
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).fill('QA_Case 5_Làm thế nào để gia hạn khóa học đã hết hạn?');
    // Chọn loại 
    await page.locator('#select2-type-container').click();
    await page.getByRole('treeitem', { name: 'Hướng dẫn' }).click();
    // Chọn danh mục hỗ trợ 
    await page.locator('#select2-category-container').click();
    await page.getByRole('treeitem', { name: 'Mua & sử dụng' }).click();
    // Nhập câu trả lời 
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole("paragraph").click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByLabel("Rich Text Area. Press ALT-0")
            .fill('Case 5 _ Trả lời câu hỏi Làm thế nào để gia hạn khóa học đã hết hạn');
    // Chọn Trạng thái 
    await page.locator('select#status').selectOption('1');
    // Nhập vị trí hiển thị 
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).fill("1");
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    //  ***Truy cập CMS kiểm tra hiển thị sau thêm 
    // Truy cập Web - Hướng dẫn - Đăng kí - Đăng nhập =>  Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case 5_Làm thế nào để gia hạn khóa học đã hết hạn?')).toBeVisible();
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.locator('div#tab-child-1 div:nth-child(1) > div.question-content > a').getByText('QA_Case 5_Làm thế nào để gia hạn khóa học đã hết hạn?'))
                .not.toBeVisible();
    // Truy cập Web - Hướng dẫn - Mua & sử dụng => Hiển thị
    await page.getByRole('link', { name: 'Mua & sử dụng', exact: true }).click();
    await expect(page.locator('div#tab-child-3 div:nth-child(1) > div.question-content > a').getByText('QA_Case 5_Làm thế nào để gia hạn khóa học đã hết hạn?'))
                .toBeVisible();
    // Truy cập Web - Hướng dẫn - Quản lý tài khoản => Không hiển thị 
    await page.getByRole('link', { name: 'Quản lí tài khoản', exact: true }).click();
    await expect(page.locator('div#tab-child-5 div:nth-child(1) > div.question-content > a').getByText('QA_Case 5_Làm thế nào để gia hạn khóa học đã hết hạn?'))
                .not.toBeVisible();
    // Click câu hỏi 
    await page.getByRole('link', { name: 'Mua & sử dụng', exact: true }).click();
    await page.locator('#tab-child-3').getByRole('link', { name: 'QA_Case 5_Làm thế nào để gia hạn khóa học đã hết hạn?' }).click();
    await expect(page.getByRole('heading', { name: 'QA_Case 5_Làm thế nào để gia hạn khóa học đã hết hạn?' })).toBeVisible();
    await expect(page.getByText('Case 5 _ Trả lời câu hỏi Làm thế nào để gia hạn khóa học đã hết hạn')).toBeVisible();
    // Truy cập CMS xóa câu hỏi hỗ trợ
    await page.goto('https://mskill8admin.mobiedu.vn/support');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Case 5_Làm thế nào để gia hạn khóa học đã hết hạn?' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //  ***Truy cập CMS kiểm tra hiển thị sau xóa
    // Truy cập Web - Hướng dẫn - Mua & sử dụng => Không hiển thị  
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case 5_Làm thế nào để gia hạn khóa học đã hết hạn?')).not.toBeVisible();
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();            
    await page.getByRole('link', { name: 'Mua & sử dụng', exact: true }).click();
    await expect(page.locator('div#tab-child-3 div:nth-child(1) > div.question-content > a').getByText('QA_Case 5_Làm thế nào để gia hạn khóa học đã hết hạn?'))
                .not.toBeVisible();

});
}

/**
 * Case 6: Thành công : Thêm câu hỏi Hướng dẫn - Quản lí tài khoản
 */

function case6 () {
    test('Case 6: Pass - HD-Quản lí tài khoản', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Câu hỏi hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập nội dung câu hỏi 
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).fill('QA_Case 6_Làm thế nào để quản lí các khóa học sau khi đã mua?');
    // Chọn loại 
    await page.locator('#select2-type-container').click();
    await page.getByRole('treeitem', { name: 'Hướng dẫn' }).click();
    // Chọn danh mục hỗ trợ 
    await page.locator('#select2-category-container').click();
    await page.getByRole('treeitem', { name: 'Quản lí tài khoản' }).click();
    // Nhập câu trả lời 
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole("paragraph").click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByLabel("Rich Text Area. Press ALT-0")
            .fill('Case 6 _ Trả lời câu hỏi Làm thế nào để quản lí các khóa học sau khi đã mua');
    // Chọn Trạng thái 
    await page.locator('select#status').selectOption('1');
    // Nhập vị trí hiển thị 
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).fill("1");
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    //  ***Truy cập CMS kiểm tra hiển thị sau thêm 
    // Truy cập Web - Hướng dẫn - Đăng kí - Đăng nhập =>  Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case 6_Làm thế nào để quản lí các khóa học sau khi đã mua?')).toBeVisible();
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();
    await expect(page.locator('div#tab-child-1 div:nth-child(1) > div.question-content > a').getByText('QA_Case 6_Làm thế nào để quản lí các khóa học sau khi đã mua?'))
                .not.toBeVisible();
    // Truy cập Web - Hướng dẫn - Mua & sử dụng => Không hiển thị
    await page.getByRole('link', { name: 'Mua & sử dụng', exact: true }).click();
    await expect(page.locator('div#tab-child-3 div:nth-child(1) > div.question-content > a').getByText('QA_Case 6_Làm thế nào để quản lí các khóa học sau khi đã mua?'))
                .not.toBeVisible();
    // Truy cập Web - Hướng dẫn - Quản lý tài khoản =>  Hiển thị
    await page.getByRole('link', { name: 'Quản lí tài khoản', exact: true }).click();
    await expect(page.locator('div#tab-child-5 div:nth-child(1) > div.question-content > a').getByText('QA_Case 6_Làm thế nào để quản lí các khóa học sau khi đã mua?'))
                .toBeVisible();
    // Click câu hỏi 
    await page.getByRole('link', { name: 'Quản lí tài khoản', exact: true }).click();
    await page.locator('#tab-child-5').getByRole('link', { name: 'QA_Case 6_Làm thế nào để quản lí các khóa học sau khi đã mua?' }).click();
    await expect(page.getByRole('heading', { name: 'QA_Case 6_Làm thế nào để quản lí các khóa học sau khi đã mua?' })).toBeVisible();
    await expect(page.getByText('Case 6 _ Trả lời câu hỏi Làm thế nào để quản lí các khóa học sau khi đã mua')).toBeVisible();
    // Truy cập CMS xóa câu hỏi hỗ trợ
    await page.goto('https://mskill8admin.mobiedu.vn/support');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Case 6_Làm thế nào để quản lí các khóa học sau khi đã mua?' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //  ***Truy cập CMS kiểm tra hiển thị sau xóa
    // Truy cập Web - Hướng dẫn - Quản lý tài khoản => Không hiển thị  
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case 5_Làm thế nào để gia hạn khóa học đã hết hạn?')).not.toBeVisible();
    await page.getByRole('link', { name: 'Hướng dẫn' }).click();            
    await page.getByRole('link', { name: 'Quản lí tài khoản', exact: true }).click();
    await expect(page.locator('div#tab-child-5 div:nth-child(1) > div.question-content > a').getByText('QA_Case 6_Làm thế nào để quản lí các khóa học sau khi đã mua?'))
                .not.toBeVisible();

});
}

/**
 * Case 7: Thành công : Thêm câu hỏi Chính sách - Thanh toán - Đổi trả
 */

function case7 () {
    test('Case 7: Pass - CS-Thanh toán-Đổi trả', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Câu hỏi hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập nội dung câu hỏi 
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).fill('QA_Case 7_Thanh toán online như thế nào?');
    // Chọn loại 
    await page.locator('#select2-type-container').click();
    await page.getByRole('treeitem', { name: 'Chính sách' }).click();
    // Chọn danh mục hỗ trợ 
    await page.locator('#select2-category-container').click();
    await page.getByRole('treeitem', { name: 'Thanh toán - Đổi trả' }).click();
    // Nhập câu trả lời 
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole("paragraph").click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByLabel("Rich Text Area. Press ALT-0")
            .fill('Case 7 _ Trả lời câu hỏi Thanh toán online như thế nào');
    // Chọn Trạng thái 
    await page.locator('select#status').selectOption('1');
    // Nhập vị trí hiển thị 
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).fill("1");
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    //  ***Truy cập CMS kiểm tra hiển thị sau thêm 
    // Truy cập Web - Chính sách - Thanh toán - Đổi trả =>  Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case 7_Thanh toán online như thế nào?')).toBeVisible();
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.locator('div#tab-child-19 div:nth-child(1) > div.question-content > a').getByText('QA_Case 7_Thanh toán online như thế nào?'))
                .toBeVisible();
    // Truy cập Web - Chính sách - Dành cho đại lí => Không hiển thị
    await page.getByRole('link', { name: 'Dành cho đại lí', exact: true }).click();
    await expect(page.locator('div#tab-child-25 a').getByText('QA_Case 7_Thanh toán online như thế nào?'))
                .not.toBeVisible();
    // Click câu hỏi 
    await page.getByRole('link', { name: 'Thanh toán - Đổi trả' }).click();
    await page.locator('#tab-child-19').getByRole('link', { name: 'QA_Case 7_Thanh toán online như thế nào?' }).click();
    await expect(page.getByRole('heading', { name: 'QA_Case 7_Thanh toán online như thế nào?' })).toBeVisible();
    await expect(page.getByText('Case 7 _ Trả lời câu hỏi Thanh toán online như thế nào')).toBeVisible();
    // Truy cập CMS xóa câu hỏi hỗ trợ
    await page.goto('https://mskill8admin.mobiedu.vn/support');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Case 7_Thanh toán online như thế nào?' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //  ***Truy cập CMS kiểm tra hiển thị sau thêm 
    // Truy cập Web - Chính sách - Thanh toán - Đổi trả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case 7_Thanh toán online như thế nào?')).not.toBeVisible();
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.locator('div#tab-child-19 div:nth-child(1) > div.question-content > a').getByText('QA_Case 7_Thanh toán online như thế nào?'))
                .not.toBeVisible();

});
}

/**
 * Case 8: Thành công : Thêm câu hỏi Chính sách - Dành cho đại lí
 */

function case8 () {
    test('Case 8: Pass - CS-Dành cho đại lí', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Câu hỏi hỗ trợ' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/support');
    await expect(page.getByRole('heading', { name: 'Danh sách danh mục hỗ trợ' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập nội dung câu hỏi 
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).click();
    await page.getByRole('textbox', { name: 'Nội dung câu hỏi *' }).fill('QA_Case 8_Các mô hình hợp tác đại lí như thế nào?');
    // Chọn loại 
    await page.locator('#select2-type-container').click();
    await page.getByRole('treeitem', { name: 'Chính sách' }).click();
    // Chọn danh mục hỗ trợ 
    await page.locator('#select2-category-container').click();
    await page.getByRole('treeitem', { name: 'Dành cho đại lí' }).click();
    // Nhập câu trả lời 
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole("paragraph").click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByLabel("Rich Text Area. Press ALT-0")
            .fill('Case 8 _ Trả lời câu hỏi Các mô hình hợp tác đại lí như thế nào');
    // Chọn Trạng thái 
    await page.locator('select#status').selectOption('1');
    // Nhập vị trí hiển thị 
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("textbox", { name: "Vị trí hiển thị *" }).fill("1");
    // Click btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm mới thành công!")).toBeVisible();
    //  ***Truy cập CMS kiểm tra hiển thị sau thêm 
    // Truy cập Web - Chính sách - Thanh toán - Đổi trả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case 8_Các mô hình hợp tác đại lí như thế nào?')).toBeVisible();
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await expect(page.locator('div#tab-child-19 div:nth-child(1) > div.question-content > a').getByText('QA_Case 8_Các mô hình hợp tác đại lí như thế nào?'))
                .not.toBeVisible();
    // Truy cập Web - Chính sách - Dành cho đại lí => Hiển thị
    await page.getByRole('link', { name: 'Dành cho đại lí', exact: true }).click();
    await expect(page.locator('div#tab-child-25 a').getByText('QA_Case 8_Các mô hình hợp tác đại lí như thế nào?'))
                .toBeVisible();
    // Click câu hỏi 
    await page.getByRole('link', { name: 'Dành cho đại lí' }).click();
    await page.locator('#tab-child-25').getByRole('link', { name: 'QA_Case 8_Các mô hình hợp tác đại lí như thế nào?' }).click();
    await expect(page.getByRole('heading', { name: 'QA_Case 8_Các mô hình hợp tác đại lí như thế nào?' })).toBeVisible();
    await expect(page.getByText('Case 8 _ Trả lời câu hỏi Các mô hình hợp tác đại lí như thế nào')).toBeVisible();
    // Truy cập CMS xóa câu hỏi hỗ trợ
    await page.goto('https://mskill8admin.mobiedu.vn/support');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Case 8_Các mô hình hợp tác đại lí như thế nào?' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //  ***Truy cập CMS kiểm tra hiển thị sau thêm 
    // Truy cập Web - Chính sách - Thanh toán - Đổi trả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/ho-tro-khach-hang');
    await expect(page.locator('main#support div.desktop-show > div.frequently-asked-questions > div > div > div:nth-child(1) > div > div.question-content > p > a')
                .getByText('QA_Case 8_Các mô hình hợp tác đại lí như thế nào?')).not.toBeVisible();
    await page.getByRole('link', { name: 'Chính sách', exact: true }).click();
    await page.getByRole('link', { name: 'Dành cho đại lí', exact: true }).click();
    await expect(page.locator('div#tab-child-25 a').getByText('QA_Case 8_Các mô hình hợp tác đại lí như thế nào?'))
                .not.toBeVisible();

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