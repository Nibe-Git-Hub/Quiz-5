# Photography Guide Chatbot - Backend Logic

This repository contains the backend implementation for an interactive chatbot designed to educate users on **Digital Photography and Camera Settings**. The engine is structured to handle queries regarding the mechanics of exposure, composition, and optics.

## 📸 Project Scope

The chatbot is programmed to provide expert-level guidance on three primary pillars of photography:

1. **The Exposure Triangle**:
* **ISO**: Managing light sensitivity and digital noise.
* **Aperture**: Controlling depth of field and light intake via f-stops.
* **Shutter Speed**: Capturing motion blur vs. freezing action.


2. **Composition Rules**:
* Implementing the **Rule of Thirds**, Leading Lines, and Framing.


3. **Optics & Focal Length**:
* Explaining the visual compression of telephoto lenses vs. the distortion of wide-angle lenses.



## 🛠️ Technical Stack

* **Language**: [Insert Language, e.g., Python / Node.js]
* **Logic Model**: [Insert Model, e.g., Rule-based / OpenAI API / LangChain]
* **Data Format**: JSON-based response structures for frontend integration.

## ⚙️ Backend Functionality

The backend is designed to process user input and return structured data. Key logic includes:

* **Intent Recognition**: Identifying if a user is asking about a specific setting (e.g., "Why is my photo grainy?") or a composition technique.
* **Parameter Calculation**: (If applicable) Logic to suggest balanced settings (e.g., if a user increases Aperture, the backend suggests a slower Shutter Speed to maintain exposure).
* **Educational Flow**: Sequential logic to guide a beginner from basic "Auto Mode" concepts to full "Manual Mode" mastery.

## 🚀 Getting Started (Backend Setup)

### Prerequisites

* [Insert Tool, e.g., Node.js v16+ or Python 3.8+]
* [Insert Package Manager, e.g., npm or pip]

### Installation

1. **Clone the repository**:
```bash
make sure you cd into backend!* cd backend
git clone https://github.com/Nibe-Git-Hub/Quiz-5.git

```


2. **Install dependencies**:
```bash
# Example for Node.js
npm install
# Example for Python
pip install -r requirements.txt

```



### Running the Server

To start the backend service:

```bash
# Insert your specific start command
py manage.py runserver

```

## 🔌 API Endpoints (Example)

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/conversation` | Sends user message to the bot and returns a photography guide response. |
