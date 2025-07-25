from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np

app = Flask(__name__)
model = load_model('fraud_detection_model.h5')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['features']
    input_array = np.array(data).reshape(1, -1)
    prediction = model.predict(input_array)
    return jsonify({'fraud_probability': float(prediction[0][0])})

if __name__ == '__main__':
    app.run(debug=True)
