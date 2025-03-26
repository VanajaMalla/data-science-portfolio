# Real Estate Price Prediction in Bangalore

This project aims to predict the price of real estate properties in Bangalore, India based on features such as area, number of bedrooms, number of bathrooms, and location. The project uses machine learning models like Linear Regression, Lasso Regression, Decision Tree, and Random Forest to estimate property prices.

![Project Image](images/BHP.PNG)

## Features

- **Data Preprocessing**: 
  - Handling missing values
  - Feature engineering (e.g., creating a new feature for "price per square foot")
  - Outlier detection and removal
  - One-hot encoding for categorical variables like "location"

- **Model Building**:
  - Linear Regression
  - Lasso Regression
  - Decision Tree Regressor
  - Random Forest Regressor
  
- **Model Evaluation**: 
  - Cross-validation to evaluate the models
  - Hyperparameter tuning using GridSearchCV

- **Prediction**: 
  - A function that predicts property prices given the location, total area, number of bedrooms (BHK), and bathrooms.

## Dataset

- **Source**: The dataset is from [Kaggle](https://www.kaggle.com/datasets/amitabhajoy/bengaluru-house-price-data).

- **Data Description**:The dataset used for this project is the **Bengaluru House Data** ,downloaded from Kaggle, which contains information about various properties in Bangalore, such as:

- Location
- Size (BHK)
- Total square feet
- Price
- Bathrooms
- Society, Balcony, Availability (columns removed during preprocessing)

### File structure:
```
House_Price_Prediction_Project/           
├── client/             # HTML/CSS/Javascript for UI
├── data/               # Dataset folder
├── notebook/           # Jupyter Notebooks (e.g., Data pipeline, model, etc.)
├── server/             # utils and Python flask for http server
├── README.md           # Description of the project and how to run it
└── requirements.txt    # Required libraries for the project
````  

### Installation

- Python 3.x ,  It should be at least Python 3.6 or higher to ensure compatibility with the libraries used in the project
- Libraries: pandas, numpy, matplotlib, scikit-learn, pickle , json , flask

```bash
pip install -r requirements.txt
```

#### Start Flask Server
1. Run the server by navigating to the server/ folder and running:

```bash
python server.py
```
The server will start at http://127.0.0.1:5000/. You can then use the /predict_home_price endpoint to get price predictions.

2. Navigate to House_Price_Prediction_Project/client
    Open app.html in browser, you can see UI as shown image above and enter values in required fields and predict house price

