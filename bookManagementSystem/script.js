let books=[
    {bookname:'react',
        authorname:'gr pandit',
        pageno:111,
        desc:'1st book'
        
    },
    {bookname:'js',
        authorname:'gr pandit',
        pageno:111,
        desc:'2nd book'
        
    },{bookname:'react',
        authorname:'gr pandit',
        pageno:111,
        desc:'3rd book'
        
    },{bookname:'react',
        authorname:'gr pandit',
        pageno:111,
        desc:'4th book'
        
    }
];   
function addBook()
{
    const bookname=document.getElementById('bookName').value;
    const authorname=document.getElementById('authorName').value;
    const pageno=document.getElementById('pagesNumber').value;
    const desc= document.getElementById('bookDescription').value;
    if(desc && authorname!=undefined &&  bookname &&!isNaN(pageno) )
        {
            const book={
                name:bookname,
                authorname:authorname,
                bookDescription:desc,
                pageno:pageno
            };
            books.push(book);
            showBooks();
            clearInputs();
        }
        else{
            alert('Please fill all fields correctly');
        }
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function showBooks()
{const out=books.map((book,index)=>`<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pageno} page(s)</p>
        <button  id='del'>Delete</button>`);
        
    document.getElementById('books').innerHTML=out.join('');
    
    }
function clear(book){
        const del = document.getElementById('del');
        del.onclick()=()=>{
        const t = confirm('The book will be removed from record');
        if(t)
        {
            books.splice(books.indexOf(book),1);
            
        }
        showBooks();
            } 
       }
