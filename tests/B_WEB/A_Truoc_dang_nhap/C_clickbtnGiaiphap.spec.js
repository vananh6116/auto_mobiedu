// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');
import dataSiteTest from '../../dataSite.json';

/**
 * Case 1: Click logo trường mầm non và tiểu học - mobiEdu SLL
 * Mong muốn: Hiển thị đúng trang giải pháp của trường mầm non và tiểu học - mobiEdu SLL
 */

function case1 () {
    test('Case 1: click logo trường mầm non, tiểu học - mobiEdu SLL', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Giải pháp 
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Giải pháp' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giải pháp' })).toBeVisible();
        // Click logo trường mầm non và tiểu học 
        await page.getByLabel('1 / 4').getByRole('link').click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-mam-non-tieu-hoc");
        // Click logo mobiEdu SLL
        await page.locator("img[src='https://cdn.mobiedu.vn/mskill/uploads/solution/April282022553pm_mobiedu-sll_icon.png']").click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-mam-non-tieu-hoc/mobiedu-sll");

});
}

/**
 * Case 2: Click logo trường mầm non và tiểu học
 * - Click logo mobiEdu SLL -> Click banner gắn link đến trang mobiEdu SLL
 * Mong muốn: Hiển thị đúng đến link mobiEdu SLL
 */

function case2 () {
    test('Case 2: click gắn link mobiEdu SLL', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Giải pháp 
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Giải pháp' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giải pháp' })).toBeVisible();
        // Click logo trường mầm non và tiểu học 
        await page.getByLabel('1 / 4').getByRole('link').click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-mam-non-tieu-hoc");
        // Click logo mobiEdu SLL
        await page.locator("img[src='https://cdn.mobiedu.vn/mskill/uploads/solution/April282022553pm_mobiedu-sll_icon.png']").click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-mam-non-tieu-hoc/mobiedu-sll");
        // Click banner gắn link 1 đến trang mobiEdu SLL
        await page.locator('div.desktop-show > div > div.image.img-scale > a > img').click();
        // Expect 
        await page.goto('https://sll.mobiedu.vn/?_gl=1*la0ry6*_ga*MTAzNjQ3ODg3MS4xNzAxMjMzMzU5*_ga_ZZM9L108RW*MTcwMTIzMzM1OC4xLjEuMTcwMTIzMzY5MS4wLjAuMA..');
        await expect(page.getByRole('navigation').getByRole('link', { name: 'mobiEdu | Phần mềm quản lý và kết nối nhà trường' })).toBeVisible();
        await expect(page).toHaveTitle(/Phần mềm quản lý và kết nối nhà trường mobiEdu/);
        // Click banner gắn link 2 đến trang mobiEdu SLL
        await page.goto(dataSiteTest[1].linkSite + "/giai-phap");
        await page.getByLabel('1 / 4').getByRole('link').click();
        await page.locator('section.solution-7.animate > div > div.desktop-show > div > div.image > a > img').click();
        // Expect 
        await page.goto('https://sll.mobiedu.vn/?_gl=1*la0ry6*_ga*MTAzNjQ3ODg3MS4xNzAxMjMzMzU5*_ga_ZZM9L108RW*MTcwMTIzMzM1OC4xLjEuMTcwMTIzMzY5MS4wLjAuMA..');
        await expect(page).toHaveURL('https://sll.mobiedu.vn/?_gl=1*la0ry6*_ga*MTAzNjQ3ODg3MS4xNzAxMjMzMzU5*_ga_ZZM9L108RW*MTcwMTIzMzM1OC4xLjEuMTcwMTIzMzY5MS4wLjAuMA..');
        await expect(page).toHaveTitle(/Phần mềm quản lý và kết nối nhà trường mobiEdu/);

});
}

/**
 * Case 3: Click logo trường mầm non và tiểu học - mobiEdu SLL
 * - Kéo xuống bài viết -> Hiển thị btn giải pháp cho Trường mầm non và tiểu học - Doanh nghiệp - Trường Đại học - Trường Phổ thông 
 * Mong muốn: Hiển thị đúng trang giải pháp cho Doanh nghiệp - Trường Đại học - Trường Phổ thông
 */

function case3 () {
    test('Case 3: click link btn DN-DH-PT-MN&TH', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Giải pháp 
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Giải pháp' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giải pháp' })).toBeVisible();
        // Click logo Trường mầm non và tiểu học 
        await page.getByLabel('1 / 4').getByRole('link').click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-mam-non-tieu-hoc");
        // Kéo xuống bài viết 
        await page.keyboard.press('PageDown');
        await page.keyboard.press('PageDown');
        // Expect 
        await expect(page.getByText('Doanh nghiệp Trường Đại học Trường Phổ thông Trường Mầm non & Tiểu học')).toBeVisible();
        // Click doanh nghiệp - mSchool Doanh nghiệp 
        await page.getByRole('link', { name: 'Doanh nghiệp' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/doanh-nghiep");
        // Click mSchool Doanh nghiệp 
        await page.keyboard.press('PageDown');
        await page.keyboard.press('PageDown');
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'mSchool Doanh nghiệp' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/doanh-nghiep/mschool-doanh-nghiep");
        // Click Trường Đại học
        await page.keyboard.press('PageDown');
        await page.keyboard.press('PageDown');
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Trường Đại học' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-dai-hoc");
        // Click Trường Phổ thông - mobiEdu mSchool - mobiEdu TKB - Onluyen.vn
        await page.goto(dataSiteTest[1].linkSite + "/giai-phap/truong-mam-non-tieu-hoc/mobiedu-sll");
        await page.keyboard.press('PageDown');
        await page.keyboard.press('PageDown');
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Trường Phổ thông' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong");
        // Click mobiEdu mSchool
        await page.keyboard.press('PageDown');
        await page.keyboard.press('PageDown');
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'mobiEdu mSchool' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong/mobiedu-mschool");
        // Click mobiEdu TKB
        await page.keyboard.press('PageDown');
        await page.keyboard.press('PageDown');
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'mobiEdu TKB' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong/mobiedu-tkb");
        // Click Onluyen.vn
        await page.keyboard.press('PageDown');
        await page.keyboard.press('PageDown');
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Onluyen.vn' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong/onluyen-vn");
        // Click Trường mầm non và tiểu học - mobiEdu SLL
        await page.keyboard.press('PageDown');
        await page.keyboard.press('PageDown');
        await page.waitForTimeout(1000);
        await page.getByRole('link', { name: 'Trường Mầm non & Tiểu học' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-mam-non-tieu-hoc");
        // Click mobiEdu SLL
        await page.keyboard.press('PageDown');
        await page.keyboard.press('PageDown');
        await page.waitForTimeout(1000);
        await page.locator('a').filter({ hasText: 'mobiEdu SLL' }).click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-mam-non-tieu-hoc/mobiedu-sll");
        await page.keyboard.press('PageDown');
        await page.keyboard.press('PageDown');
        await expect(page.getByText('Doanh nghiệp Trường Đại học Trường Phổ thông Trường Mầm non & Tiểu học')).toBeVisible();

});
}

 /** Case 4: Click logo trường phổ thông - logo mobiEdu mSchool - logo mobiEdu TKB - logo Onluyen.vn
 * Mong muốn: Hiển thị đúng trang giải pháp trường phổ thông - mobiEdu mSchool - mobiEdu TKB - Onluyen.vn
 */

function case4 () {
    test('Case 4: click logo trường phổ thông', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Giải pháp 
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Giải pháp' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giải pháp' })).toBeVisible();
        // Click logo trường phổ thông 
        await page.getByLabel('2 / 4').getByRole('link').click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong");
        // Click logo mobiEdu mSchool
        await page.goto(dataSiteTest[1].linkSite + "/giai-phap");
        await page.getByLabel('2 / 4').getByRole('link').click();
        await page.locator('div.swiper-slide.swiper-slide-active > div > div.image.mx-auto').click();
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong/mobiedu-mschool");
        // Click logo mobiEdu TKB
        await page.goto(dataSiteTest[1].linkSite + "/giai-phap");
        await page.getByLabel('2 / 4').getByRole('link').click();
        await page.locator('div.swiper-slide.swiper-slide-next > div > div.image.mx-auto > a > img').click()
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong/mobiedu-tkb");
        // Click logo Onluyen.vn
        await page.goto(dataSiteTest[1].linkSite + "/giai-phap");
        await page.getByLabel('2 / 4').getByRole('link').click();
        await page.locator('div:nth-child(3) > div > div.image.mx-auto > a > img').click()
        // Expect
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong/onluyen-vn");

});
}

/** Case 5: Click gắn link giải pháp Trường phổ thông - mobiEdu mSchool 
 * Mong muốn: Hiển thị đúng link được gắn - mobiEdu mSchool 
 */

function case5 () {
    test('Case 5: click gắn link mobiEdu mSchool ', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Giải pháp 
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Giải pháp' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giải pháp' })).toBeVisible();
        // Click link 1 có gắn trang mobiEdu mSchool 
        await page.getByLabel('2 / 4').getByRole('link').click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong");
        await page.locator('div.swiper-slide.swiper-slide-active > div > div.image.mx-auto').click();
        await page.locator('div.desktop-show > div > div.image.img-scale > a > img').click();
        // Expect 
        await page.goto('https://mschool.mobiedu.vn/?_gl=1*6j50ov*_ga*MTYwMjQ5MTQ2Mi4xNzAxMjQ3NjY2*_ga_ZZM9L108RW*MTcwMTI0NzY2Ni4xLjEuMTcwMTI0NzY2OC4wLjAuMA..');
        await expect(page).toHaveURL('https://mschool.mobiedu.vn/?_gl=1*6j50ov*_ga*MTYwMjQ5MTQ2Mi4xNzAxMjQ3NjY2*_ga_ZZM9L108RW*MTcwMTI0NzY2Ni4xLjEuMTcwMTI0NzY2OC4wLjAuMA..');
        await expect(page).toHaveTitle(/Trang chủ - mobiEdu mSchool/);
        // Click link 2 có gắn trang mobiEdu mSchool 
        await page.goto(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong");
        await page.getByLabel('2 / 4').getByRole('link').click();
        await page.locator('div.swiper-slide.swiper-slide-active > div > div.image.mx-auto').click();
        await page.locator('section.solution-7.animate > div > div.desktop-show > div > div.image > a > img').click();
        // Expect 
        await page.goto('https://mschool.mobiedu.vn/?_gl=1*6j50ov*_ga*MTYwMjQ5MTQ2Mi4xNzAxMjQ3NjY2*_ga_ZZM9L108RW*MTcwMTI0NzY2Ni4xLjEuMTcwMTI0NzY2OC4wLjAuMA..');
        await expect(page).toHaveURL('https://mschool.mobiedu.vn/?_gl=1*6j50ov*_ga*MTYwMjQ5MTQ2Mi4xNzAxMjQ3NjY2*_ga_ZZM9L108RW*MTcwMTI0NzY2Ni4xLjEuMTcwMTI0NzY2OC4wLjAuMA..');
        await expect(page).toHaveTitle(/Trang chủ - mobiEdu mSchool/);

});
}

/** Case 6: Click gắn link giải pháp Trường phổ thông - mobiEdu TKB
 * Mong muốn: Hiển thị đúng link được gắn - mobiEdu TKB 
 */

function case6 () {
    test('Case 6: click gắn link mobiEdu TKB', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Giải pháp 
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Giải pháp' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giải pháp' })).toBeVisible();
        // Click link 1 có gắn trang mobiEdu TKB 
        await page.getByLabel('2 / 4').getByRole('link').click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong");
        await page.locator('div.swiper-slide.swiper-slide-next > div > div.image.mx-auto > a > img').click();
        await page.locator('div.desktop-show > div > div.image.img-scale > a > img').click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong/giai-phap-sap-xep-thoi-khoa-bieu");
        // Click link 2 có gắn trang mobiEdu TKB 
        await page.goto(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong");
        await page.getByLabel('2 / 4').getByRole('link').click();
        await page.locator('div.swiper-slide.swiper-slide-next > div > div.image.mx-auto > a > img').click();
        await page.locator('section.solution-7.animate > div > div.desktop-show > div > div.image > a > img').click();
        // Expect 
        await page.goto('https://tkb.mobiedu.vn/?_gl=1*3vuffo*_ga*MTc0MjI5MzEyNi4xNzAxMjQ4NDQ2*_ga_ZZM9L108RW*MTcwMTI0ODQ0NS4xLjEuMTcwMTI0ODUxMy4wLjAuMA..');
        await expect(page).toHaveURL('https://tkb.mobiedu.vn/?_gl=1*3vuffo*_ga*MTc0MjI5MzEyNi4xNzAxMjQ4NDQ2*_ga_ZZM9L108RW*MTcwMTI0ODQ0NS4xLjEuMTcwMTI0ODUxMy4wLjAuMA..');
        await expect(page.getByText('mobiEdu TKB', { exact: true })).toBeVisible();

});
}

/** Case 7: Click gắn link giải pháp Trường phổ thông - Onluyen.vn
 * Mong muốn: Hiển thị đúng link được gắn - Onluyen.vn
 */

function case7 () {
    test('Case 7: click gắn link Onluyen.vn', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Giải pháp 
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Giải pháp' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giải pháp' })).toBeVisible();
        // Click link 1 có gắn trang Onluyen.vn 
        await page.getByLabel('2 / 4').getByRole('link').click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong");
        await page.locator('div:nth-child(3) > div > div.image.mx-auto > a > img').click();
        await page.locator('div.desktop-show > div > div.image.img-scale > a > img').click();
        // Expect 
        await page.goto('https://onluyen.vn/');
        await expect(page).toHaveURL('https://onluyen.vn/');
        await expect(page.getByRole('link', { name: 'Ôn Luyện' }).first()).toBeVisible();
        // Click link 2 có gắn trang Onluyen.vn
        await page.goto(dataSiteTest[1].linkSite + "/giai-phap/truong-pho-thong");
        await page.getByLabel('2 / 4').getByRole('link').click();
        await page.locator('div:nth-child(3) > div > div.image.mx-auto > a > img').click();
        await page.locator('section.solution-7.animate > div > div.desktop-show > div > div.image > a > img').click();
        // Expect 
        await page.goto('https://onluyen.vn/');
        await expect(page).toHaveURL('https://onluyen.vn/');
        await expect(page.getByRole('link', { name: 'Ôn Luyện' }).first()).toBeVisible();

});
}

/** Case 8: Click logo Trường đại học
 * Mong muốn: Hiển thị đúng trang giải pháp trường đại học
 */

function case8 () {
    test('Case 8: click logo trường đại học', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Giải pháp 
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Giải pháp' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giải pháp' })).toBeVisible();
        // Click logo trường đại học
        await page.getByLabel('3 / 4').getByRole('link').click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/truong-dai-hoc");

});
}

/** Case 9: Click logo Doanh nghiệp - logo mSchool Doanh nghiệp
 * Mong muốn: Hiển thị đúng trang giải pháp doanh nghiệp - mSchool Doanh nghiệp
 */

function case9 () {
    test('Case 9: click logo doanh nghiệp', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Giải pháp 
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Giải pháp' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giải pháp' })).toBeVisible();
        // Click logo doanh nghiệp
        await page.getByLabel('4 / 4').getByRole('link').click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/doanh-nghiep");
        // Click logo mSchool Doanh nghiệp 
        await page.locator('div.image.mx-auto > a > img').click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/doanh-nghiep/mschool-doanh-nghiep");

});
}

/** Case 10: Click gắn link giải pháp Doanh nghiệp - mSchool Doanh nghiệp
 * Mong muốn: Hiển thị đúng link được gắn - mSchool Doanh nghiệp
 */

function case10 () {
    test('Case 10: click gắn link mSchool Doanh nghiệp', async ({ page }) => {

        test.slow();
        // Truy cập web 
        await page.goto(dataSiteTest[1].linkSite);
        // Expect
        await expect(page).toHaveTitle(/mobiEdu - Nền tảng chuyển đổi số toàn diện của MobiFone/);
        // Click btn Giải pháp 
        await page.locator('#mobiEduToggleMenu').getByRole('link', { name: 'Giải pháp' }).click();
        // Expect 
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap");
        await expect(page.locator('section').filter({ hasText: 'Trang chủ Giải pháp' })).toBeVisible();
        // Click link 1 có gắn trang mSchool Doanh nghiệp
        await page.getByLabel('4 / 4').getByRole('link').click();
        await expect(page).toHaveURL(dataSiteTest[1].linkSite + "/giai-phap/doanh-nghiep");
        await page.locator('div.image.mx-auto > a > img').click();
        await page.locator('div.desktop-show > div > div.image.img-scale > a > img').click();
        // Expect 
        await page.goto('https://mschool.mobiedu.vn/?_gl=1*dwwo7t*_ga*MTY1MDk4MDY5NC4xNzAxMjUyNDI2*_ga_ZZM9L108RW*MTcwMTI1MjQyNS4xLjEuMTcwMTI1MjY3Ni4wLjAuMA..');
        await expect(page).toHaveURL('https://mschool.mobiedu.vn/?_gl=1*dwwo7t*_ga*MTY1MDk4MDY5NC4xNzAxMjUyNDI2*_ga_ZZM9L108RW*MTcwMTI1MjQyNS4xLjEuMTcwMTI1MjY3Ni4wLjAuMA..');
        await expect(page).toHaveTitle(/Trang chủ - mobiEdu mSchool/);
        // Click link 2 có gắn trang mSchool Doanh nghiệp 
        await page.goto(dataSiteTest[1].linkSite + "/giai-phap/doanh-nghiep");
        await page.getByLabel('2 / 4').getByRole('link').click();
        await page.locator('section.solution-7.animate > div > div.desktop-show > div > div.image > a > img').click();
        // Expect 
        await page.goto('https://mschool.mobiedu.vn/?_gl=1*dwwo7t*_ga*MTY1MDk4MDY5NC4xNzAxMjUyNDI2*_ga_ZZM9L108RW*MTcwMTI1MjQyNS4xLjEuMTcwMTI1MjY3Ni4wLjAuMA..');
        await expect(page).toHaveURL('https://mschool.mobiedu.vn/?_gl=1*dwwo7t*_ga*MTY1MDk4MDY5NC4xNzAxMjUyNDI2*_ga_ZZM9L108RW*MTcwMTI1MjQyNS4xLjEuMTcwMTI1MjY3Ni4wLjAuMA..');
        await expect(page).toHaveTitle(/Trang chủ - mobiEdu mSchool/);

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