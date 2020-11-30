*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${browser}    chrome

*** Test Cases ***
Open Google
    Create Webdriver    Chrome    executable_path=D:\\Users\\Deepesh\\Desktop\\chromedriver.exe
    Open Browser    https://www.google.com    ${browser}
    Capture Page Screenshot