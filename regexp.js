var re = /(\d{3,8})$/
re.test("2121231")
var re1 = / ^(\d{2,7}) /
var str1 = "123  545"
str1.split(" ");//123 545
str1.split(/\s+/)//123545
var re2 = / ^(\d{3})-(\d{3,8})$ /
re2.exec('010-12345')//提取字串
var email = / ^[\d\w]+\@[\d\w]*.\w+$ /