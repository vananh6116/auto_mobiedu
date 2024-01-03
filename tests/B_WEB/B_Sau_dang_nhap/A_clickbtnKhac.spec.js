// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../dataSite.json';

/**
 * Case 1: Trang chủ - Khóa học tiêu biểu -> click link Của bạn -> click btn xem thêm 
 * Mong muốn: Sau đang nhập hiển thị thêm link khóa học Của bạn  
 */

function case1 () {
    test('Case 1: TC - click link Của bạn - Xem thêm ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        // Nhập số điện thoại - mật khẩu 
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
        await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
        // Click btn Đăng nhập thành công vào hệ thống
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.locator('div.account > div > div > a')).toBeVisible();
        await expect(page.getByText('bookmark_borderKhóa học tiêu biểu Của bạnTất cảTrẻ emHọc sinh phổ thôngSinh viên')).toBeVisible();
        // Click link Của bạn
        await page.getByRole('link', { name: 'Của bạn' }).click();
        await page.waitForTimeout(2000);
        await page.screenshot({path:'Sau_ĐN_Trang_chủ_case1.png',fullPage:true});
        // Click btn Xem thêm 
        await page.locator('#tab_your').getByRole('link', { name: 'Xem thêm' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/khoa-hoc-cua-toi");

    });
}

/**
 * Case 2: Hover link AVT tài khoản click Tài khoản của tôi -> Khóa học của tôi -> Khuyến mại của tôi -> Đăng xuất 
 * Mong muốn: Hiển thị đúng đến trang click 
 */

function case2 () {
    test('Case 2: TC - hover - click link AVT ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        // Nhập số điện thoại - mật khẩu 
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
        await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
        // Click btn Đăng nhập thành công vào hệ thống
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.locator('div.account > div > div > a')).toBeVisible();
        // Hover - click Tài khoản của tôi 
        await page.waitForTimeout(1000);
        await page.locator('div.account > div > div > a').hover();
        await page.getByRole('link', { name: 'Tài khoản của tôi' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/ho-so");
        // Hover - click Khóa học của tôi 
        await page.waitForTimeout(1000);
        await page.locator('div.account > div > div > a').hover();
        await page.getByRole('link', { name: 'Khóa học của tôi', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/khoa-hoc-cua-toi"); 
        // Hover - click Khuyến mại của tôi 
        await page.waitForTimeout(1000);
        await page.locator('div.account > div > div > a').hover();
        await page.getByRole('link', { name: 'Khuyến mại của tôi' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/uu-dai");
        // Hover - click Đăng xuất 
        await page.waitForTimeout(1000);
        await page.locator('div.account > div > div > a').hover();
        await page.getByRole('link', { name: 'Đăng xuất' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite);
        await expect(page.locator('div.account > div > div > a')).not.toBeVisible();

    });
}

/**
 * Case 3: Khóa học -> Khoảng giá -> Hiển thị Miễn phí
 * Mong muốn: Hiển thị khoảng giá miễn phí sau đăng nhập 
 */

function case3 () {
    test('Case 3: KH - khoảng giá  ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        // Nhập số điện thoại - mật khẩu 
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
        await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
        // Click btn Đăng nhập thành công vào hệ thống
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.locator('div.account > div > div > a')).toBeVisible();
        // Click Khóa học 
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Khóa học', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        // Mong muốn hiển thị khoảng giá miễn phí
        await expect(page.getByText('Miễn Phí')).toBeVisible();
        // Click khoảng giá miễn phí 
        await page.waitForTimeout(1000);
        await page.getByText('Miễn Phí', { exact: true }).click();
        await page.getByRole('button', { name: 'Áp dụng' }).click();
        await expect(page.getByText('Miễn Phí', { exact: true })).toBeChecked();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc?price_range=0_1");

    });
}       

/**
 * Case 4: Click btn trang Tài khoản của tôi - click link khác trong menu
 * Mong muốn: Hiển thị đúng đến trang click
 */

function case4 () {
    test('Case 4: KHCT-click link khác', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        // Nhập số điện thoại - mật khẩu 
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nhập số điện thoại').fill('0776518894');
        await page.getByPlaceholder('Nhập mật khẩu').fill('inet@123');
        // Click btn Đăng nhập thành công vào hệ thống
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.locator('div.account > div > div > a')).toBeVisible();
        // Hover - click Tài khoản của tôi
        await page.waitForTimeout(1000);
        await page.locator('div.account > div > div > a').hover();
        await page.getByRole('link', { name: 'Tài khoản của tôi', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/ho-so");
        // Click link Kích hoạt khóa học 
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Kích hoạt khóa học' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/kich-hoat-khoa-hoc");
        await expect(page.getByRole('heading', { name: 'Kích hoạt khóa học' })).toBeVisible();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'Ảnh_kích_hoạt_KH.png', fullPage: true });
        // Click link Khóa học của tôi 
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'bookmark_border Khóa học của tôi' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/khoa-hoc-cua-toi");
        await expect(page.getByRole('heading', { name: 'Khóa học của tôi' })).toBeVisible();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'Ảnh_KH_của_tôi.png', fullPage: true });
        // Click link chủ đề quan tâm 
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'star_border Chủ đề quan tâm' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/chu-de-quan-tam");
        await expect(page.getByRole('heading', { name: 'Chủ đề quan tâm' })).toBeVisible();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'Ảnh_chủ_đề_quan_tâm.png', fullPage: true });
        // Thêm chủ đề quan tâm 
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Thêm chủ đề' }).click();
        await page.locator('span').filter({ hasText: 'Tiền tiểu học' }).click();
        await page.getByRole('link', { name: 'Chọn hoàn tất' }).click();
        // Xóa chủ đề quan tâm 
        await page.goto(dataSiteTest[1].linkSite + "/tai-khoan/chu-de-quan-tam#");
        await page.locator('main#profile_user div:nth-child(1) > div > div.topic-caption').hover();
        await page.waitForTimeout(2000);
        await page.getByRole('link', { name: 'delete_outline Xoá' }).first().click();
        await page.getByRole('link', { name: 'Xoá chủ đề' }).click();
        // Click link Khóa học đã xem 
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'visibility Khóa học đã xem' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/khoa-hoc-da-xem");
        await expect(page.getByRole('heading', { name: 'Khóa học đã xem' })).toBeVisible();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'Ảnh_KH_đã_xem.png', fullPage: true });
        // Click link Ưu đãi 
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'favorite_border Ưu đãi' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/uu-dai");
        await expect(page.getByRole('heading', { name: 'Ưu đãi' })).toBeVisible();
        await page.locator('#profile_user').getByRole('link', { name: 'Tất cả' }).click();
        await page.locator('#profile_user').getByRole('link', { name: 'Khóa học', exact: true }).click();
        await page.locator('#profile_user').getByRole('link', { name: 'Cổng thi' }).click();
        await page.getByRole('link', { name: 'mobiFone', exact: true }).click();
        await page.getByRole('link', { name: 'Khác' }).click();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'Ảnh_ưu_đãi.png', fullPage: true });
        // Click link Thông báo 
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'notifications Thông báo' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/thong-bao");
        await expect(page.getByRole('heading', { name: 'Thông báo' })).toBeVisible();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'Ảnh_thông_báo.png', fullPage: true });
        // Click thông báo chi tiết 
        await page.waitForTimeout(2000);
        await page.locator('main#profile_user tr:nth-child(1) > td:nth-child(1) > a').click();
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Thông báo chi tiết' })).toBeVisible();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'Ảnh_thông_báo_chi_tiết.png', fullPage: true });
        // Click link Đơn hàng 
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'add_shopping_cart Đơn hàng' }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/don-hang");
        await expect(page.getByRole('heading', { name: 'Đơn hàng của tôi' })).toBeVisible();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'Ảnh_đơn_hàng.png', fullPage: true });

    });
}        

/**
 * Case 5: Click Giỏ hàng - Không có khóa học 
 * Mong muốn: Hiển thị giỏ hàng 0 sản phẩm 
 */

function case5 () {
    test('Case 5: click giỏ hàng_trống ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        // Nhập số điện thoại - mật khẩu 
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nhập số điện thoại').fill('0776518894');
        await page.getByPlaceholder('Nhập mật khẩu').fill('inet@123');
        // Click btn Đăng nhập thành công vào hệ thống
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.locator('div.account > div > div > a')).toBeVisible();
        // Click icon giỏ hàng 
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'shopping_cart 0' }).click();
        await expect(page.getByText('Giỏ hàng (0 sản phẩm)')).toBeVisible();
        await expect(page.getByText('Hiện tại giỏ hàng của bạn chưa có sản phẩm nào.')).toBeVisible();
        await expect(page.getByText('Vui lòng lựa chọn Khóa học mà bạn muốn đăng kí!')).toBeVisible();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'Ảnh_GH_trống.png', fullPage: true });
        
    });
} 

/**
 * Case 6: Click Giỏ hàng - Có khóa học 
 * Mong muốn: Hiển thị giỏ hàng 0 sản phẩm 
 */

function case6 () {
    test('Case 6: click giỏ hàng_có khóa học ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        // Nhập số điện thoại - mật khẩu 
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nhập số điện thoại').fill('0776518894');
        await page.getByPlaceholder('Nhập mật khẩu').fill('inet@123');
        // Click btn Đăng nhập thành công vào hệ thống
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.locator('div.account > div > div > a')).toBeVisible();
        // Thêm khóa học vào giỏ hàng 
        await page.locator('#btn_tab_tre-em').click();
        await page.getByRole('link', { name: 'Nhập môn cờ vua cho người mới bắt đầu' }).click();
        await page.getByRole('link', { name: 'Thêm vào giỏ hàng' }).click();
        await page.keyboard.press('Enter');
        // Click icon giỏ hàng 
        await page.getByRole('link', { name: 'shopping_cart 1' }).click();
        await expect(page.getByText('star 4 Nhập môn cờ vua cho người mới bắt đầu 600.000 đ delete_outline Xóa 600.00')).toBeVisible();
        await expect(page.getByText('Áp dụng TIẾP TỤC THANH TOÁN')).toBeVisible();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'Ảnh_GH_có KH.png', fullPage: true });
        // Xóa khóa học ra khỏi giỏ hàng 
        await page.waitForTimeout(1000);
        await page.getByText('delete_outline Xóa').nth(1).click();
        await page.keyboard.press('Enter');
        await expect(page.getByText('Giỏ hàng (0 sản phẩm)')).toBeVisible();
        await expect(page.getByText('Hiện tại giỏ hàng của bạn chưa có sản phẩm nào.')).toBeVisible();
        await expect(page.getByText('Vui lòng lựa chọn Khóa học mà bạn muốn đăng kí!')).toBeVisible();

    });
} 

/**
 * Case 7: Click btn Vào học 
 * Mong muốn: vào trang khóa học thành công 
 */

function case7 () {
    test('Case 7: click btn Vào học ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        // Nhập số điện thoại - mật khẩu 
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
        await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
        // Click btn Đăng nhập thành công vào hệ thống
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.locator('div.account > div > div > a')).toBeVisible();
        // Click btn Vào học - trang chủ của bạn 
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Vào học' }).first().click();
        await expect(page.getByText('Nội dung học Phần 1: Nhập môn thiết kế Power Point Bài 0: Nhập môn thiết kế Powe')).toBeVisible();
        await expect(page.getByText('Tổng quan Bạn đã bao giờ dành thời gian, tâm huyết, hì hụi chuẩn bị một')).toBeVisible();
        // Click btn Vào học - trang khóa học của tôi 
        await page.waitForTimeout(1000);
        await page.locator('div.account > div > div > a').hover();
        await page.getByRole('link', { name: 'Khóa học của tôi' }).click();
        await page.getByRole('link', { name: 'Vào học' }).first().click();
        await expect(page.getByText('Nội dung học Phần 1: Nhập môn thiết kế Power Point Bài 0: Nhập môn thiết kế Powe')).toBeVisible();
        await expect(page.getByText('Tổng quan Bạn đã bao giờ dành thời gian, tâm huyết, hì hụi chuẩn bị một')).toBeVisible();
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'Ảnh_Vào_học.png', fullPage: true });

    });
} 

/**
 * Case 8: Click btn trang Tài khoản của tôi - thay đổi thông tin cá nhân
 * Mong muốn: Hiển thị đúng đến trang click
 */

function case8 () {
    test('Case 8: KHCT-thay đổi thông tin  ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Đăng nhập 
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        // Nhập số điện thoại - mật khẩu 
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
        await page.getByPlaceholder('Nhập mật khẩu').fill('123123');
        // Click btn Đăng nhập thành công vào hệ thống
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.locator('div.account > div > div > a')).toBeVisible();
        // Hover - click Tài khoản của tôi
        await page.waitForTimeout(1000);
        await page.locator('div.account > div > div > a').hover();
        await page.getByRole('link', { name: 'Tài khoản của tôi', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/ho-so");
        // Thay đổi thông tin cá nhân mới 30-12-2000 MK 456456
        await page.getByPlaceholder('Nguyễn Văn A').fill('Sửa tên_Vanh Vanh');
        await page.locator('select[name="day"]').click();
        await page.locator('select[name="day"]').selectOption('30');
        await page.locator('select[name="month"]').click();
        await page.locator('select[name="month"]').selectOption('12');
        await page.locator('select[name="year"]').click();
        await page.locator('select[name="year"]').selectOption('2000');
        await page.getByRole('button', { name: 'Lưu thay đổi' }).click();
        await expect(page.getByText('Thay đổi thông tin cá nhân thành công!')).toBeVisible();
        await page.getByRole('button', { name: 'Close' }).click();
        await page.getByRole('link', { name: 'Cập nhập' }).first().click();
        await page.getByPlaceholder('Nhập mật khẩu hiện tại').fill('123123');
        await page.getByPlaceholder('Nhập mật khẩu', { exact: true }).fill('456456');
        await page.getByPlaceholder('Nhập lại mật khẩu').fill('456456');
        await page.waitForTimeout(1000);
        await page.locator('#change_password').click();
        await expect(page.getByText('Đổi mật khẩu thành công!')).toBeVisible();
        await page.getByRole('button', { name: 'Close' }).click();
        // Đăng xuất - Đăng nhập lại kiểm tra thay đổi thông tin 
        await page.waitForTimeout(1000);
        await page.locator('div.account > div > div > a').hover();
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Đăng xuất' }).click();
        await page.getByRole('link', { name: 'Đăng nhập', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/dang-nhap?redirect=/");
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nhập số điện thoại').fill('0385519997');
        await page.getByPlaceholder('Nhập mật khẩu').fill('456456');
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.locator('div.account > div > div > a')).toBeVisible();
        await page.waitForTimeout(1000);
        await page.locator('div.account > div > div > a').hover();
        await page.getByRole('link', { name: 'Tài khoản của tôi', exact: true }).click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/tai-khoan/ho-so");
        // Đổi lại thông tin cũ 26-11-1999 MK 123123
        await page.waitForTimeout(2000);
        await page.getByPlaceholder('Nguyễn Văn A').fill('Vanh Vanh');
        await page.locator('select[name="day"]').click();
        await page.locator('select[name="day"]').selectOption('26');
        await page.locator('select[name="month"]').click();
        await page.locator('select[name="month"]').selectOption('11');
        await page.locator('select[name="year"]').click();
        await page.locator('select[name="year"]').selectOption('1999');
        await page.locator('button#change_personal_information').click();
        await expect(page.getByText('Thay đổi thông tin cá nhân thành công!')).toBeVisible();
        await page.getByRole('button', { name: 'Close' }).click();
        await page.getByRole('link', { name: 'Cập nhập' }).first().click();
        await page.getByPlaceholder('Nhập mật khẩu hiện tại').fill('456456');
        await page.getByPlaceholder('Nhập mật khẩu', { exact: true }).fill('123123');
        await page.getByPlaceholder('Nhập lại mật khẩu').fill('123123');
        await page.waitForTimeout(1000);
        await page.locator('#change_password').click();
        await expect(page.getByText('Đổi mật khẩu thành công!')).toBeVisible();

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
