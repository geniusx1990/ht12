class HashTable {
    constructor() {
        this.size = 10;
        this.table = new Array(this.size);
        this.count = 0;
    }


    // custom hash function
    hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            const char = key.charCodeAt(i);
            hash = (hash << 5) - hash + char;
        }

        return Math.abs(hash) % this.size;

    }

    // inserting key-value pair 
    insert(key, value) {
        let hash = this.hash(key);

        if (this.table[hash] === undefined) {
            this.table[hash] = [];
        }

        for (let i = 0; i < this.table[hash].length; i++) {
            if (this.table[hash][i][0] === key) {
                this.table[hash][i][1] = value;
                return;
            }
        }

        if (this.count / this.size > 0.7) {
            this.resize(this.size * 2);
        }

        this.table[hash].push([key, value]);
        this.count++;
    }


    // get value by key 
    get(key) {
        let hash = this.hash(key);

        if (this.table[hash] !== undefined) {
            for (let i = 0; i < this.table[hash].length; i++) {
                if (this.table[hash][i][0] === key) {
                    return this.table[hash][i][1];
                }
            }

        }

        return undefined;

    }



    // deleting key-value pairs
    delete(key) {
        let hash = this.hash(key);

        if (this.table[hash] !== undefined) {
            for (let i = 0; i < this.table[hash].length; i++) {
                if (this.table[hash][i][0] === key) {
                    this.table[hash].splice(i, 1);
                    return true;
                }
            }
        }
        return false

    }

    resize(newSize) {
        const oldTable = this.table;
        this.size = newSize;
        this.count = 0;
        this.table = new Array(newSize);

        for (const data of oldTable) {
            if (data) {
                for (const [key, value] of data) {
                    this.insert(key, value);
                }
            }
        }
    }

}

const hashTable = new HashTable();



console.log(hashTable)

//insert values
hashTable.insert("Bruno", 22);
hashTable.insert("Bruno", 22);
hashTable.insert("Inga", 21);
hashTable.insert("Bella", 33);

// insert values and checking collision 
hashTable.insert("Alex", 25);
hashTable.insert("Xela", 30);
hashTable.insert("Belwa", 88);
hashTable.insert("Belooa", 99);
hashTable.insert("Besla", 31);
hashTable.insert("kengui", 32);
hashTable.insert("Bzella", 33);
hashTable.insert("Bellca", 33);







// retrieving value via key
let keyTest = 'Alex';
let query = hashTable.get(keyTest);
console.log(`value = ${query}`, ` for ${keyTest}`);



// deleting values;

let removeItem = hashTable.delete(keyTest);
let deletedValue = hashTable.get(keyTest);

console.log(`value = ${deletedValue}`, ` for ${keyTest}`);

console.log(hashTable)
