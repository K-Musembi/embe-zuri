from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Path to Chrome binary
chrome_path = "./chrome/chrome"  # chrome is in embe-zuri directory

# ChromeDriver path
chromedriver_path = "/usr/bin/chromedriver"

# Set up Chrome options
chrome_options = Options()
chrome_options.binary_location = chrome_path
chrome_options.add_argument("--headless")  # Run in headless mode
chrome_options.add_argument("--disable-gpu")  # Optional for stability
chrome_options.add_argument("--no-sandbox")  # Useful in Linux environments

# Create a Service object for ChromeDriver
service = Service(chromedriver_path)

# Initialize the WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

try:
    driver.get("https://embezuri.online")
    print("Page title:", driver.title)
finally:
    driver.quit()

def test_login():
    """Test login functionality using username and password."""
    try:
        # Navigate to the login page
        driver.get("https://embezuri.online/login")

        # Find the username and password fields and submit button
        username_field = driver.find_element(By.NAME, "username")
        password_field = driver.find_element(By.NAME, "password")
        submit_button = driver.find_element(By.XPATH, "//button[@type='submit']")

        # Enter credentials and submit
        username_field.send_keys("musembi")
        password_field.send_keys("password")
        submit_button.click()

        # Wait for the page to load
        time.sleep(5)

        # Verify login success (e.g., check for a logout button)
        logout_button = driver.find_element(By.LINK_TEXT, "Logout")
        print("Login Test: Passed")

    except Exception as e:
        print(f"Login Test: Failed - {e}")

def test_signup():
    """Test signup functionality using username, email, and password."""
    try:
        # Navigate to the signup page
        driver.get("https://embezuri.online/signup")

        # Find the input fields and submit button
        username_field = driver.find_element(By.NAME, "username")
        email_field = driver.find_element(By.NAME, "email")
        password_field = driver.find_element(By.NAME, "password")
        submit_button = driver.find_element(By.XPATH, "//button[@type='submit']")

        # Enter signup details and submit
        username_field.send_keys("new_user")
        email_field.send_keys("new_user@example.com")
        password_field.send_keys("secure_password")
        submit_button.click()

        # Wait for the page to load
        time.sleep(2)

        # Verify signup success (e.g., check for a welcome message)
        logout_button = driver.find_element(By.LINK_TEXT, "Logout")
        print("Signup Test: Passed")

    except Exception as e:
        print(f"Signup Test: Failed - {e}")
