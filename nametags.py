myList = []
i = 0
data_path = 'registrant_data.csv'

try:
	with open(data_path, 'r') as myFile:
		for line in myFile.readlines():
			myList.append(line.split(','))
		myFile.close()

except IOError as e:
    print("Unable to open file " + data_path)
    quit(1)


with open('nametags8gen.html', 'w+') as html8:
	with open('nametags10gen.html', 'w+') as html10:
		html8.write("<link href='nametags8.css' rel='stylesheet' type='text/css'/>")
		html10.write("<link href='nametags10.css' rel='stylesheet' type='text/css'/>")
		html8.write("\n<title>8 nametags</title>")
		html10.write("\n<title>10 nametags</title>")
		html8.write("\n<div class='container'>")
		html10.write("\n<div class='container'>")
		for data in myList:
			if i % 2 == 0: column = 'left'
			else: column = 'right'
			if i != 0 and i != 1 and (i % 8 == 0 or i % 8 == 1):
				html8.write("\n	<div class='tag top' id='" + column + "'>")

			else: html8.write("\n	<div class='tag' id='" + column + "'>")

			html8.write("\n		<span class='fName'>" + data[2] + "</span><br>")
			html8.write("\n		<span class='lName'>" + data[3] + "</span><br>")
			html8.write("\n		<span class='jTitle'>" + data[12] + "</span><br>")
			html8.write("\n		<span class='employer'>" + data[13] + "</span><br>")
			html8.write("\n		<span class='local'>" + data[6] + ", " + data[7] + "</span><br>")
			html8.write("\n	</div>")
			if i != 0 and i != 1 and (i % 10 == 0 or i % 10 == 1):
				html10.write("\n	<div class='tag top' id='" + column + "'>")

			else: html10.write("\n	<div class='tag' id='" + column + "'>")

			html10.write("\n		<span class='fName'>" + data[2] + " " + data[3] + "</span><br>")
			html10.write("\n		<span class='jTitle'>" + data[12] + "</span><br>")
			html10.write("\n		<span class='employer'>" + data[13] + "</span><br>")
			html10.write("\n		<span class='local'>" + data[6] + ", " + data[7] + "</span><br>")
			html10.write("\n	</div>")
			i += 1
		html8.write("\n</div>")
		html10.write("\n</div>")
	html10.close()
html8.close()
