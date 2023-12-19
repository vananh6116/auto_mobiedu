// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Sửa khóa học trẻ em sang học sinh
 * Mong muốn: [Trước sửa] Trang chủ -> Hiển thị Trẻ em - Tất cả => Không hiển thị  Học sinh - Sinh viên 
 * [Trước sửa] Khóa học -> Hiển thị Tất cả - Trẻ em => Không hiển thị Học sinh - Sinh viên
 * [Sau sửa] Trang chủ -> Hiển thị học sinh - Tất cả => Không hiển thị  Trẻ em - Sinh viên 
 * [Sau sửa] Khóa học -> Hiển thị Tất cả - học sinh => Không hiển thị Trẻ em - Sinh viên
 */


function case1 () {
    test('Case 1: Pass_TE sang HS', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị khóa học - Khóa học lẻ 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị khoá học' }).click();
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-api');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Thêm mới khóa học - trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass Thêm TE_API_Giải đố_Case1');
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('195000');
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 1 _ Giới thiệu khóa học API');
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 1 _ Lợi ích khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Mô tả chi tiết khóa học API');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Khóa học phù hợp với tất cả');
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Hướng dẫn sử dụng khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
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
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case1');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('34000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('34.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('34.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case1' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('34.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('34.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau thêm
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case1' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Thêm TE_API_Giải đố_Case1' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass Thêm TE_API_Giải đố_Case1')).toBeVisible();
    await expect(page.getByText('34.000 đ/Ngày 195.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass Thêm TE_API_Giải đố_Case1 Case 1 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 1 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 1 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 1 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS sửa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm TE_API_Giải đố_Case1' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass Sửa HS_API_Giải đố_Case1');
    // Sửa danh mục trẻ em sang học sinh
    await page.getByTitle('Trẻ em').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    // Sửa giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('194000');
    // Sửa độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-50 tuổi');
    // Sửa giá cước 
    await page.locator('#edit_course_api').getByRole('link', { name: ' Edit' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('35000');
    // Click btn Lưu - gói cước
    await page.locator('#submit_edit_pod_2').click();
    await expect(page.getByText('Cập nhật gói cước thành công!')).toBeVisible();
    // Click btn Lưu khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra khóa học sau sửa 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('35.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('35.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_API_Giải đố_Case1' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('35.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('35.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau sửa
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Sửa HS_API_Giải đố_Case1' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Sửa HS_API_Giải đố_Case1' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass Sửa HS_API_Giải đố_Case1')).toBeVisible();
    await expect(page.getByText('35.000 đ/Ngày 194.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-50 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass Sửa HS_API_Giải đố_Case1 Case 1 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 1 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 1 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 1 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa HS_API_Giải đố_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_API_Giải đố_Case1' }).first()).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Sửa khóa học Học sinh sang Sinh viên
 * Mong muốn: [Trước sửa] Trang chủ -> Hiển thị Học sinh - Tất cả => Không hiển thị  Trẻ em - Sinh viên 
 * [Trước sửa] Khóa học -> Hiển thị Tất cả - Học sinh => Không hiển thị Trẻ em - Sinh viên
 * [Sau sửa] Trang chủ -> Hiển thị Sinh viên - Tất cả => Không hiển thị  Học sinh - Trẻ em
 * [Sau sửa] Khóa học -> Hiển thị Tất cả - Sinh viên => Không hiển thị Học sinh - Trẻ em
 */

function case2 () {
    test('Case 2: Pass_HS sang SV', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị khóa học - Khóa học lẻ 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị khoá học' }).click();
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-api');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Thêm mới khóa học - học sinh
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass Thêm HS_API_Giải đố_Case2');
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('193000');
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 2 _ Giới thiệu khóa học API');
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 2 _ Lợi ích khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 2 _ Mô tả chi tiết khóa học API');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 2 _ Khóa học phù hợp với tất cả');
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 2 _ Hướng dẫn sử dụng khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
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
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case2');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('36000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('36.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('36.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_API_Giải đố_Case2' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('36.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em =>  Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('36.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau thêm
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Thêm HS_API_Giải đố_Case2' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Thêm HS_API_Giải đố_Case2' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass Thêm HS_API_Giải đố_Case2')).toBeVisible();
    await expect(page.getByText('36.000 đ/Ngày 193.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass Thêm HS_API_Giải đố_Case2 Case 2 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 2 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 2 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 2 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS sửa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm HS_API_Giải đố_Case2' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass Sửa SV_API_Giải đố_Case2');
    // Sửa danh mục học sinh sang sinh viên
    await page.locator('section#edit_course_api div:nth-child(3) > div > span > span.selection > span > ul > li.select2-selection__choice > span').click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Sửa giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('192000');
    // Sửa độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-50 tuổi');
    // Sửa giá cước 
    await page.locator('#edit_course_api').getByRole('link', { name: ' Edit' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('37000');
    // Click btn Lưu - gói cước
    await page.locator('#submit_edit_pod_2').click();
    await expect(page.getByText('Cập nhật gói cước thành công!')).toBeVisible();
    // Click btn Lưu khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra khóa học sau sửa 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('37.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Hiển thị
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_API_Giải đố_Case2' }).first()).toBeVisible(); 
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price').getByText('37.000 đ/ngày', { exact: true })).toBeVisible();   
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('37.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('37.000 đ/ngày', { exact: true })).toBeVisible();
    // Click vào khóa học chi tiết sau sửa
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Sửa SV_API_Giải đố_Case2' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Sửa SV_API_Giải đố_Case2' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass Sửa SV_API_Giải đố_Case2')).toBeVisible();
    await expect(page.getByText('37.000 đ/Ngày 192.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-50 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass Sửa SV_API_Giải đố_Case2 Case 2 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 2 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 2 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 2 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa SV_API_Giải đố_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_API_Giải đố_Case2' }).first()).not.toBeVisible(); 
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_API_Giải đố_Case2' }).first()).not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Sửa khóa học Trẻ em sang HS&SV
 * Mong muốn: [Trước sửa] Trang chủ -> Hiển thị Trẻ em - Tất cả => Không hiển thị  Trẻ em - Sinh viên 
 * [Trước sửa] Khóa học -> Hiển thị Tất cả - Trẻ em => Không hiển thị Trẻ em - Sinh viên
 * [Sau sửa] Trang chủ -> Hiển thị Sinh viên - Tất cả - Học sinh - Trẻ em
 * [Sau sửa] Khóa học -> Hiển thị Tất cả - Sinh viên - Học sinh - Trẻ em
 */

function case3 () {
    test('Case 3: Pass_TE sang HS&SV', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị khóa học - Khóa học lẻ 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị khoá học' }).click();
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-api');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Thêm mới khóa học - trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass Thêm TE_API_Giải đố_Case3');
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('191000');
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 3 _ Giới thiệu khóa học API');
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 3 _ Lợi ích khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 3 _ Mô tả chi tiết khóa học API');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 3 _ Khóa học phù hợp với tất cả');
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 3 _ Hướng dẫn sử dụng khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
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
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case3');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('38000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('38.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('38.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case3' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('38.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em =>  Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('38.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau thêm
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Thêm TE_API_Giải đố_Case3' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Thêm TE_API_Giải đố_Case3' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass Thêm TE_API_Giải đố_Case3')).toBeVisible();
    await expect(page.getByText('38.000 đ/Ngày 191.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass Thêm TE_API_Giải đố_Case3 Case 3 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 3 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 3 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 3 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS sửa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm TE_API_Giải đố_Case3' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass Sửa HS&SV_API_Giải đố_Case3');
    // Sửa danh mục trẻ em sang học sinh, sinh viên
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Sửa giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('190000');
    // Sửa độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-50 tuổi');
    // Sửa giá cước 
    await page.locator('#edit_course_api').getByRole('link', { name: ' Edit' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('39000');
    // Click btn Lưu - gói cước
    await page.locator('#submit_edit_pod_2').click();
    await expect(page.getByText('Cập nhật gói cước thành công!')).toBeVisible();
    // Click btn Lưu khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra khóa học sau sửa 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('39.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('39.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('39.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Hiển thị
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).toBeVisible(); 
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price').getByText('39.000 đ/ngày', { exact: true })).toBeVisible();   
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('39.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('39.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('39.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('39.000 đ/ngày', { exact: true })).toBeVisible();
    // Click vào khóa học chi tiết sau sửa
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Sửa HS&SV_API_Giải đố_Case3' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass Sửa HS&SV_API_Giải đố_Case3')).toBeVisible();
    await expect(page.getByText('39.000 đ/Ngày 190.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-50 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass Sửa HS&SV_API_Giải đố_Case3 Case 3 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 3 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 3 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 3 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).not.toBeVisible(); 
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS&SV_API_Giải đố_Case3' }).first()).not.toBeVisible();

});
}

/**
 * Case 4: Thành công : Hiển thị trạng thái hoạt động sang ẩn
 * Mong muốn: [Trước sửa] Trang chủ -> Hiển thị Trẻ em - Tất cả => Không hiển thị  Trẻ em - Sinh viên 
 * [Trước sửa] Khóa học -> Hiển thị Tất cả - Trẻ em => Không hiển thị Trẻ em - Sinh viên
 * [Sau sửa] Trang chủ -> Không hiển thị Tất cả - Trẻ em
 * [Sau sửa] Khóa học -> Không hiển thị Tất cả - Trẻ em
 */

function case4 () {
    test('Case 4: Pass_Hoạt động sang ẩn', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị khóa học - Khóa học lẻ 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị khoá học' }).click();
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-api');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Thêm mới khóa học - trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4');
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('189000');
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 4 _ Giới thiệu khóa học API');
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 4 _ Lợi ích khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 _ Mô tả chi tiết khóa học API');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 _ Khóa học phù hợp với tất cả');
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 _ Hướng dẫn sử dụng khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
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
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case4');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('40000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('40.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('40.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('40.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('40.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau thêm
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4')).toBeVisible();
    await expect(page.getByText('40.000 đ/Ngày 189.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4 Case 4 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 4 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 4 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 4 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS sửa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Hoạt động sang ẩn_API_Giải đố_Case4' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass Sửa Hoạt động sang ẩn_API_Giải đố_Case4');
    // Sửa trạng thái hoạt động sang ẩn 
    await page.locator('select#edit_status').click();
    await page.locator('select#edit_status').selectOption('0');
    // Click btn Lưu khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra khóa học sau sửa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Hoạt động sang ẩn_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Hoạt động sang ẩn_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Hoạt động sang ẩn_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Hoạt động sang ẩn_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa Hoạt động sang ẩn_API_Giải đố_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 5: Thành công : Hiển thị trạng thái ẩn sang hoạt động
 * Mong muốn: [Trước sửa]  Trang chủ -> Không hiển thị Tất cả - Trẻ em
 * [Trước sửa] Khóa học ->  Không hiển thị Tất cả - Trẻ em
 * [Sau sửa] Trang chủ -> Trang chủ -> Hiển thị Trẻ em - Tất cả => Không hiển thị  Trẻ em - Sinh viên
 * [Sau sửa] Khóa học -> Hiển thị Tất cả - Trẻ em => Không hiển thị Trẻ em - Sinh viên
 */

function case5 () {
    test('Case 5: Pass_Ẩn sang hoạt động', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị khóa học - Khóa học lẻ 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị khoá học' }).click();
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-api');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Thêm mới khóa học - trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass Ẩn sang hoạt động_API_Giải đố_Case5');
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('188000');
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 5 _ Giới thiệu khóa học API');
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 5 _ Lợi ích khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 5 _ Mô tả chi tiết khóa học API');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 5 _ Khóa học phù hợp với tất cả');
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 5 _ Hướng dẫn sử dụng khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('0');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
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
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case5');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('41000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập CMS sửa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Ẩn sang hoạt động_API_Giải đố_Case5' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5');
    // Sửa trạng thái hoạt động sang ẩn 
    await page.locator('select#edit_status').click();
    await page.locator('select#edit_status').selectOption('1');
    // Click btn Lưu khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra khóa học sau sửa 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('41.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('41.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible(); 
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('41.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('41.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau sửa
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5')).toBeVisible();
    await expect(page.getByText('41.000 đ/Ngày 188.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5 Case 5 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 5 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 5 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 5 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra khóa học sau xóa
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang hoạt động_API_Giải đố_Case5' }).first()).not.toBeVisible();

});
}

/**
 * Case 6: Thành công : Sửa - Thêm gói cước - Chọn ưu tiên
 * Mong muốn: Hiển thị đúng thông tin được sửa 
 */

function case6 () {
    test('Case 6: Pass_Thêm gói cước_Ưu tiên', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị khóa học - Khóa học lẻ 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị khoá học' }).click();
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-api');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Thêm mới khóa học - trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass thêm gói cước_API_Giải đố_Case6');
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('187000');
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 6 _ Giới thiệu khóa học API');
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 6 _ Lợi ích khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 6 _ Mô tả chi tiết khóa học API');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 6 _ Khóa học phù hợp với tất cả');
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 6 _ Hướng dẫn sử dụng khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 1
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
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước1_KHAPI_Giải đố_Case6');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('42000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case6' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('42.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case6' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('42.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case6' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case6' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case6' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('42.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case6' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('42.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case6' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case6' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau thêm
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case6' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass thêm gói cước_API_Giải đố_Case6' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass thêm gói cước_API_Giải đố_Case6')).toBeVisible();
    await expect(page.getByText('42.000 đ/Ngày 187.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass thêm gói cước_API_Giải đố_Case6 Case 6 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 6 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 6 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 6 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS sửa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass thêm gói cước_API_Giải đố_Case6' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6');
    // ***Thêm gói cước 2 - Chọn Ưu tiên
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
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước2_KHAPI_Giải đố_Case6');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('43000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau sửa
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('43.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('43.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('43.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('43.000 đ/ngày', { exact: true })).toBeVisible();
    // Click vào khóa học chi tiết sau sửa
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6')).toBeVisible();
    await expect(page.getByText('43.000 đ/Ngày 187.000 đ').first()).toBeVisible();
    await expect(page.getByText('42.000 đ/Ngày 187.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6 Case 6 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 6 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 6 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 6 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra khóa học sau xóa
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa thêm gói cước_Ưu tiên_API_Giải đố_Case6' }).first()).not.toBeVisible();

});
}

/**
 * Case 7: Thành công : Sửa - Thêm gói cước - không chọn ưu tiên 
 * Mong muốn: Hiển thị đúng thông tin được sửa 
 */

function case7 () {
    test('Case 7: Pass_Thêm gói cước_Ko Ưu tiên', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị khóa học - Khóa học lẻ 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị khoá học' }).click();
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-api');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Thêm mới khóa học - trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass thêm gói cước_API_Giải đố_Case7');
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('186000');
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 7 _ Giới thiệu khóa học API');
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 7 _ Lợi ích khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 7 _ Mô tả chi tiết khóa học API');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 7 _ Khóa học phù hợp với tất cả');
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 7 _ Hướng dẫn sử dụng khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 1
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
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước1_KHAPI_Giải đố_Case7');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('44000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case7' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('44.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case7' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('44.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case7' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case7' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case7' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('44.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case7' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('44.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case7' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case7' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau thêm
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass thêm gói cước_API_Giải đố_Case7' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass thêm gói cước_API_Giải đố_Case7' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass thêm gói cước_API_Giải đố_Case7')).toBeVisible();
    await expect(page.getByText('44.000 đ/Ngày 186.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass thêm gói cước_API_Giải đố_Case7 Case 7 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 7 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 7 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 7 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS sửa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass thêm gói cước_API_Giải đố_Case7' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7');
    // ***Thêm gói cước 2 - Không chọn Ưu tiên
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
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước2_KHAPI_Giải đố_Case7');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('45000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau sửa
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('44.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('44.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('44.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('44.000 đ/ngày', { exact: true })).toBeVisible();
    // Click vào khóa học chi tiết sau sửa
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7')).toBeVisible();
    await expect(page.getByText('QA_Gói cước1_KHAPI_Giải đố_Case7 Hot 44.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('QA_Gói cước2_KHAPI_Giải đố_Case7 45.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7 Case 7 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 7 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 7 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 7 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra khóa học sau xóa
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm gói cước Ko Ưu tiên_API_Giải đố_Case7' }).first()).not.toBeVisible();

});
}

/**
 * Case 8: Thành công : Sửa - gói cước Ngày sang Tuần
 * Mong muốn: Hiển thị đúng thông tin được sửa 
 */

function case8 () {
    test('Case 8: Pass_gói cước Ngày sang Tuần', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị khóa học - Khóa học lẻ 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị khoá học' }).click();
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-api');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Thêm mới khóa học - trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass thêm KH_API_Giải đố_Case8');
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('185000');
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 8 _ Giới thiệu khóa học API');
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 8 _ Lợi ích khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 8 _ Mô tả chi tiết khóa học API');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 8 _ Khóa học phù hợp với tất cả');
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 8 _ Hướng dẫn sử dụng khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
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
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case8');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('46000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass thêm KH_API_Giải đố_Case8' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('46.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm KH_API_Giải đố_Case8' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('46.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm KH_API_Giải đố_Case8' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm KH_API_Giải đố_Case8' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm KH_API_Giải đố_Case8' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('46.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm KH_API_Giải đố_Case8' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('46.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm KH_API_Giải đố_Case8' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass thêm KH_API_Giải đố_Case8' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau thêm
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass thêm KH_API_Giải đố_Case8' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass thêm KH_API_Giải đố_Case8' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass thêm KH_API_Giải đố_Case8')).toBeVisible();
    await expect(page.getByText('46.000 đ/Ngày 185.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass thêm KH_API_Giải đố_Case8 Case 8 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 8 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 8 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 8 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS sửa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass thêm KH_API_Giải đố_Case8' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8');
    // Sửa giá cước ngày sang tuần   
    await page.locator('#edit_course_api').getByRole('link', { name: ' Edit' }).click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa Gói cước' })).toBeVisible();
    await page.locator('#edit_pod_period_2').click();
    await page.locator('#edit_pod_period_2').selectOption('2');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case8');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('99000');
    await page.waitForTimeout(1000);
    await page.locator('#submit_edit_pod_2').click();
    await expect(page.getByText('Cập nhật gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau sửa
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('99.000 đ/tuần', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('99.000 đ/tuần', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('99.000 đ/tuần', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('99.000 đ/tuần', { exact: true })).toBeVisible();
    // Click vào khóa học chi tiết sau sửa
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8')).toBeVisible();
    await expect(page.getByText('QA_Gói cước_KHAPI_Giải đố_Case8 Hot 99.000 đ/Tuần Đăng kí')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8 Case 8 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 8 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 8 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 8 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra khóa học sau xóa
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass sửa giá Ngày sang Tuần_API_Giải đố_Case8' }).first()).not.toBeVisible();

});
}

/**
 * Case 9: Không thành công : do click btn Đóng
 * Mong muốn: Hiển thị đúng thông tin như ban đầu mới thêm 
 */

function case9 () {
    test('Case 9: Fail_Click btn Đóng', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị khóa học - Khóa học lẻ 
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị khoá học' }).click();
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-api');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Thêm mới khóa học - trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Fail Thêm KH_API_Giải đố_Case9');
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('184000');
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 9 _ Giới thiệu khóa học API');
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 9 _ Lợi ích khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 9 _ Mô tả chi tiết khóa học API');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 9 _ Khóa học phù hợp với tất cả');
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 9 _ Hướng dẫn sử dụng khóa học API');
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
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
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case9');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('47000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Sửa không thành công do click btn Đóng 
    await page.waitForTimeout(2000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Thêm KH_API_Giải đố_Case9' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Fail Sửa KH_API_Giải đố_Case9');
    // Sửa danh mục trẻ em sang học sinh
    await page.getByTitle('Trẻ em').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    // Sửa giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('194000');
    // Sửa độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-50 tuổi');
    // Sửa giá cước 
    await page.locator('#edit_course_api').getByRole('link', { name: ' Edit' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('35000');
    // Click btn Đóng - gói cước
    await page.locator('#editPodCourseApi-2').getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Cập nhật gói cước thành công!')).not.toBeVisible();
    // Click btn Đóng khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Cập nhật thành công!')).not.toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KH_API_Giải đố_Case9' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('47.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KH_API_Giải đố_Case9' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('47.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KH_API_Giải đố_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KH_API_Giải đố_Case9' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KH_API_Giải đố_Case9' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('47.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KH_API_Giải đố_Case9' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('47.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KH_API_Giải đố_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KH_API_Giải đố_Case9' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau thêm
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Fail Thêm KH_API_Giải đố_Case9' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Fail Thêm KH_API_Giải đố_Case9' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Fail Thêm KH_API_Giải đố_Case9')).toBeVisible();
    await expect(page.getByText('47.000 đ/Ngày 184.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Fail Thêm KH_API_Giải đố_Case9 Case 9 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 9 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 9 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 9 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Thêm KH_API_Giải đố_Case9' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra khóa học sau xóa
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KH_API_Giải đố_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KH_API_Giải đố_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KH_API_Giải đố_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KH_API_Giải đố_Case9' }).first()).not.toBeVisible();

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
main();

