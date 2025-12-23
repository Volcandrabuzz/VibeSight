
# 🧠 VibeSight: AI-Powered Motion Magnification & Health Analytics

## 🚀 Overview
**VibeSight** is an AI-driven system that merges **human health analysis** and **industrial machinery diagnostics** through advanced **video magnification, computer vision**, and **machine learning algorithms**.  
By amplifying subtle vibrations, color variations, and motion patterns invisible to the naked eye, VibeSight provides **early detection of anomalies** in both **human physiology** and **machine performance**.

This project leverages **Eulerian Video Magnification** to extract and amplify micro-motions from videos and combines them with **deep learning** models to generate real-time **health and condition reports**.  
Through seamless integration with **supOS**, it bridges the gap between **human safety** and **industrial reliability** in a unified monitoring ecosystem.

---

# Working:

Video Upload & Magnification
The user uploads a video through the client. The Magnification Server processes it using Phase-based and Eulerian-based video magnification to reveal subtle vibrations.

Graph & Data Generation
The processed video is sent to the Graph Generation Server, which extracts movement data and creates graphs. This data is then analyzed via IO Net Intelligence API.

Insightful Report Creation
The analyzed results are forwarded to the Report Generation Server, which compiles a human-readable report combining original and magnified data insights.

# System Architecture:
![System Architecture](Static/s_design.png)

# Frontend:


<img width="1280" height="585" alt="image" src="https://github.com/user-attachments/assets/03605437-64a4-4839-88d2-a45d97554d2f" />

<img width="1918" height="862" alt="image" src="https://github.com/user-attachments/assets/162ef79e-ed6c-4352-b00b-4b0fc78664d4" />

<img width="1918" height="862" alt="image" src="https://github.com/user-attachments/assets/5d28429e-348a-4e4c-8179-f203d8a14a19" />

<img width="999" height="969" alt="image" src="https://github.com/user-attachments/assets/905cd7d9-f6b4-489c-abc3-73c2cf16662d" />


# Analysis Report:
<img width="1280" height="686" alt="image" src="https://github.com/user-attachments/assets/88e778f4-1695-4550-9fad-60c455b22228" />


# Live Magnification
<img width="1280" height="722" alt="image" src="https://github.com/user-attachments/assets/2385f15d-d93a-4682-8541-35a98a0838cb" />


## 🎯 Key Features

### 🔬 Video-Based Motion Analysis
- Implements **Eulerian and Phase-based Video Magnification** to reveal subtle changes in motion and color.
- Detects vibrations, heartbeat-induced skin tone shifts, and micro-defects in mechanical components.

### 🧍 Human Health Analysis
- Monitors **respiratory rate** and **heart rate** from live or recorded footage.
- Uses computer vision and ML models to classify human health states (Normal / Cautionary / Critical).
- Generates **visual health graphs** and summary reports using the IO Net Intelligence module.

### ⚙️ Machinery Health Diagnostics
- Monitors **vibration intensity** and **frequency patterns** from industrial video streams.
- Identifies early indicators of **bearing wear, imbalance, or misalignment**.
- Specialized **aircraft engine health module** detects micro-scale defects to prevent in-flight failures.

### 🧩 supOS Integration
VibeSight seamlessly integrates with **supOS (Smart Unified Platform Operating System)** — the industrial operating layer for data orchestration and event-driven automation:
- **Data Flow:** Vibration and motion data extracted by the Flask backend are sent to the **supOS Unified Namespace** via MQTT topics.  
  Example topic structure: Factory/Line1/MachineCNC/VibrationRate      |       Factory/Line1/Operator/HeartRate
- **Visualization:** supOS dashboards display live vibration graphs and human health metrics.
- **Automation:** supOS Event Flows trigger actions — e.g., send alerts when vibration exceeds safe thresholds or when operator fatigue is detected.
- **Scalability:** The system can be deployed across multiple factories, using supOS as a central hub for monitoring all human and machine health events.

---

## 🧠 Technology Stack

| Component | Technology |
|------------|-------------|
| **Frontend** | React.js (video upload, configuration, real-time logs via WebSockets) |
| **Backend (Magnification)** | Flask (Python) with OpenCV for video magnification |
| **Report Generator** | Node.js server to aggregate AI responses and generate summaries |
| **AI Models** | TensorFlow / Keras (human health analysis) |
| **Visualization & Graphs** | IO Net Intelligence |
| **Data Integration** | supOS Unified Namespace + MQTT broker |
| **Cloud Storage** | Cloudinary for video hosting |
| **Realtime Communication** | Flask-SocketIO for progress updates |

---

# 🧩 System Architecture

```text
Frontend (React)
        ↓
Magnification Server (Flask)
        ↓
Graph Generation Server (Python)
        ↓
Report Generator API (Node.js)
        ↓
supOS Unified Namespace (MQTT / Event Flow)
        ↓
Dashboards, Alerts, and Predictive Insights

```
---

## 🔗 Data Flow Explanation

### **Frontend (React)**
- User interface for visualizing vibration data and analysis results.  
- Sends requests to the Flask backend for magnified motion processing.

### **Magnification Server (Flask)**
- Performs motion magnification using AI models.  
- Extracts key vibration signals from video or sensor data.

### **Graph Generation Server (Python)**
- Analyzes magnified data and generates time-series and frequency-domain graphs.  
- Outputs processed insights and visual representations.

### **Report Generator API (Node.js)**
- Compiles analytics, graphs, and AI insights into structured reports (PDF/JSON).  
- Interfaces with **supOS** for unified data publishing.

### **supOS Unified Namespace (MQTT / Event Flow)**
- Central event bus connecting all components.  
- Streams real-time updates, alerts, and processed metrics.

### **Dashboards, Alerts & Predictive Insights**
- **supOS** dashboards visualize live health analytics and predictive maintenance alerts.  
- Supports data-driven decision-making for operators and engineers.

---

## 💡 Use Cases

| Domain | Application | Description |
|--------|--------------|-------------|
| 🏭 **Industrial** | Predictive Maintenance | Detect machine vibrations or misalignments early to prevent costly downtime. |
| ✈️ **Aerospace** | Engine Health Monitoring | Identify micro-defects in aircraft engines to improve reliability. |
| 🧍 **Healthcare** | Human Vital Monitoring | Monitor heart rate and respiration without contact sensors using video data. |
| 🧑‍🏭 **Operator Safety** | Workplace Fatigue Detection | Track human posture and breathing to ensure safety in hazardous environments. |

---

## ⚠️ Showstoppers & Challenges
- **Universal Device Compatibility:** Designed to run across Web, Windows, and Android platforms.
- **Scalability:** Modular microservice architecture ensures efficient handling of multiple video streams.
- **Regulatory Compliance:** Designed with healthcare and industrial data standards in mind (HIPAA-ready structure).
- **Real Time Motion Magnification** using Frame-By-Frame Difference of Vibrations.


---

## 🧩 Future Work
- Integrate **supOS AI Toolkit** for anomaly detection directly inside the supOS interface.
- Develop a **low-code supOS dashboard template** for real-time machine-health analytics.
- Extend live video magnification with **GPU acceleration** for industrial-scale deployment.

---

## Working Architecture
(Refer to the diagram in the project repo for a visual representation.)

### Backend:
1. **API Server for Magnification (Node.js):** Hosted on Replit for hackathon purposes, this server acts as an API server forwarding calls to the magnification server.

2. **Server Report Generator (Node.js):** Another API server hosted on Replit, responsible for making calls to the AI model with generated report images and objects extracted from frames. It calculates the average of responses from multiple calls and returns the result.

3. **Magnification Server (Flask):** A Python server that performs actual video magnification using Eulerian/phase magnification scripts. It processes the video and returns the magnified video link.

4. **Graph Generation Server (Python):** This component generates graphs from the magnified video. It sends images of the graphs and detected objects in the frame to the "Server Report Generator (Node.js)" via an API call.

5. **Live Magnification:** Developed as a proof of concept, this feature skips the process of applying filters and magnifies the video in real time. However, note that the magnification quality might not be optimal, and the video is grayscale.

---

## Usage Magnification Server

1. Clone the repository:

   ```bash
   git clone https://github.com/Volcandrabuzz/Vibra-Sense-Motionizer
   ```
2. CD into Magnification_Server:

   ```bash
   cd ./Magnification_Server
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the Flask application:

   ```bash
   python app.py
   ```

   DO THE SAME WITH REPORT AND GRAPH GEN SERVER.

   ---

   ## Usage Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/Volcandrabuzz/Vibra-Sense-Motionizer
   ```

2. CD into Frontend:

   ```bash
   cd ./frontend
   ```

3. Install dependencies:

   ```bash
   npm i
   ```

4. Run the application:

   ```bash
   npm start
   ```

4. Access the application through the provided URL in your web browser at port 3000.

---

## 📸 Demo
🎥 Prototype Video: [Watch Here](https://www.youtube.com/watch?v=nN3FEh2MlFA)

---

## 🏁 Summary
> **VibeSight** is a unified health intelligence system that bridges human and machine analytics using video magnification and AI — powered by **supOS’s Unified Data and Event-driven architecture**.  
> It redefines predictive maintenance and human wellness monitoring for the smart industrial age.

---



