// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Click Btn Xóa
 * Mong muốn: Không hiển thị trên danh sách 
 */

function case1 () {
    test('Case 1: Pass_Click btn Xóa', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị khóa học - Khóa học lẻ 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị khoá học' }).click();
    await page.getByRole('link', { name: 'Khóa học Combo' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-combo");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học Combo' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Combo' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1');
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 1 _ Giới thiệu khóa học ');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Mô tả chi tiết khóa học');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Khóa học phù hợp với');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('24000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('24.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('24.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('div#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('24.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price')
                .getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('div#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
                    .getByText('1 khóa học', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('div#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
                    .getByText('24.000 đ/ngày', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('div#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
                    .getByText('800.000 đ', { exact: true }))
                    .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('24.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('24.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('24.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('24.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).locator('span')).toBeVisible();
    await expect(page.getByText('24.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 1 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 24.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 1 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // Truy cập CMS xóa khóa học thành công khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' })).not.toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('24.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('24.000 đ/ngày đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('24.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị  
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('24.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();

});
}

/**
 * Case 2: Không thành công : Click Btn Đóng
 * Mong muốn: Sau xóa không thành công vẫn hiển thị trong danh sách
 */

function case2 () {
    test('Case 2: Fail_Click btn Đóng', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị khóa học - Khóa học lẻ 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị khoá học' }).click();
    await page.getByRole('link', { name: 'Khóa học Combo' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-combo");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học Combo' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Combo' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2');
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 2 _ Giới thiệu khóa học ');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 2 _ Mô tả chi tiết khóa học');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 2 _ Khóa học phù hợp với');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('25000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case2');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('div#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price')
                .getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('div#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
                    .getByText('1 khóa học', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('div#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
                    .getByText('25.000 đ/ngày', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('div#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
                    .getByText('800.000 đ', { exact: true }))
                    .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).locator('span')).toBeVisible();
    await expect(page.getByText('25.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 2 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 25.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 2 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // Truy cập CMS xóa khóa học không thành công do click btn Đóng
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('cell', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' })).toBeVisible();
    // Truy cập CMS xóa khóa học thành công khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' })).not.toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị  
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Đóng_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Click Btn Xóa gói cước - Xóa khóa học 
 * Mong muốn: Sau xóa thành công không hiển thị gói cước khóa học đó nữa
 */

function case3 () {
    test('Case 3: Pass_Click Xóa GC-KH', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị khóa học - Khóa học lẻ 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị khoá học' }).click();
    await page.getByRole('link', { name: 'Khóa học Combo' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-combo");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học Combo' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Combo' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3');
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    await page.locator('span#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(4)').click();
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 3 _ Giới thiệu khóa học ');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 3 _ Mô tả chi tiết khóa học');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 3 _ Khóa học phù hợp với');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // Thêm gói cước 1
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('26000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước1_KHCombo_Phát triển bản thân_Case3');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Thêm gói cước 2
    await page.waitForTimeout(3000);
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
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('27000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước2_KHCombo_Phát triển bản thân_Case3');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('0');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('× Thêm gói cước thành công!').nth(1)).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price')
                .getByText('1.400.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
                    .getByText('2 khóa học', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('div#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
                    .getByText('26.000 đ/ngày', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('div#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
                    .getByText('1.400.000 đ', { exact: true }))
                    .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).locator('span')).toBeVisible();
    await expect(page.getByText('26.000 đ/Ngày 1.400.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 2').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 3 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.000 đ Chi ')).toBeVisible();
    await expect(page.getByText('Gây ấn tượng với 36 trò ảo thuật đơn giản 36 Bài giảng 02 Giờ 30 Phút Trương Bá ')).toBeVisible();
    await expect(page.getByText('Gói Ngày Hot 26.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Gói Ngày 27.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 3 _ Khóa học phù hợp với')).toBeVisible();
    await page.waitForTimeout(7000);
    await expect(page.locator('p').filter({ hasText: 'Phan Hoàng Anh' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Trương Bá Mạnh Long' }).nth(1)).toBeVisible();
    // Truy cập Web xóa gói cước - khóa học thành công 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' })
            .locator('i')
            .nth(0)
            .click();
    // Click xóa gói cước 
    await page.locator("tr[class='row-EPV'] i[class='far fa-trash-alt']").click();
    await page.locator('#submit_pod_delete_2').click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Gói cước2_KHCombo_Phát triển bản thân_Case3' })).not.toBeVisible();
    // Click xóa khóa học 
    await page.waitForTimeout(1000);
    await page.locator("tr[class='row-1373'] i[class='far fa-trash-alt']").click();
    await page.locator('#submit_delete_course_child').click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Gây ấn tượng với 36 trò ảo thuật đơn giản' })).not.toBeVisible();
    // Click btn Lưu khóa học sau khi xóa GC-KH
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa GC-KH
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị sau xóa GC-KH
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị sau xóa GC-KH
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị sau xóa GC-KH 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị sau xóa GC-KH 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Click Khóa học sau xóa GC-KH 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).locator('span')).toBeVisible();
    await expect(page.getByText('26.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 3 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.000 đ Chi ')).toBeVisible();
    await expect(page.getByText('Gây ấn tượng với 36 trò ảo thuật đơn giản 36 Bài giảng 02 Giờ 30 Phút Trương Bá ')).not.toBeVisible();
    await expect(page.getByText('Gói Ngày Hot 26.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Gói Ngày 27.000 đ/Ngày Đăng kí')).not.toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 3 _ Khóa học phù hợp với')).toBeVisible();
    await page.waitForTimeout(7000);
    await expect(page.locator('p').filter({ hasText: 'Phan Hoàng Anh' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Trương Bá Mạnh Long' }).nth(1)).not.toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //  ***Truy cập Web kiểm tra hiển thị sau xóa khóa học
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa GC-KH_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('26.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();

});
}

/**
 * Case 4: Không thành công : Click Btn Đóng gói cước - Xóa khóa học 
 * Mong muốn: Sau khi click btn Đóng gói cước - khóa học vẫn hiển thị 
 */

function case4 () {
    test('Case 4: Fail_Click Đóng GC-KH', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị khóa học - Khóa học lẻ 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị khoá học' }).click();
    await page.getByRole('link', { name: 'Khóa học Combo' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-combo");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học Combo' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Combo' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4');
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    await page.locator('span#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(4)').click();
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 4 _ Giới thiệu khóa học ');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 _ Mô tả chi tiết khóa học');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 _ Khóa học phù hợp với');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // Thêm gói cước 1
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('28000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước1_KHCombo_Phát triển bản thân_Case4');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Thêm gói cước 2
    await page.waitForTimeout(3000);
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
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('29000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước2_KHCombo_Phát triển bản thân_Case4');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('0');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('× Thêm gói cước thành công!').nth(1)).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web xóa gói cước - khóa học thành công 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' })
            .locator('i')
            .nth(0)
            .click();
    // Click btn Đóng gói cước 
    await page.waitForTimeout(2000);
    await page.locator("tr[class='row-EPV'] i[class='far fa-trash-alt']").click();
    await page.locator('#deletePodCourseCombo-2').getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('cell', { name: 'QA_Gói cước2_KHCombo_Phát triển bản thân_Case4' })).toBeVisible();
    // Click btn Đóng khóa học 
    await page.waitForTimeout(1000);
    await page.locator("tr[class='row-1373'] i[class='far fa-trash-alt']").click();
    await page.locator('#deleteCourseChild').getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('cell', { name: 'Gây ấn tượng với 36 trò ảo thuật đơn giản' })).toBeVisible();
    // Click btn Lưu khóa học sau khi xóa GC-KH
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau thêm - xóa gói cước - khóa học không thành công
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('28.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('28.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('28.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price')
                .getByText('1.400.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
                    .getByText('2 khóa học', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('div#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
                    .getByText('28.000 đ/ngày', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('div#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
                    .getByText('1.400.000 đ', { exact: true }))
                    .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('28.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('28.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('28.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('28.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).locator('span')).toBeVisible();
    await expect(page.getByText('28.000 đ/Ngày 1.400.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 2').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 4 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.000 đ Chi ')).toBeVisible();
    await expect(page.getByText('Gây ấn tượng với 36 trò ảo thuật đơn giản 36 Bài giảng 02 Giờ 30 Phút Trương Bá ')).toBeVisible();
    await expect(page.getByText('Gói Ngày Hot 28.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Gói Ngày 29.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 4 _ Khóa học phù hợp với')).toBeVisible();
    await page.waitForTimeout(7000);
    await expect(page.locator('p').filter({ hasText: 'Phan Hoàng Anh' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Trương Bá Mạnh Long' }).nth(1)).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    //  ***Truy cập Web kiểm tra hiển thị sau xóa khóa học
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('28.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('28.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('28.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa GC-KH_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('2 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('28.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('1.400.000 đ', { exact: true })).not.toBeVisible();

});
}

function main(){
    case1();
    case2();
    case3();
    case4();

}
main();

