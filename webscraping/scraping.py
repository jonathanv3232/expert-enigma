import requests
from bs4 import BeautifulSoup

r = requests.get("https://www.nytimes.com/interactive/2017/06/23/opinion/trumps-lies.html")

soup = BeautifulSoup(r.text, "html.parser")

results = soup.find_all("span", attrs={"class":"short-desc"})

records = []

for result in results:
    date = result.find("strong").text[0:-1]
    lie = result.contents[1][1:-2]
    explanation = result.find("a").text[1:-1]
    link = result.find("a")["href"]
    records.append((date, lie, explanation, link))

print(records)
