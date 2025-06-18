

interface Book {
    id: number
    name: string
    author: string
    description: string
    in_qty: string
    sold_qty: string
    isbn: string
    price: number
    reg_date: string
}

interface BookAdd {
    name: string
    author: string
    description: string
    in_qty: number
    isbn: string
    price: number
}

interface BookModify {
    id: number
    name: string
    author: string
    description: string
    in_qty: string
    sold_qty: string
    isbn: string
    price: number
}


