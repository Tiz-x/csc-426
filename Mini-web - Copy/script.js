// ===== IRO - Basic Form Validation =====

// Handle Report Issue form
const reportForm = document.getElementById("reportForm");

if (reportForm) {
  reportForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const requiredFields = reportForm.querySelectorAll("[required]");
    let allFilled = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        allFilled = false;
        field.style.borderColor = "red";
      } else {
        field.style.borderColor = "#cfd8e3";
      }
    });

    if (!allFilled) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Issue submitted successfully!");
    reportForm.reset();
  });
}

// Handle Track Report form
const trackForm = document.getElementById("trackForm");
const statusResult = document.getElementById("statusResult");

if (trackForm) {
  trackForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const reportId = document.getElementById("reportId");

    if (!reportId.value.trim()) {
      alert("Please enter your Report ID.");
      reportId.style.borderColor = "red";
      return;
    }

    reportId.style.borderColor = "#cfd8e3";
    statusResult.style.display = "block";
  });
}