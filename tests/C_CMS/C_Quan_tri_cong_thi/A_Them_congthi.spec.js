// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Cổng thi - Trẻ em 
 * Mong muốn: Hiển thị Tất cả - Trẻ em => Không hiển thị Học sinh - Sinh viên 
 */

function case1 () {
    test('Case 1: Pass - Trẻ em ', async ({ page }) => {
    
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
    // Click btn Thêm cổng thi mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass TE_Olympic Tiếng Anh_Case1");
    // Chọn danh mục 
    await page.getByRole("textbox", { name: "Chọn danh mục..." }).click();
    await page.getByRole("treeitem", { name: "Trẻ em" }).click();
    // Chọn lĩnh vực 
    await page.getByRole("textbox", { name: "Chọn lĩnh vực..." }).click();
    await page.getByRole("treeitem", { name: "Tiếng Anh" }).click();
    // Chọn vị trí hiển thị 
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).fill("1");
    // Chọn ảnh Trang Home
    await page.getByRole('button', { name: 'Hình ảnh trang Home' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn trang ảnh chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Hình ảnh trang Chi tiết' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn trạng thái Hoạt động 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("Trạng thái\n*")
            .selectOption("1"); 
    // Chọn Hot 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("HOT\n*")
            .selectOption("1");
    // Click Btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass TE_Olympic Tiếng Anh_Case1').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass TE_Olympic Tiếng Anh_Case1').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass TE_Olympic Tiếng Anh_Case1').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass TE_Olympic Tiếng Anh_Case1').nth(1)).not.toBeVisible();
    // Click checkbox lĩnh vực: Tiếng Anh 
    await page.getByRole('main').getByRole('link', { name: 'Tất cả' }).click();
    await page.locator('#desktop-field').getByText('Tiếng Anh').click();
    await expect(page.getByText('QA_Pass TE_Olympic Tiếng Anh_Case1').nth(1)).toBeVisible();
    // Truy cập CMS xóa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass TE_Olympic Tiếng Anh_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Cổng thi -> Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass TE_Olympic Tiếng Anh_Case1').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass TE_Olympic Tiếng Anh_Case1').nth(1)).not.toBeVisible();
    
});
}

/**
 * Case 2: Thành công : Cổng thi -  Học sinh
 * Mong muốn: Hiển thị Tất cả - Học sinh => Không hiển thị Trẻ em - Sinh viên 
 */

function case2 () {
    test('Case 2: Pass - Học sinh ', async ({ page }) => {
    
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
    // Click btn Thêm cổng thi mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass HS_Olympic Tiếng Anh_Case2");
    // Chọn danh mục 
    await page.getByRole("textbox", { name: "Chọn danh mục..." }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    // Chọn lĩnh vực 
    await page.getByRole("textbox", { name: "Chọn lĩnh vực..." }).click();
    await page.getByRole("treeitem", { name: "Tiếng Anh" }).click();
    // Chọn vị trí hiển thị 
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).fill("1");
    // Chọn ảnh Trang Home
    await page.getByRole('button', { name: 'Hình ảnh trang Home' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn trang ảnh chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Hình ảnh trang Chi tiết' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn trạng thái Hoạt động 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("Trạng thái\n*")
            .selectOption("1"); 
    // Chọn Hot 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("HOT\n*")
            .selectOption("1");
    // Click Btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass HS_Olympic Tiếng Anh_Case2').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass HS_Olympic Tiếng Anh_Case2').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass HS_Olympic Tiếng Anh_Case2').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass HS_Olympic Tiếng Anh_Case2').nth(1)).not.toBeVisible();
    // Click checkbox lĩnh vực: Tiếng Anh 
    await page.getByRole('main').getByRole('link', { name: 'Tất cả' }).click();
    await page.locator('#desktop-field').getByText('Tiếng Anh').click();
    await expect(page.getByText('QA_Pass HS_Olympic Tiếng Anh_Case2').nth(1)).toBeVisible();
    // Truy cập CMS xóa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass HS_Olympic Tiếng Anh_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Cổng thi -> Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass HS_Olympic Tiếng Anh_Case2').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass HS_Olympic Tiếng Anh_Case2').nth(1)).not.toBeVisible();
    
});
}

/**
 * Case 3: Thành công : Cổng thi -  Sinh viên 
 * Mong muốn: Hiển thị Tất cả - Sinh viên  => Không hiển thị Trẻ em - Học sinh
 */

function case3 () {
    test('Case 3: Pass - Sinh viên ', async ({ page }) => {
    
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
    // Click btn Thêm cổng thi mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass SV_Olympic Tiếng Anh_Case3");
    // Chọn danh mục 
    await page.getByRole("textbox", { name: "Chọn danh mục..." }).click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Chọn lĩnh vực 
    await page.getByRole("textbox", { name: "Chọn lĩnh vực..." }).click();
    await page.getByRole("treeitem", { name: "Tiếng Anh" }).click();
    // Chọn vị trí hiển thị 
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).fill("1");
    // Chọn ảnh Trang Home
    await page.getByRole('button', { name: 'Hình ảnh trang Home' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn trang ảnh chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Hình ảnh trang Chi tiết' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn trạng thái Hoạt động 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("Trạng thái\n*")
            .selectOption("1"); 
    // Chọn Hot 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("HOT\n*")
            .selectOption("1");
    // Click Btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass SV_Olympic Tiếng Anh_Case3').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass SV_Olympic Tiếng Anh_Case3').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass SV_Olympic Tiếng Anh_Case3').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass SV_Olympic Tiếng Anh_Case3').nth(1)).toBeVisible();
    // Click checkbox lĩnh vực: Tiếng Anh 
    await page.getByRole('main').getByRole('link', { name: 'Tất cả' }).click();
    await page.locator('#desktop-field').getByText('Tiếng Anh').click();
    await expect(page.getByText('QA_Pass SV_Olympic Tiếng Anh_Case3').nth(1)).toBeVisible();
    // Truy cập CMS xóa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass SV_Olympic Tiếng Anh_Case3' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Cổng thi -> Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass SV_Olympic Tiếng Anh_Case3').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass SV_Olympic Tiếng Anh_Case3').nth(1)).not.toBeVisible();
    
});
}

/**
 * Case 4: Thành công : Cổng thi - Trẻ em - Học sinh - Sinh viên 
 * Mong muốn: Hiển thị Tất cả - Sinh viên - Trẻ em - Học sinh
 */

function case4 () {
    test('Case 4: Pass - All ', async ({ page }) => {
    
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
    // Click btn Thêm cổng thi mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass All_Olympic Tiếng Anh_Case4");
    // Chọn danh mục 
    await page.getByRole("textbox", { name: "Chọn danh mục..." }).click();
    await page.getByRole('treeitem', { name: 'Trẻ em' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Học sinh phổ thông' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('listitem', { name: 'Trẻ em' }).click();
    await page.getByRole('treeitem', { name: 'Sinh viên và người đi làm' }).click();
    // Chọn lĩnh vực 
    await page.getByRole("textbox", { name: "Chọn lĩnh vực..." }).click();
    await page.getByRole("treeitem", { name: "Tiếng Anh" }).click();
    // Chọn vị trí hiển thị 
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).fill("1");
    // Chọn ảnh Trang Home
    await page.getByRole('button', { name: 'Hình ảnh trang Home' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn trang ảnh chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Hình ảnh trang Chi tiết' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn trạng thái Hoạt động 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("Trạng thái\n*")
            .selectOption("1"); 
    // Chọn Hot 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("HOT\n*")
            .selectOption("1");
    // Click Btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Thêm thành công!")).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass All_Olympic Tiếng Anh_Case4').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass All_Olympic Tiếng Anh_Case4').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass All_Olympic Tiếng Anh_Case4').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass All_Olympic Tiếng Anh_Case4').nth(1)).toBeVisible();
    // Click checkbox lĩnh vực: Tiếng Anh 
    await page.getByRole('main').getByRole('link', { name: 'Tất cả' }).click();
    await page.locator('#desktop-field').getByText('Tiếng Anh').click();
    await expect(page.getByText('QA_Pass All_Olympic Tiếng Anh_Case4').nth(1)).toBeVisible();
    // Truy cập CMS xóa cổng thi 
    await page.goto('https://mskill8admin.mobiedu.vn/exam-gate');
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass All_Olympic Tiếng Anh_Case4' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Cổng thi -> Tất cả => Không hiển thị
    await page.goto('https://mskill8.mobiedu.vn/cong-thi');
    await expect(page.getByText('QA_Pass All_Olympic Tiếng Anh_Case4').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass All_Olympic Tiếng Anh_Case4').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass All_Olympic Tiếng Anh_Case4').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass All_Olympic Tiếng Anh_Case4').nth(1)).not.toBeVisible();
    
});
}

/**
 * Case 5: Không thành công - Để trống trường
 * Mong muốn: Hiển thị thông báo lỗi 
 */

function case5 () {
    test('Case 5: Fail_Để trống trường ', async ({ page }) => {
    
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
    // Click btn Thêm cổng thi mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("");
    // Chọn danh mục 
    await page.getByRole("textbox", { name: "Chọn danh mục..." });
    await page.getByRole("treeitem", { name: "Trẻ em" });
    // Chọn lĩnh vực 
    await page.getByRole("textbox", { name: "Chọn lĩnh vực..." });
    await page.getByRole("treeitem", { name: "Tiếng Anh" });
    // Chọn vị trí hiển thị 
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).fill("");
    // Chọn trạng thái Hoạt động 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("Trạng thái\n*")
            .selectOption("1"); 
    // Chọn Hot 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("HOT\n*")
            .selectOption("1");
    // Click Btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Vui lòng nhập tiêu đề!")).toBeVisible();
    await expect(page.getByText("Vui lòng chọn danh mục!")).toBeVisible();
    await expect(page.getByText("Vui lòng chọn lĩnh vực!")).toBeVisible();
    await expect(page.getByText("Vui lòng nhập số thứ tự!")).toBeVisible();

});
}

/**
 * Case 6: Không thành công - Vị trí hiển thị là số âm
 * Mong muốn: Hiển thị thông báo lỗi 
 */

function case6 () {
    test('Case 6: Fail_Vị trí là số âm ', async ({ page }) => {
    
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
    // Click btn Thêm cổng thi mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass TE_Olympic Tiếng Anh_Case1");
    // Chọn danh mục 
    await page.getByRole("textbox", { name: "Chọn danh mục..." }).click();
    await page.getByRole("treeitem", { name: "Trẻ em" }).click();
    // Chọn lĩnh vực 
    await page.getByRole("textbox", { name: "Chọn lĩnh vực..." }).click();
    await page.getByRole("treeitem", { name: "Tiếng Anh" }).click();
    // Chọn vị trí hiển thị 
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).fill("-1");
    // Chọn trạng thái Hoạt động 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("Trạng thái\n*")
            .selectOption("1"); 
    // Chọn Hot 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("HOT\n*")
            .selectOption("1");
    // Click Btn Lưu 
    await page.getByRole("button", { name: "Lưu" }).click();
    await expect(page.getByText("Vui lòng nhập vị trí hiển thị lớn hơn hoặc bằng 0!")).toBeVisible();

});
}

/**
 * Case 7: Không thành công - click btn Đóng
 * Mong muốn: Không hiển thị trong danh sách cổng thi
 */

function case7 () {
    test('Case 7: Fail_click btn Đóng ', async ({ page }) => {
    
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
    // Click btn Thêm cổng thi mới 
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    // Nhập tiêu đề 
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Fail_Olympic Tiếng Anh_Case7");
    // Chọn danh mục 
    await page.getByRole("textbox", { name: "Chọn danh mục..." }).click();
    await page.getByRole("treeitem", { name: "Trẻ em" }).click();
    // Chọn lĩnh vực 
    await page.getByRole("textbox", { name: "Chọn lĩnh vực..." }).click();
    await page.getByRole("treeitem", { name: "Tiếng Anh" }).click();
    // Chọn vị trí hiển thị 
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).click();
    await page.getByRole("spinbutton", { name: "Vị trí hiển thị *" }).fill("1");
    // Chọn ảnh Trang Home
    await page.getByRole('button', { name: 'Hình ảnh trang Home' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn trang ảnh chi tiết 
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Hình ảnh trang Chi tiết' }).click();
    await page.locator(".figure-img.img-fluid.rounded[fid='1245']").click();
    await page.getByRole('button', { name: 'Xong' }).click();
    // Chọn trạng thái Hoạt động 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("Trạng thái\n*")
            .selectOption("1"); 
    // Chọn Hot 
    await page.getByRole("dialog", { name: "Thêm công thi mới" }).getByLabel("HOT\n*")
            .selectOption("1");
    // Click Btn Đóng
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText("Thêm thành công!")).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail_Olympic Tiếng Anh_Case7' })).not.toBeVisible();

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

}
main();
