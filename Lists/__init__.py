import json

options = {
	'Workshop1': "Workshop Alpha",
	'Workshop2': "Workshop Bravo",
	'Workshop3': "Workshop Charlie",
	'Workshop4': "Workshop Delta",
	'Workshop5': "Workshop Echo",
	'Workshop6': "Workshop Foxtrot",
	'Workshop7': "Workshop Golf",
	'Workshop8': "Workshop Helo",
	'Workshop9': "Workshop India",
	'mealpack': "Full Meal Package",
	'dinnerday2': "Only Dinner on Day 2 (Awards Banquet)",
	'allconference': "All Registrants of Conference"
}

class Registrant(dict):
	_keys = [
		"billing_firstname",
		"address2",
		"city",
		"address1",
		"lastname",
		"title",
		"email",
		"card_type",
		"website",
		"firstname",
		"state",
		"card_csv",
		"telephone",
		"session3",
		"exp_month",
		"company",
		"billing_lastname",
		"meals",
		"exp_year",
		"card_number",
		"position",
		"session2",
		"session1",
		"zipcode",
		"date_of_registration"]



	def __init__(self, this_regestrant):
		for key in self._keys:
			self[key] = this_regestrant[key]



def get_json_data():
	data_path = 'registrant_data.json'
	registrant_list = []
	try:
		with open(data_path, 'r') as my_file:
			data_macro = json.load(my_file)
			for i in range(len(data_macro['registrants'])):
				a_registrant = data_macro['registrants'][i]
				registrant_list.append(Registrant(a_registrant))
		my_file.close()
	except IOError as e:
		print("Unable to open file " + data_path)
		quit(1)
	sorted_list = sorted(registrant_list, key=lambda x: x['lastname'])
	return sorted_list


def generate_list(sorted_master_list, discriminator):
	return [x for x in sorted_master_list if x['session1'] == discriminator or
		x['session2'] == discriminator or x['session3'] == discriminator or
		x['meals'] == discriminator]

def generate_HTML(sorted_sublist, discriminator, actual_name):
	with open(discriminator + '.html', 'w+') as html:
		html.write("<link href='" + sorted_sublist + ".css' rel='stylesheet' type='text/css'/>")
		html.write("\n<title> a sorted sub-list</title>")
		html.write("\n	<div=sublist>")
		html.write("\n	<h3>Here is a list of all the attendees who selected: " + actual_name + "</h3>")
		html.write("\n<br>")
		for obj in sorted_sublist:
			html.write("<span>" + obj['lastname'] + ", " + obj['firstname'] + "</span><br>")
		html.write("\n<br>")
		html.write("\n<br>")
		html.write("<span>The number of registrants that selected this option is: " + len(obj) + "</span><br>")
		html.write("\n	</div>")
		html.close()


sorted_master_list = get_json_data()
sorted_sublist = generate_list(sorted_master_list, "mealpack")


