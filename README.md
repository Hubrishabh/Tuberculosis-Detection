# Tuberculosis-Detection
This project is a web application for detecting Tuberculosis (TB) using a deep learning model, specifically the ResNet50 architecture. The application allows users to upload chest X-ray images and receive predictions on the presence of TB.

# Usage
Open the web application in your browser.
Click on the "Upload Image" button to upload a chest X-ray image.
After the image is processed, the model will return a prediction indicating whether TB is detected or not.
Model Training
The TB detection model is built using the ResNet50 architecture. Here’s a brief overview of the training process:

Dataset: The model is trained on a dataset of chest X-ray images labeled as either 'TB' or 'Normal'.
Preprocessing: Images are resized and normalized before feeding them into the model.
Training: The model is trained using TensorFlow and Keras with appropriate loss functions and optimizers.
Evaluation: The model is evaluated based on accuracy and other metrics on a validation set.
