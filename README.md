## 📖 About this Project
This project aims to automate the sentiment analysis process for Instagram comments, making it easier to monitor public opinion and accurately identify audience emotions. The application utilizes Selenium and machine learning to scrape data from social media, and applies **Support Vector Machine (SVM)** for the text classification process.

## 🛠️ Teknologi yang Digunakan
Proyek ini dibangun dengan arsitektur *full-stack* modern yang memisahkan frontend dan backend, serta mengintegrasikan model machine learning untuk analisis data.

### Frontend

![Vue.js](https://img.shields.io/badge/Vue.js%203-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white) ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-8A2BE2?style=for-the-badge)

* **Framework:** Vue.js 3 (Menggunakan Options API)
* **Bahasa:** JavaScript
* **Styling:** Tailwind CSS
* **Visualisasi Data:** Chart.js (untuk grafik persentase sentimen)
* **Fetch Data:** Axios (untuk komunikasi dengan REST API Backend)
* **Notifikasi:** SweetAlert2 (untuk UI *alerts* yang interaktif)

---

### Backend & Machine Learning

![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) ![Python](https://img.shields.io/badge/Python_3-3776AB?style=for-the-badge&logo=python&logoColor=white) ![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white) ![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white) ![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)

* **Framework:** FastAPI (Python)
* **Bahasa:** Python 3
* **Machine Learning:** Scikit-Learn (Algoritma Support Vector Machine / Naive Bayes)
* **Data Scraping:** Selenium (Otomatisasi pengambilan komentar Instagram)
* **Pengolahan Data:** Pandas & Openpyxl (untuk manipulasi DataFrame dan *export* ke Excel)

## 📂 Directory Structure
```bash
instasent/
├── backbone/                          # Folder utama Backend
│   ├── app/                           # Modul aplikasi 
│   │   ├── routes/                    # Endpoint API (routing)
│   │   ├── schemas/                   # Data Transfer Objects / Pydantic models
│   │   ├── services/                  # Logika utama (scraper, analyzer, inference)
│   │   └── main.py                    # Entry point utama aplikasi FastAPI
│   ├── core/                          # Text preprocessing
│   ├── data/                          # Dataset latih dan tes
│   ├── model/                         # Penyimpanan model Machine Learning
│   ├── notebooks/                     # Eksperimen data dan training model
│   ├── .gitignore                     
│   └── scraper.txt                    
├── frontliner/                        # Folder utama Frontend 
│   ├── assets/                        # File statis pendukung
│   └── index.html                     # Halaman utama antarmuka pengguna (UI)
├── README.md                          # Dokumentasi utama proyek
└── requirements.txt                   # Daftar dependensi Python yang diperlukan
```
