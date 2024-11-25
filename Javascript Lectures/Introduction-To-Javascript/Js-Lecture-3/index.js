
function generateReport() {
    const name = document.getElementById('studentName').value;
  
    const math = parseInt(document.getElementById('mathMarks').value) || 0;
    const science = parseInt(document.getElementById('scienceMarks').value) || 0;
    const english = parseInt(document.getElementById('englishMarks').value) || 0;
  
    // Calculate total marks
    const total = math + science + english;
  
    // Determine grade
    let grade = '';
    if (total >= 270) grade = 'A';
    else if (total >= 200) grade = 'B';
    else if (total >= 150) grade = 'C';
    else grade = 'D';
  
    // Populate report card
    document.getElementById('reportName').innerText = name;
    document.getElementById('reportEnglish').innerText = english;
    document.getElementById('reportMath').innerText = math;
    document.getElementById('reportScience').innerText = science;
    document.getElementById('reportMarks').innerText = `${total} / 300`;
    document.getElementById('reportGrade').innerText = grade;
  
    // Make the report card visible
    document.getElementById('reportCard').classList.remove('d-none');
  }
  