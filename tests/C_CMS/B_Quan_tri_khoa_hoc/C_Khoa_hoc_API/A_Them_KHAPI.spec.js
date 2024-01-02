// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Thêm khóa học API - Trẻ em 
 * Mong muốn: Trang chủ -> Hiển thị Trẻ em - Tất cả => Không hiển thị  Học sinh - Sinh viên 
 * Khóa học -> Hiển thị Tất cả - Trẻ em => Không hiển thị Học sinh - Sinh viên
 * Lọc tìm kiếm thành công Trang chủ - Khóa học - Check box Chủ đề IoT
 */

function case1 () {
    test('Case 1: Pass_Trẻ em', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-api");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass TE_API_Giải đố_Case1');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - trẻ em 
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Chọn gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Nhập giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('199000');
    // Nhập độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 1 _ Giới thiệu khóa học API');
    // Nhập lợi ích
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 1 _ Lợi ích khóa học API');
    // Chọn icon lợi ích
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Mô tả chi tiết khóa học API');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Khóa học phù hợp với tất cả');
    // Nhập hướng dẫn sử dụng
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Hướng dẫn sử dụng khóa học API');
    // Chọn ảnh trang bìa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn hình thức học 
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn Trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
    // Click btn Thêm gói cước 
    await page.getByRole('link', { name: ' Thêm gói cước' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
    // Chọn nhà cung cấp 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_supplier_2-container').click();
    await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
    // Chọn dịch vụ 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_service_2-container').click();
    await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
    // Chọn mã gói 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_code_2-container').click();
    await page.getByRole('treeitem', { name: 'KN' }).click();
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case1');
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('30000');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Chọn ưu tiên - Ưu tiên
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('30.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('30.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('30.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('30.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - trang chủ 
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass TE_API_Giải đố_Case1');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#search-course p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#search-course p.price').getByText('30.000 đ/ngày', { exact: true })).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - khóa học
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass TE_API_Giải đố_Case1');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#search-course p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#search-course p.price').getByText('30.000 đ/ngày', { exact: true })).toBeVisible();
    // Click check box lọc chủ đề IoT
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByText('IoT').click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('30.000 đ/ngày', { exact: true })).toBeVisible();
    // Click vào khóa học chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass TE_API_Giải đố_Case1' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass TE_API_Giải đố_Case1')).toBeVisible();
    await expect(page.getByText('30.000 đ/Ngày 199.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass TE_API_Giải đố_Case1 Case 1 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 1 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 1 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 1 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Click btn Đăng ký học ngay 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Đăng kí học ngay' }).click();
    await expect(page.getByRole('heading', { name: 'Lựa chọn hình thức thanh toán' })).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-api");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass TE_API_Giải đố_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_API_Giải đố_Case1' }).first()).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Thêm khóa học API - Học sinh
 * Mong muốn: Trang chủ -> Hiển thị Học sinh  - Tất cả => Không hiển thị  Trẻ em - Sinh viên 
 * Khóa học -> Hiển thị Tất cả - Học sinh  => Không hiển thị Trẻ em - Sinh viên
 * Lọc tìm kiếm thành công Trang chủ - Khóa học - Check box Chủ đề IoT
 */

function case2 () {
    test('Case 2: Pass_Học sinh', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-api");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass HS_API_Giải đố_Case2');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - học sinh
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    // Chọn gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Nhập giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('198000');
    // Nhập độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 2 _ Giới thiệu khóa học API');
    // Nhập lợi ích
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 2 _ Lợi ích khóa học API');
    // Chọn icon lợi ích
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 2 _ Mô tả chi tiết khóa học API');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 2 _ Khóa học phù hợp với tất cả');
    // Nhập hướng dẫn sử dụng
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 2 _ Hướng dẫn sử dụng khóa học API');
    // Chọn ảnh trang bìa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn hình thức học 
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn Trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
    // Click btn Thêm gói cước 
    await page.getByRole('link', { name: ' Thêm gói cước' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
    // Chọn nhà cung cấp 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_supplier_2-container').click();
    await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
    // Chọn dịch vụ 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_service_2-container').click();
    await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
    // Chọn mã gói 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_code_2-container').click();
    await page.getByRole('treeitem', { name: 'KN' }).click();
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case2');
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('31000');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Chọn ưu tiên - Ưu tiên
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('31.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('31.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).not.toBeVisible();    
    // Truy cập Web - Khóa học - Tất cả => Hiển thị  
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('31.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('31.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - trang chủ 
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass HS_API_Giải đố_Case2');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#search-course p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#search-course p.price').getByText('31.000 đ/ngày', { exact: true })).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - khóa học
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass HS_API_Giải đố_Case2');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#search-course p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#search-course p.price').getByText('31.000 đ/ngày', { exact: true })).toBeVisible();
    // Click check box lọc chủ đề IoT
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByText('IoT').click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('31.000 đ/ngày', { exact: true })).toBeVisible();
    // Click vào khóa học chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass HS_API_Giải đố_Case2' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass HS_API_Giải đố_Case2')).toBeVisible();
    await expect(page.getByText('31.000 đ/Ngày 198.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass HS_API_Giải đố_Case2 Case 2 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 2 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 2 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 2 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Click btn Đăng ký học ngay 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Đăng kí học ngay' }).click();
    await expect(page.getByRole('heading', { name: 'Lựa chọn hình thức thanh toán' })).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-api");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass HS_API_Giải đố_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị  
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị  
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_API_Giải đố_Case2' }).first()).not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Thêm khóa học API - Sinh viên
 * Mong muốn: Trang chủ -> Hiển thị Sinh viên  - Tất cả => Không hiển thị  Trẻ em - Học sinh 
 * Khóa học -> Hiển thị Tất cả - Sinh viên  => Không hiển thị Trẻ em - Học sinh
 * Lọc tìm kiếm thành công Trang chủ - Khóa học - Check box Chủ đề IoT
 */

function case3 () {
    test('Case 3: Pass_Sinh viên', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-api");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass SV_API_Giải đố_Case3');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - sinh viên
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Chọn gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Nhập giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('197000');
    // Nhập độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 3 _ Giới thiệu khóa học API');
    // Nhập lợi ích
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 3 _ Lợi ích khóa học API');
    // Chọn icon lợi ích
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 3 _ Mô tả chi tiết khóa học API');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 3 _ Khóa học phù hợp với tất cả');
    // Nhập hướng dẫn sử dụng
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 3 _ Hướng dẫn sử dụng khóa học API');
    // Chọn ảnh trang bìa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn hình thức học 
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn Trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
    // Click btn Thêm gói cước 
    await page.getByRole('link', { name: ' Thêm gói cước' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
    // Chọn nhà cung cấp 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_supplier_2-container').click();
    await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
    // Chọn dịch vụ 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_service_2-container').click();
    await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
    // Chọn mã gói 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_code_2-container').click();
    await page.getByRole('treeitem', { name: 'KN' }).click();
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case3');
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('32000');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Chọn ưu tiên - Ưu tiên
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('32.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).toBeVisible();   
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price').getByText('32.000 đ/ngày', { exact: true })).toBeVisible(); 
    // Truy cập Web - Khóa học - Tất cả => Hiển thị  
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('32.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên =>  Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('32.000 đ/ngày', { exact: true })).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - trang chủ 
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass SV_API_Giải đố_Case3');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#search-course p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#search-course p.price').getByText('32.000 đ/ngày', { exact: true })).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - khóa học
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass SV_API_Giải đố_Case3');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#search-course p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#search-course p.price').getByText('32.000 đ/ngày', { exact: true })).toBeVisible();
    // Click check box lọc chủ đề IoT
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByText('IoT').click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('32.000 đ/ngày', { exact: true })).toBeVisible();
    // Click vào khóa học chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass SV_API_Giải đố_Case3' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass SV_API_Giải đố_Case3')).toBeVisible();
    await expect(page.getByText('32.000 đ/Ngày 197.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass SV_API_Giải đố_Case3 Case 3 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 3 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 3 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 3 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Click btn Đăng ký học ngay 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Đăng kí học ngay' }).click();
    await expect(page.getByRole('heading', { name: 'Lựa chọn hình thức thanh toán' })).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-api");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass SV_API_Giải đố_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị  
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_API_Giải đố_Case3' }).first()).not.toBeVisible();

});
}

/**
 * Case 4: Thành công : Thêm khóa học API - All Trẻ em - Học sinh - Sinh viên
 * Mong muốn: Trang chủ -> Hiển thị Sinh viên - Tất cả - Trẻ em - Học sinh 
 * Lọc tìm kiếm thành công Trang chủ - Khóa học - Check box Chủ đề IoT
 */

function case4 () {
    test('Case 4: Pass_hiển thị all', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-api");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass All_API_Giải đố_Case4');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - trẻ em - học sinh - sinh viên
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Chọn gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Nhập giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('196000');
    // Nhập độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 4 _ Giới thiệu khóa học API');
    // Nhập lợi ích
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 4 _ Lợi ích khóa học API');
    // Chọn icon lợi ích
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 _ Mô tả chi tiết khóa học API');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 _ Khóa học phù hợp với tất cả');
    // Nhập hướng dẫn sử dụng
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 _ Hướng dẫn sử dụng khóa học API');
    // Chọn ảnh trang bìa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn hình thức học 
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn Trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
    // Click btn Thêm gói cước 
    await page.getByRole('link', { name: ' Thêm gói cước' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
    // Chọn nhà cung cấp 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_supplier_2-container').click();
    await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
    // Chọn dịch vụ 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_service_2-container').click();
    await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
    // Chọn mã gói 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_code_2-container').click();
    await page.getByRole('treeitem', { name: 'KN' }).click();
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case4');
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('33000');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Chọn ưu tiên - Ưu tiên
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('33.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('33.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('33.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).toBeVisible();   
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price').getByText('33.000 đ/ngày', { exact: true })).toBeVisible(); 
    // Truy cập Web - Khóa học - Tất cả => Hiển thị  
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('33.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị  
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('33.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('33.000 đ/ngày', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên =>  Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('33.000 đ/ngày', { exact: true })).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - trang chủ 
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass All_API_Giải đố_Case4');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#search-course p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#search-course p.price').getByText('33.000 đ/ngày', { exact: true })).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - khóa học
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass All_API_Giải đố_Case4');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#search-course p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#search-course p.price').getByText('33.000 đ/ngày', { exact: true })).toBeVisible();
    // Click check box lọc chủ đề IoT
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByText('IoT').click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('Không xác định', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('33.000 đ/ngày', { exact: true })).toBeVisible();
    // Click vào khóa học chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass All_API_Giải đố_Case4' })).toBeVisible();
    await expect(page.locator('h1').getByText('QA_Pass All_API_Giải đố_Case4')).toBeVisible();
    await expect(page.getByText('33.000 đ/Ngày 196.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Hình thức học: Không xác định').nth(1)).toBeVisible();
    await expect(page.getByText('Độ tuổi: 10-45 tuổi').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('QA_Pass All_API_Giải đố_Case4 Case 4 _ Mô tả chi tiết khóa học API')).toBeVisible();
    await expect(page.getByText('Lợi ích Case 4 _ Lợi ích khóa học API')).toBeVisible();
    await expect(page.getByText('Hướng dẫn Case 4 _ Hướng dẫn sử dụng khóa học API')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 4 _ Khóa học phù hợp với tất cả')).toBeVisible();
    // Click btn Đăng ký học ngay 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Đăng kí học ngay' }).click();
    await expect(page.getByRole('heading', { name: 'Lựa chọn hình thức thanh toán' })).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-api");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass All_API_Giải đố_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).not.toBeVisible();   
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên =>  Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass All_API_Giải đố_Case4' }).first()).not.toBeVisible();
   
});
}

/**
 * Case 5: Thành công : Thêm khóa học API - trạng thái ẩn
 * Mong muốn: Trang chủ - Khóa học => Không hiển thị khóa học 
 */

function case5 () {
    test('Case 5: Pass_trạng thái ẩn', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-api");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Pass trạng thái Ẩn_API_Giải đố_Case5');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - trẻ em - học sinh - sinh viên
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Chọn gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Nhập giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('196000');
    // Nhập độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 5 _ Giới thiệu khóa học API');
    // Nhập lợi ích
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 5 _ Lợi ích khóa học API');
    // Chọn icon lợi ích
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 5 _ Mô tả chi tiết khóa học API');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 5 _ Khóa học phù hợp với tất cả');
    // Nhập hướng dẫn sử dụng
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 5 _ Hướng dẫn sử dụng khóa học API');
    // Chọn ảnh trang bìa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn hình thức học 
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn Trạng thái - Ẩn
    await page.locator('#status').click();
    await page.locator('#status').selectOption('0');
    // Chọn khóa học hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
    // Click btn Thêm gói cước 
    await page.getByRole('link', { name: ' Thêm gói cước' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
    // Chọn nhà cung cấp 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_supplier_2-container').click();
    await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
    // Chọn dịch vụ 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_service_2-container').click();
    await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
    // Chọn mã gói 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_code_2-container').click();
    await page.getByRole('treeitem', { name: 'KN' }).click();
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case5');
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('33000');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Chọn ưu tiên - Ưu tiên
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_API_Giải đố_Case5' }).first()).not.toBeVisible();   
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên =>  Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_API_Giải đố_Case5' }).first()).not.toBeVisible();
    // Truy cập CMS xóa khóa học
    await page.goto(dataSiteTest[0].linkSite + "/course-api");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass trạng thái Ẩn_API_Giải đố_Case5' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 6: Không thành công - Để trống trường màn thêm khóa học
 * Mong muốn: Hiển thị thông báo lỗi
 */

function case6 () {
    test('Case 6: Fail_Trống trường KH', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-api");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container');
    await page.getByRole('treeitem', { name: 'iNETS' });
    // Chọn danh mục - trẻ em - học sinh - sinh viên
    await page.getByRole('textbox', { name: 'Chọn danh mục...' });
    await page.getByRole('treeitem', { name: 'Trẻ em' });
    // Chọn gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' });
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' });
    // Chọn chủ đề 
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' });
    await page.getByRole('treeitem', { name: 'IoT' });
    // Nhập giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('');
    // Nhập độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('');
    // Nhập lợi ích
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('');
    // Chọn icon lợi ích
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('');
    // Nhập hướng dẫn sử dụng
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('');
    // Chọn hình thức học 
    await page.locator('#select2-study_form-container');
    await page.getByRole('treeitem', { name: 'Không xác định' });
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('');
    // Chọn Trạng thái - Hoạt động 
    await page.locator('#status');
    await page.locator('#status');
    // Chọn khóa học hot 
    await page.locator('#hot');
    await page.locator('#hot');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng nhập tên khóa học !')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn nhà cung cấp nội dung !')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn danh mục!')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn hashtag !')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn chủ đề !')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập giá gốc !')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập giới thiệu !')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập mô tả chi tiết !')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập vị trí hiển thị!')).toBeVisible();

});
}

/**
 * Case 7: Không thành công - Để trống trường màn thêm gói cước
 * Mong muốn: Hiển thị thông báo lỗi
 */

function case7 () {
    test('Case 7: Fail_Trống trường gói cước', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-api");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Fail_API_Giải đố_Case7');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - trẻ em - học sinh - sinh viên
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Chọn gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Nhập giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('196000');
    // Nhập độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 7 _ Giới thiệu khóa học API');
    // Nhập lợi ích
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 7 _ Lợi ích khóa học API');
    // Chọn icon lợi ích
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 7 _ Mô tả chi tiết khóa học API');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 7 _ Khóa học phù hợp với tất cả');
    // Nhập hướng dẫn sử dụng
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 7 _ Hướng dẫn sử dụng khóa học API');
    // Chọn ảnh trang bìa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn hình thức học 
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn Trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
    // Click btn Thêm gói cước 
    await page.getByRole('link', { name: ' Thêm gói cước' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
    // Chọn nhà cung cấp 
    await page.locator('#select2-pod_supplier_2-container');
    await page.getByRole('treeitem', { name: 'iNETSolution' });
    // Chọn dịch vụ 
    await page.locator('#select2-pod_service_2-container');
    await page.getByRole('treeitem', { name: 'mSkill-iNETS' });
    // Chọn mã gói 
    await page.locator('#select2-pod_code_2-container');
    await page.getByRole('treeitem', { name: 'KN' });
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('');
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2');
    // Chọn ưu tiên - Ưu tiên
    await page.getByLabel('Ưu tiên');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').click();
    await expect(page.locator('div#podCourseApi-2 div:nth-child(2) > div:nth-child(1) > div > p').getByText('Vui lòng chọn nhà cung cấp !')).toBeVisible();
    await expect(page.locator('div#podCourseApi-2 div:nth-child(2) > div:nth-child(2) > div > p').getByText('Vui lòng chọn dịch vụ !')).toBeVisible();
    await expect(page.locator('div#podCourseApi-2 div:nth-child(3) > div > p').getByText('Vui lòng chọn mã gói cước !')).toBeVisible();
    await expect(page.locator('div#podCourseApi-2 div:nth-child(3) > div:nth-child(1) > div > p').getByText('Vui lòng nhập tên gói !')).toBeVisible();
    await expect(page.locator('div#podCourseApi-2 div:nth-child(3) > div:nth-child(2) > div > p').getByText('Vui lòng nhập giá gói !')).toBeVisible();
    // Xóa khóa học 
    await page.locator('#podCourseApi-2').getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Thêm gói cước thành công!')).not.toBeVisible();
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Cập nhật thành công!')).not.toBeVisible();
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail_API_Giải đố_Case7' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 8: Không thành công do Click btn Đóng
 * Mong muốn: Các popup được đóng lại
 */

function case8 () {
    test('Case 8: Fail_click btn Đóng', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-api");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Fail btn Đóng_API_Giải đố_Case8');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - trẻ em - học sinh - sinh viên
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Chọn gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Nhập giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('196000');
    // Nhập độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 8 _ Giới thiệu khóa học API');
    // Nhập lợi ích
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 8 _ Lợi ích khóa học API');
    // Chọn icon lợi ích
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 8 _ Mô tả chi tiết khóa học API');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 8 _ Khóa học phù hợp với tất cả');
    // Nhập hướng dẫn sử dụng
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 8 _ Hướng dẫn sử dụng khóa học API');
    // Chọn ảnh trang bìa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn hình thức học 
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn Trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
    // Click btn Thêm gói cước 
    await page.getByRole('link', { name: ' Thêm gói cước' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
    // Chọn nhà cung cấp 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_supplier_2-container').click();
    await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
    // Chọn dịch vụ 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_service_2-container').click();
    await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
    // Chọn mã gói 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_code_2-container').click();
    await page.getByRole('treeitem', { name: 'KN' }).click();
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case8');
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('33000');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Chọn ưu tiên - Ưu tiên
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Đóng - gói cước 
    await page.locator('#podCourseApi-2').getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Thêm gói cước thành công!')).not.toBeVisible();
    // Click btn Lưu - khóa học 
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Cập nhật thành công!')).not.toBeVisible();
    // Xóa khóa học 
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail btn Đóng_API_Giải đố_Case8' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 9: Không thành công - do nhập giá gốc là số âm
 * Mong muốn: Hiển thị thông báo lỗi
 */

function case9 () {
    test('Case 9: Fail_giá gốc nhập số âm', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-api");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Fail Giá gốc nhập âm_API_Giải đố_Case9');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - trẻ em - học sinh - sinh viên
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Chọn gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Nhập giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('-196000');
    // Nhập độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 4 _ Giới thiệu khóa học API');
    // Nhập lợi ích
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 4 _ Lợi ích khóa học API');
    // Chọn icon lợi ích
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 _ Mô tả chi tiết khóa học API');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 _ Khóa học phù hợp với tất cả');
    // Nhập hướng dẫn sử dụng
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 _ Hướng dẫn sử dụng khóa học API');
    // Chọn ảnh trang bìa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn hình thức học 
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn Trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng nhập giá gốc lớn hơn hoặc bằng 0')).toBeVisible();

});
}

/**
 * Case 10: Không thành công - do nhập giá cước là số âm
 * Mong muốn: Hiển thị thông báo lỗi
 */

function case10 () {
    test('Case 10: Fail_giá cước là số âm', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-api");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Fail giá cước là số âm_API_Giải đố_Case10');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - trẻ em - học sinh - sinh viên
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Chọn gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Nhập giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('196000');
    // Nhập độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 10 _ Giới thiệu khóa học API');
    // Nhập lợi ích
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 10 _ Lợi ích khóa học API');
    // Chọn icon lợi ích
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 10 _ Mô tả chi tiết khóa học API');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 10 _ Khóa học phù hợp với tất cả');
    // Nhập hướng dẫn sử dụng
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 10 _ Hướng dẫn sử dụng khóa học API');
    // Chọn ảnh trang bìa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn hình thức học 
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn Trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
    // Click btn Thêm gói cước 
    await page.getByRole('link', { name: ' Thêm gói cước' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
    // Chọn nhà cung cấp 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_supplier_2-container').click();
    await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
    // Chọn dịch vụ 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_service_2-container').click();
    await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
    // Chọn mã gói 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_code_2-container').click();
    await page.getByRole('treeitem', { name: 'KN' }).click();
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case10');
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('-33000');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Chọn ưu tiên - Ưu tiên
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Lỗi! Đã có lỗi xảy ra, vui lòng kiểm tra lại thông tin.')).toBeVisible();
    // Xóa khóa học 
    await page.locator('#podCourseApi-2').getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Thêm gói cước thành công!')).not.toBeVisible();
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Cập nhật thành công!')).not.toBeVisible();
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail giá cước là số âm_API_Giải đố_Case10' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    
});
}

/**
 * Case 11: Không thành công - không chọn gói cước ưu tiên
 * Mong muốn: Hiển thị thông báo lỗi
 */

function case11 () {
    test('Case 11: Fail_Không chọn ưu tiên', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-api");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Fail ko chọn ưu tiên_API_Giải đố_Case11');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - trẻ em - học sinh - sinh viên
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Chọn gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Nhập giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('196000');
    // Nhập độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 10 _ Giới thiệu khóa học API');
    // Nhập lợi ích
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 10 _ Lợi ích khóa học API');
    // Chọn icon lợi ích
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 10 _ Mô tả chi tiết khóa học API');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 10 _ Khóa học phù hợp với tất cả');
    // Nhập hướng dẫn sử dụng
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 10 _ Hướng dẫn sử dụng khóa học API');
    // Chọn ảnh trang bìa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn hình thức học 
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn Trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
    // Click btn Thêm gói cước 
    await page.getByRole('link', { name: ' Thêm gói cước' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
    // Chọn nhà cung cấp 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_supplier_2-container').click();
    await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
    // Chọn dịch vụ 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_service_2-container').click();
    await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
    // Chọn mã gói 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_code_2-container').click();
    await page.getByRole('treeitem', { name: 'KN' }).click();
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case10');
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('33000');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Chọn ưu tiên - Ưu tiên
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('0');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng chọn gói cước và cài đặt gói ưu tiên!')).toBeVisible();
    // Xóa khóc học 
    await page.getByRole('button', { name: 'Đóng' }).click();
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail ko chọn ưu tiên_API_Giải đố_Case11' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 12: Không thành công - Nhập giá cước bằng 0
 * Mong muốn: Hiển thị thông báo lỗi
 */

function case12 () {
    test('Case 12: Fail_Giá cước bằng 0', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học API' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-api");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học API' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học API' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học API *' }).fill('QA_Fail giá cước bằng 0_API_Giải đố_Case12');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - trẻ em - học sinh - sinh viên
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Chọn gắn thẻ 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Nhập giá gốc
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá gốc *' }).fill('196000');
    // Nhập độ tuổi 
    await page.getByRole('textbox', { name: 'Độ tuổi' }).click();
    await page.getByRole('textbox', { name: 'Độ tuổi' }).fill('10-45 tuổi');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 10 _ Giới thiệu khóa học API');
    // Nhập lợi ích
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).click();
    await page.getByRole('textbox', { name: 'Bạn sẽ học được gì (Lợi ích)' }).fill('Case 10 _ Lợi ích khóa học API');
    // Chọn icon lợi ích
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(5) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1247']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 10 _ Mô tả chi tiết khóa học API');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 10 _ Khóa học phù hợp với tất cả');
    // Nhập hướng dẫn sử dụng
    await page.frameLocator('#user_manual_ifr').getByRole('paragraph').click();
    await page.frameLocator('#user_manual_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 10 _ Hướng dẫn sử dụng khóa học API');
    // Chọn ảnh trang bìa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(9) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.locator('section#course_api div:nth-child(10) > div > div > button[type=\"button\"]').click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn hình thức học 
    await page.locator('#select2-study_form-container').click();
    await page.getByRole('treeitem', { name: 'Không xác định' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn Trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Thêm gói cước 
    // Click btn Thêm gói cước 
    await page.getByRole('link', { name: ' Thêm gói cước' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm Gói cước' })).toBeVisible();
    // Chọn nhà cung cấp 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_supplier_2-container').click();
    await page.getByRole('treeitem', { name: 'iNETSolution' }).click();
    // Chọn dịch vụ 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_service_2-container').click();
    await page.getByRole('treeitem', { name: 'mSkill-iNETS' }).click();
    // Chọn mã gói 
    await page.waitForTimeout(1000);
    await page.locator('#select2-pod_code_2-container').click();
    await page.getByRole('treeitem', { name: 'KN' }).click();
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHAPI_Giải đố_Case10');
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('0');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Chọn ưu tiên - Ưu tiên
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('0');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').click();
    await expect(page.getByText('Lỗi! Đã có lỗi xảy ra, vui lòng kiểm tra lại thông tin.')).toBeVisible();
    // Xóa khóa học
    await page.locator("div[id='podCourseApi-2'] div[class='modal-footer'] button:nth-child(1)").click();
    await page.locator("div[id='edit'] div[class='modal-footer'] button:nth-child(1)").click();
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail giá cước bằng 0_API_Giải đố_Case12' })
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
    case8();
    case9();
    case10();
    case11();
    case12();


}
main();


