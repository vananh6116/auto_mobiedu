// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công -> Click btn Xóa 
 * Mong muốn: Không hiển thị trong danh sách 
 */

function case1 () {
    test('Case 1: Pass - Click btn Xóa', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1');
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'Nguyễn Hữu Việt' }).click();
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
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('238000');
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
    await expect(page.getByRole('cell', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' })).toBeVisible();
    // Truy cập Web -> Trang chủ kiểm tra hiển thị trẻ em ->  không hiển thị tất cả - học sinh - sinh viên 
    // Truy cập Web - Trang chủ  -> Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Nguyễn Hữu Việt', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('238.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click link Trẻ em => Hiển thị
    await page.waitForTimeout(1000); 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Nguyễn Hữu Việt', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('238.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Học sinh => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Nguyễn Hữu Việt', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('238.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Nguyễn Hữu Việt', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('238.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web -> KHóa học kiểm tra hiển thị trẻ em - tất cả->  không hiển thị học sinh - sinh viên 
    // Truy cập Web -> trang Khóa học -> Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Nguyễn Hữu Việt', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('238.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Trẻ em => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/tre-em');
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Nguyễn Hữu Việt', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('238.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Học sinh => Không hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Nguyễn Hữu Việt', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('238.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Nguyễn Hữu Việt', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('238.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('386.000 đ', {exact : true}).first()).not.toBeVisible();
    // Click chi tiết khóa học sau khi thêm 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('link', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Nguyễn Hữu Việt$/ })).toBeVisible();
    await expect(page.getByText('238.000 đ').first()).toBeVisible();
    await expect(page.getByText('386.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 02 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực IoT')).toBeVisible();
    await expect(page.getByText('Tổng quan Case 1 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 1 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Nguyễn Hữu Việt')).toBeVisible();
    // Truy cập CMS xóa thành công khóa học
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' })
            .locator('i')
            .nth(2)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' })).not.toBeVisible();
    // Truy cập Web -> Trang chủ -> Học sinh => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Pass Xóa KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();

});
}

/**
 * Case 2: Không thành công -> Click btn Đóng
 * Mong muốn: Hiển thị trong danh sách 
 */

function case2 () {
    test('Case 2: Fail - Click btn Đóng', async ({ page }) => {
    
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
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2');
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'Hoàng Minh Thiện' }).click();
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
    await page.getByPlaceholder('Nhập giá gốc').fill('385000');
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('237000');
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
    await expect(page.getByRole('cell', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' })).toBeVisible();
    // Xóa không thành công do click btn Đóng 
    await page.waitForTimeout(3000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' })
            .locator('i')
            .nth(2)
            .click();
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('cell', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' })).toBeVisible();
    // Truy cập Web -> Trang chủ kiểm tra hiển thị trẻ em ->  không hiển thị tất cả - học sinh - sinh viên 
    // Truy cập Web - Trang chủ  -> Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Hoàng Minh Thiện', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('237.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('385.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click link Trẻ em => Hiển thị
    await page.waitForTimeout(1000); 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Hoàng Minh Thiện', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('237.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('385.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Học sinh => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Hoàng Minh Thiện', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('237.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('385.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Hoàng Minh Thiện', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('237.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('385.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web -> KHóa học kiểm tra hiển thị trẻ em - tất cả->  không hiển thị học sinh - sinh viên 
    // Truy cập Web -> trang Khóa học -> Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Hoàng Minh Thiện', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('237.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('385.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Trẻ em => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/tre-em');
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Hoàng Minh Thiện', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('237.000 đ', {exact : true}).first()).toBeVisible();
    await expect(page.getByText('385.000 đ', {exact : true}).first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Học sinh => Không hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Hoàng Minh Thiện', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('237.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('385.000 đ', {exact : true}).first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Hoàng Minh Thiện', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('237.000 đ', {exact : true}).first()).not.toBeVisible();
    await expect(page.getByText('385.000 đ', {exact : true}).first()).not.toBeVisible();
    // Click chi tiết khóa học sau khi thêm 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('link', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Hoàng Minh Thiện$/ })).toBeVisible();
    await expect(page.getByText('237.000 đ').first()).toBeVisible();
    await expect(page.getByText('385.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 02 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực IoT')).toBeVisible();
    await expect(page.getByText('Tổng quan Case 2 Thêm_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 2 Thêm_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Hoàng Minh Thiện')).toBeVisible();
    // Truy CMS xóa khóa học thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' })
            .locator('i')
            .nth(2)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ -> Học sinh => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_Fail Xóa KHL_TE_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible(); 

});
}

function main(){
    case1();
    case2();

}
main();