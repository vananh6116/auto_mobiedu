// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../../dataSite.json';

/**
 * Case 1: Thành công : Sửa bài viết
 */

function case1 () {
    test('Case 1: Pass - Sửa Bài viết', async ({ page }) => {
    
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
    // Thêm mới bài viết
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 1');
    await page.locator('#select2-blog_category-container').click();
    await page.getByRole('treeitem', { name: '[Blog]Tin dịch vụ' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('12')
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole('paragraph').click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]')
            .getByLabel('Rich Text Area. Press ALT-0 for help.')
            .fill('Case 1_1 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Insert' }).click();
    await page.waitForTimeout(1000);
    await page.getByText('Image...').click();
    await page.getByLabel('Source').click();
    await page.getByLabel('Source').fill('https://cdn.mobiedu.vn/mskill/uploads/mb3/1702352852-anh-2.jpeg');
    await page.getByLabel('Width').click();
    await page.getByLabel('Width').fill('600');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('select#status').selectOption('1');
    await page.locator('select#hot').selectOption('1');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm  
    //  Trang chủ -> Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 1')).toBeVisible();
    // Click btn Xem thêm -> Hiển thị 
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 1')).toBeVisible();
    await expect(page.locator('div:nth-child(1) > article > div.big-item-footer > div.category').getByText('Tin dịch vụ')).toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 1')).toBeVisible();
    // Click chủ đề -> Hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 1'))
            .toBeVisible();
    // Click bài viết 
    await page.getByRole('heading', { name: 'QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 1' }).getByRole('link').click();
    await expect(page.getByRole('link', { name: 'Tin dịch vụ' }).nth(1)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 1' })).toBeVisible();
    await expect(page.getByText('12 phút đọc')).toBeVisible();
    await expect(page.getByText('Case 1_1 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')).toBeVisible();
    await expect(page.locator("img[src='https://cdn.mobiedu.vn/mskill/uploads/mb3/1702352852-anh-2.jpeg']")).toBeVisible();
    // Truy cập CMS sửa bài viết
    await page.goto(dataSiteTest[0].linkSite + "/blog");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 1' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Sửa BV_Chiến thuật nâng điểm Speaking_Case 2');
    // Sửa chuyên mục
    await page.locator('span#select2-edit_blog_category-container').click();
    await page.getByRole('treeitem', { name: '[Blog]Tin tức' }).click();
    // Sửa thời gian đọc 
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('15');
    // Sửa nội dung bài viết 
    await page.frameLocator('#edit_content_ifr').getByRole('paragraph').nth(1).click();
    await page.frameLocator('#edit_content_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1_2 _ Nội dung bài viết Chiến thuật nâng điểm Speaking\n\n\n');
    // Sửa ảnh bải viết
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Insert' }).click();
    await page.waitForTimeout(1000);
    await page.getByText('Image...').click();
    await page.getByLabel('Source').click();
    await page.getByLabel('Source').fill('https://cdn.mobiedu.vn/mskill/uploads/mb3/1696237572-rounded-in-photoretrica.png');
    await page.getByLabel('Width').click();
    await page.getByLabel('Width').fill('350');
    await page.getByRole('button', { name: 'Save' }).click();
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau sửa 
    //  Trang chủ -> Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Sửa BV_Chiến thuật nâng điểm Speaking_Case 2')).toBeVisible();
    // Click btn Xem thêm -> Hiển thị 
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Sửa BV_Chiến thuật nâng điểm Speaking_Case 2')).toBeVisible();
    await expect(page.locator('div:nth-child(1) > article > div.big-item-footer > div.category').getByText('Tin tức')).toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Sửa BV_Chiến thuật nâng điểm Speaking_Case 2')).toBeVisible();
    // Click chủ đề Tin dịch vụ -> Không hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Sửa BV_Chiến thuật nâng điểm Speaking_Case 2'))
            .not.toBeVisible();
    // Click chủ đề Tin dịch vụ -> Hiển thị        
    await page.getByRole('link', { name: 'Tin tức chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Sửa BV_Chiến thuật nâng điểm Speaking_Case 2'))
            .toBeVisible();
    // Click bài viết 
    await page.getByRole('heading', { name: 'QA_Sửa BV_Chiến thuật nâng điểm Speaking_Case 2' }).getByRole('link').click();
    await expect(page.getByRole('link', { name: 'Tin tức' }).nth(1)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Sửa BV_Chiến thuật nâng điểm Speaking_Case 2' })).toBeVisible();
    await expect(page.getByText('15 phút đọc')).toBeVisible();
    await expect(page.getByText('Case 1_2 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')).toBeVisible();
    await expect(page.locator("img[src='https://cdn.mobiedu.vn/mskill/uploads/mb3/1696237572-rounded-in-photoretrica.png']")).toBeVisible();
    // Truy cập CMS xóa bài viết
    await page.goto(dataSiteTest[0].linkSite + "/blog");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa BV_Chiến thuật nâng điểm Speaking_Case 2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa 
    //  Trang chủ -> Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Sửa BV_Chiến thuật nâng điểm Speaking_Case 2')).not.toBeVisible();
    // Click btn Xem thêm -> Không hiển thị  
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Sửa BV_Chiến thuật nâng điểm Speaking_Case 2')).not.toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Sửa BV_Chiến thuật nâng điểm Speaking_Case 2')).not.toBeVisible();
    // Click chủ đề -> Không hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Sửa BV_Chiến thuật nâng điểm Speaking_Case 2'))
            .not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Sửa Hoạt động sang Ẩn
 */

function case2 () {
    test('Case 2: Pass - Hoạt động sang Ẩn', async ({ page }) => {
    
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
    // Thêm mới bài viết
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 2');
    await page.locator('#select2-blog_category-container').click();
    await page.getByRole('treeitem', { name: '[Blog]Tin dịch vụ' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('12')
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole('paragraph').click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]')
            .getByLabel('Rich Text Area. Press ALT-0 for help.')
            .fill('Case 2 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Insert' }).click();
    await page.waitForTimeout(1000);
    await page.getByText('Image...').click();
    await page.getByLabel('Source').click();
    await page.getByLabel('Source').fill('https://cdn.mobiedu.vn/mskill/uploads/mb3/1702352852-anh-2.jpeg');
    await page.getByLabel('Width').click();
    await page.getByLabel('Width').fill('600');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('select#status').selectOption('1');
    await page.locator('select#hot').selectOption('1');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm  
    //  Trang chủ -> Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 2')).toBeVisible();
    // Click btn Xem thêm -> Hiển thị 
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 2')).toBeVisible();
    await expect(page.locator('div:nth-child(1) > article > div.big-item-footer > div.category').getByText('Tin dịch vụ')).toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 2')).toBeVisible();
    // Click chủ đề -> Hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 2'))
            .toBeVisible();
    // Click bài viết 
    await page.getByRole('heading', { name: 'QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 2' }).getByRole('link').click();
    await expect(page.getByRole('link', { name: 'Tin dịch vụ' }).nth(1)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 2' })).toBeVisible();
    await expect(page.getByText('12 phút đọc')).toBeVisible();
    await expect(page.getByText('Case 2 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')).toBeVisible();
    await expect(page.locator("img[src='https://cdn.mobiedu.vn/mskill/uploads/mb3/1702352852-anh-2.jpeg']")).toBeVisible();
    // Truy cập CMS sửa bài viết
    await page.goto(dataSiteTest[0].linkSite + "/blog");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 2' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Hoạt động sang Ẩn_Chiến thuật nâng điểm Speaking_Case 2');
    // Sửa trạng thái Hoạt động sang Ẩn
    await page.locator('select#edit_status').selectOption('0');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau sửa
    //  Trang chủ -> Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Hoạt động sang Ẩn_Chiến thuật nâng điểm Speaking_Case 2'))
            .not.toBeVisible();
    // Click btn Xem thêm -> Không hiển thị  
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Hoạt động sang Ẩn_Chiến thuật nâng điểm Speaking_Case 2')).not.toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Hoạt động sang Ẩn_Chiến thuật nâng điểm Speaking_Case 2')).not.toBeVisible();
    // Click chủ đề -> Không hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Hoạt động sang Ẩn_Chiến thuật nâng điểm Speaking_Case 2'))
            .not.toBeVisible();
    // Truy cập CMS xóa bài viết
    await page.goto(dataSiteTest[0].linkSite + "/blog");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Hoạt động sang Ẩn_Chiến thuật nâng điểm Speaking_Case 2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 3: Thành công : Sửa Ẩn sang Hoạt động
 */

function case3 () {
    test('Case 3: Pass - Ẩn sang Hoạt động', async ({ page }) => {
    
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
    // Thêm mới bài viết
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 3');
    await page.locator('#select2-blog_category-container').click();
    await page.getByRole('treeitem', { name: '[Blog]Tin dịch vụ' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('12')
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole('paragraph').click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]')
            .getByLabel('Rich Text Area. Press ALT-0 for help.')
            .fill('Case 3 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Insert' }).click();
    await page.waitForTimeout(1000);
    await page.getByText('Image...').click();
    await page.getByLabel('Source').click();
    await page.getByLabel('Source').fill('https://cdn.mobiedu.vn/mskill/uploads/mb3/1702352852-anh-2.jpeg');
    await page.getByLabel('Width').click();
    await page.getByLabel('Width').fill('600');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('select#status').selectOption('0');
    await page.locator('select#hot').selectOption('1');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm
    //  Trang chủ -> Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 3'))
            .not.toBeVisible();
    // Click btn Xem thêm -> Không hiển thị  
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 3')).not.toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 3')).not.toBeVisible();
    // Click chủ đề -> Không hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 3'))
            .not.toBeVisible();
    // Truy cập CMS sửa bài viết
    await page.goto(dataSiteTest[0].linkSite + "/blog");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm BV_Chiến thuật nâng điểm Speaking_Case 3' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Ẩn sang Hoạt động_Chiến thuật nâng điểm Speaking_Case 3');
    // Sửa trạng thái Hoạt động sang Ẩn
    await page.locator('select#edit_status').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau sửa
    //  Trang chủ -> Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Ẩn sang Hoạt động_Chiến thuật nâng điểm Speaking_Case 3'))
            .toBeVisible();
    // Click btn Xem thêm -> Hiển thị 
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Ẩn sang Hoạt động_Chiến thuật nâng điểm Speaking_Case 3')).toBeVisible();
    await expect(page.locator('div:nth-child(1) > article > div.big-item-footer > div.category').getByText('Tin dịch vụ')).toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Ẩn sang Hoạt động_Chiến thuật nâng điểm Speaking_Case 3')).toBeVisible();
    // Click chủ đề -> Hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Ẩn sang Hoạt động_Chiến thuật nâng điểm Speaking_Case 3'))
            .toBeVisible();
    // Click bài viết 
    await page.getByRole('heading', { name: 'QA_Ẩn sang Hoạt động_Chiến thuật nâng điểm Speaking_Case 3' }).getByRole('link').click();
    await expect(page.getByRole('link', { name: 'Tin dịch vụ' }).nth(1)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Ẩn sang Hoạt động_Chiến thuật nâng điểm Speaking_Case 3' })).toBeVisible();
    await expect(page.getByText('12 phút đọc')).toBeVisible();
    await expect(page.getByText('Case 3 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')).toBeVisible();
    await expect(page.locator("img[src='https://cdn.mobiedu.vn/mskill/uploads/mb3/1702352852-anh-2.jpeg']")).toBeVisible();
    // Truy cập CMS xóa bài viết
    await page.goto(dataSiteTest[0].linkSite + "/blog");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Ẩn sang Hoạt động_Chiến thuật nâng điểm Speaking_Case 3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa
    //  Trang chủ -> Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Ẩn sang Hoạt động_Chiến thuật nâng điểm Speaking_Case 3'))
            .not.toBeVisible();
    // Click btn Xem thêm -> Không hiển thị 
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Ẩn sang Hoạt động_Chiến thuật nâng điểm Speaking_Case 3')).not.toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Ẩn sang Hoạt động_Chiến thuật nâng điểm Speaking_Case 3')).not.toBeVisible();
    // Click chủ đề -> Không hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Ẩn sang Hoạt động_Chiến thuật nâng điểm Speaking_Case 3'))
            .not.toBeVisible();

});
}

/**
 * Case 4: Không thành công - click btn Đóng 
 */

function case4 () {
    test('Case 4: Fail_click btn Đóng', async ({ page }) => {
    
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
    // Thêm mới bài viết
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4');
    await page.locator('#select2-blog_category-container').click();
    await page.getByRole('treeitem', { name: '[Blog]Tin dịch vụ' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('12')
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('button', { name: 'Upload / Chọn hình ảnh +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]').getByRole('paragraph').click();
    await page.frameLocator('internal:role=dialog[name="Thêm mới"i] >> iframe[title="Rich Text Area"]')
            .getByLabel('Rich Text Area. Press ALT-0 for help.')
            .fill('Case 4 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Insert' }).click();
    await page.waitForTimeout(1000);
    await page.getByText('Image...').click();
    await page.getByLabel('Source').click();
    await page.getByLabel('Source').fill('https://cdn.mobiedu.vn/mskill/uploads/mb3/1702352852-anh-2.jpeg');
    await page.getByLabel('Width').click();
    await page.getByLabel('Width').fill('600');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('select#status').selectOption('1');
    await page.locator('select#hot').selectOption('1');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4' })).toBeVisible();
    // Truy cập CMS sửa bài viết
    await page.waitForTimeout(2000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tiêu đề 
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Fail click btn Đóng_Chiến thuật nâng điểm Speaking_Case 4');
    // Sửa chuyên mục
    await page.locator('span#select2-edit_blog_category-container').click();
    await page.getByRole('treeitem', { name: '[Blog]Tin tức' }).click();
    // Sửa thời gian đọc 
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).click();
    await page.getByRole('spinbutton', { name: 'Thời gian đọc *' }).fill('15');
    // Sửa nội dung bài viết 
    await page.frameLocator('#edit_content_ifr').getByRole('paragraph').nth(1).click();
    await page.frameLocator('#edit_content_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4_1 _ Nội dung bài viết Chiến thuật nâng điểm Speaking\n\n\n');
    // Sửa ảnh bải viết
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Insert' }).click();
    await page.waitForTimeout(1000);
    await page.getByText('Image...').click();
    await page.getByLabel('Source').click();
    await page.getByLabel('Source').fill('https://cdn.mobiedu.vn/mskill/uploads/mb3/1696237572-rounded-in-photoretrica.png');
    await page.getByLabel('Width').click();
    await page.getByLabel('Width').fill('350');
    await page.getByRole('button', { name: 'Save' }).click();
    // Không thành công do click btn đóng
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Cập nhật thành công!')).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4' })).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm  
    //  Trang chủ -> Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4')).toBeVisible();
    // Click btn Xem thêm -> Hiển thị 
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4')).toBeVisible();
    await expect(page.locator('div:nth-child(1) > article > div.big-item-footer > div.category').getByText('Tin dịch vụ')).toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4')).toBeVisible();
    // Click chủ đề -> Hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4'))
            .toBeVisible();
    // Click bài viết 
    await page.getByRole('heading', { name: 'QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4' }).getByRole('link').click();
    await expect(page.getByRole('link', { name: 'Tin dịch vụ' }).nth(1)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4' })).toBeVisible();
    await expect(page.getByText('12 phút đọc')).toBeVisible();
    await expect(page.getByText('Case 4 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')).toBeVisible();
    await expect(page.locator("img[src='https://cdn.mobiedu.vn/mskill/uploads/mb3/1702352852-anh-2.jpeg']")).toBeVisible();
    // Truy cập CMS xóa bài viết
    await page.goto(dataSiteTest[0].linkSite + "/blog");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa
    //  Trang chủ -> Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4'))
            .not.toBeVisible();
    // Click btn Xem thêm -> Không hiển thị 
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4')).not.toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4')).not.toBeVisible();
    // Click chủ đề -> Không hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Fail BV_Chiến thuật nâng điểm Speaking_Case 4'))
            .not.toBeVisible();
    
});
}

function main(){
    case1();
    case2();
    case3();
    case4();

}
main();

