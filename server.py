from flask import Flask, jsonify, request
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 


@app.route('/register', methods=['POST'])
def register():
    try:
        name = request.form['name']
        email = request.form['email']

        # Example connection to the database (adjust based on your configuration)
        connection = mysql.connector.connect(
            host='localhost',
            user='root',  # change to your MySQL username
            password='2005@Ruchi',  # change to your MySQL password
            database='organ_donation'
        )

        cursor = connection.cursor()
        # Inserting data into the pledgers table
        cursor.execute("INSERT INTO pledgers (name, email) VALUES (%s, %s)", (name, email))
        connection.commit()

        # Return a success message with a 201 status
        return jsonify({'message': 'Registration successful!'}), 201

    except mysql.connector.Error as err:
        print(f"MySQL error: {err}")  # Log MySQL errors
        return jsonify({'error': str(err)}), 500  # Internal server error
    except KeyError as e:
        print(f"Missing key: {e}")  # Log if there are missing keys
        return jsonify({'error': 'Missing required data'}), 400  # Bad request
    except Exception as e:
        print(f"General error: {e}")  # Log any other errors
        return jsonify({'error': str(e)}), 500  # Internal server error
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
