// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../../dataSite.json';

/**
 * Case 1: Thành công : Thêm bài viết - Hoạt động
 */

function case1 () {
    test('Case 1: Pass - Bài viết', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - tin tức - bài viết 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Tin tức' }).click();
    await page.getByRole('link', { name: 'Bài viết' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/blog");
    await expect(page.getByRole('heading', { name: 'Danh sách bài viết' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_BV_Chiến thuật nâng điểm Speaking_Case 1');
    // Chọn chuyên mục - Tin dịch vụ 
    await page.locator('#select2-blog_category-container').click();
    await page.getByRole('treeitem', { name: '[Blog]Tin dịch vụ' }).click();
    // Nhập thời gian đọc 
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('12');
    // Gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn hình ảnh 
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập nội dung 
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole('paragraph').click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]')
            .getByLabel('Rich Text Area. Press ALT-0 for help.')
            .fill('Case 1 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')
    await page.keyboard.press('Enter');
    // Chèn ảnh vào nội dung bài viết 
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Insert' }).click();
    await page.waitForTimeout(1000);
    await page.getByText('Image...').click();
    await page.getByLabel('Source').click();
    await page.getByLabel('Source').fill('https://cdn.mobiedu.vn/mskill/uploads/mb3/1702352852-anh-2.jpeg');
    await page.getByLabel('Width').click();
    await page.getByLabel('Width').fill('600');
    await page.getByRole('button', { name: 'Save' }).click();
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('1');
    // Chọn nổi bật 
    await page.locator('select#hot').selectOption('1');
    // Chọn vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm  
    //  Trang chủ -> Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_BV_Chiến thuật nâng điểm Speaking_Case 1')).toBeVisible();
    // Click btn Xem thêm -> Hiển thị 
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_BV_Chiến thuật nâng điểm Speaking_Case 1')).toBeVisible();
    await expect(page.locator('div:nth-child(1) > article > div.big-item-footer > div.category').getByText('Tin dịch vụ')).toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_BV_Chiến thuật nâng điểm Speaking_Case 1')).toBeVisible();
    // Click chủ đề -> Hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_BV_Chiến thuật nâng điểm Speaking_Case 1')).toBeVisible();
    // Click bài viết 
    await page.getByRole('heading', { name: 'QA_BV_Chiến thuật nâng điểm Speaking_Case 1' }).getByRole('link').click();
    await expect(page.getByRole('link', { name: 'Tin dịch vụ' }).nth(1)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_BV_Chiến thuật nâng điểm Speaking_Case 1' })).toBeVisible();
    await expect(page.getByText('12 phút đọc')).toBeVisible();
    await expect(page.getByText('Case 1 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')).toBeVisible();
    await expect(page.locator("img[src='https://cdn.mobiedu.vn/mskill/uploads/mb3/1702352852-anh-2.jpeg']")).toBeVisible();
    // Truy cập CMS xóa bài viết
    await page.goto(dataSiteTest[0].linkSite + "/blog");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_BV_Chiến thuật nâng điểm Speaking_Case 1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa 
    //  Trang chủ -> Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_BV_Chiến thuật nâng điểm Speaking_Case 1')).not.toBeVisible();
    // Click btn Xem thêm -> Không hiển thị  
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_BV_Chiến thuật nâng điểm Speaking_Case 1')).not.toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_BV_Chiến thuật nâng điểm Speaking_Case 1')).not.toBeVisible();
    // Click chủ đề -> Không hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_BV_Chiến thuật nâng điểm Speaking_Case 1'))
            .not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Thêm bài viết - Ẩn
 */

function case2 () {
    test('Case 2: Pass - Ẩn', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - tin tức - bài viết 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Tin tức' }).click();
    await page.getByRole('link', { name: 'Bài viết' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/blog");
    await expect(page.getByRole('heading', { name: 'Danh sách bài viết' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_BV Ẩn_Chiến thuật nâng điểm Speaking_Case 2');
    // Chọn chuyên mục - Tin dịch vụ 
    await page.locator('#select2-blog_category-container').click();
    await page.getByRole('treeitem', { name: '[Blog]Tin dịch vụ' }).click();
    // Nhập thời gian đọc 
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('12')
    // Gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn hình ảnh 
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập nội dung 
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole('paragraph').click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]')
            .getByLabel('Rich Text Area. Press ALT-0 for help.')
            .fill('Case 2 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')
    await page.keyboard.press('Enter');
    // Chèn ảnh vào nội dung bài viết 
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Insert' }).click();
    await page.waitForTimeout(1000);
    await page.getByText('Image...').click();
    await page.getByLabel('Source').click();
    await page.getByLabel('Source').fill('https://cdn.mobiedu.vn/mskill/uploads/mb3/1702352852-anh-2.jpeg');
    await page.getByLabel('Width').click();
    await page.getByLabel('Width').fill('600');
    await page.getByRole('button', { name: 'Save' }).click();
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('0');
    // Chọn nổi bật 
    await page.locator('select#hot').selectOption('1');
    // Chọn vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm  
    //  Trang chủ -> Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_BV Ẩn_Chiến thuật nâng điểm Speaking_Case 2')).not.toBeVisible();
    // Click btn Xem thêm -> Hiển thị 
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_BV Ẩn_Chiến thuật nâng điểm Speaking_Case 2')).not.toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_BV Ẩn_Chiến thuật nâng điểm Speaking_Case 2')).not.toBeVisible();
    // Click chủ đề -> Hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_BV Ẩn_Chiến thuật nâng điểm Speaking_Case 2'))
            .not.toBeVisible();
    // Truy cập CMS xóa bài viết
    await page.goto(dataSiteTest[0].linkSite + "/blog");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_BV Ẩn_Chiến thuật nâng điểm Speaking_Case 2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 3: Không thành công - Để trống trường
 */

function case3 () {
    test('Case 3: Fail_để trống trường', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - tin tức - bài viết 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Tin tức' }).click();
    await page.getByRole('link', { name: 'Bài viết' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/blog");
    await expect(page.getByRole('heading', { name: 'Danh sách bài viết' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('');
    // Chọn chuyên mục - Tin dịch vụ 
    await page.locator('#select2-blog_category-container');
    await page.getByRole('treeitem', { name: '[Blog]Tin dịch vụ' });
    // Nhập thời gian đọc 
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('');
    // Gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' });
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' });
    // Chọn vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng nhập tiêu đề!')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn danh mục!')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập thời gian đọc!')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn hashtag!')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập vị trí hiển thị!')).toBeVisible();

});
}

/**
 * Case 4: Không thành công - nhập thời gian, vị trí là số âm 
 */

function case4 () {
    test('Case 4: Fail_vị trí,thời gian nhập số âm', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - tin tức - bài viết 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Tin tức' }).click();
    await page.getByRole('link', { name: 'Bài viết' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/blog");
    await expect(page.getByRole('heading', { name: 'Danh sách bài viết' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_BV_Chiến thuật nâng điểm Speaking_Case 1');
    // Chọn chuyên mục - Tin dịch vụ 
    await page.locator('#select2-blog_category-container').click();
    await page.getByRole('treeitem', { name: '[Blog]Tin dịch vụ' }).click();
    // Nhập thời gian đọc 
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('-12')
    // Gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn hình ảnh 
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập nội dung 
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole('paragraph').click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]')
            .getByLabel('Rich Text Area. Press ALT-0 for help.')
            .fill('Case 1 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')
    await page.keyboard.press('Enter');
    // Chèn ảnh vào nội dung bài viết 
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Insert' }).click();
    await page.waitForTimeout(1000);
    await page.getByText('Image...').click();
    await page.getByLabel('Source').click();
    await page.getByLabel('Source').fill('https://cdn.mobiedu.vn/mskill/uploads/mb3/1702352852-anh-2.jpeg');
    await page.getByLabel('Width').click();
    await page.getByLabel('Width').fill('600');
    await page.getByRole('button', { name: 'Save' }).click();
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('1');
    // Chọn nổi bật 
    await page.locator('select#hot').selectOption('1');
    // Chọn vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('-1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng nhập thời gian đọc lớn hơn hoặc bằng 0!')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập vị trí hiển thị lớn hơn hoặc bằng 0!')).toBeVisible();

});
}

/**
 * Case 5: Không thành công - click btn Đóng
 */

function case5 () {
    test('Case 5: Fail_click btn Đóng', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - tin tức - bài viết 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Tin tức' }).click();
    await page.getByRole('link', { name: 'Bài viết' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/blog");
    await expect(page.getByRole('heading', { name: 'Danh sách bài viết' })).toBeVisible();
    // Click btn Thêm mới 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_BV_Chiến thuật nâng điểm Speaking_Case 1');
    // Chọn chuyên mục - Tin dịch vụ 
    await page.locator('#select2-blog_category-container').click();
    await page.getByRole('treeitem', { name: '[Blog]Tin dịch vụ' }).click();
    // Nhập thời gian đọc 
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('12')
    // Gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn hình ảnh 
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập nội dung 
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole('paragraph').click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]')
            .getByLabel('Rich Text Area. Press ALT-0 for help.')
            .fill('Case 1 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')
    await page.keyboard.press('Enter');
    // Chèn ảnh vào nội dung bài viết 
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Insert' }).click();
    await page.waitForTimeout(1000);
    await page.getByText('Image...').click();
    await page.getByLabel('Source').click();
    await page.getByLabel('Source').fill('https://cdn.mobiedu.vn/mskill/uploads/mb3/1702352852-anh-2.jpeg');
    await page.getByLabel('Width').click();
    await page.getByLabel('Width').fill('600');
    await page.getByRole('button', { name: 'Save' }).click();
    // Chọn trạng thái 
    await page.locator('select#status').selectOption('1');
    // Chọn nổi bật 
    await page.locator('select#hot').selectOption('1');
    // Chọn vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Thêm mới thành công!')).not.toBeVisible();

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

