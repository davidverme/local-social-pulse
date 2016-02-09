import unittest
import re
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        #self.driver = webdriver.Chrome(executable_path="D:\Test_Python\chromedriver.exe")
        self.driver = webdriver.Firefox()

    def test_search_in_python_org(self):
        driver = self.driver
        driver.get("http://localhost/local-social-pulse")
        #time.sleep(5)
        driver.implicitly_wait(10)
        elem = driver.find_element_by_tag_name("p")
        src = driver.page_source
        result = re.search(r'Hola', src)
        #print(result)
        assert result != None
        #self.assertIn("Holaaaaa", driver.page_source)
        searchInput = driver.find_element_by_xpath("//div[contains(@class,'search-input')]/input")
        searchInput.send_keys("Siempre")
        src = driver.page_source
        result = re.search(r'Hola', src)
        assert result == None
        result = re.search(r'Siempre Tarde', src)
        assert result != None
        #searchInput.send_keys(Keys.RETURN)
        #assert "No results found." not in driver.page_source


    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
