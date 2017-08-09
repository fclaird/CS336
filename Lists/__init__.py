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



def get_JSON_data():
	data_path = 'registrant_data.json'
	registrant_list = []

	try:
		with open(data_path, 'r') as my_file:
			data_macro = json.load(my_file)

			for i in range(len(data_macro['registrants'])):
				info = data_macro['registrants'][i]
				registrant_list.append(Registrant(info))

			print(registrant_list[1]["city"])
		my_file.close()

	except IOError as e:
		print("Unable to open file " + data_path)
		quit(1)

get_JSON_data()
