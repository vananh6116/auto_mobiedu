// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Sửa khóa học - Danh mục trẻ em sang HS 
 * Mong muốn: 
 * [Trang chủ]Trước khi sửa - Hiển thị trẻ em => Không hiển thị tất cả - học sinh - sinh viên 
 * [Trang chủ]Sau khi sửa - Hiển thị học sinh => Không hiển thị tất cả - trẻ em - sinh viên 
 * [Khóa học]Trước khi sửa - Hiển thị tất cả - trẻ em => Không hiển thị học sinh - sinh viên 
 * [Khóa học]Sau khi sửa - Hiển thị tất cả - học sinh => Không hiển thị trẻ em - sinh viên 
 * Hiển thị đúng các trước thông tin sau khi sửa 
 */

function case1 () {
    test('Case 1: Pass - Sửa TE sang HS', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học lẻ', exact: true }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học Mobiedu' })).toBeVisible();
    // Thêm mới khóa học lẻ - Trẻ em 
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Thêm KHL_TE_Thuyết trình và những bí mật_Case1');
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'Dương Lệ Xuân' }).click();
    await page.locator('input#time').click();
    await page.locator('input#time').fill('024500');
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.locator('#retail').click();
    await page.locator('#retail').selectOption('2');
    await page.getByPlaceholder('Nhập giá gốc').click();
    await page.getByPlaceholder('Nhập giá gốc').fill('394000');
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('246000');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 1 Thêm_Giới thiệu khóa học: Thuyết trình và những bí mật');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên và người đi làm');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ kiểm tra hiển thị trẻ em ->  không hiển thị tất cả - học sinh - sinh viên 
    // Truy cập Web - Trang chủ  -> Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Dương Lệ Xuân').first()).not.toBeVisible();
    await expect(page.getByText('246.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('394.000 đ').first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click link Trẻ em => Hiển thị
    await page.waitForTimeout(1000); 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Dương Lệ Xuân').first()).toBeVisible();
    await expect(page.getByText('246.000 đ').first()).toBeVisible();
    await expect(page.getByText('394.000 đ').first()).toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Học sinh => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Dương Lệ Xuân').first()).not.toBeVisible();
    await expect(page.getByText('246.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('394.000 đ').first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Dương Lệ Xuân').first()).not.toBeVisible();
    await expect(page.getByText('246.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('394.000 đ').first()).not.toBeVisible();
    // Truy cập Web -> KHóa học kiểm tra hiển thị trẻ em - tất cả->  không hiển thị học sinh - sinh viên 
    // Truy cập Web -> trang Khóa học -> Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Dương Lệ Xuân').first()).toBeVisible();
    await expect(page.getByText('246.000 đ').first()).toBeVisible();
    await expect(page.getByText('394.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Trẻ em => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/tre-em');
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Dương Lệ Xuân').first()).toBeVisible();
    await expect(page.getByText('246.000 đ').first()).toBeVisible();
    await expect(page.getByText('394.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Học sinh => Không hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Dương Lệ Xuân').first()).not.toBeVisible();
    await expect(page.getByText('246.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('394.000 đ').first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Dương Lệ Xuân').first()).not.toBeVisible();
    await expect(page.getByText('246.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('394.000 đ').first()).not.toBeVisible();
    // Click chi tiết khóa học sau khi thêm 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('link', { name: 'QA_Thêm KHL_TE_Thuyết trình và những bí mật_Case1' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Thêm KHL_TE_Thuyết trình và những bí mật_Case1' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Thêm KHL_TE_Thuyết trình và những bí mật_Case1' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Dương Lệ Xuân$/ })).toBeVisible();
    await expect(page.getByText('246.000 đ').first()).toBeVisible();
    await expect(page.getByText('394.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 02 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực IoT')).toBeVisible();
    await expect(page.getByText('Tổng quan Case 1 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 1 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Dương Lệ Xuân')).toBeVisible();
    // Truy cập CMS sửa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm KHL_TE_Thuyết trình và những bí mật_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa khóa học Mobiedu' })).toBeVisible();
    // Sửa tên khóa học 
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1');
    // Sửa tên giảng viên 
    await page.getByRole('textbox', { name: 'Dương Lệ Xuân' }).click();
    await page.getByRole('treeitem', { name: 'Bùi Mai Phương' }).click();
    // Sửa thời lượng khóa học 
    await page.locator('input#edit_time').click();
    await page.locator('input#edit_time').fill('014500');
    // Sửa danh mục trẻ em sang học sinh 
    await page.getByTitle('Trẻ em').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    // Sửa chủ đề 
    await page.getByTitle('IoT').getByText('×').click();
    await page.getByRole('treeitem', { name: 'STEAM' }).click();
    // Sửa giá gốc 
    await page.getByPlaceholder('Nhập giá', { exact: true }).click();
    await page.getByPlaceholder('Nhập giá', { exact: true }).fill('393000');
    // Sửa giá bán 
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('245000');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ kiểm tra hiển thị học sinh ->  không hiển thị tất cả - trẻ em - sinh viên 
    // Truy cập Web - Trang chủ  -> Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Bùi Mai Phương').first()).not.toBeVisible();
    await expect(page.getByText('245.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('393.000 đ').first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click link Trẻ em => Không hiển thị
    await page.waitForTimeout(1000); 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Bùi Mai Phương').first()).not.toBeVisible();
    await expect(page.getByText('245.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('393.000 đ').first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Học sinh => Hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Bùi Mai Phương').first()).toBeVisible();
    await expect(page.getByText('245.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('393.000 đ').first()).toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Bùi Mai Phương').first()).not.toBeVisible();
    await expect(page.getByText('245.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('393.000 đ').first()).not.toBeVisible();
    // Truy cập Web -> KHóa học kiểm tra hiển thị tất cả - học sinh->  không hiển thị trẻ em - sinh viên 
    // Truy cập Web -> trang Khóa học -> Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Bùi Mai Phương').first()).toBeVisible();
    await expect(page.getByText('245.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('393.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Trẻ em => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/tre-em');
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Bùi Mai Phương').first()).not.toBeVisible();
    await expect(page.getByText('245.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('393.000 đ').first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Học sinh => Hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Bùi Mai Phương').first()).toBeVisible();
    await expect(page.getByText('245.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('393.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Bùi Mai Phương').first()).not.toBeVisible();
    await expect(page.getByText('245.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('393.000 đ').first()).not.toBeVisible();
    // Click chi tiết khóa học sau khi sửa
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('link', { name: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' }).click();
    await expect(page.locator('div').filter({ hasText: 'Trang chủ Khóa học QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Bùi Mai Phương$/ })).toBeVisible();
    await expect(page.getByText('245.000 đ').first()).toBeVisible();
    await expect(page.getByText('393.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 01 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực STEAM')).toBeVisible();
    await expect(page.getByText('Tổng quan Case 1 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 1 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Bùi Mai Phương')).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' })
            .locator('i')
            .nth(2)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ -> Học sinh => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_HS_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Sửa khóa học - Danh mục HS sang SV 
 * Mong muốn: 
 * [Trang chủ]Trước khi sửa - Hiển thị học sinh => Không hiển thị tất cả - trẻ em - sinh viên 
 * [Trang chủ]Sau khi sửa - Hiển thị sinh viên => Không hiển thị tất cả - trẻ em - học sinh
 * [Khóa học]Trước khi sửa - Hiển thị tất cả - học sinh => Không hiển thị trẻ em - sinh viên
 * [Khóa học]Sau khi sửa - Hiển thị tất cả - sinh viên => Không hiển thị trẻ em - học sinh
 * Hiển thị đúng các trước thông tin sau khi sửa 
 */

function case2 () {
    test('Case 2: Pass - Sửa HS sang SV', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học lẻ', exact: true }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học Mobiedu' })).toBeVisible();
    // Thêm mới khóa học lẻ - Trẻ em 
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Thêm KHL_HS_Thuyết trình và những bí mật_Case2');
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'Nguyễn Thế Phương' }).click();
    await page.locator('input#time').click();
    await page.locator('input#time').fill('024500');
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.locator('#retail').click();
    await page.locator('#retail').selectOption('2');
    await page.getByPlaceholder('Nhập giá gốc').click();
    await page.getByPlaceholder('Nhập giá gốc').fill('392000');
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('244000');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 2 Thêm_Giới thiệu khóa học: Thuyết trình và những bí mật');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 2 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 2 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên và người đi làm');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ kiểm tra hiển thị học sinh ->  không hiển thị tất cả - trẻ em - sinh viên 
    // Truy cập Web - Trang chủ  -> Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Nguyễn Thế Phương', { exact: true })).not.toBeVisible();
    await expect(page.getByText('244.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('392.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click link Trẻ em => Không hiển thị
    await page.waitForTimeout(1000); 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Nguyễn Thế Phương', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('244.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('392.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Học sinh => Hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Nguyễn Thế Phương', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('244.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('392.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Nguyễn Thế Phương', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('244.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('392.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web -> KHóa học kiểm tra hiển thị Tất cả - học sinh->  không hiển thị trẻ em - sinh viên 
    // Truy cập Web -> trang Khóa học -> Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Nguyễn Thế Phương', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('244.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('392.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Trẻ em => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/tre-em');
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Nguyễn Thế Phương', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('244.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('392.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Học sinh => Hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Nguyễn Thế Phương', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('244.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('392.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Nguyễn Thế Phương', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('244.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('392.000 đ', { exact: true }).first()).not.toBeVisible();
    // Click chi tiết khóa học sau khi thêm 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('link', { name: 'QA_Thêm KHL_HS_Thuyết trình và những bí mật_Case2' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Thêm KHL_HS_Thuyết trình và những bí mật_Case2' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Thêm KHL_HS_Thuyết trình và những bí mật_Case2' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Nguyễn Thế Phương$/ })).toBeVisible();
    await expect(page.getByText('244.000 đ').first()).toBeVisible();
    await expect(page.getByText('392.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 02 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực IoT')).toBeVisible();
    await expect(page.getByText('Tổng quan Case 2 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 2 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Nguyễn Thế Phương')).toBeVisible();
    // Truy cập CMS sửa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm KHL_HS_Thuyết trình và những bí mật_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa khóa học Mobiedu' })).toBeVisible();
    // Sửa tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2');
    // Sửa tên giảng viên 
    await page.getByRole('textbox', { name: 'Nguyễn Thế Phương' }).click();
    await page.getByRole('treeitem', { name: 'Hồ Thị Khuyến' }).click();
    // Sửa thời lượng khóa học 
    await page.locator('input#edit_time').click();
    await page.locator('input#edit_time').fill('014500');
    // Sửa danh mục học sinh sang sinh viên 
    await page.getByTitle('Học sinh phổ thông').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Sửa chủ đề 
    await page.getByTitle('IoT').getByText('×').click();
    await page.getByRole('treeitem', { name: 'STEAM' }).click();
    // Sửa giá gốc 
    await page.getByPlaceholder('Nhập giá', { exact: true }).click();
    await page.getByPlaceholder('Nhập giá', { exact: true }).fill('391000');
    // Sửa giá bán 
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('243000');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ kiểm tra hiển thị sinh viên ->  không hiển thị tất cả - trẻ em - học sinh
    // Truy cập Web - Trang chủ  -> Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' })).not.toBeVisible();
    await expect(page.getByText('Hồ Thị Khuyến', { exact: true })).not.toBeVisible();
    await expect(page.getByText('243.000 đ', { exact: true })).not.toBeVisible();
    await expect(page.getByText('391.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click link Trẻ em => Không hiển thị
    await page.waitForTimeout(1000); 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' })).not.toBeVisible();
    await expect(page.getByText('Hồ Thị Khuyến', { exact: true })).not.toBeVisible();
    await expect(page.getByText('243.000 đ', { exact: true })).not.toBeVisible();
    await expect(page.getByText('391.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Học sinh => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' })).not.toBeVisible();
    await expect(page.getByText('Hồ Thị Khuyến', { exact: true })).not.toBeVisible();
    await expect(page.getByText('243.000 đ', { exact: true })).not.toBeVisible();
    await expect(page.getByText('391.000 đ', { exact: true })).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Sinh viên => Hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' })).toBeVisible();
    await expect(page.getByText('Hồ Thị Khuyến', { exact: true })).toBeVisible();
    await expect(page.getByText('243.000 đ', { exact: true })).toBeVisible();
    await expect(page.getByText('391.000 đ', { exact: true })).toBeVisible();
    // Truy cập Web -> KHóa học kiểm tra hiển thị tất cả - sinh viên->  không hiển thị trẻ em - học sinh
    // Truy cập Web -> trang Khóa học -> Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Hồ Thị Khuyến', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('243.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('391.000 đ', { exact: true }).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Trẻ em => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/tre-em');
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Hồ Thị Khuyến', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('243.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('391.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Học sinh => Không hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Hồ Thị Khuyến', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('243.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('391.000 đ', { exact: true }).first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Sinh viên => Hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Hồ Thị Khuyến', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('243.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('391.000 đ', { exact: true }).first()).toBeVisible();
    // Click chi tiết khóa học sau khi sửa
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('link', { name: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' }).click();
    await expect(page.locator('div').filter({ hasText: 'Trang chủ Khóa học QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Hồ Thị Khuyến$/ })).toBeVisible();
    await expect(page.getByText('243.000 đ').first()).toBeVisible();
    await expect(page.getByText('391.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 01 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực STEAM')).toBeVisible();
    await expect(page.getByText('Tổng quan Case 2 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 2 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Hồ Thị Khuyến')).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' })
            .locator('i')
            .nth(2)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ -> Sinh viên => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_SV_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Sửa khóa học - Danh mục TE sang HS & SV 
 * Mong muốn: 
 * [Trang chủ]Trước khi sửa - Hiển thị trẻ em   => Không hiển thị tất cả - học sinh - sinh viên
 * [Trang chủ]Sau khi sửa - Hiển thị trẻ em - học sinh - sinh viên  => Không hiển thị tất cả 
 * [Khóa học]Trước khi sửa - Hiển thị tất cả - trẻ em => Không hiển thị học sinh - sinh viên 
 * [Khóa học]Sau khi sửa - Hiển thị tất cả - trẻ em - học sinh - sinh viên 
 * Hiển thị đúng các trước thông tin sau khi sửa 
 */

function case3 () {
    test('Case 3: Pass - Sửa TE sang HS & SV', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học lẻ', exact: true }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học Mobiedu' })).toBeVisible();
    // Thêm mới khóa học lẻ - Trẻ em 
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Thêm KHL_All_Thuyết trình và những bí mật_Case3');
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'Hoàng Đông Anh' }).click();
    await page.locator('input#time').click();
    await page.locator('input#time').fill('024500');
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.locator('#retail').click();
    await page.locator('#retail').selectOption('2');
    await page.getByPlaceholder('Nhập giá gốc').click();
    await page.getByPlaceholder('Nhập giá gốc').fill('390000');
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('242000');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 1 Thêm_Giới thiệu khóa học: Thuyết trình và những bí mật');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 3 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 3 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên và người đi làm');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ kiểm tra hiển thị trẻ em ->  không hiển thị tất cả - học sinh - sinh viên 
    // Truy cập Web - Trang chủ  -> Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_All_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('Hoàng Đông Anh').first()).not.toBeVisible();
    await expect(page.getByText('242.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('390.000 đ').first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click link Trẻ em => Hiển thị
    await page.waitForTimeout(1000); 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_All_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Hoàng Đông Anh', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('242.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('390.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Học sinh => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_All_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('Hoàng Đông Anh', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('242.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('390.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_All_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('Hoàng Đông Anh', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('242.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('390.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web -> KHóa học kiểm tra hiển thị trẻ em - tất cả->  không hiển thị học sinh - sinh viên 
    // Truy cập Web -> trang Khóa học -> Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_All_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Hoàng Đông Anh', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('242.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('390.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Trẻ em => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/tre-em');
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_All_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Hoàng Đông Anh', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('242.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('390.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Học sinh => Không hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_All_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('Hoàng Đông Anh', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('242.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('390.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Thêm KHL_All_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('Hoàng Đông Anh', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('242.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('390.000 đ', {exact : true}).first()).not.toBeVisible();
    // Click chi tiết khóa học sau khi thêm 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('link', { name: 'QA_Thêm KHL_All_Thuyết trình và những bí mật_Case3' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Thêm KHL_All_Thuyết trình và những bí mật_Case3' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Thêm KHL_All_Thuyết trình và những bí mật_Case3' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Hoàng Đông Anh$/ })).toBeVisible();
    await expect(page.getByText('242.000 đ').first()).toBeVisible();
    await expect(page.getByText('390.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 02 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực IoT')).toBeVisible();
    await expect(page.getByText('Tổng quan Case 3 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 3 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Hoàng Đông Anh')).toBeVisible();
    // Truy cập CMS sửa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Thêm KHL_All_Thuyết trình và những bí mật_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa khóa học Mobiedu' })).toBeVisible();
    // Sửa tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3');
    // Sửa tên giảng viên 
    await page.getByRole('textbox', { name: 'Hoàng Đông Anh' }).click();
    await page.getByRole('treeitem', { name: 'Nguyễn Thành Trung' }).click();
    // Sửa thời lượng khóa học 
    await page.locator('input#edit_time').click();
    await page.locator('input#edit_time').fill('014500');
    // Sửa danh mục trẻ em sang học sinh và sinh viên 
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Sửa chủ đề 
    await page.getByTitle('IoT').getByText('×').click();
    await page.getByRole('treeitem', { name: 'STEAM' }).click();
    // Sửa giá gốc 
    await page.getByPlaceholder('Nhập giá', { exact: true }).click();
    await page.getByPlaceholder('Nhập giá', { exact: true }).fill('389000');
    // Sửa giá bán 
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('241000');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ kiểm tra hiển thị - trẻ em - học sinh - sinh viên ->  không hiển thị tất cả 
    // Truy cập Web - Trang chủ  -> Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('Nguyễn Thành Trung', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('241.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('389.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click link Trẻ em => Hiển thị
    await page.waitForTimeout(1000); 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Nguyễn Thành Trung', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('241.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('389.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Học sinh => Hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.locator('#tab_hoc-sinh-pho-thong').getByText('Nguyễn Thành Trung', {exact : true}).first()).toBeVisible();
    await expect(page.locator('#tab_hoc-sinh-pho-thong').getByText('241.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.locator('#tab_hoc-sinh-pho-thong').getByText('389.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.locator('#tab_sinh-vien-nguoi-di-lam').getByText('Nguyễn Thành Trung', {exact : true}).first()).toBeVisible();
    await expect(page.locator('#tab_sinh-vien-nguoi-di-lam').getByText('241.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.locator('#tab_sinh-vien-nguoi-di-lam').getByText('389.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web -> KHóa học kiểm tra hiển thị tất cả - học sinh->  không hiển thị trẻ em - sinh viên 
    // Truy cập Web -> trang Khóa học -> Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Nguyễn Thành Trung', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('241.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('389.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Trẻ em => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/tre-em');
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Nguyễn Thành Trung', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('241.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('389.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Học sinh => Hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Nguyễn Thành Trung', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('241.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('389.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Nguyễn Thành Trung', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('241.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('389.000 đ', {exact : true}).first()).toBeVisible();
    // Click chi tiết khóa học sau khi sửa
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).click();
    await expect(page.locator('div').filter({ hasText: 'Trang chủ Khóa học QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Nguyễn Thành Trung$/ })).toBeVisible();
    await expect(page.getByText('241.000 đ').first()).toBeVisible();
    await expect(page.getByText('389.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 01 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực STEAM')).toBeVisible();
    await expect(page.getByText('Tổng quan Case 3 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 3 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Nguyễn Thành Trung')).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' })
            .locator('i')
            .nth(2)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ -> Trẻ em => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    // Truy cập Web -> Trang chủ -> Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    // Truy cập Web -> Trang chủ -> Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Sửa KHL_All_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();

});
}

/**
 * Case 4: Thành công : Sửa khóa học - Có phí sang miễn phí 
 * Mong muốn: 
 * Trước khi sửa: hiển thị khóa học khi không đăng nhập tài khoản thành viên
 * Sau khi sửa: hiển thị khóa học khi đăng nhập tài khoản thành viên 
 * Hiển thị đúng các trước thông tin sau khi sửa 
 */

function case4 () {
    test('Case 4: Pass - Sửa sang miễn phí', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học lẻ', exact: true }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học Mobiedu' })).toBeVisible();
    // Thêm mới khóa học lẻ - Trẻ em 
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4');
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'Lê Thị Thảo' }).click();
    await page.locator('input#time').click();
    await page.locator('input#time').fill('024500');
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.locator('#retail').click();
    await page.locator('#retail').selectOption('2');
    await page.getByPlaceholder('Nhập giá gốc').click();
    await page.getByPlaceholder('Nhập giá gốc').fill('388000');
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('240000');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 4 Thêm_Giới thiệu khóa học: Thuyết trình và những bí mật');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 4 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên và người đi làm');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // [Sau thêm KH] - Truy cập Web kiểm tra hiển thị trước đăng nhập 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    await expect(page.getByText('Lê Thị Thảo', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('240.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('388.000 đ', { exact: true }).first()).not.toBeVisible();
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.getByText('Lê Thị Thảo', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('240.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('388.000 đ', { exact: true }).first()).toBeVisible();
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    await expect(page.getByText('Lê Thị Thảo', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('240.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('388.000 đ', { exact: true }).first()).not.toBeVisible();
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    await expect(page.getByText('Lê Thị Thảo', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('240.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('388.000 đ', { exact: true }).first()).not.toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học', exact: true }).click();
    await expect(page.getByText('Miễn phí')).not.toBeVisible();
    await expect(page.getByRole('link', { name: 'QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.getByText('Lê Thị Thảo', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('240.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('388.000 đ', { exact: true }).first()).toBeVisible();
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.getByText('Lê Thị Thảo', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('240.000 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('388.000 đ', { exact: true }).first()).toBeVisible();
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    await expect(page.getByText('Lê Thị Thảo', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('240.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('388.000 đ', { exact: true }).first()).not.toBeVisible();
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    await expect(page.getByText('Lê Thị Thảo', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('240.000 đ', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('388.000 đ', { exact: true }).first()).not.toBeVisible();
    // Click chi tiết khóa học sau khi thêm 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('link', { name: 'QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Lê Thị Thảo$/ })).toBeVisible();
    await expect(page.getByText('240.000 đ').first()).toBeVisible();
    await expect(page.getByText('388.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 02 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực IoT')).toBeVisible();
    await expect(page.getByText('Tổng quan Case 4 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 4 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Lê Thị Thảo')).toBeVisible();
    // Truy cập Web sau đăng nhập kiểm tra không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/dang-nhap?redirect=/');
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
    await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
    await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
    await expect(page.locator('div.account > div > div > a')).toBeVisible();
    await page.getByRole('link', { name: 'Khóa học', exact: true }).click();
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    await expect(page.getByText('Lê Thị Thảo', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('388.000 đ', { exact: true }).first()).not.toBeVisible();
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    // Truy cập CMS sửa khóa học 
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Free Thêm KHL_TE_Thuyết trình và những bí mật_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa khóa học Mobiedu' })).toBeVisible();
    // Sửa tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Free Sửa KHL_TE_Thuyết trình và những bí mật_Case4');
    // Sửa tên giảng viên 
    await page.getByRole('textbox', { name: 'Lê Thị Thảo' }).click();
    await page.getByRole('treeitem', { name: 'Lê Đăng Khương' }).click();
    // Sửa thời lượng khóa học 
    await page.locator('input#edit_time').click();
    await page.locator('input#edit_time').fill('014500');
    // Sửa chủ đề 
    await page.getByTitle('IoT').getByText('×').click();
    await page.getByRole('treeitem', { name: 'STEAM' }).click();
    // Sửa giá gốc 
    await page.getByPlaceholder('Nhập giá', { exact: true }).click();
    await page.getByPlaceholder('Nhập giá', { exact: true }).fill('387000');
    // Sửa giá bán 
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('0');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị khóa học sau đăng nhập 
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/dang-nhap?redirect=/');
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
    await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
    await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
    await expect(page.locator('div.account > div > div > a')).toBeVisible();
    await page.getByRole('link', { name: 'Khóa học', exact: true }).click();
    await page.getByRole('main').getByRole('link', { name: 'Tất cả' })
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Free Sửa KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.getByText('Lê Đăng Khương', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('387.000 đ', { exact: true }).first()).toBeVisible();
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Free Sửa KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.getByText('Lê Đăng Khương', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('387.000 đ', { exact: true }).first()).toBeVisible();
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Free Sửa KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    await expect(page.getByText('Lê Đăng Khương', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('387.000 đ', { exact: true }).first()).not.toBeVisible();
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Free Sửa KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    await expect(page.getByText('Lê Đăng Khương', { exact: true }).first()).not.toBeVisible();
    await expect(page.getByText('387.000 đ', { exact: true }).first()).not.toBeVisible();  
    // Click Khóa học chi tiết 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('link', { name: 'QA_Free Sửa KHL_TE_Thuyết trình và những bí mật_Case4' }).first().click();
    await expect(page.locator('div').filter({ hasText: 'Trang chủ Khóa học QA_Free Sửa KHL_TE_Thuyết trình và những bí mật_Case4' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Free Sửa KHL_TE_Thuyết trình và những bí mật_Case4' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Lê Đăng Khương$/ })).toBeVisible();
    await expect(page.getByText('387.000 đ').first()).toBeVisible();
    await expect(page.getByText('Thời lượng 01 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực STEAM')).toBeVisible();
    await expect(page.getByText('Tổng quan Case 4 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 4 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Lê Đăng Khương')).toBeVisible();
    await page.locator('div.account > div > div > a').hover();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    // Truy CMS xóa khóa học vừa thêm 
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Free Sửa KHL_TE_Thuyết trình và những bí mật_Case4' })
            .locator('i')
            .nth(2)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị khóa học sau đăng nhập (sau xóa khóa học)
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/dang-nhap?redirect=/');
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
    await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
    await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
    await expect(page.locator('div.account > div > div > a')).toBeVisible();
    await page.getByRole('link', { name: 'Khóa học', exact: true }).click();
    await page.getByRole('main').getByRole('link', { name: 'Tất cả' })
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Free Sửa KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    await expect(page.getByText('Lê Đăng Khương', { exact: true })).not.toBeVisible();
    await expect(page.getByText('387.000 đ', { exact: true })).not.toBeVisible();
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_Free Sửa KHL_TE_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    await expect(page.getByText('Lê Đăng Khương', { exact: true })).not.toBeVisible();
    await expect(page.getByText('387.000 đ', { exact: true })).not.toBeVisible(); 

});
}

/**
 * Case 5: Không thành công : do click btn Đóng
 * Mong muốn: Các trường thông tin hiển thị giống lúc ban đầu 
 */

function case5 () {
    test('Case 5: Fail - Click btn Đóng', async ({ page }) => {
    
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
    await page.getByRole('link', { name: 'Khóa học lẻ', exact: true }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await expect(page.getByRole('heading', { name: 'Danh sách khóa học Mobiedu' })).toBeVisible();
    // Thêm mới khóa học lẻ - Trẻ em 
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5');
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'Phạm Sỹ Hùng' }).click();
    await page.locator('input#time').click();
    await page.locator('input#time').fill('024500');
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    await page.locator('#retail').click();
    await page.locator('#retail').selectOption('2');
    await page.getByPlaceholder('Nhập giá gốc').click();
    await page.getByPlaceholder('Nhập giá gốc').fill('386000');
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('239000');
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 5 Thêm_Giới thiệu khóa học: Thuyết trình và những bí mật');
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 5 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật');
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 5 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên và người đi làm');
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' })).toBeVisible();
    // Sửa khóa học không thành công do click btn Đóng
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' })
            .locator('i')
            .nth(1)
            .click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa khóa học Mobiedu' })).toBeVisible();
    // Sửa tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Fail Sửa KHL_TE_Thuyết trình và những bí mật_Case5');
    // Sửa tên giảng viên 
    await page.getByRole('textbox', { name: 'Phạm Sỹ Hùng' }).click();
    await page.getByRole('treeitem', { name: 'Tạ Đức Hải' }).click();
    // Sửa thời lượng khóa học 
    await page.locator('input#edit_time').click();
    await page.locator('input#edit_time').fill('014500');
    // Sửa danh mục trẻ em sang học sinh 
    await page.getByTitle('Trẻ em').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    // Sửa chủ đề 
    await page.getByTitle('IoT').getByText('×').click();
    await page.getByRole('treeitem', { name: 'STEAM' }).click();
    // Sửa giá gốc 
    await page.getByPlaceholder('Nhập giá', { exact: true }).click();
    await page.getByPlaceholder('Nhập giá', { exact: true }).fill('385000');
    // Sửa giá bán 
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('200000');
    // Click btn Đóng 
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('heading', { name: 'Chỉnh sửa khóa học Mobiedu' })).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' })).toBeVisible();
    // Truy cập Web -> Trang chủ kiểm tra hiển thị trẻ em ->  không hiển thị tất cả - học sinh - sinh viên 
    // Truy cập Web - Trang chủ  -> Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Phạm Sỹ Hùng', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('239.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click link Trẻ em => Hiển thị
    await page.waitForTimeout(1000); 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' }).first()).toBeVisible();
    await expect(page.getByText('Phạm Sỹ Hùng', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('239.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Học sinh => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Phạm Sỹ Hùng', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('239.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Phạm Sỹ Hùng', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('239.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web -> KHóa học kiểm tra hiển thị trẻ em - tất cả->  không hiển thị học sinh - sinh viên 
    // Truy cập Web -> trang Khóa học -> Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' }).first()).toBeVisible();
    await expect(page.getByText('Phạm Sỹ Hùng', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('239.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Trẻ em => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/tre-em');
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' }).first()).toBeVisible();
    await expect(page.getByText('Phạm Sỹ Hùng', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('239.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Học sinh => Không hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Phạm Sỹ Hùng', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('239.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Phạm Sỹ Hùng', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('239.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('386.000 đ').first()).not.toBeVisible();
    // Click chi tiết khóa học sau khi thêm 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('link', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' }).first().click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Phạm Sỹ Hùng$/ })).toBeVisible();
    await expect(page.getByText('239.000 đ').first()).toBeVisible();
    await expect(page.getByText('386.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 02 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực IoT')).toBeVisible();
    await expect(page.getByText('Tổng quan Case 5 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 5 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Phạm Sỹ Hùng')).toBeVisible();
    // Truy CMS xóa khóa học vừa thêm 
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' })
            .locator('i')
            .nth(2)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ -> Học sinh => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Thêm KHL_TE_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();


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