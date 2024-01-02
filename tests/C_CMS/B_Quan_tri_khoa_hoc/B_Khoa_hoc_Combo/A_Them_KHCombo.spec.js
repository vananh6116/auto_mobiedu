// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Thêm khóa học combo - Trẻ em 
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
    await page.getByRole('link', { name: 'Khóa học Combo' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-combo");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học Combo' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Combo' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass TE_KHCombo_Phát triển bản thân_Case1');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - Trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Nhập thời gian 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    // Chọn thẻ tag 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Click chọn khóa học 
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    // Click btn Thêm khóa học 
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    // Nhập giới thiệu khóa học 
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 1 _ Giới thiệu khóa học ');
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Mô tả chi tiết khóa học');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Khóa học phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Khóa học phù hợp với');
    // Nhập vị trí hiển thị - 1
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Khóa học hot
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
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('10000');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case1');
    // Chọn ưu tiên - Ưu tiên 
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.getByRole('button', { name: 'Lưu',exact:true }).nth(0).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('#tab_all').getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_all').getByText('10.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_all').getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('10.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('10.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('10.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('10.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('10.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('10.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('10.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - trang chủ 
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass TE_KHCombo_Phát triển bản thân_Case1');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('10.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - khóa học
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass TE_KHCombo_Phát triển bản thân_Case1');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('10.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Click check box lọc chủ đề IoT
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByText('IoT').click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('10.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Click vào khóa học chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass TE_KHCombo_Phát triển bản thân_Case1' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).locator('span')).toBeVisible();
    await expect(page.getByText('10.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 1 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 10.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 1 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // Click btn đăng ký học 
    await page.getByRole('link', { name: 'Đăng kí học ngay' }).click();
    await expect(page.getByRole('heading', { name: 'Lựa chọn hình thức thanh toán' })).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all').getByText('10.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all').getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('10.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị  
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('10.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị  
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('10.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Thêm khóa học combo - Học sinh
 * Mong muốn: Trang chủ -> Hiển thị Học sinh - Tất cả => Không hiển thị Trẻ em - Sinh viên 
 * Khóa học -> Hiển thị Tất cả - Học sinh => Không hiển thị Trẻ em - Sinh viên
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
    await page.getByRole('link', { name: 'Khóa học Combo' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-combo");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học Combo' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Combo' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass HS_KHCombo_Phát triển bản thân_Case2');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - Học sinh
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    // Nhập thời gian 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    // Chọn thẻ tag 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Click chọn khóa học 
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    // Click btn Thêm khóa học 
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    // Nhập giới thiệu khóa học 
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 2 _ Giới thiệu khóa học ');
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 2 _ Mô tả chi tiết khóa học');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Khóa học phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 2 _ Khóa học phù hợp với');
    // Nhập vị trí hiển thị - 1
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Khóa học hot
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
    await page.getByRole('treeitem', { name: 'EPV' }).click();
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('70000');
    // Chọn chu kỳ - Tuần
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('2');
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case2');
    // Chọn ưu tiên - Ưu tiên 
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.getByRole('button', { name: 'Lưu',exact:true }).nth(0).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.locator('#tab_all').getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_all').getByText('70.000 đ/tuần', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_all').getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('70.000 đ/tuần', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.locator('#tab_hoc-sinh-pho-thong').getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_hoc-sinh-pho-thong').getByText('70.000 đ/tuần', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_hoc-sinh-pho-thong').getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('70.000 đ/tuần', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('70.000 đ/tuần', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('70.000 đ/tuần', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('70.000 đ/tuần', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('70.000 đ/tuần', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - trang chủ 
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass HS_KHCombo_Phát triển bản thân_Case2');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('70.000 đ/tuần', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - khóa học
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass HS_KHCombo_Phát triển bản thân_Case2');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('70.000 đ/tuần', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Click check box lọc chủ đề IoT
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByText('IoT').click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('70.000 đ/tuần', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Click vào khóa học chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass HS_KHCombo_Phát triển bản thân_Case2' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).locator('span')).toBeVisible();
    await expect(page.getByText('70.000 đ/Tuần 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 2 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Tuần Hot 70.000 đ/Tuần Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 2 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // Click btn đăng ký học 
    await page.getByRole('link', { name: 'Đăng kí học ngay' }).click();
    await expect(page.getByRole('heading', { name: 'Lựa chọn hình thức thanh toán' })).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all').getByText('10.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all').getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('70.000 đ/tuần', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị  
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('10.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass HS_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('70.000 đ/tuần', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Thêm khóa học combo - Sinh viên
 * Mong muốn: Trang chủ -> Hiển thị Sinh viên - Tất cả => Không hiển thị Trẻ em - Học sinh
 * Khóa học -> Hiển thị Tất cả - Sinh viên => Không hiển thị Trẻ em - Học sinh
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
    await page.getByRole('link', { name: 'Khóa học Combo' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/course-combo");
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học Combo' })).toBeVisible();
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Combo' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass SV_KHCombo_Phát triển bản thân_Case3');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - Sinh viên
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Nhập thời gian 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    // Chọn thẻ tag 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Click chọn khóa học 
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    // Click btn Thêm khóa học 
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    // Nhập giới thiệu khóa học 
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 3 _ Giới thiệu khóa học ');
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 3 _ Mô tả chi tiết khóa học');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Khóa học phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 3 _ Khóa học phù hợp với');
    // Nhập vị trí hiển thị - 1
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Khóa học hot
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
    await page.getByRole('treeitem', { name: 'CF150', exact: true }).click();
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('1500000');
    // Chọn chu kỳ - Tháng
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('3');
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case3');
    // Chọn ưu tiên - Ưu tiên 
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.getByRole('button', { name: 'Lưu',exact:true }).nth(0).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('#tab_all').getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_all').getByText('1.500.000 đ/tháng', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_all').getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('1.500.000 đ/tháng', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('1.500.000 đ/tháng', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('#tab_sinh-vien-nguoi-di-lam').getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_sinh-vien-nguoi-di-lam').getByText('1.500.000 đ/tháng', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_sinh-vien-nguoi-di-lam').getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('1.500.000 đ/tháng', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('1.500.000 đ/tháng', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('1.500.000 đ/tháng', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('1.500.000 đ/tháng', { exact: true }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - trang chủ 
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass SV_KHCombo_Phát triển bản thân_Case3');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('1.500.000 đ/tháng', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - khóa học
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass SV_KHCombo_Phát triển bản thân_Case3');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('1.500.000 đ/tháng', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Click check box lọc chủ đề IoT
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByText('IoT').click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('1.500.000 đ/tháng', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Click vào khóa học chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass SV_KHCombo_Phát triển bản thân_Case3' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).locator('span')).toBeVisible();
    await expect(page.getByText('1.500.000 đ/tháng 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 3 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Tháng Hot 1.500.000 đ/Tháng Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 3 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // Click btn đăng ký học 
    await page.getByRole('link', { name: 'Đăng kí học ngay' }).click();
    await expect(page.getByRole('heading', { name: 'Lựa chọn hình thức thanh toán' })).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all').getByText('10.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all').getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.locator('#tab_sinh-vien-nguoi-di-lam').getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_sinh-vien-nguoi-di-lam').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_sinh-vien-nguoi-di-lam').getByText('1.500.000 đ/tháng', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true }).first())
        .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị  
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('10.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị  
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('1.500.000 đ/tháng', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();

});
}

/**
 * Case 4: Thành công : Thêm khóa học combo - All Trẻ em - Học sinh - Sinh viên
 * Mong muốn: Trang chủ -> Hiển thị Sinh viên - Tất cả - Trẻ em - Học sinh
 * Khóa học -> Hiển thị Tất cả - Sinh viên - Trẻ em - Học sinh
 * Lọc tìm kiếm thành công Trang chủ - Khóa học - Check box Chủ đề IoT
 */

function case4 () {
    test('Case 4: Pass_ALL', async ({ page }) => {
    
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
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass ALL_KHCombo_Phát triển bản thân_Case4');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - All Trẻ em - Học sinh - Sinh viên 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Nhập thời gian 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    // Chọn thẻ tag 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Click chọn khóa học 
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    // Click btn Thêm khóa học 
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    // Nhập giới thiệu khóa học 
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 4 _ Giới thiệu khóa học ');
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 _ Mô tả chi tiết khóa học');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Khóa học phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 _ Khóa học phù hợp với');
    // Nhập vị trí hiển thị - 1
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Khóa học hot
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
    await page.getByRole('treeitem', { name: 'EPV' }).click();
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('25000');
    // Chọn chu kỳ - Ngày
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case4');
    // Chọn ưu tiên - Ưu tiên 
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.getByRole('button', { name: 'Lưu',exact:true }).nth(0).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('#tab_all').getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_all').getByText('25.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_all').getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('25.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('25.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('25.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('25.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('25.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - trang chủ 
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass ALL_KHCombo_Phát triển bản thân_Case4');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('25.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - khóa học
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_Pass ALL_KHCombo_Phát triển bản thân_Case4');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('25.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Click check box lọc chủ đề IoT
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByText('IoT').click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('25.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Click vào khóa học chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).locator('span')).toBeVisible();
    await expect(page.getByText('25.000 đ/ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 4 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 25.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 4 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // Click btn đăng ký học 
    await page.getByRole('link', { name: 'Đăng kí học ngay' }).click();
    await expect(page.getByRole('heading', { name: 'Lựa chọn hình thức thanh toán' })).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all').getByText('25.000 đ/ngày1.500.000 đ/tháng', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all').getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('25.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em').getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong').getByText('25.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong').getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true }))
        .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass ALL_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('25.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();

});
}

/**
 * Case 5: Không thành công - Nhập giá cước bằng 0 
 * Mong muốn: hệ thống thông báo lỗi 
 */

function case5 () {
    test('Case 5 : Fail_Nhập giá cước = 0', async ({ page }) => {
    
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
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Fail giá bằng 0_KHCombo_Phát triển bản thân_Case5');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - Trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Nhập thời gian 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    // Chọn thẻ tag 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Click chọn khóa học 
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    // Click btn Thêm khóa học 
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    // Nhập giới thiệu khóa học 
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 5 _ Giới thiệu khóa học ');
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 5 _ Mô tả chi tiết khóa học');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Khóa học phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 5 _ Khóa học phù hợp với');
    // Nhập vị trí hiển thị - 1
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Khóa học hot
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
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('0');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case5');
    // Chọn ưu tiên - Ưu tiên 
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('× Lỗi! Đã có lỗi xảy ra, vui lòng kiểm tra lại thông tin.')).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail giá bằng 0_KHCombo_Phát triển bản thân_Case5' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
  
});
}

/**
 * Case 6: Không thành công : Để trống trường thêm khóa học
 * Mong muốn : Hiển thị thông báo lỗi 
 */

function case6 () {
    test('Case 6: Fail_Trống_thêm KH', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Combo' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container');
    await page.getByRole('treeitem', { name: 'iNETS' });
    // Chọn danh mục - Trẻ em 
    await page.getByRole('textbox', { name: 'Chọn danh mục...' });
    await page.getByRole('treeitem', { name: 'Trẻ em' });
    // Nhập thời gian 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('');
    // Chọn thẻ tag 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' });
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' });
    // Chọn chủ đề 
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' });
    await page.getByRole('treeitem', { name: 'IoT' });
    // Nhập giới thiệu khóa học 
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('');
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('');
    // Khóa học phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('');
    // Nhập vị trí hiển thị - 1
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('');
    // Click btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng nhập tên khóa học !')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn nhà cung cấp nội dung !')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn danh mục!')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn hashtag !')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn chủ đề !')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập giới thiệu !')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập mô tả chi tiết !')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập vị trí hiển thị!')).toBeVisible();

});
}

/**
 * Case 7: Không thành công : Để trống trường thêm gói cước
 * Mong muốn : Hiển thị thông báo lỗi 
 */

function case7 () {
    test('Case 7: Fail_Trống_Thêm gói cước', async ({ page }) => {
    
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
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Fail TE_KHCombo_Phát triển bản thân_Case7');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - Trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Nhập thời gian 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    // Chọn thẻ tag 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Click chọn khóa học 
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    // Click btn Thêm khóa học 
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    // Nhập giới thiệu khóa học 
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 1 _ Giới thiệu khóa học ');
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Mô tả chi tiết khóa học');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Khóa học phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Khóa học phù hợp với');
    // Nhập vị trí hiển thị - 1
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Khóa học hot
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
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.locator('div#podCourseCombo-2 div:nth-child(2) > div:nth-child(1) > div > p').getByText('Vui lòng chọn nhà cung cấp !')).toBeVisible();
    await expect(page.locator('div#podCourseCombo-2 div:nth-child(2) > div:nth-child(2) > div > p').getByText('Vui lòng chọn dịch vụ !')).toBeVisible();
    await expect(page.locator('div#podCourseCombo-2 div:nth-child(3) > div > p').getByText('Vui lòng chọn mã gói cước !')).toBeVisible();
    await expect(page.locator('div#podCourseCombo-2 div:nth-child(3) > div:nth-child(1) > div > p').getByText('Vui lòng nhập tên gói !')).toBeVisible();
    await expect(page.locator('div#podCourseCombo-2 div:nth-child(3) > div:nth-child(2) > div > p').getByText('Vui lòng nhập giá gói !')).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.locator('#podCourseCombo-2').getByRole('button', { name: 'Đóng' }).click();
    await page.getByRole('button', { name: 'Đóng',exact:true }).nth(0).click();
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail TE_KHCombo_Phát triển bản thân_Case7' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 8: Không thành công : Click btn Đóng màn thêm gói cước - thêm khóa học 
 * Mong muốn : Hiển thị thông báo lỗi 
 */

function case8 () {
    test('Case 8: Fail_Click btn Đóng', async ({ page }) => {
    
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
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Fail_KHCombo_Phát triển bản thân_Case8');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - Trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Nhập thời gian 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    // Chọn thẻ tag 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Click chọn khóa học 
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    // Click btn Thêm khóa học 
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    // Nhập giới thiệu khóa học 
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 1 _ Giới thiệu khóa học ');
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Mô tả chi tiết khóa học');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Khóa học phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Khóa học phù hợp với');
    // Nhập vị trí hiển thị - 1
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Khóa học hot
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
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('10000');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case8');
    // Chọn ưu tiên - Ưu tiên 
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Đóng - gói cước 
    await page.locator('#podCourseCombo-2').getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Thêm gói cước thành công!')).not.toBeVisible();
    // Click btn Đóng - khóa học 
    await page.getByRole('button', { name: 'Đóng',exact:true }).nth(0).click();
    await expect(page.getByText('Cập nhật thành công!')).not.toBeVisible();
    // Truy cập CMS xóa khóa học  
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail_KHCombo_Phát triển bản thân_Case8' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 9: Không thành công : Vị trí là số âm 
 * Mong muốn : Hiển thị thông báo lỗi 
 */

function case9 () {
    test('Case 9: Fail_Vị trí nhập số âm', async ({ page }) => {
    
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
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Fail TE_KHCombo_Phát triển bản thân_Case9');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - Trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Nhập thời gian 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    // Chọn thẻ tag 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Click chọn khóa học 
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    // Click btn Thêm khóa học 
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    // Nhập giới thiệu khóa học 
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 1 _ Giới thiệu khóa học ');
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Mô tả chi tiết khóa học');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Khóa học phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Khóa học phù hợp với');
    // Nhập vị trí hiển thị - 1
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('-1');
    // Chọn trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Khóa học hot
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng nhập vị trí hiển thị lớn hơn hoặc bằng 0!')).toBeVisible();

});
}

/**
 * Case 10: Không thành công : Giá cước là số âm
 * Mong muốn : Hiển thị thông báo lỗi 
 */

function case10 () {
    test('Case 10: Fail_Giá cước nhập số âm', async ({ page }) => {
    
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
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Fail_KHCombo_Phát triển bản thân_Case10');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - Trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Nhập thời gian 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    // Chọn thẻ tag 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Click chọn khóa học 
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    // Click btn Thêm khóa học 
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    // Nhập giới thiệu khóa học 
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 1 _ Giới thiệu khóa học ');
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Mô tả chi tiết khóa học');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Khóa học phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Khóa học phù hợp với');
    // Nhập vị trí hiển thị - 1
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Khóa học hot
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
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('-10000');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case1');
    // Chọn ưu tiên - Ưu tiên 
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('× Lỗi! Đã có lỗi xảy ra, vui lòng kiểm tra lại thông tin.')).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.locator('#podCourseCombo-2').getByRole('button', { name: 'Đóng' }).click();
    await page.getByRole('button', { name: 'Đóng',exact:true }).nth(0).click();
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail_KHCombo_Phát triển bản thân_Case10' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    
});
}

/**
 * Case 11: Không thành công : Thêm gói cước - Không chọn ưu tiên 
 * Mong muốn : Hiển thị thông báo lỗi 
 */

function case11 () {
    test('Case 11: Fail_Ko chọn ưu tiên', async ({ page }) => {
    
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
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Fail_KHCombo_Phát triển bản thân_Case11');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - Trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Nhập thời gian 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    // Chọn thẻ tag 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Click chọn khóa học 
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    // Click btn Thêm khóa học 
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    // Nhập giới thiệu khóa học 
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 1 _ Giới thiệu khóa học ');
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Mô tả chi tiết khóa học');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Khóa học phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Khóa học phù hợp với');
    // Nhập vị trí hiển thị - 1
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái - Hoạt động 
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Khóa học hot
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
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('10000');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case1');
    // Chọn ưu tiên - Ưu tiên 
    await page.getByLabel('Ưu tiên');
    await page.getByLabel('Ưu tiên');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.getByRole('button', { name: 'Lưu',exact:true }).nth(0).click();
    await expect(page.getByText('Vui lòng chọn gói cước và cài đặt gói ưu tiên!')).toBeVisible();
    // Truy cập CMS xóa khóa học 
    await page.getByRole('button', { name: 'Đóng',exact:true }).nth(0).click();
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail_KHCombo_Phát triển bản thân_Case11' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 12: Thành công : Thêm khóa học combo - Trẻ em - Trạng thái Ẩn
 * Mong muốn: Trang chủ => Không hiển thị  Học sinh - Sinh viên - Trẻ em - Tất cả
 * Khóa học -> Hiển thị  => Không hiển thị Học sinh - Sinh viên - Tất cả - Trẻ em
 */

function case12 () {
    test('Case 12: Pass_trạng thái ẩn', async ({ page }) => {
    
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
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass trạng thái Ẩn_KHCombo_Phát triển bản thân_Case12');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục - Trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Nhập thời gian 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('022500');
    // Chọn thẻ tag 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Click chọn khóa học 
    await page.waitForTimeout(1000);
    await page.locator('#select2-list_course-container').click();
    await page.locator('ul#select2-list_course-results > li:nth-child(1)').click();
    // Click btn Thêm khóa học 
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    // Nhập giới thiệu khóa học 
    await page.getByLabel('Giới thiệu khóa học\n*').click();
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 1 _ Giới thiệu khóa học ');
    // Nhập mô tả chi tiết 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Mô tả chi tiết khóa học');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Khóa học phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 _ Khóa học phù hợp với');
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái - Ẩn
    await page.locator('#status').click();
    await page.locator('#status').selectOption('0');
    // Khóa học hot
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
    await page.locator('#select2-pod_code_2-container').click();
    await page.getByRole('treeitem', { name: 'KN' }).click();
    // Nhập giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('10000');
    // Chọn chu kỳ - Ngày 
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    // Nhập tên gói cước 
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case1');
    // Chọn ưu tiên - Ưu tiên 
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.getByRole('button', { name: 'Lưu',exact:true }).nth(0).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_KHCombo_Phát triển bản thân_Case12' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_KHCombo_Phát triển bản thân_Case12' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_KHCombo_Phát triển bản thân_Case12' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_KHCombo_Phát triển bản thân_Case12' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_KHCombo_Phát triển bản thân_Case12' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_KHCombo_Phát triển bản thân_Case12' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_KHCombo_Phát triển bản thân_Case12' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass trạng thái Ẩn_KHCombo_Phát triển bản thân_Case12' }).first()).not.toBeVisible();
    // Truy cập CMS xóa khóa học
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass trạng thái Ẩn_KHCombo_Phát triển bản thân_Case12' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

function main() {
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


