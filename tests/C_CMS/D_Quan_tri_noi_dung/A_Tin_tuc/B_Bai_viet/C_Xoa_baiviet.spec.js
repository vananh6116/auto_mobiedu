// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Xóa bài viết
 */

function case1 () {
    test('Case 1: Pass - click btn Xóa', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - tin tức - bài viết 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Tin tức' }).click();
    await page.getByRole('link', { name: 'Bài viết' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/blog');
    await expect(page.getByRole('heading', { name: 'Danh sách bài viết' })).toBeVisible();
    // Thêm mới bài viết
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Pass Xóa BV_Chiến thuật nâng điểm Speaking_Case 1');
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
            .fill('Case 1 _ Nội dung bài viết Chiến thuật nâng điểm Speaking')
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
    await expect(page.getByRole('cell', { name: 'QA_Pass Xóa BV_Chiến thuật nâng điểm Speaking_Case 1' })).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm  
    //  Trang chủ -> Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Pass Xóa BV_Chiến thuật nâng điểm Speaking_Case 1')).toBeVisible();
    // Click btn Xem thêm -> Hiển thị 
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Pass Xóa BV_Chiến thuật nâng điểm Speaking_Case 1')).toBeVisible();
    await expect(page.locator('div:nth-child(1) > article > div.big-item-footer > div.category').getByText('Tin dịch vụ')).toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Pass Xóa BV_Chiến thuật nâng điểm Speaking_Case 1')).toBeVisible();
    // Click chủ đề -> Hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Pass Xóa BV_Chiến thuật nâng điểm Speaking_Case 1'))
            .toBeVisible();
    // Truy cập CMS xóa bài viết thành công
    await page.goto('https://mskill8admin.mobiedu.vn/blog');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Xóa BV_Chiến thuật nâng điểm Speaking_Case 1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa 
    //  Trang chủ -> Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Pass Xóa BV_Chiến thuật nâng điểm Speaking_Case 1'))
            .not.toBeVisible();
    // Click btn Xem thêm -> Không hiển thị  
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Pass Xóa BV_Chiến thuật nâng điểm Speaking_Case 1')).not.toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Pass Xóa BV_Chiến thuật nâng điểm Speaking_Case 1')).not.toBeVisible();
    // Click chủ đề -> Không hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Pass Xóa BV_Chiến thuật nâng điểm Speaking_Case 1'))
            .not.toBeVisible();

});
}

/**
 * Case 2: Không thành công : do click btn Đóng
 */

function case2 () {
    test('Case 2: Fail - click btn Đóng', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Nội dung - tin tức - bài viết 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị nội dung' }).click();
    await page.getByRole('link', { name: 'Tin tức' }).click();
    await page.getByRole('link', { name: 'Bài viết' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/blog');
    await expect(page.getByRole('heading', { name: 'Danh sách bài viết' })).toBeVisible();
    // Thêm mới bài viết
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).click();
    await page.getByRole('textbox', { name: 'Tiêu đề *' }).fill('QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2');
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
    await expect(page.getByRole('cell', { name: 'QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2' })).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm  
    //  Trang chủ -> Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2')).toBeVisible();
    // Click btn Xem thêm -> Hiển thị 
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2')).toBeVisible();
    await expect(page.locator('div:nth-child(1) > article > div.big-item-footer > div.category').getByText('Tin dịch vụ')).toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2')).toBeVisible();
    // Click chủ đề -> Hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2'))
            .toBeVisible();
    // Truy cập CMS xóa bài viết không thành công do click btn Đóng
    await page.goto('https://mskill8admin.mobiedu.vn/blog');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Xóa thành công!')).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2' })).toBeVisible();
    // Truy cập CMS xóa bài viết thành công
    await page.goto('https://mskill8admin.mobiedu.vn/blog');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2' })).not.toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa 
    //  Trang chủ -> Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.locator('div.col-lg-6.animate > div > div.caption > p.news-title > a').getByText('QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2'))
            .not.toBeVisible();
    // Click btn Xem thêm -> Không hiển thị  
    await page.locator('.home-11 > .container > .button > .btn').click();
    await expect(page.locator('h1 > a').getByText('QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2')).not.toBeVisible();
    await expect(page.locator('div:nth-child(2) > div > article:nth-child(1)').getByText('QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2')).not.toBeVisible();
    // Click chủ đề -> Không hiển thị 
    await page.getByRole('link', { name: 'Tin dịch vụ chevron_right' }).click();
    await expect(page.locator('main#blog_category div:nth-child(1) > article > div.caption > h3 > a').getByText('QA_Fail Xóa BV_Chiến thuật nâng điểm Speaking_Case 2'))
            .not.toBeVisible();

});
}

function main(){
    case1();
    case2();

}
main();