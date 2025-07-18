📘 FastAPI Notes
🔹 What is FastAPI?
FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.

🔹 Key Features
Fast to code

Auto-generates docs (Swagger UI & Redoc)

Uses Pydantic for data validation

Async support out of the box

🔹 Installation

pip install fastapi uvicorn
🔹 Example App

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}
🔹 Run the Server

uvicorn main:app --reload
🔹 Swagger Docs
Visit: http://localhost:8000/docs

🔹 Request Body with Pydantic

from pydantic import BaseModel

class Transaction(BaseModel):
    amount: float
    location: str
🔹 Using POST endpoint

@app.post("/predict")
def predict(transaction: Transaction):
    return {"fraud": False}
🔹 CORS Support (for frontend calls)

pip install fastapi[all]

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
🤖 ML Model Notes (scikit-learn)
🔹 Libraries Needed
pip install pandas scikit-learn joblib
🔹 Basic Pipeline
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib

# Load data
df = pd.read_csv("data.csv")
X = df.drop("target", axis=1)
y = df["target"]

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save
joblib.dump(model, "model.pkl")
🔹 Load & Predict (in FastAPI)
import joblib
import pandas as pd

model = joblib.load("model.pkl")

def predict_fraud(data: dict):
    df = pd.DataFrame([data])
    return model.predict(df)[0]
🔹 Notes on Fraud Detection
Class imbalance is common (few frauds vs many legitimate).

Use RandomForestClassifier, XGBoost, or LogisticRegression.

Evaluate using precision, recall, F1-score — not just accuracy.

🔹 Metrics You Should Track
from sklearn.metrics import classification_report, confusion_matrix

y_pred = model.predict(X_test)
print(classification_report(y_test, y_pred))