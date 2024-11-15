/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

import Item from './Item.js';

class Inventory {
  constructor() {
    this.items = []; // Menyimpan barang-barang dalam inventaris
  }

  // Menambahkan item ke dalam inventaris
  addItem(item) {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      console.log(`Item with id ${item.id} already exists.`);
    } else {
      this.items.push(item);
      console.log(`Item ${item.name} added to the inventory.`);
    }
  }

  // Menghapus item berdasarkan id
  removeItem(id) {
    const index = this.items.findIndex(i => i.id === id);
    if (index === -1) {
      console.log(`Item with id ${id} not found.`);
    } else {
      this.items.splice(index, 1);
      console.log(`Item with id ${id} removed from the inventory.`);
    }
  }

  // Memperbarui item berdasarkan id
  updateItem(id, name, quantity, price) {
    const item = this.items.find(i => i.id === id);
    if (item) {
      item.updateDetails(name, quantity, price);
      console.log(`Item with id ${id} updated.`);
    } else {
      console.log(`Item with id ${id} not found.`);
    }
  }

  // Menampilkan semua item dalam inventaris
  viewItems() {
    if (this.items.length === 0) {
      console.log('Inventory is empty.');
    } else {
      console.log('Items in inventory:');
      this.items.forEach(item => {
        console.log(item.displayDetails());
      });
    }
  }

  listItems() {
    if (this.items.length === 0) {
      return 'Inventory is empty.';
    }
    return this.items.map(item => item.displayDetails()).join('\n');
  }

}


// Jangan hapus kode di bawah ini!
export default Inventory;
