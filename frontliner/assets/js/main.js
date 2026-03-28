/**
 * main.js - Logic for InstaSenti Web Application
 * Project Structure: Frontliner (Vue.js + Tailwind)
 */

const { createApp } = Vue;

createApp({
    data() {
        return {
            isMobileMenuOpen: false,
            // Navigation
            menuItems: [
                { id: 1, name: 'Home', link: '#home' },
                { id: 2, name: 'Technology', link: '#technologies' },
                { id: 3, name: 'About', link: '#about' },
            ],
            // Technology Stack Data
            techItems: [
                {
                    id: 1,
                    name: 'Python',
                    logo: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3"></path><path d="M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3"></path><path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a4 4 0 0 1-4 4H4"></path></svg>',
                    desc: 'Bahasa pemrograman utama untuk pemrosesan data dan logika backend.'
                },
                {
                    id: 2,
                    name: 'FastAPI',
                    logo: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>',
                    desc: 'Framework performa tinggi untuk membangun API yang cepat dan efisien.'
                },
                {
                    id: 3,
                    name: 'Scikit-Learn',
                    logo: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
                    desc: 'Library machine learning untuk klasifikasi sentimen yang akurat.'
                },
                {
                    id: 4,
                    name: 'Selenium',
                    logo: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>',
                    desc: 'Otomatisasi browser untuk pengambilan data (scraping) komentar Instagram.'
                },
                {
                    id: 5,
                    name: 'Vue.js 3',
                    logo: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 14H4L12 2z"></path><path d="M12 8l4 7H8l4-7z"></path></svg>',
                    desc: 'Framework frontend modern untuk antarmuka pengguna yang reaktif.'
                },
                {
                    id: 6,
                    name: 'Tailwind CSS',
                    logo: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>',
                    desc: 'Styling utilitas untuk membangun desain yang responsif dan estetis.'
                },
                {
                    id: 7,
                    name: 'Chart.js',
                    logo: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>',
                    desc: 'Visualisasi data melalui grafik yang interaktif dan mudah dipahami.'
                },
                {
                    id: 8,
                    name: 'Axios',
                    logo: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg>',
                    desc: 'Library HTTP client untuk komunikasi data antara frontend dan backend.'
                }
            ],
            // Form & State
            formData: {
                username: '',
                rangeMode: 'all',
                customRange: ''
            },
            isLoading: false,
            analysisResult: null,
            errorMessage: '',
            // Theme Configuration
            theme: {
                positive: { chart: '#238823', bg: 'bg-[#238823]/10', bar: 'bg-[#238823]' },
                neutral:  { chart: '#ffbf00', bg: 'bg-[#ffbf00]/15', bar: 'bg-[#ffbf00]' },
                negative: { chart: '#d2222d', bg: 'bg-[#d2222d]/10', bar: 'bg-[#d2222d]' }
            }
        }
    },
    computed: {
        parsedSummary() {
            if (!this.analysisResult) return null;
            // Handle case if summary comes as a JSON string or Object
            const summary = this.analysisResult.summary;
            return typeof summary === 'string' ? JSON.parse(summary) : summary;
        }
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },

        async startAnalysis() {
            this.isLoading = true;
            this.analysisResult = null;
            this.errorMessage = '';

            const payload = new FormData();
            payload.append('username', this.formData.username);
            payload.append('rangeMode', this.formData.rangeMode);
            payload.append('customRange', this.formData.customRange);

            try {
                const response = await axios.post('http://127.0.0.1:8000/analyze/instagram', payload);
                this.analysisResult = response.data;

                // UI Updates after data is received
                this.$nextTick(() => {
                    setTimeout(() => { this.renderChart(); }, 200);
                    setTimeout(() => { 
                        document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' }); 
                    }, 300);
                });

            } catch (error) {
                this.handleError(error);
            } finally {
                this.isLoading = false;
            }
        },

        renderChart() {
            const canvas = document.getElementById('sentimentChart');
            if (!canvas || !this.parsedSummary) return;

            const ctx = canvas.getContext('2d');
            const data = this.parsedSummary;

            if (window.myChart) window.myChart.destroy();

            window.myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Positive', 'Neutral', 'Negative'],
                    datasets: [{
                        data: [
                            data.positive?.count || 0, 
                            data.neutral?.count || 0, 
                            data.negative?.count || 0
                        ],
                        backgroundColor: [
                            this.theme.positive.chart, 
                            this.theme.neutral.chart, 
                            this.theme.negative.chart
                        ],
                        borderWidth: 0,
                        borderRadius: 10,
                        hoverOffset: 15
                    }]
                },
                options: {
                    cutout: '75%',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: '#1e293b',
                            padding: 12,
                            cornerRadius: 8
                        }
                    }
                }
            });
        },

        // Helper Methods for UI Styling
        getBgColor(key) {
            return this.theme[key]?.bg || 'bg-gray-50';
        },
        getBarColor(key) {
            return this.theme[key]?.bar || 'bg-gray-400';
        },

        // Global Error Handler
        handleError(error) {
            if (error.response) {
                const data = error.response.data;
                this.errorMessage = typeof data.detail === 'object' 
                    ? JSON.stringify(data.detail) 
                    : (data.detail || "Terjadi kesalahan pada server.");
            } else {
                this.errorMessage = "Tidak bisa terhubung ke server. Pastikan Backend (FastAPI) sudah aktif.";
            }
            console.error("Analysis Error:", error);
            alert("Kendala: " + this.errorMessage);
        }
    }
}).mount('#app');