// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../dataSite.json';

/**
 * Case 1: Click danh mục khóa học 
 * Mong muốn: Hiển thị đúng khóa học theo từng danh mục 
 */

function case1() {
    test('Case 1: click danh mục khóa học', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click Khóa học 
        await page.getByRole('link', { name: 'Khóa học' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' }).locator('div')).toBeVisible();
        // Click danh mục trẻ em
        await page.getByRole('main').getByRole('link', { name: 'Trẻ em' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc/tre-em");
        // Chụp ảnh màn hình danh mục trẻ em 
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'KH_Ảnh_trẻ_em_case1.png', fullPage: true });
        // Click danh mục học sinh phổ thông 
        await page.getByRole('main').getByRole('link', { name: 'Học sinh phổ thông' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc/hoc-sinh-pho-thong");
        // Chụp ảnh màn hình danh mục học sinh phổ thông 
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'KH_Ảnh_học_sinh_case1.png', fullPage: true });
        // Click danh mục sinh viên và người đi làm
        await page.getByRole('main').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc/sinh-vien-nguoi-di-lam");
        // Chụp ảnh màn hình danh mục sinh viên và người đi làm 
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'KH_Ảnh_sinh_viên_case1.png', fullPage: true });
        // Click danh mục tất cả 
        await page.getByRole('main').getByRole('link', { name: 'Tất cả' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        // Chụp ảnh màn hình danh mục tất cả 
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'KH_Ảnh_tất_cả_case1.png', fullPage: true });

    });
}

/**
 * Case 2: Hover khóa học click danh mục khóa học
 * Mong muốn: Hiển thị đúng khóa học theo từng danh mục 
 */

function case2() {
    test('Case 2: hover KH click danh mục', async ({ page }) => {
        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Hover khóa học, click danh mục tất cả 
        await page.getByRole('link', { name: 'Khóa học', exact: true }).hover();
        await page.waitForTimeout(1000);
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Tất cả' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' }).locator('div')).toBeVisible();
        // Hover khóa học, click danh mục trẻ em 
        await page.getByRole('link', { name: 'Khóa học' , exact: true}).hover();
        await page.waitForTimeout(1000);
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Trẻ em' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc/tre-em");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' }).locator('div')).toBeVisible();
        // Hover khóa học, click danh mục học sinh phổ thông 
<<<<<<< HEAD
        await page.getByRole('link', { name: 'Khóa học', exact: true }).hover();
=======
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Khóa học' }).hover();
>>>>>>> 9bf5f0e660aec939d264f42ae34fda6c64f17529
        await page.waitForTimeout(1000);
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Học sinh phổ thông' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc/hoc-sinh-pho-thong");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' }).locator('div')).toBeVisible();
        // Hover khóa học, click danh mục sinh viên và người đi làm
<<<<<<< HEAD
        await page.getByRole('link', { name: 'Khóa học', exact: true }).hover();
=======
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Khóa học' }).hover();
>>>>>>> 9bf5f0e660aec939d264f42ae34fda6c64f17529
        await page.waitForTimeout(1000);
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Sinh viên và người đi làm' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc/sinh-vien-nguoi-di-lam");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' }).locator('div')).toBeVisible();

    });
}

/**
 * Case 3: Lọc khóa học theo chủ đề tiền tiểu học
 * Mong muốn: Hiển thị đúng khóa học theo chủ đề
 */

function case3() {
    test('Case 3: lọc KH theo chủ đề', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);

        // Click Khóa học 
        await page.getByRole('link', { name: 'Khóa học' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' }).locator('div')).toBeVisible();
        // Click chọn chủ đề 
        await page.getByText('Tiền tiểu học').click();
        // Click btn Áp dụng 
        await page.getByRole('button', { name: 'Áp dụng' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc?subjects=72");
        await expect(page.getByText('Tiền tiểu học')).toBeChecked();
        // Chụp ảnh lọc chủ đề 
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'KH_Ảnh_lọc_chủ_đề_case3.png', fullPage: true });

    });
}

/**
 * Case 4: Click btn Xem thêm tất cả chủ đề
 * Mong muốn: Hiển thị tất cả chủ đề
 */

function case4() {
    test('Case 4: click btn Xem thêm nhiều chủ đề', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        await page.waitForTimeout(2000);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click Khóa học 
        await page.getByRole('link', { name: 'Khóa học' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' }).locator('div')).toBeVisible();
        // Click btn Xem thêm
        await page.getByRole('link', { name: 'Xem thêm ' }).click();
        await page.getByRole('link', { name: 'Xem thêm ' }).click();
        // Expect
        await expect(page.getByText('Tiền tiểu học')).toBeVisible();
        await expect(page.getByText('STEAM')).toBeVisible();
        await expect(page.getByText('IoT')).toBeVisible();
        await expect(page.getByText('Tin học - lập trình')).toBeVisible();
        await expect(page.getByText('Kĩ năng mềm')).toBeVisible();
        await expect(page.getByText('Kĩ năng văn phòng')).toBeVisible();
        await expect(page.getByText('Kinh doanh - Marketing')).toBeVisible();
        await expect(page.getByRole('main').getByText('Ngoại ngữ')).toBeVisible();
        await expect(page.getByText('Nghệ thuật')).toBeVisible();
        await expect(page.getByText('Sức khỏe - Đời sống')).toBeVisible();

    });
}

/**
 * Case 5: Lọc khóa học theo khoảng giá dưới 500.000
 * Mong muốn: Hiển thị khóa đúng khoảng giá dưới 500.000
 */

function case5() {
    test('Case 5: lọc KH theo khoảng giá', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click Khóa học 
        await page.getByRole('link', { name: 'Khóa học' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' }).locator('div')).toBeVisible();
        // Click chọn khoảng giá
        await page.waitForTimeout(1000);
        await page.getByText('Dưới 500.000đ').click();
        // Click btn Áp dụng 
<<<<<<< HEAD
        await page.waitForTimeout(1000);
        await page.getByRole('button', { name: 'Áp dụng' }).click(); 
=======
        await page.getByRole('button', { name: 'Áp dụng' }).click();
>>>>>>> 9bf5f0e660aec939d264f42ae34fda6c64f17529
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc?price_range=0_500000");
        await expect(page.getByText('Dưới 500.000đ')).toBeChecked();
        // Expect Hiển thị tất cả khoảng giá không có "Miễn phí"
        await page.goto(dataSiteTest[1].linkSite + "/khoa-hoc");
        await expect(page.getByText('Trên 2.000.000đ')).toBeVisible();
        await expect(page.getByText('Dưới 2.000.000đ')).toBeVisible();
        await expect(page.getByText('Dưới 1.000.000 đ')).toBeVisible();
        await expect(page.getByText('Dưới 500.000đ')).toBeVisible();
        await expect(page.getByText('Miễn Phí')).not.toBeVisible();
        // Chụp hình màn hình lọc khoảng giá
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'KH_Ảnh_lọc_khoảng_giá_case5.png', fullPage: true });
    });
}

/**
 * Case 6: Click chọn chủ đề - khoảng giá -> Click btn Xóa 
 * Mong muốn: Lọc khóa học theo chủ đề và khoảng giá không thành công 
 */

function case6() {
    test('Case 6: Click btn Xóa lọc chủ đề, khoảng giá', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click Khóa học 
        await page.getByRole('link', { name: 'Khóa học' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' }).locator('div')).toBeVisible();
        // Click chọn chủ đề 
        await page.getByText('Tiền tiểu học').click();
        // Click chọn khoảng giá
        await page.getByText('Dưới 500.000đ').click();
        // Click btn Xóa 
        await page.getByRole('link', { name: 'Xóa' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        await expect(page.getByText('Tiền tiểu học')).not.toBeChecked();
        await expect(page.getByText('Dưới 500.000đ')).not.toBeChecked();

    });
}

/**
 * Case 7: Click btn Hướng dẫn đăng kí khóa học
 * Mong muốn: Hiển thị 3 bước đơn giản đăng kí ngay khóa học trên mobiEdu: 
 */

function case7() {
    test('Case 7: Click btn Hướng dẫn đăng ký KH', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click Khóa học 
        await page.getByRole('link', { name: 'Khóa học' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' }).locator('div')).toBeVisible();
        // Click btn Hướng dẫn đăng ký khóa học
        await page.getByText('Hướng dẫn đăng kí khóa học').click();
        // Expect
        await page.waitForTimeout(3000);
        await expect(page.getByText('3 bước đơn giản đăng kí ngay khóa học trên mobiEdu:')).toBeVisible();
        await expect(page.getByText('Bước 1: Đăng nhập hoặc đăng kí vào website mobiedu.vn')).toBeVisible();
        await expect(page.getByText('Bước 2: Truy cập vào khóa học muốn đăng kí, chọn "Đăng kí học ngay"')).toBeVisible();
        await expect(page.getByText('Bước 3: Lựa chọn hình thức thanh toán và làm theo hướng dẫn')).toBeVisible();

    });
}

/**
 * Case 8: Click btn Giá thấp nhất - Giá cao nhất - Phổ biến - Click btn Xem thêm 
 * Mong muốn: Hiển thị đúng khóa học theo Giá thấp nhất - Giá cao nhất - Phổ biến
 */

function case8() {
    test('Case 8: Click btn Giá khóa học', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click Khóa học 
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Khóa học' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' }).locator('div')).toBeVisible();
        // Click btn Giá thấp nhất
        await page.getByRole('link', { name: 'Giá thấp nhất' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc?sort_type=price_asc");
        // Click btn Xem thêm 
        await page.getByRole('button', { name: 'Xem thêm' }).click();
        await page.getByRole('button', { name: 'Xem thêm' }).click();
        // Chụp ảnh màn hình Giá thấp nhất
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'KH_Ảnh_giá_thấp_nhất_case8.png', fullPage: true });
        // Click Giá cao nhất 
        await page.getByRole('link', { name: 'Giá cao nhất' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc?sort_type=price_desc");
        // Click btn Xem thêm 
        await page.getByRole('button', { name: 'Xem thêm' }).click();
        await page.getByRole('button', { name: 'Xem thêm' }).click();
        // Chụp ảnh màn hình giá cao nhất
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'KH_Ảnh_giá_cao_nhất_case8.png', fullPage: true });
        // Click Phổ biến 
        await page.getByRole('link', { name: 'Phổ biến' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc?sort_type=stt_asc");
        // Click btn Xem thêm 
        await page.getByRole('button', { name: 'Xem thêm' }).click();
        await page.getByRole('button', { name: 'Xem thêm' }).click();
        // Chụp ảnh màn hình phổ biến 
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'KH_Ảnh_phổ_biến_case8.png', fullPage: true });

    });
}

/**
 * Case 9: Click thông tin giảng viên 
 * Mong muốn: Hiển thị đúng đến trang giảng viên 
 */

function case9() {
    test('Case 9: Click link giảng viên', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click Khóa học 
        await page.getByRole('link', { name: 'Khóa học' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/khoa-hoc");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Khoá học' }).locator('div')).toBeVisible();
        // Click khóa học 
        await page.getByRole('link', { name: 'EduPro mSkill EDV' }).click();
        await expect(page.getByRole('heading', { name: 'EduPro mSkill EDV' })).toBeVisible();
        // Click link giảng viên 
        await page.getByRole('link', { name: 'Nguyễn Hiếu' }).first().click();
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giảng viên: Nguyễn Hiếu' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Nguyễn Hiếu', exact: true })).toBeVisible();
        await expect(page.getByText('Thông tin giảng viên Chuyên gia Yoga Nguyễn Hiếu đã có hơn 12 năm nghiên cứu và ').nth(1)).toBeVisible();
        await expect(page.getByText('Các khóa học của giảng viên Nguyễn Hiếu star 4.8 108 Tọa pháp Yoga - Bí mật trẻ ').nth(1)).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Học vấn, trình độ' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Nghề nghiệp, kinh nghiệm' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'favorite_border Kĩ năng nổi bật' })).toBeVisible();
        await expect(page.getByText('Video Giới thiệu giảng viên', { exact: true })).toBeVisible();
        // Chụp ảnh màn hình 
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'Ảnh_giảng_viên.png', fullPage: true });
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

}
main();
