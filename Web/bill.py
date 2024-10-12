from flask import Flask, request, render_template_string
import pandas as pd
import os

app = Flask(__name__)

# Path to the Excel file
EXCEL_FILE = 'data.xlsx'

# HTML template for the form
FORM_HTML = """
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>
<body>
    <form method="POST">
        <h3 class="tt">Client</h3>
        <label for="name">Nom:</label><br>
        <input type="text" id="name" name="name" required><br>
        <label for="surname">Prénom:</label><br>
        <input type="text" id="surname" name="surname" required><br>
        <label for="phone">Numéro WA:</label><br>
        <h3 class="tt">Numéro<h3>
        <input type="text" id="phone" name="phone" required><br>
        <label for="bill">Numéro de paiement:</label><br>
        <input type="text" id="bill" name="bill" required><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
"""

@app.route('/', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        name = request.form['name']
        surname = request.form['surname']
        phone = request.form['phone']
        bill = request.form['bill']

        # Create a DataFrame
        df = pd.DataFrame([[name, surname, phone, bill]], columns=['Nom', 'Prénom', 'Numéro WA', 'Numéro de paiement'])

        # Save to Excel
        if os.path.exists(EXCEL_FILE):
            with pd.ExcelWriter(EXCEL_FILE, mode='a', engine='openpyxl', if_sheet_exists='overlay') as writer:
                df.to_excel(writer, index=False, header=False, startrow=writer.sheets['Sheet1'].max_row)
        else:
            df.to_excel(EXCEL_FILE, index=False)

        return 'Data saved successfully!'

    return render_template_string(FORM_HTML)

if __name__ == '__main__':
    app.run(debug=True)