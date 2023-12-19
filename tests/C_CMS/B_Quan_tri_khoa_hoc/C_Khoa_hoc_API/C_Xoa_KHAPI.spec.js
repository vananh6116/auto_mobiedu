// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Xóa khóa học thành công
 */

function case1 () {
    test('Case 1: Pass_click btn Xóa_KH', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Xóa Pass Thêm TE_API_Giải đố_Case1');
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('183000');
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('48000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' })).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('48.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('48.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('48.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('48.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau thêm
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Xóa Pass Thêm TE_API_Giải đố_Case1' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Xóa Pass Thêm TE_API_Giải đố_Case1')).toBeVisible();
    await expect(page.getByText('48.000 đ/Ngày 183.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Xóa Pass Thêm TE_API_Giải đố_Case1 Case 1 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 1 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 1 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 1 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS xóa khóa học thành công
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' })).not.toBeVisible();
    // ***Truy cập Web kiểm tra sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Pass Thêm TE_API_Giải đố_Case1' }).first()).not.toBeVisible();

});
}

/**
 * Case 2: Xóa khóa học không thành công do click btn Đóng
 */

function case2 () {
    test('Case 2: Fail_Click btn Đóng_KH', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Xóa Fail Thêm TE_API_Giải đố_Case2');
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('182000');
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('49000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' })).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('49.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('49.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('49.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('49.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau thêm
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Xóa Fail Thêm TE_API_Giải đố_Case2' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Xóa Fail Thêm TE_API_Giải đố_Case2')).toBeVisible();
    await expect(page.getByText('49.000 đ/Ngày 182.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Xóa Fail Thêm TE_API_Giải đố_Case2 Case 2 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 2 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 2 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 2 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS xóa khóa học không thành công do clik btn Đóng
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Xóa thành công!')).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' })).toBeVisible();
    // Xóa khóa học 
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' })).not.toBeVisible();
    // ***Truy cập Web kiểm tra sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa Fail Thêm TE_API_Giải đố_Case2' }).first()).not.toBeVisible();

});
}

/**
 * Case 3: Xóa gói cước thành công 
 */

function case3 () {
    test('Case 3: Pass_click btn Xóa_GC', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3');
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('181000');
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
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước1_KHAPI_Giải đố_Case3');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('50000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Gói cước1_KHAPI_Giải đố_Case3' })).toBeVisible();
    // ***Thêm gói cước 2
    await page.waitForTimeout(1000);
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
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước2_KHAPI_Giải đố_Case3');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('51000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('0');
    await page.waitForTimeout(2000);
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!').nth(1)).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Gói cước2_KHAPI_Giải đố_Case3' })).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('50.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('50.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('50.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('50.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau thêm
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3')).toBeVisible();
    await expect(page.getByText('QA_Gói cước1_KHAPI_Giải đố_Case3 Hot 50.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('QA_Gói cước2_KHAPI_Giải đố_Case3 51.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3 Case 3 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 3 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 3 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 3 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Truy cập CMS xóa gói cước thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' })
            .locator('i')
            .nth(0)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa khóa học API' })).toBeVisible();    
    await page.waitForTimeout(1000);
    await page.locator("tr[class='row-EPV'] i[class='far fa-trash-alt']").click();
    await page.getByLabel('Xóa gói cước').getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Gói cước2_KHAPI_Giải đố_Case3' })).not.toBeVisible();
    await page.waitForTimeout(1000);
    await page.locator("#submit_edit_course_api").click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau xóa gói cước
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('50.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('50.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('50.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('50.000 đ/ngày', { exact: true })).toBeVisible();
    // Click vào khóa học chi tiết sau xóa gói cước
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3')).toBeVisible();
    await expect(page.getByText('QA_Gói cước1_KHAPI_Giải đố_Case3 Hot 50.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('QA_Gói cước2_KHAPI_Giải đố_Case3 51.000 đ/Ngày Đăng kí')).not.toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3 Case 3 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 3 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 3 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 3 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Xóa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' })).not.toBeVisible();
    // ***Truy cập Web kiểm tra sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Pass Thêm TE_API_Giải đố_Case3' }).first()).not.toBeVisible();

});
}

/**
 * Case 4: Xóa gói cước không thành công 
 */

function case4 () {
    test('Case 4: Fail_Click btn Đóng_GC', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4');
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('180000');
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
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước1_KHAPI_Giải đố_Case4');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('52000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Gói cước1_KHAPI_Giải đố_Case4' })).toBeVisible();
    // ***Thêm gói cước 2
    await page.waitForTimeout(1000);
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
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước2_KHAPI_Giải đố_Case4');
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('53000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('0');
    await page.waitForTimeout(2000);
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!').nth(1)).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Gói cước2_KHAPI_Giải đố_Case4' })).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập CMS xóa gói cước không thành công do click btn Đóng
    await page.waitForTimeout(2000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' })
            .locator('i')
            .nth(0)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa khóa học API' })).toBeVisible();
    await page.waitForTimeout(1000);
    await page.locator("tr[class='row-EPV'] i[class='far fa-trash-alt']").click();
    await page.getByLabel('Xóa gói cước').getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Xóa thành công!')).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Gói cước2_KHAPI_Giải đố_Case4' })).toBeVisible();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!').nth(1)).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('52.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('52.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('52.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('52.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Click vào khóa học chi tiết sau thêm
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4')).toBeVisible();
    await expect(page.getByText('QA_Gói cước1_KHAPI_Giải đố_Case4 Hot 52.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('QA_Gói cước2_KHAPI_Giải đố_Case4 53.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4 Case 4 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 4 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 4 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 4 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Xóa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-api');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' })).not.toBeVisible();
    // ***Truy cập Web kiểm tra sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Xóa GC Fail Thêm TE_API_Giải đố_Case4' }).first()).not.toBeVisible();


});
}   

function main(){
    case1();
    case2();
    case3();
    case4();

}
main();