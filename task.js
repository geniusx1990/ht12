class HashTable {
    constructor() {
        this.table = [];
    }


    // custom hash function
    hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            const char = key.charCodeAt(i);
            hash = (hash << 5) - hash + char;
        }

        return hash;

    }

    // inserting key-value pair 
    insert(key, value) {
        let hash = this.hash(key);

        if (this.table[hash] === undefined) {
            this.table[hash] = [];
        }
        return this.table[hash].push([key, value]);
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

}

const hashTable = new HashTable();



console.log(hashTable)

//insert values
hashTable.insert("Bruno", 22);
hashTable.insert("Inga", 21);
hashTable.insert("Bella", 33);

// insert values and checking collision 
hashTable.insert("Alex", 25);
hashTable.insert("Xela", 30);






// retrieving value via key
let keyTest = 'Alex';
let query = hashTable.get(keyTest);
console.log(`value = ${query}`, ` for ${keyTest}`);



// deleting values;

let removeItem = hashTable.delete(keyTest);
let deletedValue = hashTable.get(keyTest);

console.log(`value = ${deletedValue}`, ` for ${keyTest}`);

console.log(hashTable)
