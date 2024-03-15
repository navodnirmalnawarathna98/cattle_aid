from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Load your trained model
MODEL_PATH = 'C:/Users/NOVA/Desktop/React-Flask/cattle_classification_model.h5'
model = load_model(MODEL_PATH)

severity_levels = {
    'Mild': 0.3,
    'Moderate': 0.6,
    'Severe': 0.9
}

@app.route('/api/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    if file:
        img = Image.open(file.stream).resize((256, 256))
        img_array = np.array(img) / 255.0
        prediction = model.predict(np.expand_dims(img_array, axis=0))
        
        predicted_class = 'lumpycows' if prediction > 0.5 else 'healthycows'
        severity_level = 'Not Applicable'
        if predicted_class == 'lumpycows':
            for level, threshold in severity_levels.items():
                if prediction >= threshold:
                    severity_level = level
                    break
            if severity_level is None:
                severity_level = 'Severe'

        return jsonify({
            'predicted_class': predicted_class,
            'severity_level': severity_level,
            'probability': float(prediction[0][0])
        })

if __name__ == '__main__':
    app.run(debug=True)
