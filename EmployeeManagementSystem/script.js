const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 ,specializtaion:'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 ,specializtaion:'Hiring Talent'},
    { id: 3, name: 'Bob Smith', age: 35, department: 'Finance', salary: 60000,specializtaion:'Planning' },
    { id: 4, name: 'Michael Johnson', age: 31, department: 'Finance', salary: 60000,specializtaion:'Data Crunching' },
    { id: 5, name: 'Pluh Karel', age: 35, department: 'Finance', salary: 60000 ,specializtaion:'Planning'},
    { id: 6, name: 'Larred Johnson', age: 32, department: 'Finance', salary: 60000 ,specializtaion:'Data Crunching'},
    { id: 7, name: 'Poter Peter', age: 46, department: 'Finance', salary: 60000 ,specializtaion:'Planning'},
    { id: 8, name: 'Prince Ollie', age: 45, department: 'Finance', salary: 60000,specializtaion:'Planning'},
    { id: 9, name: 'Lame McDowell', age: 67, department: 'HR', salary: 60000 ,specializtaion:'Hiring Talent'},
    { id: 10, name: 'Ralf Dalf', age: 65, department: 'Finance', salary: 60000 ,specializtaion:'Hiring Talent'},
    { id: 11, name: 'Roce Mini', age: 33, department: 'Finance', salary: 60000 ,specializtaion:'Data Crunching'},
    //... More employee records can be added here
  ]; 
  // Function to display all employees
  function displayEmployees(){
  const totalEmployees = employees.map((employee, index) => `${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
          document.getElementById('all').innerHTML = `List Of ALL EMPLOYEES WORKING<br><br><p>  `+totalEmployees;
          return employees.length;
  }
function calculateTotalSalaries(){
    const totalsalary =employees.reduce((acc,emp)=>acc+emp.salary,0);
    document.getElementById('total').innerHTML = `The total salary of all employees is $${totalsalary}`;
}

function findEmployeeById(){
    id=document.getElementById('idnum').value ;      
    const foundEmployee=employees.find(employee=>employee.id==id);
    console.log();
    if(foundEmployee)
    {
        document.getElementById('IDemp').innerHTML =`Employee Details Are-><br><br><p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('IDemp').innerHTML =`No Employee found :( `;     
    }
}

function displayHREmployees(){
        const hr= employees.filter(emp=>emp.department==='HR');
        const data= hr.map((employee,index)=>`Employees in HR Department are-><br><br><p>${employee.id}: ${employee.name}: ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('hr').innerHTML=data;
}

function Specialize(){
    const spx=document.getElementById('spx').value;
    const findin = employees.find(emp=>
        {if(emp.specializtaion===spx)
        {
            return `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
        }
        }
        )
    if(findin)
        {
            
            document.getElementById('Specialize').innerHTML =`Specialized Employees Are-><br><br><p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
        }
        else{
            document.getElementById('Specialize').innerHTML =`No Employee found :( `;     
        }
}