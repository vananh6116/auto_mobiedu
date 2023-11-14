// @ts-check
const { test, expect } = require('@playwright/test');


/**
 * Case fail stt 5: "Lọc câu hỏi theo từ khóa.VD: Nhập Toán -> Hệ thống hiển thị không đúng từ khóa nhập "
 */

function searchSupport() {
    test('Search by text exactly', async ({ page }) => {
        await page.goto('https://mskill8.mobiedu.vn/');

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Playwright/);
    });
}


function main() {

}