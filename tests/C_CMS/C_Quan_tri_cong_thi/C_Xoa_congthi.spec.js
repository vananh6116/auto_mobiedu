// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../dataSite.json';

/**
 * Case 1: Thành công : click btn Xóa 
 * Mong muốn: không hiển thị trong danh sách
 */

function case1 () {
    test('Case 1: Pass - click btn Xóa ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Cổng thi
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị cổng Thi' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/exam-gate");
    await expect(page.getByRole('heading', { name: 'Danh sách cổng thi' })).toBeVisible();
    // Thêm cổng thi
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Pass Xóa_Olympic Tiếng Anh_Case1");
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
    await expect(page.getByRole('cell', { name: 'QA_Pass Xóa_Olympic Tiếng Anh_Case1' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.getByText('QA_Pass Xóa_Olympic Tiếng Anh_Case1').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass Xóa_Olympic Tiếng Anh_Case1').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Pass Xóa_Olympic Tiếng Anh_Case1').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Pass Xóa_Olympic Tiếng Anh_Case1').nth(1)).not.toBeVisible();
    // Truy cập CMS xóa cổng thi thành công
    await page.goto(dataSiteTest[0].linkSite + "/exam-gate");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Pass Xóa_Olympic Tiếng Anh_Case1' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Pass Xóa_Olympic Tiếng Anh_Case1' })).not.toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Cổng thi -> Tất cả => Không hiển thị
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.getByText('QA_Pass Xóa_Olympic Tiếng Anh_Case1').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Pass Xóa_Olympic Tiếng Anh_Case1').nth(1)).not.toBeVisible();

});
}    

/**
 * Case 2: Không thành công - click btn Đóng
 * Mong muốn: hiển thị trong danh sách
 */

function case2 () {
    test('Case 2: Fail_click btn Đóng ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto(dataSiteTest[0].linkSite);
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Quản trị Cổng thi
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Quản trị cổng Thi' }).click();
    await expect(page).toHaveURL(dataSiteTest[0].linkSite + "/exam-gate");
    await expect(page.getByRole('heading', { name: 'Danh sách cổng thi' })).toBeVisible();
    // Thêm cổng thi
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Thêm công thi mới" }).click();
    await expect(page.getByRole('heading', { name: 'Thêm công thi mới' })).toBeVisible();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).click();
    await page.getByRole("textbox", { name: "Tiêu đề *" }).fill("QA_Fail Xóa_Olympic Tiếng Anh_Case2");
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
    await expect(page.getByRole('cell', { name: 'QA_Fail Xóa_Olympic Tiếng Anh_Case2' })).toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau thêm
    // Truy cập Web - Cổng thi -> Tất cả => Hiển thị
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.getByText('QA_Fail Xóa_Olympic Tiếng Anh_Case2').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Fail Xóa_Olympic Tiếng Anh_Case2').nth(1)).toBeVisible();
    // Truy cập Web - Cổng thi -> Học sinh => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
    await expect(page.getByText('QA_Fail Xóa_Olympic Tiếng Anh_Case2').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Sinh viên => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
    await expect(page.getByText('QA_Fail Xóa_Olympic Tiếng Anh_Case2').nth(1)).not.toBeVisible();
    // Truy cập CMS xóa cổng thi không thành công do click btn Đóng
    await page.goto(dataSiteTest[0].linkSite + "/exam-gate");
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Xóa_Olympic Tiếng Anh_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Đóng' }).click();
    await expect(page.getByText('Xóa thành công!')).not.toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Xóa_Olympic Tiếng Anh_Case2' })).toBeVisible();
    // Xóa cổng thi 
    await page.waitForTimeout(1000);
    await page
            .locator('tbody > tr')
            .filter({ hasText: 'QA_Fail Xóa_Olympic Tiếng Anh_Case2' })
            .locator('i')
            .nth(1)
            .click();
    await page.getByRole('button', { name: 'Xóa' }).click();
    await expect(page.getByText('Xóa thành công!')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'QA_Fail Xóa_Olympic Tiếng Anh_Case2' })).not.toBeVisible();
    // Truy cập Web kiểm tra hiển thị sau xóa
    // Truy cập Web - Cổng thi -> Tất cả => Không hiển thị
    await page.goto(dataSiteTest[1].linkSite + "/cong-thi");
    await expect(page.getByText('QA_Fail Xóa_Olympic Tiếng Anh_Case2').nth(1)).not.toBeVisible();
    // Truy cập Web - Cổng thi -> Trẻ em => Không hiển thị
    await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
    await expect(page.getByText('QA_Fail Xóa_Olympic Tiếng Anh_Case2').nth(1)).not.toBeVisible();

});
}

function main(){
    case1();
    case2();
    
}
main();