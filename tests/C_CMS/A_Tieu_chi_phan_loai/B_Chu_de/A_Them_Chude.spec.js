// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Case 1: Thành công : Thêm mới chủ đề -> Hiển thị Khóa học
 * Mong muốn: Hiển thị Khóa học -> Không hiển thị Khóa học của tôi - Giới thiệu 
 */

function case1 () {
    test('Case 1: Pass - Hiển thị Trang chủ ', async ({ page }) => {
    
          test.slow();
    // Đăng nhập CMS thành công 
    await page.goto('https://mskill8admin.mobiedu.vn/admlgi');
    await page.getByPlaceholder('Tên đăng nhập hoặc Email').fill('hiennt');
    await page.getByPlaceholder('Mật khẩu').fill('inet@2023')
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
    // Click Tiêu chí phân loại - Chủ đề
    await page.waitForTimeout(13000);
    await page.getByRole('link', { name: 'Tiêu chí phân loại' }).click();
    await page.getByRole('link', { name: 'Chủ đề' }).click();
    await expect(page).toHaveURL('https://mskill8admin.mobiedu.vn/course-topic');
    await expect(page.getByRole('heading', { name: 'Danh sách chủ đề' })).toBeVisible();
    // Click btn Thêm mới chủ đề 
    await page.getByRole('button', { name: 'Thêm chủ đề mới' }).click();
    await expect(page.getByRole('heading', { name: 'Thêm chủ đề mới' })).toBeVisible();
    // Nhập tên chủ đề 
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).click();
    await page.getByLabel('Tên chủ đề\n*', { exact: true }).fill('QA_CD_Pass_Kỹ năng sống_Case1');
    // Nhập vị trí hiển thị 
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).click();
    await page.getByRole('spinbutton', { name: 'Vị trí hiển thị *' }).fill('1');
    // Chọn trang hiển thị - Khóa học
    await page.getByRole('textbox', { name: 'Chọn trang hiển thị...' }).click();
    await page.getByRole('treeitem', { name: 'Hiện thị trang khóa học', exact: true }).click();
    // Chọn Trạng thái - Hoạt động
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Trạng thái\n*').selectOption('1');
    // Chọn Ưu tiên - Ưu tiên 
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').click();
    await page.getByRole('dialog', { name: 'Thêm chủ đề mới' }).getByLabel('Ưu tiên\n*').selectOption('1');
    // Click btn Lưu 
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Thêm thành công!')).toBeVisible();
    // Truy cập Web kiểm tra hiển thị - Khóa học
    await page.goto('')


});
}

function main(){
    case1();

}
main();



