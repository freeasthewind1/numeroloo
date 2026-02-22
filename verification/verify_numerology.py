from playwright.sync_api import sync_playwright

def verify_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to app...")
        page.goto("http://localhost:5173")

        print("Waiting for title or input...")
        # Expect "Kaderini Keşfet"
        try:
            page.wait_for_selector('text=Kaderini Keşfet', timeout=5000)
        except:
            print("Title not found, dumping content...")
            print(page.content())
            page.screenshot(path="verification/error.png")
            browser.close()
            return

        print("Entering birth date...")
        page.fill('input[type="date"]', '2000-01-01')

        print("Clicking Start...")
        page.click('button:has-text("ANALİZİ BAŞLAT")')

        print("Waiting for dashboard...")
        page.wait_for_selector('text=Yaşam Yolu', timeout=5000)

        print("Taking dashboard screenshot...")
        page.screenshot(path="verification/dashboard.png")

        print("Navigating to Numerology Detail...")
        page.click('text=Yaşam Yolu')

        page.wait_for_selector('text=Numeroloji Analizi', timeout=5000)
        print("Taking detail screenshot...")
        page.screenshot(path="verification/numerology_detail.png")

        browser.close()

if __name__ == "__main__":
    verify_app()
