// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Cổng thi - Sửa Trẻ em sang Học sinh  
 * Mong muốn: [Trước sửa] Hiển thị Tất cả - Trẻ em => Không hiển thị Học sinh - Sinh viên 
 * [Sau sửa] Hiển thị Tất cả - Học sinh => Không hiển thị Trẻ em - Sinh viên 
 */

function case1 () {
    test('Case 1: Pass - TE sang HS ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Cổng thi
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị cổng Thi' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/exam-gate');
    await expect(page.getByRole('heading', { name: 'Danh sách cổng thi' })).toBeVisible();
    // Thêm cổng thi
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass Thêm TE_Olympic Tiếng Anh_Case1");
    await page.getByRole("textbox", { name: "Chọn danh mục..." }).click();
    await page.getByRole("treeitem", { name: "Trẻ em" }).click();
    await page.getByRole("textbox", { name: "Chọn lĩnh vực..." }).click();
    await page.getByRole("treeitem", { name: "Tiếng Anh" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).fill("1");
    await page.getByRole('button', { name: 'Hình ảnh trang Home' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Hình ảnh trang Chi tiết' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("Trạng thái\n*")
            .selectOption("1"); 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("HOT\n*")
            .selectOption("1");
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case1').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case1').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case1').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case1').nth(1)).not.toBeVisible();
    // Truy cập CMS sửa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm TE_Olympic Tiếng Anh_Case1' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa Tiêu đề
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass Sửa HS_Olympic Tiếng Anh_Case1");
    // Sửa danh mục
    await page.getByTitle('Trẻ em').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText("Cập nhật thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Sửa HS_Olympic Tiếng Anh_Case1').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass Sửa HS_Olympic Tiếng Anh_Case1').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass Sửa HS_Olympic Tiếng Anh_Case1').nth(1)).toBeVisible();
    // Truy cập CMS xóa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa HS_Olympic Tiếng Anh_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Cổng thi -> Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Sửa HS_Olympic Tiếng Anh_Case1').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass Sửa HS_Olympic Tiếng Anh_Case1').nth(1)).not.toBeVisible();

});
}

/**
 * Case 2: Thành công : Cổng thi - Sửa Học sinh sang Sinh viên
 * Mong muốn: [Trước sửa] Hiển thị Tất cả - Học sinh => Không hiển thị Trẻ em - Sinh viên 
 * [Sau sửa] Hiển thị Tất cả - Sinh viên => Không hiển thị Trẻ em - Học sinh 
 */

function case2 () {
    test('Case 2: Pass - HS sang SV ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Cổng thi
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị cổng Thi' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/exam-gate');
    await expect(page.getByRole('heading', { name: 'Danh sách cổng thi' })).toBeVisible();
    // Thêm cổng thi mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass Thêm HS_Olympic Tiếng Anh_Case2");
    await page.getByRole("textbox", { name: "Chọn danh mục..." }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    await page.getByRole("textbox", { name: "Chọn lĩnh vực..." }).click();
    await page.getByRole("treeitem", { name: "Tiếng Anh" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).fill("1");
    await page.getByRole('button', { name: 'Hình ảnh trang Home' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Hình ảnh trang Chi tiết' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("Trạng thái\n*")
            .selectOption("1"); 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("HOT\n*")
            .selectOption("1");
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Thêm HS_Olympic Tiếng Anh_Case2').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass Thêm HS_Olympic Tiếng Anh_Case2').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass Thêm HS_Olympic Tiếng Anh_Case2').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass Thêm HS_Olympic Tiếng Anh_Case2').nth(1)).not.toBeVisible();
    // Truy cập CMS sửa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm HS_Olympic Tiếng Anh_Case2' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa Tiêu đề
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass Sửa SV_Olympic Tiếng Anh_Case2");
    // Sửa danh mục
    await page.getByTitle('Học sinh phổ thông').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText("Cập nhật thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Sửa SV_Olympic Tiếng Anh_Case2').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass Sửa SV_Olympic Tiếng Anh_Case2').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass Sửa SV_Olympic Tiếng Anh_Case2').nth(1)).toBeVisible();
    // Truy cập CMS xóa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa SV_Olympic Tiếng Anh_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Sửa SV_Olympic Tiếng Anh_Case2').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass Sửa SV_Olympic Tiếng Anh_Case2').nth(1)).not.toBeVisible();

});
}

/**
 * Case 3: Thành công : Cổng thi - Sửa Trẻ em sang Học sinh & Sinh viên  
 * Mong muốn: [Trước sửa] Hiển thị Tất cả - Trẻ em => Không hiển thị Học sinh - Sinh viên 
 * [Sau sửa] Hiển thị Tất cả - Học sinh - Trẻ em - Sinh viên 
 */

function case3 () {
    test('Case 3: Pass - TE sang HS&SV ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Cổng thi
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị cổng Thi' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/exam-gate');
    await expect(page.getByRole('heading', { name: 'Danh sách cổng thi' })).toBeVisible();
    // Thêm cổng thi mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass Thêm TE_Olympic Tiếng Anh_Case3");
    await page.getByRole("textbox", { name: "Chọn danh mục..." }).click();
    await page.getByRole("treeitem", { name: "Trẻ em" }).click();
    await page.getByRole("textbox", { name: "Chọn lĩnh vực..." }).click();
    await page.getByRole("treeitem", { name: "Tiếng Anh" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).fill("1");
    await page.getByRole('button', { name: 'Hình ảnh trang Home' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Hình ảnh trang Chi tiết' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("Trạng thái\n*")
            .selectOption("1"); 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("HOT\n*")
            .selectOption("1");
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case3').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case3').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case3').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case3').nth(1)).not.toBeVisible();
    // Truy cập CMS sửa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm TE_Olympic Tiếng Anh_Case3' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa Tiêu đề
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass Sửa All_Olympic Tiếng Anh_Case3");
    // Sửa danh mục
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText("Cập nhật thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Sửa All_Olympic Tiếng Anh_Case3').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass Sửa All_Olympic Tiếng Anh_Case3').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass Sửa All_Olympic Tiếng Anh_Case3').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass Sửa All_Olympic Tiếng Anh_Case3').nth(1)).toBeVisible();
    // Truy cập CMS xóa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa All_Olympic Tiếng Anh_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Cổng thi -> Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Sửa All_Olympic Tiếng Anh_Case3').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass Sửa All_Olympic Tiếng Anh_Case3').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass Sửa All_Olympic Tiếng Anh_Case3').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass Sửa All_Olympic Tiếng Anh_Case3').nth(1)).not.toBeVisible();

});
}

/**
 * Case 4: Thành công : Cổng thi - Sửa Hoạt động sang ẩn
 * Mong muốn:  [Sau sửa] Không hiển thị cổng thi trên web
 */

function case4 () {
    test('Case 4: Pass - Hoạt động sang Ẩn ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Cổng thi
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị cổng Thi' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/exam-gate');
    await expect(page.getByRole('heading', { name: 'Danh sách cổng thi' })).toBeVisible();
    // Thêm cổng thi mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass Thêm TE_Olympic Tiếng Anh_Case4");
    await page.getByRole("textbox", { name: "Chọn danh mục..." }).click();
    await page.getByRole("treeitem", { name: "Trẻ em" }).click();
    await page.getByRole("textbox", { name: "Chọn lĩnh vực..." }).click();
    await page.getByRole("treeitem", { name: "Tiếng Anh" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).fill("1");
    await page.getByRole('button', { name: 'Hình ảnh trang Home' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Hình ảnh trang Chi tiết' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("Trạng thái\n*")
            .selectOption("1"); 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("HOT\n*")
            .selectOption("1");
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case4').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case4').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case4').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case4').nth(1)).not.toBeVisible();
    // Truy cập CMS sửa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm TE_Olympic Tiếng Anh_Case4' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa Tiêu đề
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass Sửa hoạt động sang ẩn_Olympic Tiếng Anh_Case4");
    // Sửa hoạt động sang ẩn 
    await page.locator('select#edit_exam_gate_status').click();
    await page.locator('select#edit_exam_gate_status').selectOption('0');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText("Cập nhật thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa
    // Truy cập Web - Cổng thi -> Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Sửa hoạt động sang ẩn_Olympic Tiếng Anh_Case4').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass Sửa hoạt động sang ẩn_Olympic Tiếng Anh_Case4').nth(1)).not.toBeVisible();
    // Truy cập CMS xóa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa hoạt động sang ẩn_Olympic Tiếng Anh_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();

});
}

/**
 * Case 5: Thành công : Cổng thi - Sửa Ẩn sang Hoạt động 
 * Mong muốn:  [Sau sửa] Hiển thị cổng thi trên web
 */

function case5 () {
    test('Case 5: Pass - Ẩn sang hoạt động ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Cổng thi
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị cổng Thi' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/exam-gate');
    await expect(page.getByRole('heading', { name: 'Danh sách cổng thi' })).toBeVisible();
    // Thêm cổng thi mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass Thêm TE_Olympic Tiếng Anh_Case5");
    await page.getByRole("textbox", { name: "Chọn danh mục..." }).click();
    await page.getByRole("treeitem", { name: "Trẻ em" }).click();
    await page.getByRole("textbox", { name: "Chọn lĩnh vực..." }).click();
    await page.getByRole("treeitem", { name: "Tiếng Anh" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).fill("1");
    await page.getByRole('button', { name: 'Hình ảnh trang Home' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Hình ảnh trang Chi tiết' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("Trạng thái\n*")
            .selectOption("0"); 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("HOT\n*")
            .selectOption("1");
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case5').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case5').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case5').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass Thêm TE_Olympic Tiếng Anh_Case5').nth(1)).not.toBeVisible();
    // Truy cập CMS sửa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Thêm TE_Olympic Tiếng Anh_Case5' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa Tiêu đề
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass Sửa ẩn sang hoạt động_Olympic Tiếng Anh_Case5");
    // Sửa hoạt động sang ẩn 
    await page.locator('select#edit_exam_gate_status').click();
    await page.locator('select#edit_exam_gate_status').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText("Cập nhật thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau sửa
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Sửa ẩn sang hoạt động_Olympic Tiếng Anh_Case5').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass Sửa ẩn sang hoạt động_Olympic Tiếng Anh_Case5').nth(1)).toBeVisible();
    // Truy cập CMS xóa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Sửa ẩn sang hoạt động_Olympic Tiếng Anh_Case5' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Cổng thi -> Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass Sửa ẩn sang hoạt động_Olympic Tiếng Anh_Case5').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass Sửa ẩn sang hoạt động_Olympic Tiếng Anh_Case5').nth(1)).not.toBeVisible();

});
}

/**
 * Case 6: Không thành công - click btn Đóng 
 * Mong muốn: Thông tin hiển thị như ban đầu 
 */

function case6 () {
    test('Case 6: Fail_click btn Đóng ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Cổng thi
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị cổng Thi' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/exam-gate');
    await expect(page.getByRole('heading', { name: 'Danh sách cổng thi' })).toBeVisible();
    // Thêm cổng thi mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Fail Thêm TE_Olympic Tiếng Anh_Case6");
    await page.getByRole("textbox", { name: "Chọn danh mục..." }).click();
    await page.getByRole("treeitem", { name: "Trẻ em" }).click();
    await page.getByRole("textbox", { name: "Chọn lĩnh vực..." }).click();
    await page.getByRole("treeitem", { name: "Tiếng Anh" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).fill("1");
    await page.getByRole('button', { name: 'Hình ảnh trang Home' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Hình ảnh trang Chi tiết' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("Trạng thái\n*")
            .selectOption("1"); 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("HOT\n*")
            .selectOption("1");
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Thêm TE_Olympic Tiếng Anh_Case6' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Fail Thêm TE_Olympic Tiếng Anh_Case6').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Fail Thêm TE_Olympic Tiếng Anh_Case6').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Fail Thêm TE_Olympic Tiếng Anh_Case6').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Fail Thêm TE_Olympic Tiếng Anh_Case6').nth(1)).not.toBeVisible();
    // Truy cập CMS sửa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Thêm TE_Olympic Tiếng Anh_Case6' })
            .locator('i')
            .nth(0)
            .click();
    // Sửa Tiêu đề
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Fail click btn Đóng_Olympic Tiếng Anh_Case6");
    // Sửa danh mục
    await page.getByTitle('Trẻ em').getByText('×').click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    // Click btn Đóng 
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText("Cập nhật thành công!")).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Thêm TE_Olympic Tiếng Anh_Case6' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Fail Thêm TE_Olympic Tiếng Anh_Case6').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Fail Thêm TE_Olympic Tiếng Anh_Case6').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Fail Thêm TE_Olympic Tiếng Anh_Case6').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Fail Thêm TE_Olympic Tiếng Anh_Case6').nth(1)).not.toBeVisible();
    // Truy cập CMS xóa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Thêm TE_Olympic Tiếng Anh_Case6' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Cổng thi -> Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Fail Thêm TE_Olympic Tiếng Anh_Case6').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Fail Thêm TE_Olympic Tiếng Anh_Case6').nth(1)).not.toBeVisible();

});
}

function main(){
    case1();
    case2();
    case3();
    case4();
    case5();
    case6();
    

}
main();