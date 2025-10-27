// Chart configurations and data management
const charts = {};
let currentSection = null;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts for each section
    function initializeCharts() {
        // Daily Logs Chart
        const dailyLogsCtx = document.getElementById('dailyLogsChart').getContext('2d');
        charts.dailyLogs = new Chart(dailyLogsCtx, {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Mood Level',
                    data: [7, 6, 8, 5, 7, 8, 9],
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Users Chart
        const usersCtx = document.getElementById('usersChart').getContext('2d');
        charts.users = new Chart(usersCtx, {
            type: 'bar',
            data: {
                labels: ['Active', 'Inactive', 'New', 'Total'],
                datasets: [{
                    label: 'User Statistics',
                    data: [150, 30, 45, 225],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Counsellors Chart
        const counsellorsCtx = document.getElementById('counsellorsChart').getContext('2d');
        charts.counsellors = new Chart(counsellorsCtx, {
            type: 'doughnut',
            data: {
                labels: ['General', 'Depression', 'Anxiety', 'Trauma', 'Addiction'],
                datasets: [{
                    data: [8, 12, 10, 6, 4],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(153, 102, 255, 0.6)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Sessions Chart
        const sessionsCtx = document.getElementById('sessionsChart').getContext('2d');
        charts.sessions = new Chart(sessionsCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Monthly Sessions',
                    data: [65, 78, 90, 85, 95, 110],
                    borderColor: 'rgb(54, 162, 235)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Feedback Chart
        const feedbackCtx = document.getElementById('feedbackChart').getContext('2d');
        charts.feedback = new Chart(feedbackCtx, {
            type: 'bar',
            data: {
                labels: ['Excellent', 'Good', 'Average', 'Poor'],
                datasets: [{
                    label: 'Session Ratings',
                    data: [45, 30, 15, 5],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Progress Chart
        const progressCtx = document.getElementById('progressChart').getContext('2d');
        charts.progress = new Chart(progressCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Average Stability Score',
                    data: [60, 68, 75, 82],
                    borderColor: 'rgb(255, 159, 64)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Recommendations Chart
        const recommendationsCtx = document.getElementById('recommendationsChart').getContext('2d');
        charts.recommendations = new Chart(recommendationsCtx, {
            type: 'radar',
            data: {
                labels: ['Exercise', 'Meditation', 'Social', 'Creative', 'Learning'],
                datasets: [{
                    label: 'Activity Engagement',
                    data: [80, 65, 70, 55, 60],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // AI Analysis Chart
        const aiAnalysisCtx = document.getElementById('aiAnalysisChart').getContext('2d');
        charts.aiAnalysis = new Chart(aiAnalysisCtx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Risk vs. Sentiment',
                    data: [
                        { x: 0.2, y: 0.8 },
                        { x: 0.4, y: 0.6 },
                        { x: 0.6, y: 0.4 },
                        { x: 0.8, y: 0.2 }
                    ],
                    backgroundColor: 'rgb(255, 99, 132)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Risk Score'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Sentiment Score'
                        }
                    }
                }
            }
        });

        // Crisis Alerts Chart
        const crisisAlertsCtx = document.getElementById('crisisAlertsChart').getContext('2d');
        charts.crisisAlerts = new Chart(crisisAlertsCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Alert Frequency',
                    data: [5, 3, 4, 2, 3, 1],
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Emergency Contacts Chart
        const emergencyContactsCtx = document.getElementById('emergencyContactsChart').getContext('2d');
        charts.emergencyContacts = new Chart(emergencyContactsCtx, {
            type: 'pie',
            data: {
                labels: ['Family', 'Friends', 'Healthcare', 'Support Services'],
                datasets: [{
                    data: [40, 25, 20, 15],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Initialize charts
    initializeCharts();

    // Table management functions
    function addTableRow(tableId, data) {
        const table = document.getElementById(tableId);
        const tbody = table.querySelector('tbody');
        const row = tbody.insertRow();
        
        Object.values(data).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });

        // Add action buttons
        const actionsCell = row.insertCell();
        actionsCell.className = 'action-buttons';
        actionsCell.innerHTML = `
            <button class="btn btn-sm btn-warning" onclick="editEntry(this)">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteEntry(this)">Delete</button>
        `;
    }

    // Modal management
    window.showAddModal = function(section) {
        currentSection = section;
        const modal = new bootstrap.Modal(document.getElementById('entryModal'));
        const form = document.getElementById('entryForm');
        
        // Clear previous form
        form.innerHTML = '';
        
        // Add appropriate fields based on section
        switch(section) {
            case 'dailyLogs':
                form.innerHTML = `
                    <div class="mb-3">
                        <label class="form-label">Date</label>
                        <input type="date" class="form-control" name="date" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Mood (1-10)</label>
                        <input type="number" class="form-control" name="mood" min="1" max="10" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Stress Level (1-10)</label>
                        <input type="number" class="form-control" name="stress" min="1" max="10" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Sleep Hours</label>
                        <input type="number" class="form-control" name="sleep" step="0.5" min="0" max="24" required>
                    </div>
                `;
                break;
            case 'users':
                form.innerHTML = `
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Phone</label>
                        <input type="tel" class="form-control" name="phone" required>
                    </div>
                `;
                break;
            case 'counsellors':
                form.innerHTML = `
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Specialization</label>
                        <select class="form-control" name="specialization" required>
                            <option value="General">General</option>
                            <option value="Depression">Depression</option>
                            <option value="Anxiety">Anxiety</option>
                            <option value="Trauma">Trauma</option>
                            <option value="Addiction">Addiction</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Schedule</label>
                        <input type="text" class="form-control" name="schedule" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Contact</label>
                        <input type="tel" class="form-control" name="contact" required>
                    </div>
                `;
                break;
            case 'sessions':
                form.innerHTML = `
                    <div class="mb-3">
                        <label class="form-label">Date</label>
                        <input type="datetime-local" class="form-control" name="date" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">User</label>
                        <input type="text" class="form-control" name="user" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Counsellor</label>
                        <input type="text" class="form-control" name="counsellor" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Status</label>
                        <select class="form-control" name="status" required>
                            <option value="Scheduled">Scheduled</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>
                `;
                break;
            case 'feedback':
                form.innerHTML = `
                    <div class="mb-3">
                        <label class="form-label">Session Date</label>
                        <input type="date" class="form-control" name="date" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Rating (1-5)</label>
                        <input type="number" class="form-control" name="rating" min="1" max="5" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Comments</label>
                        <textarea class="form-control" name="comments" rows="3" required></textarea>
                    </div>
                `;
                break;
            case 'progress':
                form.innerHTML = `
                    <div class="mb-3">
                        <label class="form-label">Date</label>
                        <input type="date" class="form-control" name="date" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Stability Score (0-100)</label>
                        <input type="number" class="form-control" name="score" min="0" max="100" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Improvement (%)</label>
                        <input type="number" class="form-control" name="improvement" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Notes</label>
                        <textarea class="form-control" name="notes" rows="3"></textarea>
                    </div>
                `;
                break;
            case 'recommendations':
                form.innerHTML = `
                    <div class="mb-3">
                        <label class="form-label">Type</label>
                        <select class="form-control" name="type" required>
                            <option value="Exercise">Exercise</option>
                            <option value="Meditation">Meditation</option>
                            <option value="Social">Social</option>
                            <option value="Creative">Creative</option>
                            <option value="Learning">Learning</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Activity</label>
                        <input type="text" class="form-control" name="activity" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Description</label>
                        <textarea class="form-control" name="description" rows="3" required></textarea>
                    </div>
                `;
                break;
            case 'aiAnalysis':
                form.innerHTML = `
                    <div class="mb-3">
                        <label class="form-label">Date</label>
                        <input type="date" class="form-control" name="date" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Risk Score (0-1)</label>
                        <input type="number" class="form-control" name="risk" min="0" max="1" step="0.1" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Sentiment (-1 to 1)</label>
                        <input type="number" class="form-control" name="sentiment" min="-1" max="1" step="0.1" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Classification</label>
                        <select class="form-control" name="classification" required>
                            <option value="Low Risk">Low Risk</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High Risk">High Risk</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </div>
                `;
                break;
            case 'crisisAlerts':
                form.innerHTML = `
                    <div class="mb-3">
                        <label class="form-label">Timestamp</label>
                        <input type="datetime-local" class="form-control" name="timestamp" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Severity</label>
                        <select class="form-control" name="severity" required>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Status</label>
                        <select class="form-control" name="status" required>
                            <option value="New">New</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Assigned To</label>
                        <input type="text" class="form-control" name="assignedTo" required>
                    </div>
                `;
                break;
            case 'emergencyContacts':
                form.innerHTML = `
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Relationship</label>
                        <select class="form-control" name="relationship" required>
                            <option value="Family">Family</option>
                            <option value="Friend">Friend</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Support Services">Support Services</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Contact Number</label>
                        <input type="tel" class="form-control" name="contact" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Priority</label>
                        <select class="form-control" name="priority" required>
                            <option value="Primary">Primary</option>
                            <option value="Secondary">Secondary</option>
                            <option value="Tertiary">Tertiary</option>
                        </select>
                    </div>
                `;
                break;
        }
        
        modal.show();
    }

    // Save entry
    window.saveEntry = function() {
        const form = document.getElementById('entryForm');
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Add to appropriate table
        addTableRow(`${currentSection}Table`, data);
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('entryModal'));
        modal.hide();
    }

    // Edit entry
    window.editEntry = function(button) {
        const row = button.closest('tr');
        const cells = row.cells;
        showAddModal(currentSection);
        // Populate form with row data
        const form = document.getElementById('entryForm');
        const inputs = form.querySelectorAll('input');
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].value = cells[i].textContent;
        }
    }

    // Delete entry
    window.deleteEntry = function(button) {
        if (confirm('Are you sure you want to delete this entry?')) {
            button.closest('tr').remove();
        }
    }

    // Add sample data
    addTableRow('dailyLogsTable', {
        date: '2025-10-27',
        mood: '8',
        stress: '3',
        sleep: '7.5'
    });

    addTableRow('usersTable', {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '555-0123'
    });

    // Sample data for Counsellors
    addTableRow('counsellorsTable', {
        name: 'Dr. Sarah Wilson',
        specialization: 'Depression',
        schedule: 'Mon-Fri, 9AM-5PM',
        contact: '555-0124'
    });

    // Sample data for Sessions
    addTableRow('sessionsTable', {
        date: '2025-10-27 10:00',
        user: 'John Doe',
        counsellor: 'Dr. Sarah Wilson',
        status: 'Scheduled'
    });

    // Sample data for Feedback
    addTableRow('feedbackTable', {
        date: '2025-10-26',
        rating: '5',
        comments: 'Excellent session, very helpful'
    });

    // Sample data for Progress
    addTableRow('progressTable', {
        date: '2025-10-27',
        score: '85',
        improvement: '15',
        notes: 'Showing consistent improvement'
    });

    // Sample data for Recommendations
    addTableRow('recommendationsTable', {
        type: 'Exercise',
        activity: 'Morning Walk',
        description: '30 min walk in nature'
    });

    // Sample data for AI Analysis
    addTableRow('aiAnalysisTable', {
        date: '2025-10-27',
        risk: '0.2',
        sentiment: '0.8',
        classification: 'Low Risk'
    });

    // Sample data for Crisis Alerts
    addTableRow('crisisAlertsTable', {
        timestamp: '2025-10-27 15:30',
        severity: 'Medium',
        status: 'Resolved',
        assignedTo: 'Dr. Wilson'
    });

    // Sample data for Emergency Contacts
    addTableRow('emergencyContactsTable', {
        name: 'Mary Johnson',
        relationship: 'Family',
        contact: '555-0125',
        priority: 'Primary'
    });
});
