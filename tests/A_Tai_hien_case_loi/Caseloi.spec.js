// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thay banner đầu trang => Xóa trong CMS => Web vẫn hiển thị 
 * Expect: Web không còn hiển thị banner đã xóa
 */

function case1 () {
    test('Case lỗi 1:thay banner', async ({ page }) => {
    
          test.slow();
        // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();

        // Click Quản trị Banner - Banner - Thêm mới 
    await page.goto('https://mskill8admin.mobiedu.vn/banner');
    await expect(page.getByRole('heading', { name: 'Danh sách banner' })).toBeVisible();
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();

         // Thêm mới banner 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_BE YOURSELF');
    await page.getByRole('textbox', { name: 'Đường dẫn *' }).click();
    await page.getByRole('textbox', { name: 'Đường dẫn *' }).fill('https://');
    await page.locator('#select2-page_show-container').click();
    await page.getByRole('treeitem', { name: 'Trang chủ', exact: true }).click();
    await page.getByRole('spinbutton', { name: 'Số thứ tự hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Số thứ tự hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh mobile +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();

        // Truy cập Web kiểm tra hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
    await page.waitForTimeout(18000);
    await expect(page.locator('section').filter({ hasText: 'QA_BE YOURSELF ĐĂNG NHẬP NGAY hoidap.mobiedu.vn Cộng đồng hỏi đápcủa mobiEdu ĐĂNG N' })).toBeVisible();

        // Chụp ảnh màn hình web hiển thị
    await page.waitForTimeout(1000);
    await page
        .locator('section').filter({ hasText: 'QA_BE YOURSELF ĐĂNG NHẬP NGAY hoidap.mobiedu.vn Cộng đồng hỏi đápcủa mobiEdu ĐĂN' })
        .screenshot({ path: 'Lỗi_Banner_them_case1.png' });
    
        // Truy cập CMS xóa banner : Click Quản trị Banner - Banner
        // Lọc banner nhập tiêu đề 
    await page.goto('https://mskill8admin.mobiedu.vn/banner');
    await page.getByPlaceholder('Nhập từ khóa tìm kiếm...').fill('QA_BE YOURSELF');
    await page.getByRole('button', { name: 'Tìm kiếm' }).click();

        // Xóa banner
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_BE YOURSELF' })
            .locator('a')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

        // Truy cập Web kiểm tra không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
    await page.waitForTimeout(18000);
    await expect(page.locator('section').filter({ hasText: 'QA_BE YOURSELF ĐĂNG NHẬP NGAY hoidap.mobiedu.vn Cộng đồng hỏi đápcủa mobiEdu ĐĂNG N' })).not.toBeVisible();

        // Chụp ảnh màn hình 
    await page.waitForTimeout(1000);
    await page
        .locator('section').filter({ hasText: 'Tích hợp ChatGPT Nâng tầm học tập cùng mobiEdu ĐĂNG NHẬP NGAY hoidap.mobiedu.vn ' })
        .screenshot({ path: 'Lỗi_Banner_sau_xoa_case1.png' });

});
}

/**
 * Case 2 : Tổng quan của khóa học hiển thị vài dòng demo sau đó không hiển thị button Xem thêm
 * Mong muốn : Hiển thị vài dòng demo sau đó hiển thị button Xem thêm
 */

function case2 () {
    test('Case lỗi 2: hiển thị btn Xem thêm', async ({ page }) => {

    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
    await page.getByRole('link', { name: 'Khóa học' }).hover();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Tất cả' }).click();
    await expect(page.locator('div').filter({ hasText: 'Khóa họckeyboard_arrow_down Tất cả Trẻ em Học sinh phổ thông Sinh viên và người ' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'EduPro mSkill EDV' }).click();
    await expect(page.getByRole('button', { name: 'Xem thêm ' })).toBeVisible();

});
}

/**
 * Case 3 : Lọc khóa học không hiển thị đầy đủ các chủ đề 
 * Mong muốn : Lọc khóa học hiển thị đầy đủ các chủ đề 
 */

function case3 () {
    test('Case lỗi 3: Lọc khóa học', async ({ page }) => {

    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
    await page.getByRole('link', { name: 'Khóa học' }).hover();
    await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Tất cả' }).click();
    await expect(page.locator('div').filter({ hasText: 'Khóa họckeyboard_arrow_down Tất cả Trẻ em Học sinh phổ thông Sinh viên và người ' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Xem thêm ' }).click();
    await page.getByRole('link', { name: 'Xem thêm ' }).click();
    await expect(page.getByText('Tiền tiểu học')).toBeVisible();
    await expect(page.getByText('STEAM')).toBeVisible();
    await expect(page.getByText('IoT')).toBeVisible();
    await expect(page.getByText('Tin học - lập trình')).toBeVisible();
    await expect(page.getByText('Kĩ năng mềm')).toBeVisible();
    await expect(page.getByText('Kĩ năng văn phòng')).toBeVisible();
    await expect(page.getByText('Kinh doanh - Marketing')).toBeVisible();
    await expect(page.getByRole('main').getByText('Ngoại ngữ')).toBeVisible();
    await expect(page.getByText('Nghệ thuật')).toBeVisible();
    await expect(page.getByText('Sức khỏe - Đời sống')).toBeVisible();

});
}

/**
 * Case 4 : Upload bài viết không upload ảnh được 
 * Mong muốn : Upload bài viết upload được ảnh, web hiển thị ảnh 
 */

function case4 () {
    test('Case lỗi 4: Upload ảnh bài viết', async ({ page }) => {
    
          test.slow();
        // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();

        // Click Quản trị nội dung - Tin tức - Thêm mới 
    await page.goto('https://mskill8admin.mobiedu.vn/blog');
    await expect(page.getByRole('heading', { name: 'Danh sách bài viết' })).toBeVisible();
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();

        // Thêm data tin tức 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Cách chinh phục hai đại học top đầu thế giới');
    await page.getByRole('textbox', { name: 'Đường dẫn' }).fill('qa-cach-chinh-phuc-hai-dai-hoc-top-dau-the-gioi');
    await page.locator('#select2-blog_category-container').click();
    await page.getByRole('treeitem', { name: '[Blog]Tin dịch vụ' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('10');
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('spinbutton', { name: 'Lượt xem' }).click();
    await page.getByRole('spinbutton', { name: 'Lượt xem' }).fill('1000');
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole('paragraph').click();
    await page
        .frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]')
        .getByLabel('Rich Text Area. Press ALT-0 for help.')
        .fill('QA_CÁCH CHINH PHỤC HAI ĐẠI HỌC TOP ĐẦU THẾ GIỚI');
    await page.keyboard.press('Enter');
    await page.getByRole('menuitem', { name: 'Insert' }).click();
    await page.getByText('Image...').click();
    await page.getByLabel('Source').click();
    await page.getByLabel('Source').fill('https://cdn.mobiedu.vn/mskill/uploads/mb3/1692449927-720x430.png');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByLabel('Thêm mới').getByLabel('Trạng thái\n*').click();
    await page.getByLabel('Thêm mới').getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByLabel('Thêm mới').getByLabel('Nổi bật\n*').click();
    await page.getByLabel('Thêm mới').getByLabel('Nổi bật\n*').selectOption('1');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).clear();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();

        // Truy cập Web kiểm tra hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('div.desktop-show > div > div:nth-child(2) > div:nth-child(2)')).toBeVisible();
    await page.locator('div:nth-child(2) > div > article:nth-child(1)').click();
    await expect(page.getByRole('heading', { name: 'QA_Cách chinh phục hai đại học top đầu thế giới' })).toBeVisible();
    await expect(page.getByText('QA_CÁCH CHINH PHỤC HAI ĐẠI HỌC TOP ĐẦU THẾ GIỚI', { exact: true })).toBeVisible();

        // Chụp ảnh màn hình Web  
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Lỗi_Anh_them_tin_tuc_case4.png', fullPage: true });

        // Truy cập CMS xóa tin tức 
    await page.goto('https://mskill8admin.mobiedu.vn/blog');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CÁCH CHINH PHỤC HAI ĐẠI HỌC TOP ĐẦU THẾ GIỚI' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    
});
}

/**
 * Case 5 : Sửa banner không lưu được - Sửa banner Web không hiển thị đúng tiêu đề đã chỉnh sửa 
 * Mong muốn : Sửa banner lưu thành công - Web hiển thị đúng tiêu đề
 */

function case5 () {
    test('Case lỗi 5: Sửa banner', async ({ page }) => {
    
          test.slow();
        // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();

        // Click Quản trị Banner - Banner - Thêm mới 
    await page.goto('https://mskill8admin.mobiedu.vn/banner');
    await expect(page.getByRole('heading', { name: 'Danh sách banner' })).toBeVisible();
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();

         // Thêm mới banner 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_BN Thêm_BE YOURSELF');
    await page.getByRole('textbox', { name: 'Đường dẫn *' }).click();
    await page.getByRole('textbox', { name: 'Đường dẫn *' }).fill('https://');
    await page.locator('#select2-page_show-container').click();
    await page.getByRole('treeitem', { name: 'Trang chủ', exact: true }).click();
    await page.getByRole('spinbutton', { name: 'Số thứ tự hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Số thứ tự hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh mobile +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();

        // Truy cập Web kiểm tra hiển thị sau khi thêm mới thành công 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
    await page.waitForTimeout(18000);
    await expect(page.locator('div').filter({ hasText: 'QA_BN Thêm_BE YOURSELF ĐĂNG NHẬP NGAY' }).nth(1)).toBeVisible();

        // Chụp ảnh màn hình web hiển thị
    await page.waitForTimeout(1000);
    await page
        .locator('section').filter({ hasText: 'QA_BN Thêm_BE YOURSELF ĐĂNG NHẬP NGAY hoidap.mobiedu.vn Cộng đồng hỏi đápcủa mobiEdu ĐĂN' })
        .screenshot({ path: 'Lỗi_Banner_them_case5_1.png' });

        //  Truy cập CMS Chỉnh sửa banner 
    await page.goto('https://mskill8admin.mobiedu.vn/banner');
    await page
        .getByPlaceholder('Nhập từ khóa tìm kiếm...')
        .fill('QA_BN Thêm_BE YOURSELF');
    await page.getByRole('button', { name: 'Tìm kiếm' }).click();
    await page.getByRole('link', { name: ' Edit' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_BN_Sửa_ BE YOURSELF');
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator('div#file-preview figure:nth-child(9) > img').click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh mobile +' }).click();
    await page.locator('div#file-preview figure:nth-child(9) > img').click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();

        // Truy cập Web kiểm tra hiển thị sau khi chỉnh sửa 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
    await page.waitForTimeout(18000);
    await expect(page.locator('section')
        .filter({ hasText: 'QA_BN_Sửa_ BE YOURSELF ĐĂNG NHẬP NGAY hoidap.mobiedu.vn Cộng đồng hỏi đápcủa mobiEdu ĐĂNG N' }))
        .toBeVisible();
    
        // Chụp ảnh màn hình web hiển thị
    await page.waitForTimeout(1000);
    await page
        .locator('section')
        .filter({ hasText: 'QA_BN_Sửa_ BE YOURSELF ĐĂNG NHẬP NGAY hoidap.mobiedu.vn Cộng đồng hỏi đápcủa mobiEdu ĐĂN' })
        .screenshot({ path: 'Lỗi_Banner_sua_case5_2.png' });

        // Truy cập CMS xoá banner
    await page.goto('https://mskill8admin.mobiedu.vn/banner');
    await page
        .getByPlaceholder('Nhập từ khóa tìm kiếm...')
        .fill('QA_BN_Sửa_ BE YOURSELF');
    await page.getByRole('button', { name: 'Tìm kiếm' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: ' Remove' }).click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 6 : Upload banner lên trang có gắn đường link, nhưng khi click vào thì không click được
 * Mong muốn : Upload banner lên trang có gắn đường link, click vào link thành công 
*/

function case6 () {
    test('Case lỗi 6: Upload banner có gắn link', async ({ page }) => {
    
          test.slow();
        // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();

        // Click Quản trị Banner - Banner - Thêm mới 
    await page.goto('https://mskill8admin.mobiedu.vn/banner');
    await expect(page.getByRole('heading', { name: 'Danh sách banner' })).toBeVisible();
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();

         // Thêm mới banner có gắn đường link
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_BE YOURSELF');
    await page.getByRole('textbox', { name: 'Đường dẫn *' }).click();
    await page.getByRole('textbox', { name: 'Đường dẫn *' }).fill('https://mskill8.mobiedu.vn/khoa-hoc/hoc-thu-khoa-2007');
    await page.locator('#select2-page_show-container').click();
    await page.getByRole('treeitem', { name: 'Trang chủ', exact: true }).click();
    await page.getByRole('spinbutton', { name: 'Số thứ tự hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Số thứ tự hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh mobile +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();

        // Truy cập web kiểm tra click banner 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
    await page.waitForTimeout(18000);
    await expect(page.locator('section')
        .filter({ hasText: 'QA_BE YOURSELF ĐĂNG NHẬP NGAY hoidap.mobiedu.vn Cộng đồng hỏi đápcủa mobiEdu ĐĂNG N' })).toBeVisible();
    await page.locator('div.swiper-slide.swiper-slide-active > div > div > div.col-lg-7.col-xl-7-custom > div > a > img').click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/hoc-thu-khoa-2007');

        // Truy cập CMS xóa banner
        // Lọc banner nhập tiêu đề 
    await page.goto('https://mskill8admin.mobiedu.vn/banner');
    await page.getByPlaceholder('Nhập từ khóa tìm kiếm...').fill('QA_BE YOURSELF');
    await page.getByRole('button', { name: 'Tìm kiếm' }).click();

        // Xóa banner
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_BE YOURSELF' })
            .locator('a')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    
});
}

/**
 * Case 7 : up 1 bài -> hiện bình thường, nhưng sau khi vào edit bài này lần 1 và save -> bài viết biến mất 
 * Mong muốn : Sau khi chỉnh sửa bài viết => Bài viết vẫn hiển thị trên web 
 */

function case7 () {
    test('Case lỗi 7: Thêm và sửa bài viết', async ({ page }) => {
    
          test.slow();
        // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();

        // Click Quản trị nội dung - Tin tức - Thêm mới 
    await page.goto('https://mskill8admin.mobiedu.vn/blog');
    await expect(page.getByRole('heading', { name: 'Danh sách bài viết' })).toBeVisible();
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();

        // Thêm data tin tức 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_BV Thêm_Cách chinh phục hai đại học top đầu thế giới');
    await page.getByRole('textbox', { name: 'Đường dẫn' }).fill('qa-cach-chinh-phuc-hai-dai-hoc-top-dau-the-gioi');
    await page.locator('#select2-blog_category-container').click();
    await page.getByRole('treeitem', { name: '[Blog]Tin dịch vụ' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('10');
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('spinbutton', { name: 'Lượt xem' }).click();
    await page.getByRole('spinbutton', { name: 'Lượt xem' }).fill('1000');
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole('paragraph').click();
    await page
        .frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]')
        .getByLabel('Rich Text Area. Press ALT-0 for help.')
        .fill('QA_BV Thêm_Cách chinh phục hai đại học top đầu thế giới');
    await page.keyboard.press('Enter');
    await page.getByRole('menuitem', { name: 'Insert' }).click();
    await page.getByText('Image...').click();
    await page.getByLabel('Source').click();
    await page.getByLabel('Source').fill('https://cdn.mobiedu.vn/mskill/uploads/mb3/1692449927-720x430.png');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByLabel('Thêm mới').getByLabel('Trạng thái\n*').click();
    await page.getByLabel('Thêm mới').getByLabel('Trạng thái\n*').selectOption('1');
    await page.getByLabel('Thêm mới').getByLabel('Nổi bật\n*').click();
    await page.getByLabel('Thêm mới').getByLabel('Nổi bật\n*').selectOption('1');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).clear();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();

        // Truy cập Web kiểm tra hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('div.desktop-show > div > div:nth-child(2) > div:nth-child(2)')).toBeVisible();
    await page.locator('div:nth-child(2) > div > article:nth-child(1)').click();
    await expect(page.getByRole('heading', { name: 'QA_BV Thêm_Cách chinh phục hai đại học top đầu thế giới' })).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^QA_BV Thêm_Cách chinh phục hai đại học top đầu thế giới$/ })).toBeVisible();

        // Chụp ảnh màn hình Web  
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Lỗi_Anh_them_tin_tuc_case7.png', fullPage: true });

        // Truy cập CMS chỉnh sửa bài viết 
    await page.goto('https://mskill8admin.mobiedu.vn/blog');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_BV Thêm_Cách chinh phục hai đại học top đầu thế giới' })
            .locator('i')
            .nth(0)
            .click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).clear();
    await page
        .getByRole('textbox', { name: 'Tiêu đề *' })
        .fill('QA_BV Sửa_Cách chinh phục hai đại học top đầu thế giới');
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator('div#file-preview figure:nth-child(9) > img').click();
    await page.getByRole('button', { name: 'Xong' }).click();
   
    // Thêm ảnh nội dung bài viết
    await page.getByRole('menuitem', { name: 'Insert' }).click();
    await page.getByText('Image...').click();
    await page.getByLabel('Source').click();
    await page.getByLabel('Source').fill('https://cdn.mobiedu.vn/mskill/uploads/mb3/1692860289-banner-dau-trang-mb.jpg');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();

        // Truy cập Web kiểm tra hiển thị sau khi chỉnh sửa 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('div.desktop-show > div > div:nth-child(2) > div:nth-child(2)')).toBeVisible();
    await page.getByRole('heading', { name: 'Mới nhất' });
    await page.locator('div:nth-child(2) > div > article:nth-child(1)').click();
    await expect(page.getByRole('heading', { name: 'QA_BV Sửa_Cách chinh phục hai đại học top đầu thế giới' })).toBeVisible();

        // Chụp ảnh màn hình sau khi chỉnh sửa 
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Lỗi_Anh_sua_tin_tuc_case7.png', fullPage: true });

        //  Truy cập CMS xóa bài viết 
    await page.goto('https://mskill8admin.mobiedu.vn/blog');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_BV Sửa_Cách chinh phục hai đại học top đầu thế giới' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 8 : Thêm mới - chỉnh sửa khóa học Combo gói cước hiển thị không đúng CMS
 * Mong muốn: Web hiển thị đúng thông tin như CMS đã cài đặt 
 */

function case8 () {
    test('Case lỗi 8: Thêm và sửa KH Combo', async ({ page }) => {
    
          test.slow();
        // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();

        // Thêm mới khóa học combo 
    await page.goto('https://mskill8admin.mobiedu.vn/course-combo');
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Combo' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_KH Combo_Kỹ năng chung');
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    await page.locator('input#time').fill('46:30:00');
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'Kĩ năng văn phòng' }).click();
    await page.locator('span#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(3)').click();
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    await page
        .locator('textarea#intro')
        .fill('Gói Khóa học Kỹ năng chung');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByRole('paragraph')
        .fill('Gói khóa học Kỹ năng chung với 11 khóa học về gia đình, sức khỏe và các công cụ tin học văn phòng được giảng dạy từ các chuyên gia hàng đầu trong lĩnh vực sẽ giúp bạn hoàn thiện bản thân một các toàn diện nhất. Bộ 3 khóa học về gia đình: 108 Tọa pháp Yoga - Bí mật trẻ mãi, Massage uyên ương và Nghệ thuật Phòng the đỉnh cao giúp bạn có những phút giây thư giãn thoải mái và hâm nóng tình cảm vợ chồng, giữ lửa hôn nhân. Cùng với đó là 4 khóa học: Dạy cắm hoa cơ bản theo phong cách Phương Tây, Đọc sách siêu tốc, Bí kíp nhiếp ảnh Trẻ em và Gia đình đẹp mê hồn và Làm chủ giọng nói sẽ mang đến cho bạn những kiến thức bổ ich giúp bạn hoàn thiện các kỹ năng trong đời sống, thêm tự tin và dẽ dàng làm chủ mọi tình huống thường ngày. Ngoài ra, bạn có thể thành tạo các kỹ năng văn phòng với 4 khóa học: DISC - Thấu hiểu bản thân - Xây dựng đội nhóm thành công, Thiết kế Powerpoint chuyên nghiệp, Chinh phục excel công sở và Thiết kế trình chiếu PowerPoint 2016 từ A-Z. Hãy tham gia ngay Gói khóa học Kỹ Năng chung để trải nghiệm những video vô cùng hữu ích nhé!')
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();

        // Thêm gói cước 
    await page.getByRole('link', { name: ' Thêm gói cước' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_supplier_2-container').click();
    await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_service_2-container').click();
    await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_code_2-container').click();
    await page.getByRole('treeitem', { name: 'KN' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('5000');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.getByRole('button', { name: 'Lưu',exact:true }).nth(0).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();

        // Truy cập Web kiểm tra hiển thị gói cước Ngày
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc#');
        
        // Kiểm tra khóa học bên ngoài hiển thị vị trí số 1 
    await expect(page.locator('#product-list-show div').filter({ hasText: 'QA_KH Combo_Kỹ năng chung1 khóa học5.000 đ/ngày500.000 đ99%' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'QA_KH Combo_Kỹ năng chung' })).toBeVisible();
    await expect(page.getByText('5.000 đ/ngày').first()).toBeVisible();

        // Kiểm tra khóa học bên trong hiển thị đúng gói cước 
    await page.getByRole('link', { name: 'QA_KH Combo_Kỹ năng chung' }).click();
    await expect(page.getByRole('heading', { name: 'QA_KH Combo_Kỹ năng chung' }).locator('span')).toBeVisible();
    await expect(page.getByText('5.000 đ/Ngày', { exact: true }).first()).toBeVisible();

        // Truy cập CMS chỉnh sửa gói khóa học - gói cước Tuần
    await page.goto('https://mskill8admin.mobiedu.vn/course-combo');
    await page.waitForTimeout(2000);
    await page.locator('tr:nth-child(1) > td:nth-child(7) > a.btn.btn-sm.btn-primary > i').click();
    await page.locator('#edit_course_combo').getByRole('link', { name: ' Edit' }).click();
    await page.locator('#edit_pod_period_2').selectOption('2');
    await page.locator('#submit_edit_pod_2').click();
    await expect(page.getByText('Cập nhật gói cước thành công!')).toBeVisible();

        // Truy cập Web kiểm tra hiển thị đúng gói cước Tuần 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc#');

        // Kiểm tra khóa học bên ngoài hiển thị vị trí số 1 
    await expect(page.locator('#product-list-show div').filter({ hasText: 'QA_KH Combo_Kỹ năng chung1 khóa học5.000 đ/tuần500.000 đ99%' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'QA_KH Combo_Kỹ năng chung' })).toBeVisible();
    await expect(page.getByText('5.000 đ/tuần').first()).toBeVisible();
        
        // Kiểm tra khóa học bên trong hiển thị đúng gói cước 
    await page.getByRole('link', { name: 'QA_KH Combo_Kỹ năng chung' }).click();
    await expect(page.getByRole('heading', { name: 'QA_KH Combo_Kỹ năng chung' }).locator('span')).toBeVisible();
    await expect(page.getByText('5.000 đ/Tuần', { exact: true }).first()).toBeVisible();

        // Truy cập CMS Xóa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-combo');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_KH Combo_Kỹ năng chung' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
 
});
}


/**
 * Case 9 : Thêm mới - chỉnh sửa khóa học bị lỗi - khóa học API
 * Mong muốn: Web hiển thị đúng thông tin như CMS đã cài đặt 
 */

function case9 () {
    test('Case lỗi 9: Thêm và sửa KH API ', async ({ page }) => {
    
          test.slow();
        // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();

        // Thêm khóa học : khóa học API
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    await page
        .getByRole('textbox', { name: 'Tên khóa học API *' })
        .fill('QA_API Thêm_Cổng khoa học giáo dục Vkid');
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'trẻ em' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'Tiền tiểu học' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('120000');
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('5-10');
    await page
        .getByRole('textbox', { name: 'Giới thiệu khóa học *' })
        .fill('Cổng Khoa học cho bé Vkid là cổng giáo dục cho phép các em thiếu nhi học khoa học tự nhiên trực tuyến theo chương trình giáo dục phổ thông qua các câu hỏi trắc nghiệm về các hiện tượng thiên nhiên, các quy luật tự nhiên. Các câu hỏi khoa học gắn liền với những đồ vật và hiện tượng trong cuộc sống hàng ngày, khích lệ trí tò mò, trí tượng tượng, rèn luyện kĩ năng tập trung, tư duy khoa học, mở rộng vốn hiểu biết về thế giới bên ngoài, môi trường xung quanh.');
    await page
        .getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' })
        .fill('-Trải nghiệm hàng ngàn câu hỏi trắc nghiệm thuộc nhiều kĩ năng của 4 bộ môn Khoa học tự nhiên.-Vận dụng kiến thức kĩ năng khoa học để giải thích và giải quyết các vấn đề trong cuộc sống.-Tăng hứng thú học tập qua các bài trắc nghiệm khám phá khoa học.');
    await page.getByRole('button', { name: 'Upload / Chọn icon +' }).click();
    await page.locator('div#file-preview > figure:nth-child(1)').click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page
        .frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.')
        .fill('Cổng Khoa học cho bé Vkid là cổng giáo dục cho phép các em thiếu nhi học khoa học tự nhiên trực tuyến theo chương trình giáo dục phổ thông qua các câu hỏi trắc nghiệm về các hiện tượng thiên nhiên, các quy luật tự nhiên. Các câu hỏi khoa học gắn liền với những đồ vật và hiện tượng trong cuộc sống hàng ngày, khích lệ trí tò mò, trí tượng tượng, rèn luyện kĩ năng tập trung, tư duy khoa học, mở rộng vốn hiểu biết về thế giới bên ngoài, môi trường xung quanh.');
    await page.frameLocator('#suitable_for_ifr').locator('html').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.')
        .fill('-Trẻ em và học sinh bắt đầu học, và yêu thích môn khoa học muốn khám phá thế giới.\n\-Trẻ em và học sinh mong muốn được rèn luyện các thực tế của môn khoa học');   
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page
        .frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.')
        .fill('Hướng dẫn đăng ký tài khoản: \n\Bước 1: Truy cập website và ấn nút đăng kí.\n\Bước 2: Chọn gói cước đăng kí, soạn cú pháp qua SMS và ấn gửi tin nhắn. Sau khi gửi tin nhắn thành công, bạn sẽ nhận được mật khẩu để đăng nhập \n\Bước 3: Đăng nhập bằng số điện thoại và mật khẩu vừa được cấp để học tập và trải nghiệm');
    await page.frameLocator('#user_manual_ifr').getByText('Bước 1: Truy cập website và ấn nút đăng kí.').click();
    await page.getByRole('menuitem', { name: 'Insert' }).nth(2).click();
    await page.getByText('Link...').click();
    await page.getByLabel('URL', { exact: true }).click();
    await page.getByLabel('URL', { exact: true }).fill('http://vkid.mobiedu.vn/');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByLabel('Học trên App').locator('span').nth(1).click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();

        // Thêm gói cước 
    await page.getByRole('link', { name: ' Thêm gói cước' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_supplier_2-container').click();
    await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_service_2-container').click();
    await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_code_2-container').click();
    await page.getByRole('treeitem', { name: 'KN' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_API_Cổng khoa học giáo dục Vkid');
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('5000');
    await page.locator('#pod_period_2');
    await page.getByRole('textbox', { name: 'Nhập text dưới 100 ký tự' }).fill('QA_API_Cổng khoa học giáo dục Vkid');
    await page.getByLabel('Cú pháp SMS Mobiphone').fill('DK QAVKID');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();

        // Truy cập Web kiểm tra sau khi thêm mới thành công 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc#');

        // Kiểm tra bên ngoài hiển thị vị trí 1, gói ngày, hình thức học: không xác định 
    await expect(page.locator('#product-list-show div').filter({ hasText: 'QA_API Thêm_Cổng khoa học giáo dục VkidKhông xác định5.000 đ/ngày95%' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'QA_API Thêm_Cổng khoa học giáo dục Vkid' })).toBeVisible();
    await expect(page.getByText('Không xác định')).toBeVisible();
    await expect(page.getByText('5.000 đ/ngày').first()).toBeVisible();

        // Kiểm tra bên trong hình thức học, khóa học phù hợp, gói cước, hướng dẫn 
    await page.getByRole('link', { name: 'QA_API Thêm_Cổng khoa học giáo dục Vkid' }).click();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 5-10').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: Tiền tiểu học').nth(1)).toBeVisible();
    await expect(page.getByText('QA_API_Cổng khoa học giáo dục Vkid Hot 5.000 đ/Ngày QA_API_Cổng khoa học giáo dụ')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Hướng dẫn đăng ký tài khoản: Bước 1: Truy cập website và ấn nút đăng k')).toBeVisible();

        // Chụp màn hình khóa học bên trong 
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Lỗi_Khóa_học_thêm_case9_1.png', fullPage: true });

        // Truy cập CMS chỉnh sửa khóa học : tên khóa học, giá cước, gói cước tuần 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_API Thêm_Cổng khoa học giáo dục Vkid' })
            .locator('i')
            .nth(0)
            .click();
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_API Sửa_Cổng khoa học giáo dục Vkid');
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('6-12');
    await page.locator('span#select2-edit_study_form-container').click();
    await page.getByRole('treeitem', { name: 'Học trên App' }).click();
    await page.locator('#edit_course_api').getByRole('link', { name: ' Edit' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('10000');
    await page.locator('#edit_pod_period_2').selectOption('2');
    await page.locator('#submit_edit_pod_2').click();
    await expect(page.getByText('Cập nhật gói cước thành công!')).toBeVisible();
    await page.locator('#submit_edit_course_api').click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();

        // Truy cập Web kiểm tra sau khi thêm mới thành công 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc#');

        // Kiểm tra bên ngoài hiển thị vị trí 1, gói ngày, hình thức học: không xác định 
    await expect(page.getByRole('link', { name: 'QA_API Sửa_Cổng khoa học giáo dục Vkid' })).toBeVisible();
    await expect(page.getByText('Học trên Website').first()).toBeVisible();
    await expect(page.getByText('10.000 đ/tuần')).toBeVisible();

        // Kiểm tra bên trong hình thức học, khóa học phù hợp, gói cước, hướng dẫn 
    await page.getByRole('link', { name: 'QA_API Sửa_Cổng khoa học giáo dục Vkid' }).click();
    await expect(page.locator('div').filter({ hasText: 'Trang chủ Khóa học QA_API Sửa_Cổng khoa học giáo dục Vkid' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_API Sửa_Cổng khoa học giáo dục Vkid')).toBeVisible();
    await expect(page.getByText('10.000 đ/Tuần').first()).toBeVisible();
    await expect(page.getByText('QA_API_Cổng khoa học giáo dục Vkid').first()).toBeVisible();
    await expect(page.getByText('Hình thức học: Học trên Website').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 6-12').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: Tiền tiểu học').nth(1)).toBeVisible();
    await expect(page.getByText('QA_API Sửa_Cổng khoa học giáo dục Vkid Cổng Khoa học cho bé Vkid là cổng giáo dụ')).toBeVisible();
    await expect(page.getByText('Lợi ích Trải nghiệm hàng ngàn câu hỏi trắc nghiệm thuộc nhiều kĩ năng của 4 bộ m')).toBeVisible();
    await expect(page.getByText('QA_API_Cổng khoa học giáo dục Vkid Hot 10.000 đ/Tuần QA_API_Cổng khoa học giáo d')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Hướng dẫn đăng ký tài khoản: Bước 1: Truy cập website và ấn nút đăng k')).toBeVisible();

        // Chụp màn hình khóa học bên trong 
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'Lỗi_Khóa_học_sửa_case9_2.png', fullPage: true }); 
        
        // Truy cập CMS xóa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_API Sửa_Cổng khoa học giáo dục Vkid' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
  
});
}

/**
 * Case 10: "Update thêm 3 gói cước của khóa học , không tích nổi bật, nhưng mà ở bên ngoài vẫn hiển thị giá của gói cước mới
-Bên trong khi click vào khoá thì vẫn hiện đúng gói cước đang để nổi bật 
- Mong muốn: - Gói giá cước bên trong - bên ngoài hiển thị đúng với giá cước được thêm mới
 */
function case10() {
    test('Case lỗi 10: Update thêm gói cước ', async ({ page }) => {

        test.slow();
        // Đăng nhập CMS thành công 
        await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
        await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
        await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
        await page.getByRole('button', { name: 'Đăng nhập' }).click();
        await expect(page.getByText('Đăng nhập thành công')).toBeVisible();

        // Thêm khóa học : khóa học API
        await page.goto('https://mskill8admin.mobiedu.vn/course-api');
        await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
        await expect(page.getByRole('heading', {
            name: 'Thêm mới khóa học API'
        })).toBeVisible();
        await page
            .getByRole('textbox', { name: 'Tên khóa học API *' })
            .fill('QA_Office 365 A3_Api');
        await page.waitForTimeout(1000);
        await page.locator('#select2-cp-container').click();
        await page.getByRole('treeitem', { name: 'iNETS' }).click();
        await page.waitForTimeout(1000);
        await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
        await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
        await page.waitForTimeout(1000);
        await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
        await page.getByRole('treeitem', { name: 'trẻ em' }).click();
        await page.waitForTimeout(1000);
        await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
        await page.getByRole('treeitem', { name: 'Tiền tiểu học' }).click();
        await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('120000');
        await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('5-10');
        await page
            .getByRole('textbox', { name: 'Giới thiệu khóa học *' })
            .fill('Office 365 A3 là phiên bản trực tuyến của Microsoft Office đáp ứng các nhu cầu lưu trữ (1TB Cloud), soạn thảo, email, hội thảo video, trung tâm tùy chỉnh để làm việc nhóm trong lớp học với Microsoft Teams, các công cụ tuân thủ và bảo vệ thông tin, cộng với quyền truy nhập đầy đủ vào các ứng dụng Office trên máy tính cũng như các công cụ bảo mật và quản lý bổ sung.Lưu ý: các đối tượng áp dụng:- Thuê bao MobiFone trả trước, trả sau đáp ứng một trong các tiêu chí sau:+ Thuê bao phát triển mới tại địa bàn Công ty khu vực; + Thuê bao phát triển mới tại địa bàn Công ty khu vực; + Tập thuê bao hiện hữu khác do Công ty khu vực chủ động lọc và gửi cập nhật hàng tháng - Đồng thời thỏa mãn tất cả các điều kiện:+ Số thuê bao chính chủ, đứng tên của đúng học sinh, sinh viên được xác nhận đang học tập, nghiên cứu tại đúng trường học đăng ký. + Mail Domain trường học thuộc danh sách được Microsoft chấp thuận tham gia chương trình ưu đãi Office 365 Education.+ Thuê bao đăng ký theo Mail Domain trường học, đảm bảo thực hiện kích hoạt tài khoản Microsoft Account và license gói Office 365 A3 đúng theo email của thuê bao.+ Thuê bao đáp ứng các điều kiện do Microsoft quy định với chương trình Office 365 Education.')
        await page
            .getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' })
            .fill('-Học tập và làm việc dễ dàng hơn với các công cụ hỗ trợ đa dạng.\n\-Truy cấp vào hệ sinh thái các ứng dụng CÓ BẢN QUYỀN từ Microsoft.\n\-Lưu trữ không giới hạn với 1TB dung lượng OneDrive');
        await page.getByRole('button', { name: 'Upload / Chọn icon +' }).click();
        await page.getByRole('figure', { name: '...iao-duc-vkid-icon.png' }).getByRole('img').click();
        await page.getByRole('button', { name: 'Xong' }).click();
        //Nhap mo ta chi tiet
        await page.frameLocator('#description_ifr').getByRole('paragraph').click();
        await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0').fill('Mo ta chi tiet khoa hoc');
        //Nhap phu hop voi
        await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
        await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0').fill('Office 365 A3 là phiên bản trực tuyến của Microsoft Office đáp ứng các nhu cầu lưu trữ (1TB Cloud), soạn thảo, email, hội thảo video, trung tâm tùy chỉnh để làm việc nhóm trong lớp học với Microsoft Teams, các công cụ tuân thủ và bảo vệ thông tin, cộng với quyền truy nhập đầy đủ vào các ứng dụng Office trên máy tính cũng như các công cụ bảo mật và quản lý bổ sung.');
        //Nhap HDSD
        await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
        await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0').fill('Hướng dẫn sử dụng');
        //Chon anh bia
        await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
        await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
        await page.getByRole('button', { name: 'Xong' }).click();
        await page.waitForTimeout(3000);
        //Chon anh minh hoa
        await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
        await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
        await page.getByRole('button', { name: 'Xong' }).click();
        //Chọn hình thức học
        // await page.getByRole('textbox', { name: 'Học trên App' }).click();
        //Vi tri hien thi
        await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
        await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
        // Chon trang thai
        await page.locator('#status').selectOption('1');
        //Chon hot?
        await page.locator('#hot').selectOption('1');
        await page.getByRole('button', { name: 'Lưu' }).click();

        // Thêm gói cước 
        await page.getByRole('link', { name: ' Thêm gói cước' }).click();
        await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
        await page.waitForTimeout(2000);
        await page.locator('#select2-pod_supplier_2-container').click();
        await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
        await page.waitForTimeout(1000);
        await page.locator('#select2-pod_service_2-container').click();
        await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
        await page.waitForTimeout(1000);
        await page.locator('#select2-pod_code_2-container').click();
        await page.getByRole('treeitem', { name: 'KN' }).click();
        await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Kỹ năng chung_Combo');
        await page.getByRole('textbox', { name: 'Giá cước' }).fill('5000');
        page.locator('#pod_period_2');
        await page.getByRole('textbox', { name: 'Nhập text dưới 100 ký tự' }).fill('QA-KN');
        await page.getByLabel('Cú pháp SMS Mobiphone').fill('DK QAKN');
        await page.getByLabel('Ưu tiên').click();
        await page.getByLabel('Ưu tiên').selectOption('1');
        await page.locator('#submit_add_pod_2').click();
        await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Cập nhật thành công!')).toBeVisible();

        // Truy cập Web kiểm tra 
        await page.goto('https://mskill8.mobiedu.vn/');
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        //CLick khoá học ở trang chủ
        await expect(page.getByRole('link', { name: 'QA_Office 365 A3_Api' })).toBeVisible();
        await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('5.000 đ/ngày').first()).toBeVisible();
        //CLick vào khoá học => Check thông tin đã thêm mới có đúng không?
        await page.getByRole('link', { name: 'QA_Office 365 A3_Api' }).click();
        //expect
        await expect(page.locator('h1').getByText('QA_Office 365 A3_Api')).toBeVisible();
        await expect(page.locator("div.desktop-show > div.cta-price > div.price-wrap.d-flex.d-items-center > p.price > span").getByText('5.000 đ/Ngày')).toBeVisible();
        await expect(page.locator("div.desktop-show > div.cta-price > div.price-wrap.d-flex.d-items-center > p.old-price > span").getByText('120.000 đ')).toBeVisible();
        await expect(page.locator("div.desktop-show > div.cta-price > div.sale-off > p").getByText('QA-KN - Kỹ năng')).toBeHidden();
        await expect(page.locator('#overview').getByRole('heading', { name: 'QA_Office 365 A3_Api' })).toBeVisible();
        await expect(page.getByText('Mo ta chi tiet khoa hoc')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Lợi ích' })).toBeVisible();
        await expect(page.getByText('Lưu trữ không giới hạn với 1TB dung lượng OneDrive')).toBeVisible();
        await expect(page.locator('#package div').filter({ hasText: 'QA_Kỹ năng chung_Combo' }).nth(2)).toBeVisible();
        // Chụp ảnh màn hình sau khi thêm khóa học 
        await page.waitForTimeout(3000);
        await page.screenshot({ path: 'Lỗi_Anh_courseApi_thêm_1_2.png', fullPage: true });

        //Back lại CMS -> thêm 3 gói cước -> Chỉnh sửa nổi bật 
        await page.goto('https://mskill8admin.mobiedu.vn/course-api');
        
        // Thêm gói cước 1 
        await page.waitForTimeout(3000);
        await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Office 365 A3_Api' })
            .locator('i')
            .nth(0)
            .click();
        await page.getByRole('link', { name: ' Thêm gói cước' }).click();
        await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
        await page.waitForTimeout(1000);
        await page.locator('#select2-pod_supplier_2-container').click();
        await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
        await page.waitForTimeout(1000);
        await page.locator('#select2-pod_service_2-container').click();
        await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
        await page.waitForTimeout(1000);
        await page.locator('#select2-pod_code_2-container').click();
        await page.getByRole('treeitem', { name: 'EPV' }).click();
        await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Kỹ năng chung_Combo_1');
        await page.getByRole('textbox', { name: 'Giá cước' }).fill('10000');
        page.locator('#pod_period_2');
        await page.getByRole('textbox', { name: 'Nhập text dưới 100 ký tự' }).fill('QA-KN1');
        await page.getByLabel('Cú pháp SMS Mobiphone').fill('DK QAKN1');
        // await page.getByLabel('Ưu tiên').click();
        // await page.getByLabel('Ưu tiên').selectOption('1');
        await page.locator('#submit_add_pod_2').click();
        await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
        await page.locator('button#submit_edit_course_api').click();
        await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
        // Thêm gói cước 2
        await page.goto('https://mskill8admin.mobiedu.vn/course-api');
        await page.waitForTimeout(3000);
        await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Office 365 A3_Api' })
            .locator('i')
            .nth(0)
            .click();
        await page.getByRole('link', { name: ' Thêm gói cước' }).click();
        await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
        await page.waitForTimeout(1000);
        await page.locator('#select2-pod_supplier_2-container').click();
        await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
        await page.waitForTimeout(1000);
        await page.locator('#select2-pod_service_2-container').click();
        await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
        await page.waitForTimeout(1000);
        await page.locator('#select2-pod_code_2-container').click();
        await page.getByRole('treeitem', { name: 'CF150', exact: true }).click();
        await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Kỹ năng chung_Combo_2');
        await page.getByRole('textbox', { name: 'Giá cước' }).fill('15000');
        page.locator('#pod_period_2');
        await page.getByRole('textbox', { name: 'Nhập text dưới 100 ký tự' }).fill('QA-KN2');
        await page.getByLabel('Cú pháp SMS Mobiphone').fill('DK QAKN2');
        // await page.getByLabel('Ưu tiên').click();
        // await page.getByLabel('Ưu tiên').selectOption('1');
        await page.locator('#submit_add_pod_2').click();
        await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
        await page.locator('button#submit_edit_course_api').click();
        await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
        // Thêm gói cước 3
        await page.goto('https://mskill8admin.mobiedu.vn/course-api');
        await page.waitForTimeout(3000);
        await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Office 365 A3_Api' })
            .locator('i')
            .nth(0)
            .click();
        await page.getByRole('link', { name: ' Thêm gói cước' }).click();
        await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
        await page.waitForTimeout(1000);
        await page.locator('#select2-pod_supplier_2-container').click();
        await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
        await page.waitForTimeout(1000);
        await page.locator('#select2-pod_service_2-container').click();
        await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
        await page.waitForTimeout(1000);
        await page.locator('#select2-pod_code_2-container').click();
        await page.getByRole('treeitem', { name: '3CF150' }).click();
        await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Kỹ năng chung_Combo_3');
        await page.getByRole('textbox', { name: 'Giá cước' }).fill('20000');
        page.locator('#pod_period_2');
        await page.getByRole('textbox', { name: 'Nhập text dưới 100 ký tự' }).fill('QA-KN3');
        await page.getByLabel('Cú pháp SMS Mobiphone').fill('DK QAKN3');
        // await page.getByLabel('Ưu tiên').click();
        // await page.getByLabel('Ưu tiên').selectOption('1');
        await page.locator('#submit_add_pod_2').click();
        await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
        await page.locator('button#submit_edit_course_api').click();
        await expect(page.getByText('Cập nhật thành công!')).toBeVisible();

        // Truy cập Web kiểm tra hiển thị 
        // Truy cập Web kiểm tra 
        await page.goto('https://mskill8.mobiedu.vn/');
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        //CLick khoá học ở trang chủ
        await expect(page.getByRole('link', { name: 'QA_Office 365 A3_Api' })).toBeVisible();
        await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('5.000 đ/ngày').first()).toBeVisible();
        //CLick vào khoá học => Check thông tin đã thêm mới có đúng không?
        await page.getByRole('link', { name: 'QA_Office 365 A3_Api' }).click();
        //expect
        await expect(page.locator('h1').getByText('QA_Office 365 A3_Api')).toBeVisible();
        await expect(page.locator("div.desktop-show > div.cta-price > div.price-wrap.d-flex.d-items-center > p.price > span").getByText('5.000 đ/Ngày')).toBeVisible();
        await expect(page.locator("div.desktop-show > div.cta-price > div.price-wrap.d-flex.d-items-center > p.old-price > span").getByText('120.000 đ')).toBeVisible();
        await expect(page.locator("div.desktop-show > div.cta-price > div.sale-off > p").getByText('QA-KN - Kỹ năng')).toBeHidden();
        await expect(page.locator('#overview').getByRole('heading', { name: 'QA_Office 365 A3_Api' })).toBeVisible();
        await expect(page.getByText('Mo ta chi tiet khoa hoc')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Lợi ích' })).toBeVisible();
        await expect(page.getByText('Lưu trữ không giới hạn với 1TB dung lượng OneDrive')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Gói cước' })).toBeVisible();
        await expect(page.getByText('QA_Kỹ năng chung_Combo Hot 5.000 đ/Ngày QA-KN Đăng kí')).toBeVisible();
        await expect(page.getByText('QA_Kỹ năng chung_Combo_1 10.000 đ/Ngày QA-KN1 Đăng kí')).toBeVisible();
        await expect(page.getByText('QA_Kỹ năng chung_Combo_2 15.000 đ/Ngày QA-KN2 Đăng kí')).toBeVisible();
        await expect(page.getByText('QA_Kỹ năng chung_Combo_3 20.000 đ/Ngày QA-KN3 Đăng kí')).toBeVisible();
        // Chụp ảnh màn hình sau khi thêm khóa học 
        await page.waitForTimeout(3000);
        await page.screenshot({ path: 'Lỗi_Anh_courseApi_sua_1_2.png', fullPage: true });
        
        // Xoá khoá học vừa tạo 
        await page.goto('https://mskill8admin.mobiedu.vn/course-api');
        await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Office 365 A3_Api' })
            .locator('i')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();

    });
}


/**
 * Case 11 :  tạo danh mục mới, thì các bài viết đều không lưu được sau khi chỉnh sửa.
 * Mong muốn : tạo danh mục mới, thì các bài viết đều lưu thành công sau khi chỉnh sửa.
 */

function case11() {
    test('Case lỗi 11: Tạo chuyên đề và bài viết  ', async ({ page }) => {

        test.slow();
        // Đăng nhập CMS thành công 
        await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
        await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
        await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
        await page.getByRole('button', { name: 'Đăng nhập' }).click();
        await expect(page.getByText('Đăng nhập thành công')).toBeVisible();

        //  **Tạo chuyên mục mới 
        await page.goto('https://mskill8admin.mobiedu.vn/blog-category');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        // Thêm tiêu đề
        await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_CM_Tin dịch vụ');
        // Thêm đường dẫn
        await page.getByRole('textbox', { name: 'Đường dẫn' }).fill('tin-dich-vu');
        // Thêm nội dung chuyên mục
        await page.getByRole('textbox', { name: 'Nội dung' }).fill('Các dịch vụ, giải pháp, sản phẩm nổi bật cùng các chương trình khuyến mại đặc biệt sẽ được cập nhật nhanh nhất tại chuyên mục "Tin dịch vụ" của mobiEdu. Theo dõi để không bỏ lỡ những ưu đãi hấp dẫn nhất dành riêng cho bạn.');
        // Nhập vị trí hiển thị
        await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
        // Chọn hình thức
        await page.getByLabel('Thêm mới').getByLabel('Hình thức');
        // Upload ảnh
        await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
        await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
        await page.getByRole('button', { name: 'Xong' }).click();
        // Chọn trạng thái
        await page.getByLabel('Thêm mới').getByLabel('Trạng thái').selectOption('1');
        // Click button Lưu chuyên đề 
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm thành công!')).toBeVisible();

        // **Tạo bài viết vào chuyên mục mới thêm 
        await page.goto('https://mskill8admin.mobiedu.vn/blog');
        await page.getByRole('button', { name: 'Thêm mới' }).click();

        await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_BV Thêm_Giáo dục sớm không có nghĩa bắt con học trước chương trình');
        // Nhập đường dẫn
        await page.getByRole('textbox', { name: 'Đường dẫn' }).fill('giao-duc-som');
        // Chọn chuyên mục
        await page.locator('#select2-blog_category-container').click();
        await page.getByRole('treeitem', { name: '[Blog]QA_CM_Tin dịch vụ' }).click();
        // Nhập thời gian đọc 
        await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('12');
        // Gắn thẻ
        await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
        await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
        // Nhập lượt xem
        await page.getByRole('spinbutton', { name: 'Lượt xem' }).fill('1500');
        // Upload ảnh bài viết 
        await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
        await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
        await page.getByRole('button', { name: 'Xong' }).click();
        // Nhập nội dung bài viết 
        await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').locator('html').click();
        await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByLabel('Rich Text Area. Press ALT-0 for help.')
            .fill('Giáo dục sớm là giáo dục tố chất.Giải thích rõ hơn về giáo dục sớm cho trẻ, PGS.TS Trần Thành Nam cho biết, giáo dục sớm là giáo dục tố chất. Cha mẹ và người lớn tác động đến trẻ ngay từ sớm, biết cách tác động một cách khoa học để phát huy tối đa tố chất của trẻ, giúp tạo nền tảng cho sự phát triển của trẻ, giúp trẻ phát triển tốt hơn khi trưởng thành. Khi trẻ có nền tảng tố chất tốt, mới có hứng thú, say mê, tích cực khi học kiến thức, kỹ năng sau này. Nói cách khác, trẻ có khả năng học được thì trẻ mới có hứng thú và say mê học tập và ngược lại khi có hứng thú say mê học tập sẽ giúp cho trẻ tích cực học tập hiệu quả.');
        // Chọn trạng thái 
        await page.getByLabel('Thêm mới').getByLabel('Trạng thái\n*').selectOption('1');
        // Chọn nổi bật 
        await page.getByLabel('Thêm mới').getByLabel('Nổi bật\n*').selectOption('1');
        // Nhập vị trí hiển thị 
        await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
        // Click button Lưu bài viết 
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm mới thành công!')).toBeVisible();

        // **Truy cập Web kiểm tra 
        await page.goto('https://mskill8.mobiedu.vn/');
        // Click button Xem thêm tin tức 
        await page.locator('.home-11 > .container > .button > .btn').click();
        await page.waitForTimeout(2000);
        await expect(page.getByRole('heading', { name: 'Mới nhất' })).toBeVisible();
        await expect(page.locator('h3').filter({ hasText: 'QA_BV Thêm_Giáo dục sớm không có nghĩa bắt con học trước chương trình' })).toBeVisible();
        // Click xem bài viết 
        await page.locator('h3').filter({ hasText: 'QA_BV Thêm_Giáo dục sớm không có nghĩa bắt con học trước chương trình' }).getByRole('link').click();
        await expect(page.getByText('QA_CM_Tin dịch vụ QA_BV Thêm_Giáo dục sớm không có nghĩa bắt con học trước chương trình dat')).toBeVisible();
        // Chụp hình ảnh thêm bài viết 
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Lỗi_Ảnh_thêm_bài_viết.png', fullPage: true });

        // **Truy cập CMS chỉnh sửa bài viết 
        await page.goto('https://mskill8admin.mobiedu.vn/blog');
        // Click sửa bài viết 
        await page
            .locator('tbody > tr')
            .filter({ hasText: 'Giáo dục sớm không có nghĩa bắt con học trước chương trình' })
            .locator('i')
            .nth(0)
            .click();
        // Sửa tiêu đề 
        await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_BV Sửa_Giáo dục sớm không có nghĩa bắt con học trước chương trình');
        // Sửa hình ảnh bài viết 
        await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
        await page.locator('div#file-preview figure:nth-child(7) > img').click();
        await page.getByRole('button', { name: 'Xong' }).click();
        // Click button Lưu chỉnh sửa bài viết 
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Cập nhật thành công!')).toBeVisible();

        // // **Truy cập Web kiểm tra sau chỉnh sửa
        await page.goto('https://mskill8.mobiedu.vn/');
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click button Xem thêm tin tức 
        await page.locator('.home-11 > .container > .button > .btn').click();
        await page.waitForTimeout(2000);
        await expect(page.getByRole('heading', { name: 'Mới nhất' })).toBeVisible();
        await expect(page.locator('h3').filter({ hasText: 'QA_BV Sửa_Giáo dục sớm không có nghĩa bắt con học trước chương trình' })).toBeVisible();
        // Click xem bài viết 
        await page.locator('h3').filter({ hasText: 'QA_BV Sửa_Giáo dục sớm không có nghĩa bắt con học trước chương trình' }).getByRole('link').click();
        await expect(page.getByText('QA_CM_Tin dịch vụ QA_BV Sửa_Giáo dục sớm không có nghĩa bắt con học trước chương trình')).toBeVisible();
        // Chụp hình ảnh thêm bài viết 
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Lỗi_Ảnh_sửa_bài_viết.png', fullPage: true });
        
        // **Xóa Bài viết vừa thêm 
        await page.goto('https://mskill8admin.mobiedu.vn/blog');
        await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_BV Sửa_Giáo dục sớm không có nghĩa bắt con học trước chương trình' })
            .locator('i')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
        
        // Xóa chuyên mục vừa thêm 
        await page.goto('https://mskill8admin.mobiedu.vn/blog-category');
        await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_CM_Tin dịch vụ' })
            .locator('i')
            .nth(1)
            .click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();

    });
}

/**
 * Case 12: fail stt 5: "Lọc câu hỏi theo từ khóa.VD: Nhập Toán -> Hệ thống hiển thị không đúng từ khóa nhập "
 * Mong muốn: Lọc từ khóa nào hiển thị đúng ký tự, tìm kiếm thành công 
 */

function case12() {
    test('Case lỗi 12:Lọc tìm kiếm hỗ trợ  ', async ({ page }) => {

        test.slow();
        // Đăng nhập CMS thành công 
        await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
        await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
        await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
        await page.getByRole('button', { name: 'Đăng nhập' }).click();
        await expect(page.getByText('Đăng nhập thành công')).toBeVisible();

        // Truy cập link hỗ trợ 
        await page.goto('https://mskill8admin.mobiedu.vn/support-category');

        // Nhập tìm kiếm -> click btn Tìm kiếm
        await page.getByPlaceholder('Nhập từ khóa tìm kiếm...').fill('Đăng kí - Đăng nhập');
        await page.getByRole('button', { name: 'Tìm kiếm' }).click();

        // Mong muốn 
        await expect(page.getByRole('cell', { name: 'Đăng kí - Đăng nhập' })).toBeVisible();
     
    });
}

/**
 * Case 13: Click bài viết trên trang chủ 
 * Mong muốn: Điều hướng đúng đến bài viết => Không hiển thị lỗi 
 */

function case13() {
    test('Case lỗi 13: click bài viết trang chủ', async ({ page }) => {

            test.slow();
        // Truy cập hệ thống thành công
        await page.goto('https://mskill8.mobiedu.vn/');
        // Click bài viết 1
        await page.getByRole('link', { name: 'NHỮNG ĐIỀU CẦN LƯU Ý KHI THAM GIA CHƯƠNG TRÌNH \\\'ĐUA ĐIỂM TÍCH QUÀ\\\'' }).click();
        await expect(page.getByRole('heading', { name: 'NHỮNG ĐIỀU CẦN LƯU Ý KHI THAM GIA CHƯƠNG TRÌNH \\\\\\\'ĐUA ĐIỂM TÍCH QUÀ\\\\\\\'' })).toBeVisible();
        // Click bài viết 2 
        await page.locator('a').first().click();
        await page.getByRole('link', { name: 'THỂ LỆ CHƯƠNG TRÌNH “ĐUA ĐIỂM TÍCH QUÀ” TRÊN CỘNG ĐỒNG HỎI ĐÁP' }).click();
        await expect(page.getByRole('heading', { name: 'THỂ LỆ CHƯƠNG TRÌNH “ĐUA ĐIỂM TÍCH QUÀ” TRÊN CỘNG ĐỒNG HỎI ĐÁP' })).toBeVisible();
        // Click bài viết 3
        await page.locator('a').first().click();
        await page.getByRole('link', { name: 'MOBIEDU RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.MOBIEDU.VN' }).click();
        await expect(page.getByRole('heading', { name: 'MOBIEDU RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.MOBIEDU.VN' })).toBeVisible();
        // Click bài viết 4 
        await page.locator('a').first().click();
        await page.getByRole('link', { name: 'Đáp án đề thi môn Lịch sử tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu' }).click();
        await expect(page.getByRole('heading', { name: 'Đáp án đề thi môn Lịch sử tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu' })).toBeVisible();

});
}

/**
 * Case 14: Click btn Xem thếm -> Đến trang Tin tức -> click bài viết
 * Mong muốn: Điều hướng đúng đến bài viết => Không hiển thị lỗi 
 */

function case14() {
    test('Case lỗi 14: click btn Xem thêm', async ({ page }) => {

        test.slow();
        // Truy cập hệ thống thành công
        await page.goto('https://mskill8.mobiedu.vn/');
        // Click btn Xem thêm 
        await page.locator('.home-11 > .container > .button > .btn').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/tin-tuc');
        // Click bài viết số 1
        await page.locator('h1').getByRole('link', { name: 'NHỮNG ĐIỀU CẦN LƯU Ý KHI THAM GIA CHƯƠNG TRÌNH \\\\\\\'ĐUA ĐIỂM TÍCH QUÀ\\\\\\\'' }).click();
        await expect(page.getByRole('heading', { name: 'NHỮNG ĐIỀU CẦN LƯU Ý KHI THAM GIA CHƯƠNG TRÌNH \\\\\\\'ĐUA ĐIỂM TÍCH QUÀ\\\\\\\'' })).toBeVisible();
        // Click bài viết số 2 
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'NHỮNG ĐIỀU CẦN LƯU Ý KHI THAM GIA CHƯƠNG TRÌNH \\\'ĐUA ĐIỂM TÍCH QUÀ\\\'' }).first().click();
        await expect(page.getByRole('heading', { name: 'NHỮNG ĐIỀU CẦN LƯU Ý KHI THAM GIA CHƯƠNG TRÌNH \\\\\\\'ĐUA ĐIỂM TÍCH QUÀ\\\\\\\'' })).toBeVisible();
        // Click bài viết số 3
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'MOBIEDU RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.MOBIEDU.VN' }).first().click();
        await expect(page.getByRole('heading', { name: 'MOBIEDU RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.MOBIEDU.VN' })).toBeVisible();
        // Click bài viết số 4 
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'TƯNG BỪNG MỪNG SINH NHẬT MOBIFONE VỚI MOBIEDU' }).click();
        await expect(page.getByRole('heading', { name: 'TƯNG BỪNG MỪNG SINH NHẬT MOBIFONE VỚI MOBIEDU' })).toBeVisible();
        // Click bài viết số 5 
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'NHỮNG ĐIỀU CẦN LƯU Ý KHI THAM GIA CHƯƠNG TRÌNH \\\'ĐUA ĐIỂM TÍCH QUÀ\\\'' }).nth(1).click();
        await expect(page.getByRole('heading', { name: 'NHỮNG ĐIỀU CẦN LƯU Ý KHI THAM GIA CHƯƠNG TRÌNH \\\\\\\'ĐUA ĐIỂM TÍCH QUÀ\\\\\\\'' })).toBeVisible();
        // Click bài viết số 6 
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.locator('h3').filter({ hasText: /^THỂ LỆ CHƯƠNG TRÌNH “ĐUA ĐIỂM TÍCH QUÀ” TRÊN CỘNG ĐỒNG HỎI ĐÁP$/ }).getByRole('link').click();
        await expect(page.getByRole('heading', { name: 'THỂ LỆ CHƯƠNG TRÌNH “ĐUA ĐIỂM TÍCH QUÀ” TRÊN CỘNG ĐỒNG HỎI ĐÁP' })).toBeVisible();
        // Click bài viết số 7 
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'THỂ LỆ CHƯƠNG TRÌNH “ĐUA ĐIỂM TÍCH QUÀ” TRÊN CỘNG ĐỒNG HỎI ĐÁP' }).nth(2).click();
        await expect(page.getByRole('heading', { name: 'THỂ LỆ CHƯƠNG TRÌNH “ĐUA ĐIỂM TÍCH QUÀ” TRÊN CỘNG ĐỒNG HỎI ĐÁP' })).toBeVisible();
        // Click bài viết số 8 
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'MOBIEDU RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.MOBIEDU.VN' }).nth(2).click();
        await expect(page.getByRole('heading', { name: 'MOBIEDU RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.MOBIEDU.VN' })).toBeVisible();
        // Click bài viết số 9 
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByText('Đáp án đề thi môn Lịch sử tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu').click();
        await expect(page.getByRole('heading', { name: 'Đáp án đề thi môn Lịch sử tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu' })).toBeVisible();
        // Click bài viết số 10
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'Đáp án đề thi môn Toán tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu' }).first().click();
        await expect(page.getByRole('heading', { name: 'Đáp án đề thi môn Toán tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu' })).toBeVisible();
        // Click bài viết số 11
        await page.getByRole('link', { name: 'Tin tức', exact: true }).first().click();
        await page.getByRole('link', { name: 'Đáp án đề thi môn Văn tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu' }).first().click();
        await expect(page.getByRole('heading', { name: 'Đáp án đề thi môn Văn tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu' })).toBeVisible();
        // Click bài viết số 12
        await page.getByRole('link', { name: 'Tin tức', exact: true }).first().click();
        await page.getByRole('link', { name: 'Cập nhật tất cả đáp án đề thi tốt nghiệp THPT 2023 nhanh nhất tại mobiEdu' }).first().click();
        await expect(page.getByRole('heading', { name: 'Cập nhật tất cả đáp án đề thi tốt nghiệp THPT 2023 nhanh nhất tại mobiEdu' })).toBeVisible();
    
});
}

/**
 * Case 15: Click bài viết tại chủ đề 
 * Mong muốn: Điều hướng đúng đến bài viết => Không hiển thị lỗi 
 */

function case15() {
    test('Case lỗi 15: click btn chủ đề', async ({ page }) => {

        test.slow();
        // Truy cập hệ thống thành công
        await page.goto('https://mskill8.mobiedu.vn/');
        // Click btn Xem thêm 
        await page.locator('.home-11 > .container > .button > .btn').click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/tin-tuc');
        // Click chủ đề Tin tức
        await page.getByRole('link', { name: 'Tin tức chevron_right' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/tin-tuc/tin-tuc');
        // Tin tức : click bài viết số 1 
        await page.getByRole('link', { name: 'NHỮNG ĐIỀU CẦN LƯU Ý KHI THAM GIA CHƯƠNG TRÌNH \\\'ĐUA ĐIỂM TÍCH QUÀ\\\'' }).first().click();
        await expect(page.getByRole('heading', { name: 'NHỮNG ĐIỀU CẦN LƯU Ý KHI THAM GIA CHƯƠNG TRÌNH \\\\\\\'ĐUA ĐIỂM TÍCH QUÀ\\\\\\\'' })).toBeVisible();
        // Tin tức : click bài viết số 2 
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'Tin tức chevron_right' }).click();
        await page.getByRole('link', { name: 'THỂ LỆ CHƯƠNG TRÌNH “ĐUA ĐIỂM TÍCH QUÀ” TRÊN CỘNG ĐỒNG HỎI ĐÁP' }).first().click();
        await expect(page.getByRole('heading', { name: 'THỂ LỆ CHƯƠNG TRÌNH “ĐUA ĐIỂM TÍCH QUÀ” TRÊN CỘNG ĐỒNG HỎI ĐÁP' })).toBeVisible();
        // Tin tức : click bài viết số 3
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'Tin tức chevron_right' }).click();
        await page.getByRole('link', { name: 'MOBIEDU RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.MOBIEDU.VN' }).first().click();
        await expect(page.getByRole('heading', { name: 'MOBIEDU RA MẮT CHUYÊN TRANG CỘNG ĐỒNG HỎI ĐÁP HOIDAP.MOBIEDU.VN' })).toBeVisible();
        // Tin tức : click bài viết số 4
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'Tin tức chevron_right' }).click();
        await page.getByRole('link', { name: '2', exact: true }).click();
        await page.getByRole('link', { name: 'TƯNG BỪNG MỪNG SINH NHẬT MOBIFONE VỚI MOBIEDU' }).first().click();
        await expect(page.getByRole('heading', { name: 'TƯNG BỪNG MỪNG SINH NHẬT MOBIFONE VỚI MOBIEDU' })).toBeVisible();
        // Click btn Tuyển sinh 
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'Tuyển sinh chevron_right' }).click();
        await expect(page).toHaveURL('https://mskill8.mobiedu.vn/tin-tuc/tuyen-sinh');
        // Tuyển sinh : Click bài viết số 1 
        await page.getByRole('link', { name: 'Đáp án đề thi môn Lịch sử tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu' }).first().click();
        await expect(page.getByRole('heading', { name: 'Đáp án đề thi môn Lịch sử tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu' })).toBeVisible();
        // Tuyển sinh : Click bài viết số 2
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'Tuyển sinh chevron_right' }).click();
        await page.getByRole('link', { name: 'Đáp án đề thi môn Toán tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu' }).first().click();
        await expect(page.getByRole('heading', { name: 'Đáp án đề thi môn Toán tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu' })).toBeVisible();
        // Tuyển sinh : Click bài viết số 3
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'Tuyển sinh chevron_right' }).click();
        await page.getByRole('link', { name: 'Đáp án đề thi môn Văn tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu' }).first().click();
        await expect(page.getByRole('heading', { name: 'Đáp án đề thi môn Văn tốt nghiệp THPT Quốc gia 2023 nhanh nhất tại mobiEdu' })).toBeVisible();
        // Tuyển sinh : Click bài viết số 4
        await page.getByRole('link', { name: 'Tin tức' }).first().click();
        await page.getByRole('link', { name: 'Tuyển sinh chevron_right' }).click();
        await page.getByRole('link', { name: 'Cập nhật tất cả đáp án đề thi tốt nghiệp THPT 2023 nhanh nhất tại mobiEdu' }).first().click();
        await expect(page.getByRole('heading', { name: 'Cập nhật tất cả đáp án đề thi tốt nghiệp THPT 2023 nhanh nhất tại mobiEdu' })).toBeVisible();

});
}

function main () {
    case1();
    case2();
    case3();
    case4();
    case5();
    case6();
    case7();
    case8();
    case9();
    case10();
    case11();
    case12();
    case13();
    case14();
    case15();

}

main();