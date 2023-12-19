// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Thêm khóa học lẻ - Trẻ em 
 * Mong muốn: Trang chủ -> Hiển thị Trẻ em => Không hiển thị Tất cả - Học sinh - Sinh viên 
 * Khóa học -> Hiển thị Tất cả - Trẻ em => Không hiển thị Học sinh - Sinh viên
 * Lọc tìm kiếm thành công Trang chủ - Khóa học - Check box Chủ đề IoT
 */

function case1 () {
    test('Case 1: Pass - Trẻ em', async ({ page }) => {
    
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
    // Click btn Thêm khóa học mới 
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_KHL_TE_Thuyết trình và những bí mật_Case1');
    // Chọn giảng viên 
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'Vũ Ngọc Đăng' }).click();
    // Nhập thời lượng khóa học 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('024500');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục Trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Chọn thẻ gắn 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề IoT
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Chọn bán lẻ 
    await page.locator('#retail').click();
    await page.locator('#retail').selectOption('2');
    // Nhập giá gốc 
    await page.getByPlaceholder('Nhập giá gốc').click();
    await page.getByPlaceholder('Nhập giá gốc').fill('399000');
    // Nhập giá bán 
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('250000');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 1_Giới thiệu khóa học: Thuyết trình và những bí mật');
    // Nhập mô tả chi tiết khóa học 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1_Mô tả chi tiết khóa học : Thuyết trình và những bí mật');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 1_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên và người đi làm');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học Hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // Truy cập Web - Trang chủ  -> Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Vũ Ngọc Đăng').first()).not.toBeVisible();
    await expect(page.getByText('250.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('399.000 đ').first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click link Trẻ em => Hiển thị
    await page.waitForTimeout(1000); 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Vũ Ngọc Đăng').first()).toBeVisible();
    await expect(page.getByText('250.000 đ').first()).toBeVisible();
    await expect(page.getByText('399.000 đ').first()).toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Học sinh => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Vũ Ngọc Đăng').first()).not.toBeVisible();
    await expect(page.getByText('250.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('399.000 đ').first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Vũ Ngọc Đăng').first()).not.toBeVisible();
    await expect(page.getByText('250.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('399.000 đ').first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Vũ Ngọc Đăng').first()).toBeVisible();
    await expect(page.getByText('250.000 đ').first()).toBeVisible();
    await expect(page.getByText('399.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Trẻ em => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/tre-em');
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Vũ Ngọc Đăng').first()).toBeVisible();
    await expect(page.getByText('250.000 đ').first()).toBeVisible();
    await expect(page.getByText('399.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Học sinh => Không hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Vũ Ngọc Đăng').first()).not.toBeVisible();
    await expect(page.getByText('250.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('399.000 đ').first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    await expect(page.getByText('Vũ Ngọc Đăng').first()).not.toBeVisible();
    await expect(page.getByText('250.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('399.000 đ').first()).not.toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - trang chủ 
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_KHL_TE_Thuyết trình và những bí mật_Case1');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Vũ Ngọc Đăng').first()).toBeVisible();
    await expect(page.getByText('250.000 đ').first()).toBeVisible();
    await expect(page.getByText('399.000 đ').first()).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - khóa học
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_KHL_TE_Thuyết trình và những bí mật_Case1');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Vũ Ngọc Đăng').first()).toBeVisible();
    await expect(page.getByText('250.000 đ').first()).toBeVisible();
    await expect(page.getByText('399.000 đ').first()).toBeVisible();
    // Click check box lọc chủ đề IoT
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByText('IoT').click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).toBeVisible();
    await expect(page.getByText('Vũ Ngọc Đăng').first()).toBeVisible();
    await expect(page.getByText('250.000 đ').first()).toBeVisible();
    await expect(page.getByText('399.000 đ').first()).toBeVisible();
    // Click vào khóa học chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).click();
    await expect(page.locator('div').filter({ hasText: 'Trang chủ Khóa học QA_KHL_TE_Thuyết trình và những bí mật_Case1' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Vũ Ngọc Đăng$/ })).toBeVisible();
    await expect(page.getByText('250.000 đ').first()).toBeVisible();
    await expect(page.getByText('399.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 02 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực IoT')).toBeVisible();
    await expect(page.getByText('Tổng quan Case 1_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case 1_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Vũ Ngọc Đăng')).toBeVisible();
    // Click btn Đăng ký học 
    await page.getByRole('link', { name: 'Đăng kí học ngay' }).click();
    await expect(page.getByRole('heading', { name: 'Lựa chọn hình thức thanh toán' })).toBeVisible();
    await page.getByText('×').click();
    // Click btn Thêm giỏ hàng 
    await page.getByRole('link', { name: 'Thêm vào giỏ hàng' }).click();
    await page.keyboard.press('Enter');
    // Click Xóa khóa học ra khỏi giỏ hàng 
    await page.getByRole('link', { name: 'shopping_cart 1' }).click();
    await page.getByText('delete_outline Xóa').nth(1).click();
    await page.keyboard.press('Enter');
    await expect(page.getByText('Giỏ hàng (0 sản phẩm)')).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' })
            .locator('i')
            .nth(2)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ -> Trẻ em => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_TE_Thuyết trình và những bí mật_Case1' }).first()).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Thêm khóa học lẻ - Học sinh
 * Mong muốn: Trang chủ -> Hiển thị Học sinh => Không hiển thị Tất cả - Trẻ em - Sinh viên 
 * Khóa học -> Hiển thị Tất cả - Học sinh => Không hiển thị Trẻ em - Sinh viên
 * Lọc tìm kiếm thành công Trang chủ - Khóa học - Check box Chủ đề IoT
 */


function case2 () {
    test('Case 2: Pass - Học sinh', async ({ page }) => {
    
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
    // Click btn Thêm khóa học mới 
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_KHL_HS_Thuyết trình và những bí mật_Case2');
    // Chọn giảng viên 
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'Hannah Phạm' }).click();
    // Nhập thời lượng khóa học 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('024500');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục Học sinh
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    // Chọn thẻ gắn 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề IoT
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Chọn bán lẻ 
    await page.locator('#retail').click();
    await page.locator('#retail').selectOption('2');
    // Nhập giá gốc 
    await page.getByPlaceholder('Nhập giá gốc').click();
    await page.getByPlaceholder('Nhập giá gốc').fill('398000');
    // Nhập giá bán 
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('249000');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case2_Giới thiệu khóa học: Thuyết trình và những bí mật');
    // Nhập mô tả chi tiết khóa học 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case2_Mô tả chi tiết khóa học : Thuyết trình và những bí mật');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case2_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên và người đi làm');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học Hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // Truy cập Web - Trang chủ  -> Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Hannah Phạm').first()).not.toBeVisible();
    await expect(page.getByText('249.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('398.000 đ').first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click link Trẻ em => Không hiển thị
    await page.waitForTimeout(1000); 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Hannah Phạm').first()).not.toBeVisible();
    await expect(page.getByText('249.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('398.000 đ').first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Học sinh => Hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Hannah Phạm').first()).toBeVisible();
    await expect(page.getByText('249.000 đ').first()).toBeVisible();
    await expect(page.getByText('398.000 đ').first()).toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Hannah Phạm').first()).not.toBeVisible();
    await expect(page.getByText('249.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('398.000 đ').first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Hannah Phạm').first()).toBeVisible();
    await expect(page.getByText('249.000 đ').first()).toBeVisible();
    await expect(page.getByText('398.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Trẻ em => Không Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/tre-em');
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Hannah Phạm').first()).not.toBeVisible();
    await expect(page.getByText('249.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('398.000 đ').first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Học sinh => Hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Hannah Phạm').first()).toBeVisible();
    await expect(page.getByText('249.000 đ').first()).toBeVisible();
    await expect(page.getByText('398.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Sinh viên => Không hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    await expect(page.getByText('Hannah Phạm').first()).not.toBeVisible();
    await expect(page.getByText('249.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('398.000 đ').first()).not.toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - trang chủ 
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_KHL_HS_Thuyết trình và những bí mật_Case2');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Hannah Phạm').first()).toBeVisible();
    await expect(page.getByText('249.000 đ').first()).toBeVisible();
    await expect(page.getByText('398.000 đ').first()).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - khóa học
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_KHL_HS_Thuyết trình và những bí mật_Case2');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Hannah Phạm').first()).toBeVisible();
    await expect(page.getByText('249.000 đ').first()).toBeVisible();
    await expect(page.getByText('398.000 đ').first()).toBeVisible();
    // Click check box lọc chủ đề IoT
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByText('IoT').click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).toBeVisible();
    await expect(page.getByText('Hannah Phạm').first()).toBeVisible();
    await expect(page.getByText('249.000 đ').first()).toBeVisible();
    await expect(page.getByText('398.000 đ').first()).toBeVisible();
    // Click vào khóa học chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).click();
    await expect(page.locator('div').filter({ hasText: 'Trang chủ Khóa học QA_KHL_HS_Thuyết trình và những bí mật_Case2' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Hannah Phạm$/ })).toBeVisible();
    await expect(page.getByText('249.000 đ').first()).toBeVisible();
    await expect(page.getByText('398.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 02 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực IoT')).toBeVisible();
    await expect(page.getByText('Tổng quan Case2_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case2_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên ')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Hannah Phạm')).toBeVisible();
    // Click btn Đăng ký học 
    await page.getByRole('link', { name: 'Đăng kí học ngay' }).click();
    await expect(page.getByRole('heading', { name: 'Lựa chọn hình thức thanh toán' })).toBeVisible();
    await page.getByText('×').click();
    // Click btn Thêm giỏ hàng 
    await page.getByRole('link', { name: 'Thêm vào giỏ hàng' }).click();
    await page.keyboard.press('Enter');
    // Click Xóa khóa học ra khỏi giỏ hàng 
    await page.getByRole('link', { name: 'shopping_cart 1' }).click();
    await page.getByText('delete_outline Xóa').nth(1).click();
    await page.keyboard.press('Enter');
    await expect(page.getByText('Giỏ hàng (0 sản phẩm)')).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' })
            .locator('i')
            .nth(2)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ -> Học sinh => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học', exact: true }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_HS_Thuyết trình và những bí mật_Case2' }).first()).not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Thêm khóa học lẻ - Sinh viên
 * Mong muốn: Trang chủ -> Hiển thị Sinh viên => Không hiển thị Tất cả - Trẻ em - Học sinh
 * Khóa học -> Hiển thị Tất cả - Sinh viên => Không hiển thị Trẻ em - Học sinh
 * Lọc tìm kiếm thành công Trang chủ - Khóa học - Check box Chủ đề IoT
 */

function case3 () {
    test('Case 3: Pass - Sinh viên', async ({ page }) => {
    
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
    // Click btn Thêm khóa học mới 
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_KHL_SV_Thuyết trình và những bí mật_Case3');
    // Chọn giảng viên 
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'Anh Huy' }).click();
    // Nhập thời lượng khóa học 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('024500');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục Sinh viên
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Chọn thẻ gắn 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề IoT
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Chọn bán lẻ 
    await page.locator('#retail').click();
    await page.locator('#retail').selectOption('2');
    // Nhập giá gốc 
    await page.getByPlaceholder('Nhập giá gốc').click();
    await page.getByPlaceholder('Nhập giá gốc').fill('397000');
    // Nhập giá bán 
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('248000');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case3_Giới thiệu khóa học: Thuyết trình và những bí mật');
    // Nhập mô tả chi tiết khóa học 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case3_Mô tả chi tiết khóa học : Thuyết trình và những bí mật');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case3_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên và người đi làm');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học Hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // Truy cập Web - Trang chủ  -> Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('Anh Huy').first()).not.toBeVisible();
    await expect(page.getByText('248.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('397.000 đ').first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click link Trẻ em => Không hiển thị
    await page.waitForTimeout(1000); 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('Anh Huy').first()).not.toBeVisible();
    await expect(page.getByText('248.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('397.000 đ').first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Học sinh => Hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('Anh Huy').first()).not.toBeVisible();
    await expect(page.getByText('248.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('397.000 đ').first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Sinh viên => Hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Anh Huy').first()).toBeVisible();
    await expect(page.getByText('248.000 đ').first()).toBeVisible();
    await expect(page.getByText('397.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Anh Huy').first()).toBeVisible();
    await expect(page.getByText('248.000 đ').first()).toBeVisible();
    await expect(page.getByText('397.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Trẻ em => Không Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/tre-em');
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('Anh Huy').first()).not.toBeVisible();
    await expect(page.getByText('248.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('397.000 đ').first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Học sinh => Không hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    await expect(page.getByText('Anh Huy').first()).not.toBeVisible();
    await expect(page.getByText('248.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('397.000 đ').first()).not.toBeVisible();
    // Truy cập Web -> trang Khóa học -> Sinh viên => Hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Anh Huy').first()).toBeVisible();
    await expect(page.getByText('248.000 đ').first()).toBeVisible();
    await expect(page.getByText('397.000 đ').first()).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - trang chủ 
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_KHL_SV_Thuyết trình và những bí mật_Case3');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Anh Huy').first()).toBeVisible();
    await expect(page.getByText('248.000 đ').first()).toBeVisible();
    await expect(page.getByText('397.000 đ').first()).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - khóa học
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_KHL_SV_Thuyết trình và những bí mật_Case3');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Anh Huy').first()).toBeVisible();
    await expect(page.getByText('248.000 đ').first()).toBeVisible();
    await expect(page.getByText('397.000 đ').first()).toBeVisible();
    // Click check box lọc chủ đề IoT
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByText('IoT').click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).toBeVisible();
    await expect(page.getByText('Anh Huy').first()).toBeVisible();
    await expect(page.getByText('248.000 đ').first()).toBeVisible();
    await expect(page.getByText('397.000 đ').first()).toBeVisible();
    // Click vào khóa học chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).click();
    await expect(page.locator('div').filter({ hasText: 'Trang chủ Khóa học QA_KHL_SV_Thuyết trình và những bí mật_Case3' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Anh Huy$/ })).toBeVisible();
    await expect(page.getByText('248.000 đ').first()).toBeVisible();
    await expect(page.getByText('397.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 02 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực IoT')).toBeVisible();
    await expect(page.getByText('Tổng quan Case3_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case3_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên ')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Anh Huy')).toBeVisible();
    // Click btn Đăng ký học 
    await page.getByRole('link', { name: 'Đăng kí học ngay' }).click();
    await expect(page.getByRole('heading', { name: 'Lựa chọn hình thức thanh toán' })).toBeVisible();
    await page.getByText('×').click();
    // Click btn Thêm giỏ hàng 
    await page.getByRole('link', { name: 'Thêm vào giỏ hàng' }).click();
    await page.keyboard.press('Enter');
    // Click Xóa khóa học ra khỏi giỏ hàng 
    await page.getByRole('link', { name: 'shopping_cart 1' }).click();
    await page.getByText('delete_outline Xóa').nth(1).click();
    await page.keyboard.press('Enter');
    await expect(page.getByText('Giỏ hàng (0 sản phẩm)')).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' })
            .locator('i')
            .nth(2)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ -> Sinh viên => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_SV_Thuyết trình và những bí mật_Case3' }).first()).not.toBeVisible();

});
}

/**
 * Case 4: Thành công : Thêm khóa học lẻ - All Trẻ em - Học sinh - Sinh viên
 * Mong muốn: Trang chủ -> Hiển thị All Trẻ em - Học sinh - Sinh viên
 * Khóa học -> Hiển thị All Trẻ em - Học sinh - Sinh viên
 * Lọc tìm kiếm thành công Trang chủ - Khóa học - Check box Chủ đề IoT
 */

function case4 () {
    test('Case 4: Pass - All hiển thị', async ({ page }) => {
    
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
    // Click btn Thêm khóa học mới 
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_KHL_All_Thuyết trình và những bí mật_Case4');
    // Chọn giảng viên 
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'ThS. Đinh Thái Sơn' }).click();
    // Nhập thời lượng khóa học 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('024500');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục Sinh viên
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Chọn thẻ gắn 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề IoT
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Chọn bán lẻ 
    await page.locator('#retail').click();
    await page.locator('#retail').selectOption('2');
    // Nhập giá gốc 
    await page.getByPlaceholder('Nhập giá gốc').click();
    await page.getByPlaceholder('Nhập giá gốc').fill('396000');
    // Nhập giá bán 
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('247000');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case4_Giới thiệu khóa học: Thuyết trình và những bí mật');
    // Nhập mô tả chi tiết khóa học 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case4_Mô tả chi tiết khóa học : Thuyết trình và những bí mật');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case4_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên và người đi làm');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học Hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // Truy cập Web - Trang chủ  -> Tất cả => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    await expect(page.getByText('ThS. Đinh Thái Sơn').first()).not.toBeVisible();
    await expect(page.getByText('247.000 đ').first()).not.toBeVisible();
    await expect(page.getByText('399.000 đ').first()).not.toBeVisible();
    // Truy cập Web - Trang chủ  -> Click link Trẻ em => Hiển thị
    await page.waitForTimeout(1000); 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.getByText('ThS. Đinh Thái Sơn').first()).toBeVisible();
    await expect(page.getByText('247.000 đ').first()).toBeVisible();
    await expect(page.getByText('396.000 đ').first()).toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Học sinh => Hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.locator('#tab_hoc-sinh-pho-thong').getByText('ThS. Đinh Thái Sơn').first()).toBeVisible();
    await expect(page.locator('#tab_hoc-sinh-pho-thong').getByText('247.000 đ').first()).toBeVisible();
    await expect(page.locator('#tab_hoc-sinh-pho-thong').getByText('396.000 đ').first()).toBeVisible();
    // Truy cập Web - Trang chủ  -> Click Sinh viên => Hiển thị 
    await page.waitForTimeout(1000);
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.locator('#tab_sinh-vien-nguoi-di-lam').getByText('ThS. Đinh Thái Sơn').first()).toBeVisible();
    await expect(page.locator('#tab_sinh-vien-nguoi-di-lam').getByText('247.000 đ').first()).toBeVisible();
    await expect(page.locator('#tab_sinh-vien-nguoi-di-lam').getByText('396.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Tất cả => Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.getByText('ThS. Đinh Thái Sơn').first()).toBeVisible();
    await expect(page.getByText('247.000 đ').first()).toBeVisible();
    await expect(page.getByText('396.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Trẻ em =>  Hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/khoa-hoc/tre-em');
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.getByText('ThS. Đinh Thái Sơn').first()).toBeVisible();
    await expect(page.getByText('247.000 đ').first()).toBeVisible();
    await expect(page.getByText('396.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Học sinh => Hiển thị
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.getByText('ThS. Đinh Thái Sơn').first()).toBeVisible();
    await expect(page.getByText('247.000 đ').first()).toBeVisible();
    await expect(page.getByText('396.000 đ').first()).toBeVisible();
    // Truy cập Web -> trang Khóa học -> Sinh viên => Hiển thị 
    await page.waitForTimeout(1000);
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.getByText('ThS. Đinh Thái Sơn').first()).toBeVisible();
    await expect(page.getByText('247.000 đ').first()).toBeVisible();
    await expect(page.getByText('396.000 đ').first()).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - trang chủ 
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_KHL_All_Thuyết trình và những bí mật_Case4');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.getByText('ThS. Đinh Thái Sơn').first()).toBeVisible();
    await expect(page.getByText('247.000 đ').first()).toBeVisible();
    await expect(page.getByText('396.000 đ').first()).toBeVisible();
    // Nhập từ khóa lọc tìm kiếm - khóa học
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await page.getByPlaceholder('Nhập từ khóa...').click();
    await page.getByPlaceholder('Nhập từ khóa...').fill('QA_KHL_All_Thuyết trình và những bí mật_Case4');
    await page.getByRole('button', { name: 'search' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.getByText('ThS. Đinh Thái Sơn').first()).toBeVisible();
    await expect(page.getByText('247.000 đ').first()).toBeVisible();
    await expect(page.getByText('396.000 đ').first()).toBeVisible();
    // Click check box lọc chủ đề IoT
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByText('IoT').click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).toBeVisible();
    await expect(page.getByText('ThS. Đinh Thái Sơn').first()).toBeVisible();
    await expect(page.getByText('247.000 đ').first()).toBeVisible();
    await expect(page.getByText('396.000 đ').first()).toBeVisible();
    // Click vào khóa học chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).click();
    await expect(page.locator('div').filter({ hasText: 'Trang chủ Khóa học QA_KHL_All_Thuyết trình và những bí mật_Case4' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^ThS. Đinh Thái Sơn$/ })).toBeVisible();
    await expect(page.getByText('247.000 đ').first()).toBeVisible();
    await expect(page.getByText('396.000 đ').first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 02 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực IoT')).toBeVisible();
    await expect(page.getByText('Tổng quan Case4_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case4_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên ')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên ThS. Đinh Thái Sơn')).toBeVisible();
    // Click btn Đăng ký học 
    await page.getByRole('link', { name: 'Đăng kí học ngay' }).click();
    await expect(page.getByRole('heading', { name: 'Lựa chọn hình thức thanh toán' })).toBeVisible();
    await page.getByText('×').click();
    // Click btn Thêm giỏ hàng 
    await page.getByRole('link', { name: 'Thêm vào giỏ hàng' }).click();
    await page.keyboard.press('Enter');
    // Click Xóa khóa học ra khỏi giỏ hàng 
    await page.getByRole('link', { name: 'shopping_cart 1' }).click();
    await page.getByText('delete_outline Xóa').nth(1).click();
    await page.keyboard.press('Enter');
    await expect(page.getByText('Giỏ hàng (0 sản phẩm)')).toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' })
            .locator('i')
            .nth(2)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web -> Trang chủ -> Trẻ em => Không hiển thị 
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    // Truy cập Web -> Trang chủ -> Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    // Truy cập Web -> Trang chủ -> Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Tất cả => Không hiển thị 
    await page.getByRole('link', { name: 'Khóa học' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();
    // Truy cập Web -> Khóa học -> Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_All_Thuyết trình và những bí mật_Case4' }).first()).not.toBeVisible();

});
}

/**
 * Case 5: Thành công : Case khóa học miễn phí
 * Mong muốn: Hiển thị khoảng giá : miễn phí sau khi đăng nhập tài khoản thành viên 
 */

function case5 () {
    test('Case 5: Pass - KH Miễn phí', async ({ page }) => {
    
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
    // Click btn Thêm khóa học mới 
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5');
    // Chọn giảng viên 
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'Tạ Đức Hải' }).click();
    // Nhập thời lượng khóa học 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('024500');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục Sinh viên
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Chọn thẻ gắn 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề IoT
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Chọn bán lẻ 
    await page.locator('#retail').click();
    await page.locator('#retail').selectOption('2');
    // Nhập giá gốc 
    await page.getByPlaceholder('Nhập giá gốc').click();
    await page.getByPlaceholder('Nhập giá gốc').fill('0');
    // Nhập giá bán 
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('0');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case5_Giới thiệu khóa học: Thuyết trình và những bí mật');
    // Nhập mô tả chi tiết khóa học 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case5_Mô tả chi tiết khóa học : Thuyết trình và những bí mật');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case5_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên và người đi làm');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học Hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm mới thành công!')).toBeVisible();
    // ***Truy cập Web kiểm tra hiển thị sau khi đăng nhập 
    // Đăng nhập tài khoản thành viên
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/dang-nhap?redirect=/');
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
    await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
    await expect(page.locator('div.account > div > div > a')).toBeVisible();
    // Khóa học - Tất cả => Hiển thị 
    await page.getByRole('link', { name: 'Khóa học', exact: true }).click();
    await page.getByRole('main').getByRole('link', { name: 'Tất cả' }).click();
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).toBeVisible();
    await expect(page.locator('div#product-list-show div:nth-child(1) > div > div.caption > p.price').getByText('Miễn phí')).toBeVisible();
    // Khóa học - Trẻ em => Hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).toBeVisible();
    await expect(page.locator('div#product-list-show p.price').getByText('Miễn phí')).toBeVisible();
    // Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Trang chủ - Tất cả => Không hiển thị 
    await page.locator('a').first().click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Click xem khóa học chi tiết 
    await page.goto('https://mskill8.mobiedu.vn/khoa-hoc');
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).click();
    await expect(page.locator('section').filter({ hasText: 'Trang chủ Khóa học QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).locator('span')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Tạ Đức Hải$/ })).toBeVisible();
    await expect(page.getByText('0 đ', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('Số lượng bài học 0')).toBeVisible();
    await expect(page.getByText('Thời lượng 02 Giờ 45 Phút')).toBeVisible();
    await expect(page.getByText('Lĩnh vực IoT')).toBeVisible();
    await expect(page.getByText('Tổng quan Case5_Mô tả chi tiết khóa học : Thuyết trình và những bí mật')).toBeVisible();
    await expect(page.getByText('Khóa học phù hợp với Case5_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên ')).toBeVisible();
    await expect(page.getByText('Hồ sơ giảng viên Tạ Đức Hải')).toBeVisible();
    // Click btn Đăng ký học 
    await page.getByRole('link', { name: 'Đăng kí học ngay' }).click();
    await expect(page.getByRole('heading', { name: 'Lựa chọn hình thức thanh toán' })).toBeVisible();
    await page.getByText('×').click();
    // Click btn Thêm giỏ hàng 
    await page.getByRole('link', { name: 'Thêm vào giỏ hàng' }).click();
    await page.keyboard.press('Enter');
    // Click Xóa khóa học ra khỏi giỏ hàng 
    await page.getByRole('link', { name: 'shopping_cart 1' }).click();
    await page.getByText('delete_outline Xóa').nth(1).click();
    await page.keyboard.press('Enter');
    await expect(page.getByText('Giỏ hàng (0 sản phẩm)')).toBeVisible();
    await page.locator('div.account > div > div > a').click();
    await page.getByRole('link', { name: 'Đăng xuất' }).click();
    // Truy cập Web kiểm tra không hiển thị trước đăng nhập 
    // Trang chủ - Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/');
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Trang chủ - Trẻ em => Không hiển thị 
    await page.locator('#btn_tab_tre-em').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Trang chủ - Học sinh => Không hiển thị 
    await page.locator('#btn_tab_hoc-sinh-pho-thong').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Trang chủ - Sinh viên => Không hiển thị 
    await page.locator('#btn_tab_sinh-vien-nguoi-di-lam').click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Khóa học - Tất cả => Không hiển thị 
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Khóa học', exact: true }).click();
    await expect(page.getByText('Miễn phí')).not.toBeVisible();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Khóa học - Trẻ em => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Khóa học - Học sinh => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Khóa học - Sinh viên => Không hiển thị 
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Truy cập CMS xóa khóa học vừa thêm 
    await page.goto('https://mskill8admin.mobiedu.vn/course-mobiedu');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' })
            .locator('i')
            .nth(2)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra không hiển thị sau đăng nhập (sau xóa khóa học)
    await page.goto('https://mskill8.mobiedu.vn/');
    await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
    await expect(page).toHaveURL('https://mskill8.mobiedu.vn/dang-nhap?redirect=/');
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
    await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
    await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
    await expect(page.locator('div.account > div > div > a')).toBeVisible();
    // Khóa học - Tất cả => Không hiển thị
    await page.getByRole('link', { name: 'Khóa học', exact: true }).click();
    await page.getByRole('main').getByRole('link', { name: 'Tất cả' }).click();
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    // Khóa học - Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await page.getByText('Miễn Phí', { exact: true }).click();
    await page.getByRole('button', { name: 'Áp dụng' }).click();
    await expect(page.getByRole('link', { name: 'QA_KHL_Miễn phí_Thuyết trình và những bí mật_Case5' }).first()).not.toBeVisible();
    await expect(page.getByText('Tạ Đức Hải').first()).not.toBeVisible();
    

});
}

/**
 * Case 6: Không thành công : Để trống trường
 * Mong muốn: Hệ thống thông báo lỗi
 */

function case6 () {
    test('Case 6: Fail - Để trống trường', async ({ page }) => {
    
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
    // Click btn Thêm khóa học mới 
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).toBeVisible();
    // Để trống tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('');
    // Để trống giảng viên 
    await page.locator('#select2-teacher-container');
    await page.getByRole('treeitem', { name: 'Vũ Ngọc Đăng' });
    // Để trống nhà cung cấp nội dung 
    await page.locator('#select2-cp-container');
    await page.getByRole('treeitem', { name: 'iNETS' });
    // Để trống danh mục Sinh viên
    await page.getByRole('textbox', { name: 'Chọn danh mục...' });
    await page.getByRole('treeitem', { name: 'Trẻ em' });
    // Để trống thẻ gắn 
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' });
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' });
    // Để trống chủ đề IoT
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' });
    await page.getByRole('treeitem', { name: 'IoT' });
    // Để trống giá gốc 
    await page.getByPlaceholder('Nhập giá gốc').click();
    await page.getByPlaceholder('Nhập giá gốc').fill('');
    // Để trống giá bán 
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('');
    // Để trống giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('');
    // Để trống mô tả chi tiết khóa học 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('');
    // Để trống vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng nhập tên khóa học !')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn giảng viên !')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn nhà cung cấp nội dung !')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn danh mục!')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn hashtag !')).toBeVisible();
    await expect(page.getByText('Vui lòng chọn chủ đề !')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập giá gốc !')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập giá bán !')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập giới thiệu !')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập mô tả chi tiết !')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập vị trí hiển thị!')).toBeVisible();

});
}

/**
 * Case 7: Không thành công : Click btn Đóng
 * Mong muốn: Không hiển thị popup thêm khóa học
 */

function case7 () {
    test('Case 7: Fail - Click btn Đóng', async ({ page }) => {
    
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
    // Click btn Thêm khóa học mới 
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_KHL_Fail_Thuyết trình và những bí mật_Case7');
    // Chọn giảng viên 
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'Vũ Ngọc Đăng' }).click();
    // Nhập thời lượng khóa học 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('024500');
    // Chọn nhà cung cấp nội dung 
    await page.waitForTimeout(1000);
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục Trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Chọn thẻ gắn 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề IoT
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Chọn bán lẻ 
    await page.locator('#retail').click();
    await page.locator('#retail').selectOption('2');
    // Nhập giá gốc 
    await page.getByPlaceholder('Nhập giá gốc').click();
    await page.getByPlaceholder('Nhập giá gốc').fill('399000');
    // Nhập giá bán 
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('250000');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 7_Giới thiệu khóa học: Thuyết trình và những bí mật');
    // Nhập mô tả chi tiết khóa học 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 7_Mô tả chi tiết khóa học : Thuyết trình và những bí mật');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 7_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên và người đi làm');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trạng thái
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học Hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).not.toBeVisible();

});
} 

/**
 * Case 8: Không thành công : Nhập giá gốc - giá bán là số âm
 * Mong muốn: Hệ thống hiển thị thông báo lỗi
 */

function case8 () {
    test('Case 8: Fail - Nhập giá - vị trí < 0', async ({ page }) => {
    
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
    // Click btn Thêm khóa học mới 
    await page.getByRole('link', { name: 'Thêm khóa học mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm mới khóa học Mobiedu' })).toBeVisible();
    // Nhập tên khóa học 
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Tên khóa học *' }).fill('QA_KHL_Fail Giá_Thuyết trình và những bí mật_Case8');
    // Chọn giảng viên 
    await page.waitForTimeout(1000);
    await page.locator('#select2-teacher-container').click();
    await page.getByRole('treeitem', { name: 'Vũ Ngọc Đăng' }).click();
    // Nhập thời lượng khóa học 
    await page.locator('input#time').click();
    await page.locator('input#time').fill('024500');
    // Chọn nhà cung cấp nội dung 
    await page.locator('#select2-cp-container').click();
    await page.getByRole('treeitem', { name: 'iNETS' }).click();
    // Chọn danh mục Trẻ em 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn danh mục...' }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    // Chọn thẻ gắn 
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn thẻ tag...' }).click();
    await page.getByRole('treeitem', { name: 'Kỹ năng chung' }).click();
    // Chọn chủ đề IoT
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Chọn chủ đề...' }).click();
    await page.getByRole('treeitem', { name: 'IoT' }).click();
    // Chọn bán lẻ 
    await page.locator('#retail').click();
    await page.locator('#retail').selectOption('2');
    // Nhập giá gốc 
    await page.getByPlaceholder('Nhập giá gốc').click();
    await page.getByPlaceholder('Nhập giá gốc').fill('-399000');
    // Nhập giá bán 
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).click();
    await page.getByRole('spinbutton', { name: 'Giá bán (Miễn phí nhập 0) *' }).fill('-250000');
    // Nhập giới thiệu khóa học 
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).click();
    await page.getByRole('textbox', { name: 'Giới thiệu khóa học *' }).fill('Case 8_Giới thiệu khóa học: Thuyết trình và những bí mật');
    // Nhập mô tả chi tiết khóa học 
    await page.frameLocator('#description_ifr').getByRole('paragraph').click();
    await page.frameLocator('#description_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 8_Mô tả chi tiết khóa học : Thuyết trình và những bí mật');
    // Nhập phù hợp với 
    await page.frameLocator('#suitable_for_ifr').getByRole('paragraph').click();
    await page.frameLocator('#suitable_for_ifr').getByLabel('Rich Text Area. Press ALT-0 for help.').fill('Case 8_Khóa học phù hợp với : Trẻ em - Học sinh - Sinh viên và người đi làm');
    // Chọn ảnh trang bìa 
    await page.getByRole('button', { name: 'Upload / Chọn ảnh trang bìa +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn ảnh minh họa 
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Upload / Chọn ảnh minh hoạ +' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('-1');
    // Chọn trạng thái
    await page.locator('#status').click();
    await page.locator('#status').selectOption('1');
    // Chọn khóa học Hot 
    await page.locator('#hot').click();
    await page.locator('#hot').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Vui lòng nhập giá gốc lơn hơn hoặc bằng 0!')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập giá bán lơn hơn hoặc bằng 0!')).toBeVisible();
    await expect(page.getByText('Vui lòng nhập vị trí hiển thị lớn hơn hoặc bằng 0!')).toBeVisible();

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

}
main();