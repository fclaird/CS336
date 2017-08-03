myList = []
i = 0
with open('registrant_data.csv', 'r') as myFile:
	for line in myFile.readlines():
		myList.append(line.split(','))
myFile.close()
with open('nametags8gen.html', 'w+') as html8:
	html8.write("<link href='nametags8.css' rel='stylesheet' type='text/css'/>")
	html8.write("\n<title>8 nametags</title>")
	html8.write("\n<div class='container'>")
	for data in myList:
		if i % 2 == 0: column = 'left'
		else: column = 'right'
		html8.write("\n	<div class='tag' id='" + column + "'>")
		html8.write("\n		<span class='fName'>" + data[2] + "</span><br>")
		html8.write("\n		<span class='lName'>" + data[3] + "</span><br>")
		html8.write("\n		<span class='jTitle'>" + data[12] + "</span><br>")
		html8.write("\n		<span class='employer'>" + data[13] + "</span><br>")
		html8.write("\n		<span class='local'>" + data[6] + ", " + data[7] + "</span><br>")
		html8.write("\n	</div>")






		i += 1

