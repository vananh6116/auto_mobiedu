// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../../dataSite.json';

/**
 * Case 1: Thành công : Sửa TE sang HS
 * Mong muốn: Sau khi sửa hiển thị thông tin sau sửa
 */

function case1 () {
    test('Case 1: Pass_TE sang HS', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Thêm TE_KHCombo_Phát triển bản thân_Case1');
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('10000');
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
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('10.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('10.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('10.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price')
                .getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
                    .getByText('1 khóa học', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
                    .getByText('10.000 đ/ngày', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
                    .getByText('800.000 đ', { exact: true }))
                    .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('10.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('10.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('10.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('10.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Thêm TE_KHCombo_Phát triển bản thân_Case1' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Thêm TE_KHCombo_Phát triển bản thân_Case1' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Thêm TE_KHCombo_Phát triển bản thân_Case1' }).locator('span')).toBeVisible();
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
    // ***Truy cập CMS sửa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm TE_KHCombo_Phát triển bản thân_Case1' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1');
    // Sửa danh mục Trẻ em -> Học sinh 
    await page.waitForTimeout(1000);
    await page.getByTitle('Trẻ em').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    // Sửa thời gian 
    await page.locator('input#edit_time').click();
    await page.locator('input#edit_time').fill('015000');
    // ***Chỉnh sửa gói cước 
    await page.locator('#edit_course_combo').getByRole('link', { name: ' Edit' }).click();
    // Sửa giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('11000');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_edit_pod_2').click();
    await expect(page.getByText('Cập nhật gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.locator('button#submit_edit').click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau sửa
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('11.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('11.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('11.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
            .getByText('1 khóa học', { exact: true }).first())
            .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
            .getByText('11.000 đ/ngày', { exact: true }).first())
            .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
            .getByText('800.000 đ', { exact: true }).first())
            .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('11.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('11.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('11.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('11.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Click Khóa học sau sửa 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).locator('span')).toBeVisible();
    await expect(page.getByText('11.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 01 Giờ 50 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 1 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 11.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 1 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra không hiển thị sau xóa
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('11.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('11.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('11.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS_KHCombo_Phát triển bản thân_Case1' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('11.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Sửa HS sang SV
 * Mong muốn: Sau khi sửa hiển thị thông tin sau sửa
 */

function case2 () {
    test('Case 2: Pass_HS sang SV', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Thêm HS_KHCombo_Phát triển bản thân_Case2');
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('12000');
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
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_KHCombo_Phát triển bản thân_Case2' })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('12.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.locator('div#tab_tre-em div:nth-child(1) > div > div.caption > p.product-title > a')
                .getByRole('link', { name: 'QA_Pass Thêm HS_KHCombo_Phát triển bản thân_Case2' })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('12.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_KHCombo_Phát triển bản thân_Case2' })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('12.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price')
                .getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_KHCombo_Phát triển bản thân_Case2' })).not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
                    .getByText('1 khóa học', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
                    .getByText('12.000 đ/ngày', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
                    .getByText('800.000 đ', { exact: true }))
                    .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('12.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('12.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('12.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm HS_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('12.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Thêm HS_KHCombo_Phát triển bản thân_Case2' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Thêm HS_KHCombo_Phát triển bản thân_Case2' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Thêm HS_KHCombo_Phát triển bản thân_Case2' }).locator('span')).toBeVisible();
    await expect(page.getByText('12.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 2 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 12.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 2 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // ***Truy cập CMS sửa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm HS_KHCombo_Phát triển bản thân_Case2' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2');
    // Sửa danh mục Trẻ em -> Học sinh 
    await page.waitForTimeout(1000);
    await page.getByTitle('Học sinh phổ thông').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Sửa thời gian 
    await page.locator('input#edit_time').click();
    await page.locator('input#edit_time').fill('015000');
    // ***Chỉnh sửa gói cước 
    await page.locator('#edit_course_combo').getByRole('link', { name: ' Edit' }).click();
    // Sửa giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('13000');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_edit_pod_2').click();
    await expect(page.getByText('Cập nhật gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.locator('button#submit_edit').click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau sửa
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('13.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('13.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('13.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
            .getByText('1 khóa học', { exact: true }).first())
            .toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
            .getByText('13.000 đ/ngày', { exact: true }).first())
            .toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
            .getByText('800.000 đ', { exact: true }).first())
            .toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('13.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('13.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('13.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('13.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Click Khóa học sau sửa 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).locator('span')).toBeVisible();
    await expect(page.getByText('13.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 01 Giờ 50 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 2 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 13.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 2 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra không hiển thị sau xóa
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('13.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị  
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
            .getByText('1 khóa học', { exact: true }).first())
            .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
            .getByText('13.000 đ/ngày', { exact: true }).first())
            .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
            .getByText('800.000 đ', { exact: true }).first())
            .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('13.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa SV_KHCombo_Phát triển bản thân_Case2' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('13.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Sửa TE sang HS - SV
 * Mong muốn: Sau khi sửa hiển thị thông tin sau sửa
 */

function case3 () {
    test('Case 3: Pass_TE sang HS-SV', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Thêm TE3_KHCombo_Phát triển bản thân_Case3');
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('14000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case3');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE3_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('14.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE3_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('14.000 đ/ngày', { exact: true }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE3_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('14.000 đ/ngày', { exact: true }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price')
                .getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE3_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
                    .getByText('1 khóa học', { exact: true }).first())
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
                    .getByText('14.000 đ/ngày', { exact: true }).first())
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
                    .getByText('800.000 đ', { exact: true }).first())
                    .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE3_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('14.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE3_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('14.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE3_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('14.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE3_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('14.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Thêm TE3_KHCombo_Phát triển bản thân_Case3' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Thêm TE3_KHCombo_Phát triển bản thân_Case3' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Thêm TE3_KHCombo_Phát triển bản thân_Case3' }).locator('span')).toBeVisible();
    await expect(page.getByText('14.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 3 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 14.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 3 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // ***Truy cập CMS sửa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm TE3_KHCombo_Phát triển bản thân_Case3' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3');
    // Sửa danh mục Trẻ em -> Học sinh 
    await page.waitForTimeout(1000);
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Sửa thời gian 
    await page.locator('input#edit_time').click();
    await page.locator('input#edit_time').fill('015000');
    // ***Chỉnh sửa gói cước 
    await page.locator('#edit_course_combo').getByRole('link', { name: ' Edit' }).click();
    // Sửa giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('15000');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_edit_pod_2').click();
    await expect(page.getByText('Cập nhật gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.locator('button#submit_edit').click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau sửa
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
            .getByText('1 khóa học', { exact: true }).first())
            .toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
            .getByText('15.000 đ/ngày', { exact: true }).first())
            .toBeVisible();
    await expect(page.locator('div#tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
            .getByText('800.000 đ', { exact: true }).first())
            .toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Click Khóa học sau sửa 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).locator('span')).toBeVisible();
    await expect(page.getByText('15.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 01 Giờ 50 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 3 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 15.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 3 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra không hiển thị sau xóa
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị  
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị  
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
            .getByText('1 khóa học', { exact: true }).first())
            .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
            .getByText('15.000 đ/ngày', { exact: true }).first())
            .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
            .getByText('800.000 đ', { exact: true }).first())
            .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị  
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị  
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa HS-SV_KHCombo_Phát triển bản thân_Case3' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();

});
}

/**
 * Case 4: Thành công : Sửa gói học chu kỳ giá cước ngày sang tuần
 * Mong muốn: Sau khi sửa hiển thị thông tin sau sửa
 */

function case4 () {
    test('Case 4: Pass_TE_Ngày sang tuần', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Thêm TE Ngày_KHCombo_Phát triển bản thân_Case4');
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('16000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case4');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ngày_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('16.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ngày_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('16.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ngày_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('16.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price')
                .getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ngày_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
                    .getByText('1 khóa học', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
                    .getByText('16.000 đ/ngày', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
                    .getByText('800.000 đ', { exact: true }))
                    .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ngày_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('16.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ngày_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('16.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ngày_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('16.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ngày_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('16.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Thêm TE Ngày_KHCombo_Phát triển bản thân_Case4' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Thêm TE Ngày_KHCombo_Phát triển bản thân_Case4' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Thêm TE Ngày_KHCombo_Phát triển bản thân_Case4' }).locator('span')).toBeVisible();
    await expect(page.getByText('16.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 4 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 16.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 4 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // ***Truy cập CMS sửa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm TE Ngày_KHCombo_Phát triển bản thân_Case4' })
            .locator('i')
            .nth(0)
            .click();
     // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Sửa TE Tuần_KHCombo_Phát triển bản thân_Case4');   
    // ***Chỉnh sửa gói cước 
    await page.locator('#edit_course_combo').getByRole('link', { name: ' Edit' }).click();
    // Sửa chu kỳ Ngày sang Tuần
    await page.waitForTimeout(1000);
    await page.locator('#edit_pod_period_2').click();
    await page.locator('#edit_pod_period_2').selectOption('2');
    // Sửa giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('55000');
    // Click btn Lưu - gói cước 
    await page.locator('#submit_edit_pod_2').click();
    await expect(page.getByText('Cập nhật gói cước thành công!')).toBeVisible();
    // Click btn Lưu - khóa học 
    await page.locator('button#submit_edit').click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra thông tin sau sửa 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị sau sửa
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Tuần_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('55.000 đ/tuần', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị sau sửa
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Tuần_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('55.000 đ/tuần', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị sau sửa
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Tuần_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('55.000 đ/tuần', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị sau sửa
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Tuần_KHCombo_Phát triển bản thân_Case4' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('55.000 đ/tuần', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Click Khóa học sau sửa 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_Pass Sửa TE Tuần_KHCombo_Phát triển bản thân_Case4' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Sửa TE Tuần_KHCombo_Phát triển bản thân_Case4' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Sửa TE Tuần_KHCombo_Phát triển bản thân_Case4' }).locator('span')).toBeVisible();
    await expect(page.getByText('55.000 đ/Tuần 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 4 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Tuần Hot 55.000 đ/Tuần Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 4 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa TE Tuần_KHCombo_Phát triển bản thân_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra thông tin sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Tuần_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('55.000 đ/tuần', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Tuần_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('55.000 đ/tuần', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Tuần_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('55.000 đ/tuần', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Tuần_KHCombo_Phát triển bản thân_Case4' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('55.000 đ/tuần', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();

});
}

/**
 * Case 5: Thành công : Sửa thêm gói cước - Chọn Ưu tiên 
 * Mong muốn: Sau khi sửa hiển thị thông tin sau sửa
 */

function case5 () {
    test('Case 5: Pass_TE Ưu tiên_Thêm gói cước 2', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Thêm TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5');
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
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 5 _ Giới thiệu khóa học ');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 5 _ Mô tả chi tiết khóa học');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 5 _ Khóa học phù hợp với');
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('17000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước 1_KHCombo_Phát triển bản thân_Case5');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('17.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('17.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('17.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price')
                .getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
                    .getByText('1 khóa học', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
                    .getByText('17.000 đ/ngày', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
                    .getByText('800.000 đ', { exact: true }))
                    .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('17.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('17.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('17.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('17.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Thêm TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Thêm TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Thêm TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).locator('span')).toBeVisible();
    await expect(page.getByText('17.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 5 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 17.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 5 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // ***Truy cập CMS sửa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' })
            .locator('i')
            .nth(0)
            .click();
     // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Sửa TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5');      
    // Sửa KH -Thêm gói cước - Ưu tiên 
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('18000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước 2_KHCombo_Phát triển bản thân_Case5');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra thông tin sau sửa 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị sau sửa
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('18.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị sau sửa
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('18.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị sau sửa
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('18.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị sau sửa
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('18.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Click Khóa học sau sửa 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_Pass Sửa TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Sửa TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Sửa TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).locator('span')).toBeVisible();
    await expect(page.getByText('18.000 đ/ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 5 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 18.000 đ/Ngày Đăng kí Gói Ngày 17.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 5 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra không hiển thị sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('18.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('18.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('18.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case5' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('18.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
 
});
}

/**
 * Case 6: Thành công : Sửa thêm gói cước - Không chọn Ưu tiên 
 * Mong muốn: Sau khi sửa hiển thị thông tin sau sửa
 */

function case6 () {
    test('Case 6: Pass_TE No Ưu tiên_Thêm gói cước 2', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Thêm TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6');
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
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 6 _ Giới thiệu khóa học ');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 6 _ Mô tả chi tiết khóa học');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 6 _ Khóa học phù hợp với');
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('19000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước 1_KHCombo_Phát triển bản thân_Case6');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price')
                .getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
                    .getByText('1 khóa học', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
                    .getByText('19.000 đ/ngày', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
                    .getByText('800.000 đ', { exact: true }))
                    .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Thêm TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Thêm TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Thêm TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).locator('span')).toBeVisible();
    await expect(page.getByText('19.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 6 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 19.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 6 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // ***Truy cập CMS sửa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' })
            .locator('i')
            .nth(0)
            .click();
     // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Sửa TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6');      
    // Sửa KH -Thêm gói cước - Không ưu tiên 
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('20000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước 2_KHCombo_Phát triển bản thân_Case6');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('0');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra thông tin sau sửa 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị sau sửa
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị sau sửa
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị sau sửa
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị sau sửa
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Click Khóa học sau sửa 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_Pass Sửa TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Sửa TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Sửa TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).locator('span')).toBeVisible();
    await expect(page.getByText('19.000 đ/ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 6 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 19.000 đ/Ngày Đăng kí Gói Ngày 20.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 6 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra không hiển thị sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa TE No Ưu tiên gói cước 1_KHCombo_Phát triển bản thân_Case6' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('19.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();

});
}

/**
 * Case 7: Thành công : Sửa thêm khóa học
 * Mong muốn: Sau khi sửa hiển thị thông tin sau sửa
 */

function case7 () {
    test('Case 7: Pass_TE Thêm khóa học', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Thêm Khóa học 1_KHCombo_Phát triển bản thân_Case7');
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
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 7 _ Giới thiệu khóa học ');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 7 _ Mô tả chi tiết khóa học');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 7 _ Khóa học phù hợp với');
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('21000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case7');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm Khóa học 1_KHCombo_Phát triển bản thân_Case7' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm Khóa học 1_KHCombo_Phát triển bản thân_Case7' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm Khóa học 1_KHCombo_Phát triển bản thân_Case7' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price')
                .getByText('800.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm Khóa học 1_KHCombo_Phát triển bản thân_Case7' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
                    .getByText('1 khóa học', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
                    .getByText('21.000 đ/ngày', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
                    .getByText('800.000 đ', { exact: true }))
                    .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm Khóa học 1_KHCombo_Phát triển bản thân_Case7' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm Khóa học 1_KHCombo_Phát triển bản thân_Case7' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm Khóa học 1_KHCombo_Phát triển bản thân_Case7' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Thêm Khóa học 1_KHCombo_Phát triển bản thân_Case7' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Thêm Khóa học 1_KHCombo_Phát triển bản thân_Case7' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Thêm Khóa học 1_KHCombo_Phát triển bản thân_Case7' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Thêm Khóa học 1_KHCombo_Phát triển bản thân_Case7' }).locator('span')).toBeVisible();
    await expect(page.getByText('21.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 7 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 21.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 7 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // ***Truy cập CMS sửa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm Khóa học 1_KHCombo_Phát triển bản thân_Case7' })
            .locator('i')
            .nth(0)
            .click();
     // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Sửa_Thêm Khóa học 2_KHCombo_Phát triển bản thân_Case7');      
    // Click chọn khóa học 
    await page.waitForTimeout(1000);
    await page.locator('#select2-edit_list_course-container').click();
    await page.locator('ul#select2-edit_list_course-results > li:nth-child(3)').click();
    // Click btn Thêm khóa học 
    await page.getByRole('button', { name: 'Thêm khóa học' }).click();
    // Click btn Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra thông tin sau sửa 
    // Click khóa học chi tiết kiểm tra hiển thị sau thêm khóa học con 
    await page.goto(dataSiteTest[1].linkSite);
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_Pass Sửa_Thêm Khóa học 2_KHCombo_Phát triển bản thân_Case7' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Sửa_Thêm Khóa học 2_KHCombo_Phát triển bản thân_Case7' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Sửa_Thêm Khóa học 2_KHCombo_Phát triển bản thân_Case7' }).locator('span')).toBeVisible();
    await expect(page.getByText('21.000 đ/Ngày 1.300.000 đ')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 2').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 7 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Thiết kế trình chiếu PowerPoint 2016 từ A-Z 44 Bài giảng 05 Giờ 30 Phút Đỗ Trung')).toBeVisible();
    await expect(page.getByText('Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.000 đ Chi ')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 21.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 7 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Đỗ Trung Thành Phan Hoàng Anh Đỗ Trung Thành').first()).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa_Thêm Khóa học 2_KHCombo_Phát triển bản thân_Case7' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra không hiển thị sau xóa 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa_Thêm Khóa học 2_KHCombo_Phát triển bản thân_Case7' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa_Thêm Khóa học 2_KHCombo_Phát triển bản thân_Case7' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa_Thêm Khóa học 2_KHCombo_Phát triển bản thân_Case7' }).first()).not.toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị  
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa_Thêm Khóa học 2_KHCombo_Phát triển bản thân_Case7' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
            .getByText('1 khóa học', { exact: true }).first())
            .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
            .getByText('21.000 đ/ngày', { exact: true }).first())
            .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
            .getByText('800.000 đ', { exact: true }).first())
            .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa_Thêm Khóa học 2_KHCombo_Phát triển bản thân_Case7' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa_Thêm Khóa học 2_KHCombo_Phát triển bản thân_Case7' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa_Thêm Khóa học 2_KHCombo_Phát triển bản thân_Case7' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa_Thêm Khóa học 2_KHCombo_Phát triển bản thân_Case7' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('21.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();

});
}

/**
 * Case 8: Không thành công - Click Btn Đóng 
 * Mong muốn: Hiển thị các trường thông tin như lúc ban đầu
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
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9');
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
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 9 _ Giới thiệu khóa học ');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 9 _ Mô tả chi tiết khóa học');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 9 _ Khóa học phù hợp với');
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('23000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case9');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('23.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('23.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > p.price').getByText('23.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#btn_tab_hoc-sinh-pho-thong div:nth-child(1) > div > div.caption > div > p.old-price')
                .getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.author')
                    .getByText('1 khóa học', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > p.price')
                    .getByText('23.000 đ/ngày', { exact: true }))
                    .not.toBeVisible();
    await expect(page.locator('#btn_tab_sinh-vien-nguoi-di-lam div:nth-child(1) > div > div.caption > div > p.old-price')
                    .getByText('800.000 đ', { exact: true }))
                    .not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('23.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('23.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('23.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('23.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).locator('span')).toBeVisible();
    await expect(page.getByText('23.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 9 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 23.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 9 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // ***Truy cập CMS sửa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Fail Sửa TE_KHCombo_Phát triển bản thân_Case9');
    // Sửa danh mục Trẻ em -> Học sinh 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Sửa thời gian 
    await page.locator('input#edit_time').click();
    await page.locator('input#edit_time').fill('015000');
    // ***Chỉnh sửa gói cước 
    await page.locator('#edit_course_combo').getByRole('link', { name: ' Edit' }).click();
    // Sửa giá cước 
    await page.getByRole('textbox', { name: 'Giá cước' }).click();
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('24000');
    // Click btn Đóng - gói cước 
    await page.locator('#editPodCourseCombo-2').getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Cập nhật gói cước thành công!')).not.toBeVisible();
    // Click btn Đóng - khóa học 
    await page.locator("div[id='edit'] div[class='modal-footer'] button:nth-child(1)").click();
    await expect(page.getByText('Cập nhật thành công!')).not.toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra không hiển thị sau xóa
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('23.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('23.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('23.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm TE_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('23.000 đ/ngày', { exact: true })).not.toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).not.toBeVisible();

});
}

/**
 * Case 9: Thành công - Sửa trạng thái hiển thị Hoạt động sang Ẩn
 * Mong muốn: Sau sửa khóa học không hiển thị trên Web
 */

function case9 () {
    test('Case 9: Pass_Hoạt động sang Ẩn', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Hoạt động sang Ẩn_KHCombo_Phát triển bản thân_Case9');
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
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 9 _ Giới thiệu khóa học ');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 9 _ Mô tả chi tiết khóa học');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 9 _ Khóa học phù hợp với');
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('15000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case9');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang Ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang Ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang Ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang Ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang Ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang Ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('15.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang Ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Hoạt động sang Ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Hoạt động sang Ẩn_KHCombo_Phát triển bản thân_Case9' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Hoạt động sang Ẩn_KHCombo_Phát triển bản thân_Case9' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Hoạt động sang Ẩn_KHCombo_Phát triển bản thân_Case9' }).locator('span')).toBeVisible();
    await expect(page.getByText('15.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 9 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 15.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 9 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // ***Truy cập CMS sửa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Hoạt động sang Ẩn_KHCombo_Phát triển bản thân_Case9' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Sửa hoạt động sang ẩn_KHCombo_Phát triển bản thân_Case9');
    // Sửa hoạt động sang ẩn
    await page.locator('#edit_status').click();
    await page.locator('#edit_status').selectOption('0')
    // Click btn Lưu - khóa học 
    await page.locator('button#submit_edit').click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau sửa
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa hoạt động sang ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa hoạt động sang ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa hoạt động sang ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa hoạt động sang ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa hoạt động sang ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị  
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa hoạt động sang ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa hoạt động sang ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa hoạt động sang ẩn_KHCombo_Phát triển bản thân_Case9' }).first()).not.toBeVisible();
    // Truy cập CMS xóa khóa học
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa hoạt động sang ẩn_KHCombo_Phát triển bản thân_Case9' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 10: Thành công - Sửa trạng thái hiển thị Ẩn sang Hoạt động 
 * Mong muốn: Sau sửa khóa học không hiển thị trên Web
 */

function case10 () {
    test('Case 10: Pass_Ẩn sang Hoạt động', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10');
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
    await page.getByLabel('Giới thiệu khóa học\n*').fill('Case 10 _ Giới thiệu khóa học ');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 10 _ Mô tả chi tiết khóa học');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 10 _ Khóa học phù hợp với');
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('0');
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
    await page.getByRole('textbox', { name: 'Giá cước' }).fill('16000');
    await page.locator('#pod_period_2').click();
    await page.locator('#pod_period_2').selectOption('1');
    await page.getByRole('textbox', { name: 'Tên gói' }).click();
    await page.getByRole('textbox', { name: 'Tên gói' }).fill('QA_Gói cước_KHCombo_Phát triển bản thân_Case10');
    await page.getByLabel('Ưu tiên').click();
    await page.getByLabel('Ưu tiên').selectOption('1');
    await page.locator('#submit_add_pod_2').nth(0).click();
    await expect(page.getByText('Thêm gói cước thành công!')).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).first().click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau thêm 
    // Truy cập Web - Trang chủ - Tất cả => Không hiển thị  
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Không hiển thị  
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Không hiển thị  
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // ***Truy cập CMS sửa khóa học 
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa tên khóa học 
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10');
    // Sửa hoạt động sang ẩn
    await page.locator('#edit_status').click();
    await page.locator('#edit_status').selectOption('1')
    // Click btn Lưu - khóa học 
    await page.locator('button#submit_edit').click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau sửa
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > p.price').getByText('16.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_all div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > p.price').getByText('16.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('#tab_tre-em div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('16.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.author').getByText('1 khóa học', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('16.000 đ/ngày', { exact: true })).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > div > p.old-price').getByText('800.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web - Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Click Khóa học sau thêm 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).locator('span')).toBeVisible();
    await expect(page.getByText('16.000 đ/Ngày 800.000 đ').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Đăng kí học ngay' })).toBeVisible();
    await expect(page.getByText('Số khóa học: 1').nth(1)).toBeVisible();
    await expect(page.getByText('Thời lượng: 02 Giờ 25 Phút').nth(1)).toBeVisible();
    await expect(page.getByText('Lĩnh vực: IoT').nth(1)).toBeVisible();
    await expect(page.getByText('Tổng quan Case 10 _ Mô tả chi tiết khóa học Xem thêm Rút gọn')).toBeVisible();
    await expect(page.getByText('Danh sách Chế tạo Robot dò đường 66 Bài giảng 04 Giờ 03 Phút Phan Hoàng Anh 800.')).toBeVisible();
    await expect(page.getByText('Gói cước Gói Ngày Hot 16.000 đ/Ngày Đăng kí')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 10 _ Khóa học phù hợp với')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phan Hoàng Anh Phan Hoàng Anh Phan Hoàng Anh').first()).toBeVisible();
    // Truy cập CMS xóa khóa học
    await page.goto(dataSiteTest[0].linkSite + "/course-combo");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra sau xóa
    // Truy cập Web - Trang chủ - Tất cả => Hiển thị 
    await page.goto(dataSiteTest[1].linkSite);
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ - Trẻ em => Hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    // Truy cập Web - Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Sửa Ẩn sang Hoạt động_KHCombo_Phát triển bản thân_Case10' }).first()).not.toBeVisible();
    
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
    
}
main();


